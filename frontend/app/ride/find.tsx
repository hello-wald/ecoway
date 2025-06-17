import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { ChevronLeft, MapPin, Map, Search, Clock, Eye, LocateFixed } from 'lucide-react-native';
import { BorderRadius, Font, IconSize, Shadow, Spacing, useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import { useLocation } from "@/hooks/useLocation";
import { useDestinationStore } from "@/lib/store";
import { GradientButton } from "@/components/buttons/gradient-button";
import { router } from "expo-router";
import { Input } from "@/components/form/input";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Circle, Marker } from 'react-native-maps';
import { OrDivider } from "@/components/form/or-divider";
import { SecondaryButton } from "@/components/buttons/secondary-button";

// Mock data for available home
const AVAILABLE_RIDES = [
	{ id: 101, latitude: -6.200100, longitude: 106.817000, seats: 3 },
	{ id: 102, latitude: -6.201000, longitude: 106.815500, seats: 2 },
	{ id: 103, latitude: -6.199800, longitude: 106.816300, seats: 4 },
	{ id: 104, latitude: -6.200500, longitude: 106.816800, seats: 1 },
	{ id: 105, latitude: -6.199900, longitude: 106.816900, seats: 5 },
	{ id: 106, latitude: -6.200300, longitude: 106.817200, seats: 2 },
];

export default function FindScreen() {
	const {Colors} = useTheme();
	const styles = createStyles(Colors);
	const {coords} = useLocation();
	const {destination} = useDestinationStore();

	const [origin, setOrigin] = useState('Current Location');

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
                source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
                style={styles.userMarkerImage}
              />
            </View>
          </Marker>

				{/* Available home */}
				{coords && AVAILABLE_RIDES.map((ride) => (
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
					<ChevronLeft size={IconSize.md} color={Colors.foreground} />
				</TouchableOpacity>
				<Text style={styles.headerTitle}>Ride</Text>
			</View>

			<View style={styles.mapContainer}>
				{renderMap()}

				<TouchableOpacity style={styles.mapControlButton}>
					<LocateFixed size={IconSize.md} color='#FFF' />
				</TouchableOpacity>
			</View>

			<View style={styles.formContainer}>

				<Input label='From'
							 icon={<MapPin size={20} color={Colors.foreground} />}
							 value={origin}
							 placeholder='From location'
							 placeholderTextColor={Colors.mutedForeground}

				/>

				<Input label='To'
							 icon={<MapPin size={20} color={Colors.foreground} />}
							 value={destination?.name}
							 placeholder='To location'
							 placeholderTextColor={Colors.mutedForeground}

				/>

				<GradientButton style={styles.findRideButton}>
					Find Now
				</GradientButton>

				<OrDivider />

				<SecondaryButton>
					Start Ride
				</SecondaryButton>
			</View>
		</SafeAreaView>
	);
}

const createStyles = (Colors: ThemeColors) => StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: Spacing.lg,
		paddingBottom: Spacing.md,
	},
	backButton: {
		marginRight: Spacing.md,
	},
	headerTitle: {
		...Font.h5,
		color: Colors.foreground,
	},
	mapContainer: {
		flex: 1,
		position: 'relative',
		marginBottom: -Spacing.xxl,

	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	webMapPlaceholder: {
		backgroundColor: '#f0f0f0',
		justifyContent: 'center',
		alignItems: 'center',
	},
	webMapText: {
		fontSize: 24,
		fontFamily: 'Poppins-SemiBold',
		color: Colors.mutedForeground,
	},
	webMapSubtext: {
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		color: Colors.mutedForeground,
		marginTop: 8,
	},
	userMarker: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#FFF',
		borderWidth: 2,
		borderColor: Colors.primary,
		overflow: 'hidden',
	},
	userMarkerImage: {
		width: '100%',
		height: '100%',
	},
	carMarker: {
		backgroundColor: Colors.success,
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: BorderRadius.full,
	},
	markerText: {
		color: '#FFF',
		fontSize: 12,
		fontFamily: 'Poppins-Bold',
	},
	mapControlButton: {
		position: 'absolute',
		bottom: Spacing.xxl * 1.5,
		right: Spacing.md,
		backgroundColor: Colors.primary,
		padding: Spacing.sm,
		borderRadius: BorderRadius.full,
		justifyContent: 'center',
		alignItems: 'center',
		...Shadow(Colors.shadow).base,
	},
	formContainer: {
		backgroundColor: Colors.background,
		paddingHorizontal: Spacing.lg,
		paddingTop: Spacing.lg,
		paddingBottom: Spacing.md,
		borderTopLeftRadius: BorderRadius.lg,
		borderTopRightRadius: BorderRadius.lg,
	},
	findRideButton: {
		marginTop: Spacing.md,
	},
});