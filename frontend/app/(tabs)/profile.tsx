import { router } from "expo-router";
import {
	Bell,
	CreditCard,
	HelpCircle,
	LogOut,
	MapPin,
	Settings,
	Shield,
	User,
} from "lucide-react-native";
import React from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BorderRadius, Spacing, ThemeColors, useTheme } from "@/theme";
import { useAuthStore } from "@/lib/store";

export default function ProfileScreen() {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	const {logout} = useAuthStore();

	const userProfile = {
		name: "John Doe",
		email: "john.doe@example.com",
		avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
		co2Saved: 124.5,
		rides: 15,
	};

	const menuItems = [
		{ icon: User, label: "Personal Information", screen: "personal-info" },
		{ icon: MapPin, label: "Saved Locations", screen: "saved-locations" },
		{ icon: Shield, label: "Safety & Security", screen: "safety" },
		{ icon: CreditCard, label: "Payment Methods", screen: "payment" },
		{ icon: Bell, label: "Notifications", screen: "notifications" },
		{ icon: HelpCircle, label: "Help & Support", screen: "help" },
	];

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Profile</Text>
				<TouchableOpacity style={styles.settingsButton}>
					<Settings size={20} color={Colors.foreground} />
				</TouchableOpacity>
			</View>

			<ScrollView contentContainerStyle={styles.scrollContent}>
				<View style={styles.profileCard}>
					<Image
						source={{ uri: userProfile.avatar }}
						style={styles.avatar}
					/>
					<View style={styles.profileInfo}>
						<Text style={styles.name}>{userProfile.name}</Text>
						<Text style={styles.email}>{userProfile.email}</Text>
					</View>
					<TouchableOpacity style={styles.editButton}>
						<Text style={styles.editButtonText}>Edit</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.statsContainer}>
					<View style={styles.statItem}>
						<Text style={styles.statValue}>
							{userProfile.co2Saved} kg
						</Text>
						<Text style={styles.statLabel}>CO₂ Saved</Text>
					</View>
					<View style={styles.statDivider} />
					<View style={styles.statItem}>
						<Text style={styles.statValue}>
							{userProfile.rides}
						</Text>
						<Text style={styles.statLabel}>Rides Taken</Text>
					</View>
				</View>

				<View style={styles.menuContainer}>
					{menuItems.map((item, index) => (
						<TouchableOpacity key={index} style={styles.menuItem}>
							<View style={styles.menuIconContainer}>
								<item.icon
									size={20}
									color={Colors.primary}
								/>
							</View>
							<Text style={styles.menuLabel}>{item.label}</Text>
							<View style={styles.menuArrow} />
						</TouchableOpacity>
					))}
				</View>

				<TouchableOpacity
					style={styles.logoutButton}
					onPress={logout}
				>
					<LogOut size={20} color={Colors.error} />
					<Text style={styles.logoutText}>Log Out</Text>
				</TouchableOpacity>

				<Text style={styles.versionText}>EcoWay v1.0.0</Text>
			</ScrollView>
		</SafeAreaView>
	);
}

const createStyles = (Colors: ThemeColors) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors.background,
		},
		header: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			paddingHorizontal: Spacing.lg,
			paddingVertical: Spacing.md,
		},
		headerTitle: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 22,
			color: Colors.foreground,
		},
		settingsButton: {
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
		scrollContent: {
			paddingHorizontal: Spacing.lg,
			paddingBottom: Spacing.xl,
		},
		profileCard: {
			flexDirection: "row",
			alignItems: "center",
			backgroundColor: Colors.background,
			borderRadius: BorderRadius.lg,
			padding: Spacing.lg,
			marginBottom: Spacing.lg,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		avatar: {
			width: 60,
			height: 60,
			borderRadius: 30,
		},
		profileInfo: {
			flex: 1,
			marginLeft: Spacing.md,
		},
		name: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 18,
			color: Colors.foreground,
		},
		email: {
			fontFamily: "Poppins-Regular",
			fontSize: 14,
			color: Colors.mutedForeground,
		},
		editButton: {
			backgroundColor: "rgba(30, 136, 229, 0.1)",
			paddingHorizontal: Spacing.md,
			paddingVertical: Spacing.xs,
			borderRadius: BorderRadius.full,
		},
		editButtonText: {
			fontFamily: "Poppins-Medium",
			fontSize: 14,
			color: Colors.primary,
		},
		statsContainer: {
			flexDirection: "row",
			backgroundColor: Colors.background,
			borderRadius: BorderRadius.lg,
			padding: Spacing.md,
			marginBottom: Spacing.lg,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		statItem: {
			flex: 1,
			alignItems: "center",
		},
		statValue: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 18,
			color: Colors.foreground,
		},
		statLabel: {
			fontFamily: "Poppins-Regular",
			fontSize: 14,
			color: Colors.mutedForeground,
			marginTop: 2,
		},
		statDivider: {
			width: 1,
			height: "80%",
			backgroundColor: Colors.border,
		},
		menuContainer: {
			backgroundColor: Colors.background,
			borderRadius: BorderRadius.lg,
			marginBottom: Spacing.lg,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
			overflow: "hidden",
		},
		menuItem: {
			flexDirection: "row",
			alignItems: "center",
			paddingVertical: Spacing.md,
			paddingHorizontal: Spacing.lg,
			borderBottomWidth: 1,
			borderBottomColor: Colors.border,
		},
		menuIconContainer: {
			width: 36,
			height: 36,
			borderRadius: 18,
			backgroundColor: "rgba(30, 136, 229, 0.1)",
			justifyContent: "center",
			alignItems: "center",
			marginRight: Spacing.md,
		},
		menuLabel: {
			fontFamily: "Poppins-Medium",
			fontSize: 16,
			color: Colors.foreground,
			flex: 1,
		},
		menuArrow: {
			borderTopWidth: 2,
			borderRightWidth: 2,
			borderColor: Colors.mutedForeground,
			width: 8,
			height: 8,
			transform: [{ rotate: "45deg" }],
		},
		logoutButton: {
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "rgba(244, 67, 54, 0.1)",
			borderRadius: BorderRadius.lg,
			paddingVertical: Spacing.md,
			marginBottom: Spacing.lg,
		},
		logoutText: {
			fontFamily: "Poppins-Medium",
			fontSize: 16,
			color: Colors.error,
			marginLeft: Spacing.sm,
		},
		versionText: {
			fontFamily: "Poppins-Regular",
			fontSize: 14,
			color: Colors.mutedForeground,
			textAlign: "center",
		},
	});
