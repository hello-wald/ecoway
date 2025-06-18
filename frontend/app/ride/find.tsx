import React, { useEffect, useState } from "react";
import {
	ActivityIndicator,
	Alert,
	Image,
	Modal,
	Platform,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { Car, ChevronLeft, CircleCheck, LocateFixed, MapPinOff, XCircle } from "lucide-react-native";
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

export default function FindScreen() {
	const { Colors } = useTheme();
	const styles = createRideStyles(Colors);
	const { user } = useAuthStore();

	const { coords } = useLocation();
	const [rideOffers, setRideOffers] = useState<RideOffer[]>([]);
	const [selectedOfferId, setSelectedOfferId] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [requestSuccess, setRequestSuccess] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const fetchOffers = async () => {
			console.log("Fetching offers...");
			const offers = await OfferService.getOffers();
			setRideOffers(offers);
		};
		fetchOffers();
	}, []);

	const handleSelectRide = async () => {
		if (!selectedOfferId || !user) {
			Alert.alert("Error", "Please select a ride first or login");
			return;
		}

		setLoading(true);
		try {
			const result = await RequestService.createRequest(selectedOfferId, user.id);

			setRequestSuccess(result.success);
			if (!result.success) {
				setErrorMessage(result.error || "Failed to request ride");
			}
			setModalVisible(true);
		} catch (error) {
			console.error("Error requesting ride:", error);
			setRequestSuccess(false);
			setErrorMessage(error instanceof Error ? error.message : "Unknown error occurred");
			setModalVisible(true);
		} finally {
			setLoading(false);
		}
	};

	const closeModal = () => {
		setModalVisible(false);
		if (requestSuccess) {
			// Navigate to waiting screen
			router.push({
				pathname: "/(tabs)"
			});
		}
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

				{rideOffers.map((ride) => {
					const isSelected = ride.offer_id === selectedOfferId;
					return (
						<React.Fragment key={ride.offer_id}>
							<Marker
								coordinate={{
									latitude: ride.location.latitude,
									longitude: ride.location.longitude,
								}}
							>
								<View
									style={[
										styles.carMarker,
										isSelected && styles.selectedCarMarker,
									]}
								>
									<Car
										size={12}
										color={
											isSelected ? Colors.primary : "#FFF"
										}
									/>
									<Text
										style={[
											styles.markerText,
											isSelected && {
												color: Colors.primary,
											},
										]}
									>
										4
									</Text>
								</View>
							</Marker>
							<Circle
								center={{
									latitude: ride.location.latitude,
									longitude: ride.location.longitude,
								}}
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
				<TouchableOpacity
					style={styles.backButton}
					onPress={router.back}
				>
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

			<View
				style={[
					styles.modalContainer,
					{
						paddingHorizontal: 0,
						maxHeight: "45%",
					},
				]}
			>
				{/* Map the Ride Offers here */}

				{rideOffers.length === 0 ? (
					<View style={styles.noOffersContainer}>
						<MapPinOff size={48} color={Colors.mutedForeground}/>
						<Text style={styles.noOffersText}>
							No rides available at the moment.
						</Text>
					</View>
				) : (
					<ScrollView>
						{rideOffers.map((offer) => (
							<DriverRow
								key={offer.offer_id}
								offer={offer}
								selected={offer.offer_id === selectedOfferId}
								onPress={() =>
									setSelectedOfferId(offer.offer_id)
								}
							/>
						))}
					</ScrollView>
				)}

				<GradientButton
					style={{
						...styles.findRideButton,
						marginHorizontal: Spacing.lg,
					}}
					onPress={handleSelectRide}
				>
					Select Ride
				</GradientButton>
			</View>

			<Modal
				animationType="fade"
				transparent={true}
				visible={modalVisible}
				onRequestClose={closeModal}
			>
				<View style={styles.modalOverlay}>
					<View style={styles.modalContent}>
						{loading ? (
							<ActivityIndicator size="large" color={Colors.primary}/>
						) : requestSuccess ? (
							<View style={styles.modalSuccess}>
								<CircleCheck size={48} color={Colors.success}/>
								<Text style={styles.popupTitle}>
									Ride requested successfully
								</Text>
								<Text style={styles.popupText}>
									Thank you for your booking! Your driver will arrive shortly.
								</Text>
							</View>
						) : (
							<View style={styles.modalError}>
								<XCircle size={48} color={Colors.danger}/>
								<Text style={styles.popupTitle}>
									Failed to request ride
								</Text>
								<Text style={styles.popupText}>
									{errorMessage}
								</Text>
							</View>
						)}

						<GradientButton
							style={{width: "100%"}}
							onPress={closeModal}
						>
							Go Home
						</GradientButton>
					</View>
				</View>
			</Modal>
		</SafeAreaView>
	);
}