import React, { useEffect, useState } from "react";
import { Image, Platform, Text, TouchableOpacity, View } from "react-native";
import { ChevronLeft, LocateFixed, MapPin } from "lucide-react-native";
import { createRideStyles, IconSize, useTheme } from "@/theme";
import { useLocation } from "@/hooks/useLocation";
import { useDestinationStore } from "@/lib/store";
import { GradientButton } from "@/components/buttons/gradient-button";
import { router } from "expo-router";
import { Input } from "@/components/form/input";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Circle, Marker } from "react-native-maps";
import { OrDivider } from "@/components/form/or-divider";
import { SecondaryButton } from "@/components/buttons/secondary-button";
import { RideOffer, RideOfferRequest } from "@/types/ride.types";
import { OfferService } from "@/services/offer.service";
import { DriverRow } from "@/components/driver-row";

export default function FindScreen() {
	const { Colors } = useTheme();
	const styles = createRideStyles(Colors);

	const { coords } = useLocation();
	const { destination } = useDestinationStore();
	const [origin, setOrigin] = useState("Current Location");
	const [rideOffers, setRideOffers] = useState<RideOffer[]>([]);

	useEffect(() => {
	  const fetchOffers = async () => {
			console.log("Fetching offers...");
	    const offers = await OfferService.getOffers();
	    setRideOffers(offers);
	  };
	  fetchOffers()
	}, []);

	useEffect(() => {
		console.log('ride offers', rideOffers);
	}, [rideOffers]);

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
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
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
							source={{
								uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
							}}
							style={styles.userMarkerImage}
						/>
					</View>
				</Marker>

				{/* Available home */}
				{/*{AVAILABLE_RIDES.map((ride) => (*/}
				{/*	<React.Fragment key={ride.id}>*/}
				{/*		<Marker*/}
				{/*			coordinate={{*/}
				{/*				latitude: ride.latitude,*/}
				{/*				longitude: ride.longitude,*/}
				{/*			}}*/}
				{/*		>*/}
				{/*			<View style={styles.carMarker}>*/}
				{/*				<Text style={styles.markerText}>*/}
				{/*					{ride.seats}*/}
				{/*				</Text>*/}
				{/*			</View>*/}
				{/*		</Marker>*/}
				{/*		<Circle*/}
				{/*			center={{*/}
				{/*				latitude: ride.latitude,*/}
				{/*				longitude: ride.longitude,*/}
				{/*			}}*/}
				{/*			radius={200}*/}
				{/*			fillColor={Colors.primary + "33"}*/}
				{/*			strokeWidth={0}*/}
				{/*		/>*/}
				{/*	</React.Fragment>*/}
				{/*))}*/}
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
					<ChevronLeft size={IconSize.md} color={Colors.foreground} />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Choose a Ride</Text>
			</View>

			<View style={styles.mapContainer}>
				{renderMap()}

				<TouchableOpacity style={styles.mapControlButton}>
					<LocateFixed size={IconSize.md} color="#FFF" />
				</TouchableOpacity>
			</View>

			<View style={styles.modalContainer}>
				{/* Map the Ride Offers here */}

				{
					rideOffers.map((offer) => (
						<DriverRow key={offer.offer_id} offer={offer} />
					))
				}

				<GradientButton style={styles.findRideButton}>
					Select Ride
				</GradientButton>
			</View>
		</SafeAreaView>
	);
}
