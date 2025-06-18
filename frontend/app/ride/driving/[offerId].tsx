import React, { useEffect, useState } from "react";
import { Alert, Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { LocateFixed, Users } from "lucide-react-native";
import { BorderRadius, BorderWidth, createRideStyles, Font, IconSize, Spacing, useTheme, } from "@/theme";
import { useLocation } from "@/hooks/useLocation";
import { useDestinationStore, useTransactionStore } from "@/lib/store";
import { GradientButton } from "@/components/buttons/gradient-button";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { OfferService } from "@/services/offer.service";
import { OutlineButton } from "@/components/buttons/outline-button";
import { useRequestPolling } from "@/hooks";
import { RideRequest } from "@/types/ride.types";
import { RequestService } from "@/services/request.service";
import { BaseModal } from "@/components/modal";
import { TransactionApi } from "@/api";
import { TransactionService } from "@/services";

export default function DrivingScreen() {
	const { Colors } = useTheme();
	const styles = createRideStyles(Colors);

	const { offerId } = useLocalSearchParams();

	const { coords } = useLocation();
	const { destination } = useDestinationStore();
	const {transactionId, setTransactionId} = useTransactionStore();
	const [requestModalVisible, setRequestModalVisible] = useState(false);
	const [latestRequest, setLatestRequest] = useState<RideRequest | null>(null);
	const { rideRequests, hasNewRequest, clearNewRequestFlag } = useRequestPolling(offerId as string);
	const [passengers, setPassengers] = useState<any[]>([]);

	useEffect(() => {
		console.log("rideRequests", rideRequests);
		if (hasNewRequest && rideRequests.length > 0) {
			const newest = rideRequests[rideRequests.length - 1];
			setLatestRequest(newest);
			setRequestModalVisible(true);
			clearNewRequestFlag();
		}
	}, [hasNewRequest, rideRequests]);

	const handleAccept = async () => {
		if (!latestRequest) return;
		const {success, onTransactionId} = await RequestService.acceptRequest(latestRequest.request_id, latestRequest.offer_id);
		if (success && onTransactionId) {
			setPassengers([...passengers, latestRequest]);
			setTransactionId(onTransactionId);
			setRequestModalVisible(false);
		}
	};

	const handleDeny = async () => {
		if (!latestRequest) return;
		await RequestService.declineRequest(latestRequest.request_id);
		setRequestModalVisible(false);
	};


	const handleCancel = async () => {
		console.log("offer id", offerId);
		const success = await OfferService.cancelOffer(offerId as string);
		if (success) {
			router.replace("/(tabs)");
		} else {
			Alert.alert("Error", "Failed to cancel the ride offer.");
		}
	};

	const handleFinish = async () => {
		console.log("Finishing Ride");
		const success = await TransactionService.endTransaction(transactionId!);
		if (success) {
			setTransactionId(null);
			router.replace("/(tabs)");
		} else {
			Alert.alert("Error", "Failed to finish the ride.");
		}
	}

	const renderMap = () => {
		if (Platform.OS === "web" || !coords) {
			return (
				<View style={[styles.map, styles.webMapPlaceholder]}>
					<Text style={styles.webMapText}>Map View</Text>
					<Text style={styles.webMapSubtext}>
						Maps are only available on mobile devices
					</Text>
				</View>
			);
		}

		return (
			<MapView
				provider="google"
				style={styles.map}
				region={{
					latitude: coords.latitude,
					longitude: coords.longitude,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
				showsUserLocation
			>
				{/* User's current location */}
				<Marker
					coordinate={{
						latitude: coords.latitude,
						longitude: coords.longitude,
					}}
					title="Your Location"
					description="This is your current location"
				>
					<View style={styles.userMarker}>
						<Image
							source={require("@/assets/images/ride/avatar.png")}
							style={styles.userMarkerImage}
						/>
					</View>
				</Marker>
			</MapView>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>On the Road</Text>
			</View>

			<View style={styles.mapContainer}>
				{renderMap()}

				<TouchableOpacity style={styles.mapControlButton}>
					<LocateFixed size={IconSize.md} color="#FFF"/>
				</TouchableOpacity>
			</View>

			<View style={styles.modalContainer}>
				<Text style={styles.modalTitle}>
					Heading to{" "}
					<Text style={{ color: Colors.primary }}>
						{destination?.name}
					</Text>
				</Text>

				<View
					style={{
						backgroundColor: Colors.muted,
						borderRadius: BorderRadius.md,
						padding: Spacing.md,
						marginTop: Spacing.sm,
						marginBottom: Spacing.md,
					}}
				>
					<Text
						style={{
							...Font.lg.semiBold,
						}}
					>
						Passengers
					</Text>
					{/*horizontal line*/}
					<View
						style={{
							width: "100%",
							height: BorderWidth.thin,
							backgroundColor: Colors.foreground + "20",
							marginVertical: Spacing.sm,
						}}
					/>
					{passengers && passengers.length > 0 ? (
						passengers.map((passenger, index) => (
							<View key={index} style={styles.passengerItem}>
								<Image
									source={require("@/assets/images/ride/avatar.png")}
									style={styles.passengerAvatar}
								/>
								<View style={{alignItems: "flex-start"}}>
									<Text style={styles.passengerName}>
										{passenger.user?.user_name || "Unknown User"}
									</Text>
									<Text style={styles.passengerEmail}>
										{passenger.user?.user_email || "Unknown User"}
									</Text>
								</View>
							</View>
						))
					) : (
						<View style={{ alignItems: "center", marginTop: Spacing.sm }}>
							<Users size={32} color={Colors.mutedForeground}/>
							<Text style={{ ...Font.md.regular, color: Colors.mutedForeground, marginTop: Spacing.xs }}>
								No passengers yet
							</Text>
						</View>
					)}
				</View>

				{
					passengers && passengers.length > 0 && (
						<GradientButton onPress={handleFinish}>Finish Ride</GradientButton>
					)
				}

				<OutlineButton
					style={styles.cancelButton}
					textStyle={styles.cancelButtonText}
					onPress={handleCancel}
				>
					Cancel
				</OutlineButton>
			</View>

			<BaseModal
				visible={requestModalVisible}
				onClose={() => setRequestModalVisible(false)}
				title={`${latestRequest?.user?.user_name || 'Unknown User'} wants to join`}
				message={`A new ride request has been received from ${latestRequest?.user?.user_name || 'Unknown User'}.`}
			>
				<GradientButton
					style={{ width: '100%', marginBottom: Spacing.sm }}
					onPress={handleAccept}
				>
					Accept
				</GradientButton>
				<OutlineButton
					style={{ width: '100%' }}
					onPress={handleDeny}
				>
					Deny
				</OutlineButton>
			</BaseModal>

		</SafeAreaView>
	);
}

