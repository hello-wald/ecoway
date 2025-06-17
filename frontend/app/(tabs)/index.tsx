import { PlacesAutocompleteInput } from "@/components/places-autocomplete-input";
import { useLocation } from "@/hooks/useLocation";
import { useAuthStore, useDestinationStore } from "@/lib/store";
import { BorderRadius, BorderWidth, Font, IconSize, Spacing, useTheme, } from "@/theme";
import { ThemeColors } from "@/theme/colors";
import { Car, MapPin, User as UserIcon } from "lucide-react-native";
import React from "react";
import { FlatList, Platform, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

// Mock data for available home
const AVAILABLE_RIDES = [
	{ id: 101, latitude: -6.200100, longitude: 106.817000, seats: 3 },
	{ id: 102, latitude: -6.201000, longitude: 106.815500, seats: 2 },
	{ id: 103, latitude: -6.199800, longitude: 106.816300, seats: 4 },
	{ id: 104, latitude: -6.200500, longitude: 106.816800, seats: 1 },
	{ id: 105, latitude: -6.199900, longitude: 106.816900, seats: 5 },
	{ id: 106, latitude: -6.200300, longitude: 106.817200, seats: 2 },
];

// Mock data for recent home
const RECENT_RIDES = [
	{
		id: 1,
		from: "1901 Thornridge Cir, Shiloh",
		to: "4140 Parker Rd, Allentown",
		date: "16 July 2023",
		time: "10:30 PM",
		driver: "Jane Cooper",
		seats: 4,
		status: "Paid",
	},
];

export default function HomeScreen() {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);
	const { user } = useAuthStore();

	const { coords } = useLocation();

	const renderMap = () => {
		if (Platform.OS === "web") {
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
					latitude: coords?.latitude || 37.78825,
					longitude: coords?.longitude || -122.4324,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				showsUserLocation
			>
				<Marker
					coordinate={{
						latitude: coords?.latitude || 37.78825,
						longitude: coords?.longitude || -122.4324,
					}}
					pinColor={Colors.primary}
				/>

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
								<Car size={12} color="#FFF"/>
								<Text style={styles.markerText}>
									{ride.seats}
								</Text>
							</View>
						</Marker>
						<Circle
							center={{
								latitude: ride.latitude,
								longitude: ride.longitude,
							}}
							radius={200}
							fillColor={Colors.primary + "33"}
							strokeWidth={0}
						/>
					</React.Fragment>
				))}
			</MapView>
		);
	};

	const onPlaceSelected = (data: any, details: any) => {
		console.log("Selected place:", data, details);

		console.log("data", data);
		console.log("details", details);

		if (!details || !details.geometry || !details.geometry.location) {
			console.error("Missing location details.");
			return;
		}

		const name = data.description || "";
		const latitude = details.geometry.location.lat;
		const longitude = details.geometry.location.lng;

		useDestinationStore.getState().setDestinations({
			name,
			latitude,
			longitude
		});

		router.push("/ride/destination");
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.welcomeText}>Welcome {user?.name}</Text>
				<TouchableOpacity style={styles.profileButton}>
					<UserIcon
						size={IconSize.sm}
						color={Colors.foreground}
					/>
				</TouchableOpacity>
			</View>

			<PlacesAutocompleteInput
				onPlaceSelected={(data, details) => {onPlaceSelected(data, details)}}
				containerStyle={styles.searchBar}
			/>

			<View style={styles.mapContainer}>
				<Text style={styles.sectionTitle}>
					Your current location
				</Text>
				{renderMap()}
			</View>

			<View style={styles.recentRidesContainer}>
				<Text style={styles.sectionTitle}>Recent Rides</Text>
				<FlatList
					data={RECENT_RIDES}
					horizontal
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={styles.recentRidesScrollContent}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item: ride }) => (
						<View style={styles.rideCard}>
							{/*<View style={styles.rideMap}>*/}
							{/*<Image*/}
							{/*	source={{*/}
							{/*		uri: "",*/}
							{/*	}}*/}
							{/*	style={styles.rideMapImage}*/}
							{/*/>*/}
							{/*</View>*/}

							<View style={styles.rideDetails}>
								<View style={styles.rideLocationRow}>
									<MapPin
										size={16}
										color={Colors.primary}
									/>
									<Text style={styles.rideLocationText}>
										{ride.from}
									</Text>
								</View>

								<View style={styles.rideLocationRow}>
									<MapPin
										size={16}
										color={Colors.secondary}
									/>
									<Text style={styles.rideLocationText}>
										{ride.to}
									</Text>
								</View>

								<View style={styles.rideInfoRow}>
									<View style={styles.rideInfoItem}>
										<Text style={styles.rideInfoLabel}>
											Date & Time
										</Text>
										<Text style={styles.rideInfoValue}>
											{ride.date}, {ride.time}
										</Text>
									</View>
								</View>

								<View style={styles.rideInfoRow}>
									<View style={styles.rideInfoItem}>
										<Text style={styles.rideInfoLabel}>
											Driver
										</Text>
										<Text style={styles.rideInfoValue}>
											{ride.driver}
										</Text>
									</View>

									<View style={styles.rideInfoItem}>
										<Text style={styles.rideInfoLabel}>
											Car seats
										</Text>
										<Text style={styles.rideInfoValue}>
											{ride.seats}
										</Text>
									</View>
								</View>

								<View style={styles.rideInfoRow}>
									<View style={styles.rideInfoItem}>
										<Text style={styles.rideInfoLabel}>
											Payment Status
										</Text>
										<Text
											style={[
												styles.rideInfoValue,
												styles.paidStatus,
											]}
										>
											{ride.status}
										</Text>
									</View>
								</View>
							</View>
						</View>
					)}
				/>
			</View>
		</SafeAreaView>
	);
}

