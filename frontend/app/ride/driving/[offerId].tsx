import React, { useState } from "react";
import { Alert, Image, Platform, Text, TouchableOpacity, View, } from "react-native";
import { LocateFixed } from "lucide-react-native";
import { BorderRadius, createRideStyles, Font, IconSize, Spacing, useTheme, } from "@/theme";
import { useLocation } from "@/hooks/useLocation";
import { useDestinationStore } from "@/lib/store";
import { GradientButton } from "@/components/buttons/gradient-button";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { OfferService } from "@/services/offer.service";
import { OutlineButton } from "@/components/buttons/outline-button";
import { useRequestPolling } from "@/hooks";

export default function FindScreen() {
	const { Colors } = useTheme();
	const styles = createRideStyles(Colors);

	const { offerId } = useLocalSearchParams();

	const { coords } = useLocation();
	const { destination } = useDestinationStore();
	const [origin, setOrigin] = useState("Current Location");
	// const [rideRequests, setRideRequests] = useState<RideRequest[]>([]);
	// const [hasNewRequest, setHasNewRequest] = useState(false);
	// const [eventSource, setEventSource] = useState<EventSource | null>(null);
	const { rideRequests, hasNewRequest, clearNewRequestFlag } = useRequestPolling(offerId as string);

	const handleCancel = async () => {
		console.log("offer id", offerId);
		const success = await OfferService.cancelOffer(offerId as string);
		if (success) {
			router.push("/(tabs)");
		} else {
			Alert.alert("Error", "Failed to cancel the ride offer.");
		}
	};

	const handleFinish = async () => {
		console.log("Finishing Ride");
		// const success = await OfferService.finishOffer(offerId as string);
		// if (success) {
		// 	router.push("/(tabs)");
		// } else {
		// 	Alert.alert("Error", "Failed to finish the ride.");
		// }
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
							...Font.lg.medium,
						}}
					>
						Passengers
						{/* Button to redirect to passengers request or open a modal with the requests */}
					</Text>
				</View>

				<GradientButton>Finish Ride</GradientButton>

				<OutlineButton
					style={styles.cancelButton}
					textStyle={styles.cancelButtonText}
					onPress={handleCancel}
				>
					Cancel
				</OutlineButton>
			</View>
		</SafeAreaView>
	);
}
