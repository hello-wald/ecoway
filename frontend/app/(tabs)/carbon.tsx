import { LinearGradient } from "expo-linear-gradient";
import { Award, BarChart2, Info, Leaf, TrendingUp } from "lucide-react-native";
import React from "react";
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BorderRadius, Spacing, ThemeColors, useTheme } from "@/theme";

// Mock data for emissions statistics
const EMISSION_DATA = {
	total: 124.5, // kg of CO2 saved
	thisMonth: 26.8,
	treesEquivalent: 5,
	trips: 15,
	averageSaving: 8.3, // kg per trip
};

// Mock data for monthly statistics
const MONTHLY_DATA = [
	{ month: "Jan", value: 18 },
	{ month: "Feb", value: 25 },
	{ month: "Mar", value: 30 },
	{ month: "Apr", value: 22 },
	{ month: "May", value: 38 },
	{ month: "Jun", value: 42 },
	{ month: "Jul", value: 24 },
];

// Mock data for achievements
const ACHIEVEMENTS = [
	{
		id: 1,
		title: "First Ride",
		description: "Complete your first carpool ride",
		completed: true,
	},
	{
		id: 2,
		title: "Eco Warrior",
		description: "Save 50kg of CO2 emissions",
		completed: true,
	},
	{
		id: 3,
		title: "Regular Commuter",
		description: "Complete 10 home in a month",
		completed: true,
	},
	{
		id: 4,
		title: "Climate Champion",
		description: "Save 100kg of CO2 emissions",
		completed: true,
	},
	{
		id: 5,
		title: "Community Builder",
		description: "Refer 5 friends",
		completed: false,
	},
];