const createStyles = (Colors: ThemeColors) =>
	StyleSheet.create({
		autocompleteContainer: {
			marginBottom: Spacing.md,
			zIndex: 1000,
		},
		container: {
			flex: 1,
			backgroundColor: Colors.muted,
			paddingHorizontal: Spacing.lg,
		},
		header: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginVertical: Spacing.md,
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
			justifyContent: "center",
			alignItems: "center",
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		searchBar: {
			marginBottom: Spacing.md,
		},
		searchText: {
			fontFamily: "Poppins-Regular",
			fontSize: 16,
			color: Colors.mutedForeground,
			marginLeft: Spacing.sm,
		},
		mapContainer: {
			marginBottom: Spacing.lg,
		},
		sectionTitle: {
			...Font.h6,
			color: Colors.foreground,
			marginBottom: Spacing.md,
		},
		map: {
			height: 300,
			borderRadius: BorderRadius.lg,
			overflow: "hidden",
		},
		webMapPlaceholder: {
			backgroundColor: "#f0f0f0",
			justifyContent: "center",
			alignItems: "center",
		},
		webMapText: {
			fontSize: 24,
			fontFamily: "Poppins-SemiBold",
			color: Colors.mutedForeground,
		},
		webMapSubtext: {
			fontSize: 16,
			fontFamily: "Poppins-Regular",
			color: Colors.mutedForeground,
			marginTop: 8,
		},
		carMarker: {
			backgroundColor: Colors.primary,
			borderRadius: BorderRadius.full,
			padding: 6,
			flexDirection: "row",
			alignItems: "center",
		},
		markerText: {
			color: "#FFF",
			fontSize: 10,
			fontFamily: "Poppins-Bold",
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
			borderWidth: BorderWidth.thin,
			borderColor: Colors.border,
			marginRight: Spacing.md,
		},
		rideMap: {
			height: 70,
			borderTopLeftRadius: BorderRadius.lg,
			borderTopRightRadius: BorderRadius.lg,
			overflow: "hidden",
		},
		rideMapImage: {
			width: "100%",
			height: "100%",
		},
		rideDetails: {
			padding: Spacing.md,
		},
		rideLocationRow: {
			flexDirection: "row",
			alignItems: "center",
		},
		rideLocationText: {
			fontFamily: "Poppins-Medium",
			fontSize: 14,
			color: Colors.foreground,
			marginLeft: Spacing.xs,
		},
		rideInfoRow: {
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: Spacing.xs,
		},
		rideInfoItem: {
			flex: 1,
		},
		rideInfoLabel: {
			fontFamily: "Poppins-Regular",
			fontSize: 12,
			color: Colors.mutedForeground,
		},
		rideInfoValue: {
			fontFamily: "Poppins-Medium",
			fontSize: 14,
			color: Colors.foreground,
		},
		paidStatus: {
			color: Colors.success,
		},
	});
