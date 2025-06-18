import React, { useState } from 'react';
import { Image, Platform, Text, TouchableOpacity, View } from 'react-native';
import { ChevronLeft, LocateFixed, MapPin } from 'lucide-react-native';
import { createRideStyles, IconSize, useTheme } from "@/theme";
import { useLocation } from "@/hooks/useLocation";
import { useAuthStore, useDestinationStore } from "@/lib/store";
import { GradientButton } from "@/components/buttons/gradient-button";
import { router } from "expo-router";
import { Input } from "@/components/form/input";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Circle, Marker } from 'react-native-maps';
import { OrDivider } from "@/components/form/or-divider";
import { SecondaryButton } from "@/components/buttons/secondary-button";
import { OfferService } from "@/services/offer.service";

// Mock data for available home
const AVAILABLE_RIDES = [
	{ id: 101, latitude: -6.200100, longitude: 106.817000, seats: 3 },
	{ id: 102, latitude: -6.201000, longitude: 106.815500, seats: 2 },
	{ id: 103, latitude: -6.199800, longitude: 106.816300, seats: 4 },
	{ id: 104, latitude: -6.200500, longitude: 106.816800, seats: 1 },
	{ id: 105, latitude: -6.199900, longitude: 106.816900, seats: 5 },
	{ id: 106, latitude: -6.200300, longitude: 106.817200, seats: 2 },
];

export default function DestinationScreen() {
	const { Colors } = useTheme();
	const styles = createRideStyles(Colors);

	const { user } = useAuthStore();
	const { coords } = useLocation();
	const { destination } = useDestinationStore();
	const [origin, setOrigin] = useState('Current Location');

	const handleStartRide = async () => {
		console.log("Starting Ride");


		const offerId = await OfferService.createOffer({
			driver_id: user!.id,
			destination: {
				name: destination!.name,
				latitude: destination!.latitude,
				longitude: destination!.longitude,
			},
			location: {
				latitude: coords!.latitude,
				longitude: coords!.longitude,
			}
		})
		console.log('offerid', offerId);
		router.push(`/ride/driving/${offerId}`);
	}

	const renderMap = () => {
		if (Platform.OS === 'web' || !coords) {
			return (
				<View style={[styles.map, styles.webMapPlaceholder]}>
					<Text style={styles.webMapText}>Map View</Text>
					<Text style={styles.webMapSubtext}>Maps are only available on mobile devices</Text>
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
							source={require('@/assets/images/ride/avatar.png')}
							style={styles.userMarkerImage}
						/>
					</View>
				</Marker>

				{/* Available home */}
				{AVAILABLE_RIDES.map((ride) => (
					<React.Fragment key={ride.id}>
						<Marker
							coordinate={{
								latitude: ride.latitude,
								longitude: ride.longitude,
							}}
						>
							<View style={styles.carMarker}>
								<Text style={styles.markerText}>{ride.seats}</Text>
							</View>
						</Marker>
						<Circle
							center={{
								latitude: ride.latitude,
								longitude: ride.longitude,
							}}
							radius={200}
							fillColor={Colors.primary + '33'}
							strokeWidth={0}
						/>
					</React.Fragment>
				))}
			</MapView>
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity style={styles.backButton} onPress={router.back}>
					<ChevronLeft size={IconSize.md} color={Colors.foreground}/>
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Ride</Text>
			</View>

			<View style={styles.mapContainer}>
				{renderMap()}

				<TouchableOpacity style={styles.mapControlButton}>
					<LocateFixed size={IconSize.md} color='#FFF'/>
				</TouchableOpacity>
			</View>

			<View style={styles.modalContainer}>

				<Input label='From'
							 icon={<MapPin size={20} color={Colors.foreground}/>}
							 value={origin}
							 placeholder='From location'
							 placeholderTextColor={Colors.mutedForeground}

				/>

				<Input label='To'
							 icon={<MapPin size={20} color={Colors.foreground}/>}
							 value={destination?.name}
							 placeholder='To location'
							 placeholderTextColor={Colors.mutedForeground}

				/>

				<GradientButton style={styles.findRideButton} onPress={() => router.push('/ride/find')}>
					Find Now
				</GradientButton>

				<OrDivider/>

				<SecondaryButton onPress={handleStartRide}>
					Start Ride
				</SecondaryButton>
			</View>
		</SafeAreaView>
	);
}