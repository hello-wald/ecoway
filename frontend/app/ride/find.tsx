import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, Platform, ScrollView, Text, TouchableOpacity, View, } from "react-native";
import { Car, ChevronLeft, CircleCheck, LocateFixed, MapPinOff, XCircle, } from "lucide-react-native";
import { createRideStyles, IconSize, Spacing, useTheme } from "@/theme";
import { useLocation } from "@/hooks/useLocation";
import { useAuthStore } from "@/lib/store";
import { GradientButton } from "@/components/buttons/gradient-button";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Circle, Marker } from "react-native-maps";
import { RideOffer } from "@/types/ride.types";
import { OfferService } from "@/services/offer.service";
import { DriverRow } from "@/components/driver-row";
import { RequestService } from "@/services/request.service";
import { BaseModal } from "@/components/modal";
import { useTransactionPolling } from "@/hooks/useTransactionPolling";

export default function FindScreen() {
	const { Colors } = useTheme();
	const styles = createRideStyles(Colors);
	const { user } = useAuthStore();

	const { coords } = useLocation();
	const [rideOffers, setRideOffers] = useState<RideOffer[]>([]);
	const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
	const [modalVisible, setModalVisible] = useState(false);
	const [requestSuccess, setRequestSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const {
		polling,
		pollError,
		pollTimeout,
		errorMessage: pollErrorMessage,
		pollForTransaction,
		requestAccepted
	} = useTransactionPolling(user!.id);

	useEffect(() => {
		const fetchOffers = async () => {
			const offers = await OfferService.getOffers();
			setRideOffers(offers);
		};
		fetchOffers();
	}, []);

	const handleSelectRide = async () => {
		if (!selectedOfferId || !user) {
			setRequestSuccess(false);
			setErrorMessage("Please select a ride first or login");
			setModalVisible(true);
			return;
		}

		try {
			const result = await RequestService.createRequest(selectedOfferId, user.id);

			if (!result.success) {
				setRequestSuccess(false);
				setErrorMessage(result.error || "Failed to request ride");
			} else {
				setRequestSuccess(true);
				pollForTransaction();
			}
		} catch {
			setRequestSuccess(false);
			setErrorMessage("Unknown error occurred");
		} finally {
			setModalVisible(true);
		}
	};

	const handleRide = () => {
		setModalVisible(false);
		router.push("/(tabs)");
	};

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
				<Marker
					coordinate={{ latitude: coords.latitude, longitude: coords.longitude }}
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

				{rideOffers.map((ride) => {
					const isSelected = ride.offer_id === selectedOfferId;
					return (
						<React.Fragment key={ride.offer_id}>
							<Marker coordinate={ride.location}>
								<View style={[styles.carMarker, isSelected && styles.selectedCarMarker]}>
									<Car size={12} color={isSelected ? Colors.primary : "#FFF"}/>
									<Text style={[styles.markerText, isSelected && { color: Colors.primary }]}>
										4
									</Text>
								</View>
							</Marker>
							<Circle
								center={ride.location}
								radius={Spacing.lg}
								fillColor={Colors.primary + "33"}
								strokeWidth={0}
							/>
						</React.Fragment>
					);
				})}
			</MapView>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity style={styles.backButton} onPress={router.back}>
					<ChevronLeft size={IconSize.md} color={Colors.foreground}/>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Choose a Ride</Text>
			</View>

			<View style={styles.mapContainer}>
				{renderMap()}
				<TouchableOpacity style={styles.mapControlButton}>
					<LocateFixed size={IconSize.md} color="#FFF"/>
				</TouchableOpacity>
			</View>

			<View style={[styles.modalContainer, { paddingHorizontal: 0, maxHeight: "45%" }]}>
				{rideOffers.length === 0 ? (
					<View style={styles.noOffersContainer}>
						<MapPinOff size={48} color={Colors.mutedForeground}/>
						<Text style={styles.noOffersText}>No rides available at the moment.</Text>
					</View>
				) : (
					<ScrollView>
						{rideOffers.map((offer) => (
							<DriverRow
								key={offer.offer_id}
								offer={offer}
								selected={offer.offer_id === selectedOfferId}
								onPress={() => setSelectedOfferId(offer.offer_id)}
							/>
						))}
					</ScrollView>
				)}

				<GradientButton
					style={{ ...styles.findRideButton, marginHorizontal: Spacing.lg }}
					onPress={handleSelectRide}
				>
					Select Ride
				</GradientButton>
			</View>

			<BaseModal
				visible={modalVisible}
				onClose={handleRide}
				title={
					pollError
						? "Polling Error"
						: pollTimeout
							? "Request Timeout"
							: requestAccepted
								? "Request Accepted!"
								: requestSuccess
									? "Ride requested successfully"
									: "Failed to request ride"
				}
				message={
					pollError || pollTimeout
						? pollErrorMessage
						: requestAccepted
							? "Driver has accepted your ride request. Get ready!"
							: requestSuccess
								? "Thank you for your booking! Please wait for the driver to accept."
								: errorMessage
				}
				icon={
					pollError || pollTimeout || !requestSuccess ? (
						<XCircle size={48} color={Colors.danger}/>
					) : (
						<CircleCheck size={48} color={Colors.success}/>
					)
				}
			>
				{polling ? (
					<ActivityIndicator size="large" color={Colors.primary}/>
				) : pollError || pollTimeout || !requestSuccess ? (
					<GradientButton style={{ width: "100%" }} onPress={() => setModalVisible(false)}>
						Go Back
					</GradientButton>
				) : requestAccepted ? (
					<GradientButton style={{ width: "100%" }} onPress={handleRide}>
						Go to Home
					</GradientButton>
				) : null}
			</BaseModal>

		</SafeAreaView>
	);
}