export default function CarbonScreen() {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);
	// Find the maximum value for scaling the chart
	const maxValue = Math.max(...MONTHLY_DATA.map((item) => item.value));

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Carbon Impact</Text>
				<TouchableOpacity style={styles.infoButton}>
					<Info size={20} color={Colors.text} />
				</TouchableOpacity>
			</View>

			<ScrollView contentContainerStyle={styles.scrollContent}>
				{/* Summary background */}
				<LinearGradient
					colors={Colors.primaryGradient}
					style={styles.summaryCard}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
				>
					<View style={styles.summaryContent}>
						<View style={styles.summaryTextContainer}>
							<Text style={styles.summaryLabel}>
								Total CO₂ Saved
							</Text>
							<Text style={styles.summaryValue}>
								{EMISSION_DATA.total} kg
							</Text>
							<Text style={styles.summarySubtext}>
								{EMISSION_DATA.treesEquivalent} trees worth of
								CO₂ absorption
							</Text>
						</View>
						<View style={styles.iconContainer}>
							<Leaf size={40} color="#FFF" />
						</View>
					</View>
				</LinearGradient>

				{/* Statistics backgrounds */}
				<View style={styles.statsContainer}>
					<View style={styles.statsCard}>
						<View style={styles.statsIconContainer}>
							<TrendingUp size={20} color={Colors.primary} />
						</View>
						<Text style={styles.statsLabel}>This Month</Text>
						<Text style={styles.statsValue}>
							{EMISSION_DATA.thisMonth} kg
						</Text>
					</View>

					<View style={styles.statsCard}>
						<View style={styles.statsIconContainer}>
							<BarChart2 size={20} color={Colors.primary} />
						</View>
						<Text style={styles.statsLabel}>Rides Taken</Text>
						<Text style={styles.statsValue}>
							{EMISSION_DATA.trips}
						</Text>
					</View>

					<View style={styles.statsCard}>
						<View style={styles.statsIconContainer}>
							<Leaf size={20} color={Colors.primary} />
						</View>
						<Text style={styles.statsLabel}>Avg. Saving</Text>
						<Text style={styles.statsValue}>
							{EMISSION_DATA.averageSaving} kg
						</Text>
					</View>
				</View>

				{/* Monthly chart */}
				<View style={styles.chartContainer}>
					<Text style={styles.sectionTitle}>Monthly Progress</Text>
					<View style={styles.chart}>
						{MONTHLY_DATA.map((item, index) => (
							<View key={index} style={styles.chartColumn}>
								<View style={styles.chartBarContainer}>
									<LinearGradient
										colors={[
											Colors.secondary,
											Colors.primary,
										]}
										style={[
											styles.chartBar,
											{
												height:
													(item.value / maxValue) *
													100,
											},
										]}
										start={{ x: 0, y: 1 }}
										end={{ x: 0, y: 0 }}
									/>
								</View>
								<Text style={styles.chartLabel}>
									{item.month}
								</Text>
							</View>
						))}
					</View>
				</View>

				{/* Achievements */}
				<View style={styles.achievementsContainer}>
					<Text style={styles.sectionTitle}>Achievements</Text>
					{ACHIEVEMENTS.map((achievement) => (
						<View
							key={achievement.id}
							style={styles.achievementCard}
						>
							<View
								style={[
									styles.achievementIconContainer,
									achievement.completed
										? styles.achievementIconCompleted
										: styles.achievementIconPending,
								]}
							>
								<Award
									size={20}
									color={
										achievement.completed
											? "#FFF"
											: Colors.textMuted
									}
								/>
							</View>
							<View style={styles.achievementContent}>
								<Text style={styles.achievementTitle}>
									{achievement.title}
								</Text>
								<Text style={styles.achievementDescription}>
									{achievement.description}
								</Text>
							</View>
							<Text
								style={[
									styles.achievementStatus,
									achievement.completed
										? styles.achievementStatusCompleted
										: styles.achievementStatusPending,
								]}
							>
								{achievement.completed
									? "Completed"
									: "In Progress"}
							</Text>
						</View>
					))}
				</View>
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
		infoButton: {
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
		summaryCard: {
			borderRadius: BorderRadius.lg,
			padding: Spacing.lg,
			marginBottom: Spacing.lg,
		},
		summaryContent: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		summaryTextContainer: {
			flex: 1,
		},
		summaryLabel: {
			fontFamily: "Poppins-Medium",
			fontSize: 14,
			color: "rgba(255, 255, 255, 0.8)",
		},
		summaryValue: {
			fontFamily: "Poppins-Bold",
			fontSize: 32,
			color: "#FFF",
		},
		summarySubtext: {
			fontFamily: "Poppins-Regular",
			fontSize: 14,
			color: "rgba(255, 255, 255, 0.9)",
			marginTop: Spacing.xs,
		},
		iconContainer: {
			backgroundColor: "rgba(255, 255, 255, 0.2)",
			width: 60,
			height: 60,
			borderRadius: 30,
			justifyContent: "center",
			alignItems: "center",
		},
		statsContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			marginBottom: Spacing.lg,
		},
		statsCard: {
			backgroundColor: Colors.background,
			borderRadius: BorderRadius.lg,
			padding: Spacing.md,
			width: "31%",
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
			alignItems: "center",
		},
		statsIconContainer: {
			backgroundColor: "rgba(30, 136, 229, 0.1)",
			width: 40,
			height: 40,
			borderRadius: 20,
			justifyContent: "center",
			alignItems: "center",
			marginBottom: Spacing.sm,
		},
		statsLabel: {
			fontFamily: "Poppins-Medium",
			fontSize: 12,
			color: Colors.mutedForeground,
			marginBottom: 2,
		},
		statsValue: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 16,
			color: Colors.foreground,
		},
		sectionTitle: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 18,
			color: Colors.foreground,
			marginBottom: Spacing.md,
		},
		chartContainer: {
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
		chart: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "flex-end",
			height: 120,
		},
		chartColumn: {
			alignItems: "center",
			width: "13%",
		},
		chartBarContainer: {
			width: "100%",
			height: 100,
			justifyContent: "flex-end",
		},
		chartBar: {
			width: "100%",
			borderRadius: BorderRadius.sm,
		},
		chartLabel: {
			fontFamily: "Poppins-Medium",
			fontSize: 12,
			color: Colors.mutedForeground,
			marginTop: Spacing.xs,
		},
		achievementsContainer: {
			backgroundColor: Colors.background,
			borderRadius: BorderRadius.lg,
			padding: Spacing.lg,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		achievementCard: {
			flexDirection: "row",
			alignItems: "center",
			paddingVertical: Spacing.md,
			borderBottomWidth: 1,
			borderBottomColor: Colors.border,
		},
		achievementIconContainer: {
			width: 40,
			height: 40,
			borderRadius: 20,
			justifyContent: "center",
			alignItems: "center",
			marginRight: Spacing.md,
		},
		achievementIconCompleted: {
			backgroundColor: Colors.success,
		},
		achievementIconPending: {
			backgroundColor: "rgba(158, 158, 158, 0.2)",
		},
		achievementContent: {
			flex: 1,
		},
		achievementTitle: {
			fontFamily: "Poppins-Medium",
			fontSize: 16,
			color: Colors.foreground,
		},
		achievementDescription: {
			fontFamily: "Poppins-Regular",
			fontSize: 14,
			color: Colors.mutedForeground,
		},
		achievementStatus: {
			fontFamily: "Poppins-Medium",
			fontSize: 12,
		},
		achievementStatusCompleted: {
			color: Colors.success,
		},
		achievementStatusPending: {
			color: Colors.mutedForeground,
		},
	});
