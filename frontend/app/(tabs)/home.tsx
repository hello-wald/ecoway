import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Car, MapPin, Search, User as UserIcon } from 'lucide-react-native';
import { useTheme } from '@/theme/context/theme-context';
import { ThemeColors } from "@/theme/colors";
import { BorderRadius, Font, IconSize, Spacing } from "@/theme";
import { Input } from "@/components/form/input";

let MapView: any = () => null;
let Marker: any = () => null;
let Circle: any = () => null;

// Only import MapView on native platforms
if (Platform.OS !== 'web') {
	const Maps = require('react-native-maps');
	MapView = Maps.default;
	Marker = Maps.Marker;
	Circle = Maps.Circle;
}

// Mock data for available rides
const AVAILABLE_RIDES = [
	{ id: 1, latitude: 37.785834, longitude: -122.406417, seats: 2 },
	{ id: 2, latitude: 37.787834, longitude: -122.408417, seats: 3 },
	// {id: 3, latitude: 37.782834, longitude: -122.404417, seats: 2},
	// {id: 4, latitude: 37.784834, longitude: -122.402417, seats: 4},
	// {id: 5, latitude: 37.781834, longitude: -122.401417, seats: 5},
	// {id: 6, latitude: 37.786834, longitude: -122.405417, seats: 6},
	// {id: 7, latitude: 37.788834, longitude: -122.409417, seats: 7},
];

// Mock data for recent rides
const RECENT_RIDES = [
	{
		id: 1,
		from: '1901 Thornridge Cir, Shiloh',
		to: '4140 Parker Rd, Allentown',
		date: '16 July 2023',
		time: '10:30 PM',
		driver: 'Jane Cooper',
		seats: 4,
		status: 'Paid',
	},
];

export default function HomeScreen() {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	const [region, setRegion] = useState({
		latitude: 37.785834,
		longitude: -122.406417,
		latitudeDelta: 0.0122,
		longitudeDelta: 0.0121,
	});

	const renderMap = () => {
		if (Platform.OS === 'web') {
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
				region={region}
				showsUserLocation
			>
				{/* User's current location */}
				<Marker
					coordinate={{
						latitude: region.latitude,
						longitude: region.longitude,
					}}
					pinColor={Colors.primary}
				/>

				{/* Available rides */}
				{AVAILABLE_RIDES.map((ride) => (
					<React.Fragment key={ride.id}>
						<Marker
							coordinate={{
								latitude: ride.latitude,
								longitude: ride.longitude,
							}}
						>
							<View style={styles.carMarker}>
								<Car size={12} color="#FFF"/>
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
				<Text style={styles.welcomeText}>Welcome John</Text>
				<TouchableOpacity style={styles.profileButton}>
					<UserIcon size={20} color={Colors.foreground}/>
				</TouchableOpacity>
			</View>

			<Input icon={<Search size={IconSize.sm} color={Colors.mutedForeground}/>}
						 placeholder="Where do you want to go?"
						 inputStyle={styles.searchBar}
			/>

			<View style={styles.mapContainer}>
				<Text style={styles.sectionTitle}>Your current location</Text>
				{renderMap()}
			</View>

			<View style={styles.recentRidesContainer}>
				<Text style={styles.sectionTitle}>Recent Rides</Text>
				<ScrollView
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.recentRidesScrollContent}
				>
					{RECENT_RIDES.map((ride) => (
						<View key={ride.id} style={styles.rideCard}>
							<View style={styles.rideMap}>
								<Image
									source={{ uri: 'https://images.pexels.com/photos/11737156/pexels-photo-11737156.jpeg' }}
									style={styles.rideMapImage}
								/>
							</View>

							<View style={styles.rideDetails}>
								<View style={styles.rideLocationRow}>
									<MapPin size={16} color={Colors.primary}/>
									<Text style={styles.rideLocationText}>{ride.from}</Text>
								</View>

								<View style={styles.rideLocationRow}>
									<MapPin size={16} color={Colors.secondary}/>
									<Text style={styles.rideLocationText}>{ride.to}</Text>
								</View>

								<View style={styles.rideInfoRow}>
									<View style={styles.rideInfoItem}>
										<Text style={styles.rideInfoLabel}>Date & Time</Text>
										<Text style={styles.rideInfoValue}>{ride.date}, {ride.time}</Text>
									</View>
								</View>

								<View style={styles.rideInfoRow}>
									<View style={styles.rideInfoItem}>
										<Text style={styles.rideInfoLabel}>Driver</Text>
										<Text style={styles.rideInfoValue}>{ride.driver}</Text>
									</View>

									<View style={styles.rideInfoItem}>
										<Text style={styles.rideInfoLabel}>Car seats</Text>
										<Text style={styles.rideInfoValue}>{ride.seats}</Text>
									</View>
								</View>

								<View style={styles.rideInfoRow}>
									<View style={styles.rideInfoItem}>
										<Text style={styles.rideInfoLabel}>Payment Status</Text>
										<Text style={[styles.rideInfoValue, styles.paidStatus]}>{ride.status}</Text>
									</View>
								</View>
							</View>
						</View>
					))}
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const createStyles = (Colors: ThemeColors) => StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.muted,
		paddingHorizontal: Spacing.lg,
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: Spacing.md,
	},
	welcomeText: {
		...Font.h5,
		color: Colors.foreground,
	},
	profileButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: Colors.background,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
	},
	searchBar: {
		backgroundColor: Colors.background,
	},
	searchText: {
		fontFamily: 'Poppins-Regular',
		fontSize: 16,
		color: Colors.mutedForeground,
		marginLeft: Spacing.sm,
	},
	mapContainer: {
		marginBottom: Spacing.lg,
	},
	sectionTitle: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 18,
		color: Colors.foreground,
		marginBottom: Spacing.sm,
	},
	map: {
		height: 200,
		borderRadius: BorderRadius.lg,
		overflow: 'hidden',
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
	carMarker: {
		backgroundColor: Colors.primary,
		borderRadius: BorderRadius.full,
		padding: 6,
		flexDirection: 'row',
		alignItems: 'center',
	},
	markerText: {
		color: '#FFF',
		fontSize: 10,
		fontFamily: 'Poppins-Bold',
		marginLeft: 2,
	},
	recentRidesContainer: {
		flex: 1,
	},
	recentRidesScrollContent: {
		paddingRight: Spacing.lg,
	},
	rideCard: {
		backgroundColor: Colors.background,
		borderRadius: BorderRadius.lg,
		width: 300,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 4,
		elevation: 2,
		marginRight: Spacing.md,
	},
	rideMap: {
		height: 70,
		borderTopLeftRadius: BorderRadius.lg,
		borderTopRightRadius: BorderRadius.lg,
		overflow: 'hidden',
	},
	rideMapImage: {
		width: '100%',
		height: '100%',
	},
	rideDetails: {
		padding: Spacing.md,
	},
	rideLocationRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: Spacing.xs,
	},
	rideLocationText: {
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		color: Colors.foreground,
		marginLeft: Spacing.xs,
	},
	rideInfoRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: Spacing.xs,
	},
	rideInfoItem: {
		flex: 1,
	},
	rideInfoLabel: {
		fontFamily: 'Poppins-Regular',
		fontSize: 12,
		color: Colors.mutedForeground,
	},
	rideInfoValue: {
		fontFamily: 'Poppins-Medium',
		fontSize: 14,
		color: Colors.foreground,
	},
	paidStatus: {
		color: Colors.success,
	},
});