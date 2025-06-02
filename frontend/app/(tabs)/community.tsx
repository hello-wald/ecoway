import { useTheme } from "@/theme/provider/theme-provider";
import { Theme } from "@/theme/types/theme.types";
import { LinearGradient } from "expo-linear-gradient";
import {
	MessageCircle,
	Search,
	TrendingUp,
	Trophy,
	Users,
} from "lucide-react-native";
import React, { useState } from "react";
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Mock data for leaderboard
const LEADERBOARD_DATA = [
	{
		id: 1,
		name: "Sarah Johnson",
		co2Saved: 245.2,
		avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
	},
	{
		id: 2,
		name: "Michael Chen",
		co2Saved: 198.7,
		avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
	},
	{
		id: 3,
		name: "Jessica Williams",
		co2Saved: 176.3,
		avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
	},
	{
		id: 4,
		name: "David Kim",
		co2Saved: 153.9,
		avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
	},
	{
		id: 5,
		name: "Amanda Garcia",
		co2Saved: 135.2,
		avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
	},
];

// Mock data for forum topics
const FORUM_TOPICS = [
	{
		id: 1,
		title: "Tips for finding rides during rush hour",
		comments: 24,
		likes: 38,
	},
	{ id: 2, title: "Best car pooling experiences", comments: 17, likes: 31 },
	{
		id: 3,
		title: "How to maximize your carbon savings",
		comments: 15,
		likes: 29,
	},
	{
		id: 4,
		title: "EV ride sharing: Your thoughts?",
		comments: 32,
		likes: 47,
	},
];

export default function CommunityScreen() {
	const { theme } = useTheme();
	const styles = createStyles(theme);

	const [activeTab, setActiveTab] = useState("leaderboard");

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Community</Text>
				<TouchableOpacity style={styles.searchButton}>
					<Search size={20} color={theme.color.text} />
				</TouchableOpacity>
			</View>

			<View style={styles.tabsContainer}>
				<TouchableOpacity
					style={[
						styles.tab,
						activeTab === "leaderboard" && styles.activeTab,
					]}
					onPress={() => setActiveTab("leaderboard")}
				>
					<Trophy
						size={18}
						color={
							activeTab === "leaderboard"
								? theme.color.primary
								: theme.color.textMuted
						}
					/>
					<Text
						style={[
							styles.tabText,
							activeTab === "leaderboard" && styles.activeTabText,
						]}
					>
						Leaderboard
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						styles.tab,
						activeTab === "forum" && styles.activeTab,
					]}
					onPress={() => setActiveTab("forum")}
				>
					<MessageCircle
						size={18}
						color={
							activeTab === "forum"
								? theme.color.primary
								: theme.color.textMuted
						}
					/>
					<Text
						style={[
							styles.tabText,
							activeTab === "forum" && styles.activeTabText,
						]}
					>
						Forum
					</Text>
				</TouchableOpacity>
			</View>

			{activeTab === "leaderboard" ? (
				<ScrollView contentContainerStyle={styles.scrollContent}>
					<View style={styles.communityImpactCard}>
						<LinearGradient
							colors={theme.color.primaryGradient}
							style={styles.impactGradient}
							start={{ x: 0, y: 0 }}
							end={{ x: 1, y: 0 }}
						>
							<View style={styles.impactContent}>
								<View style={styles.impactTextContainer}>
									<Text style={styles.impactLabel}>
										Community Impact
									</Text>
									<Text style={styles.impactValue}>
										1,245 kg
									</Text>
									<Text style={styles.impactSubtext}>
										CO₂ saved this month by our community
									</Text>
								</View>
								<View style={styles.impactIconContainer}>
									<Users size={36} color="#FFF" />
								</View>
							</View>
						</LinearGradient>
					</View>

					<Text style={styles.sectionTitle}>Top Carbon Savers</Text>

					<View style={styles.leaderboardContainer}>
						{LEADERBOARD_DATA.map((user, index) => (
							<View key={user.id} style={styles.leaderboardItem}>
								<View style={styles.rankContainer}>
									<Text style={styles.rankText}>
										{index + 1}
									</Text>
								</View>
								<Image
									source={{ uri: user.avatar }}
									style={styles.userAvatar}
								/>
								<View style={styles.userInfoContainer}>
									<Text style={styles.userName}>
										{user.name}
									</Text>
									<View style={styles.co2Container}>
										<TrendingUp
											size={14}
											color={theme.color.success}
										/>
										<Text style={styles.co2Text}>
											{user.co2Saved} kg CO₂ saved
										</Text>
									</View>
								</View>
							</View>
						))}
					</View>

					<TouchableOpacity style={styles.seeMoreButton}>
						<Text style={styles.seeMoreText}>
							See Full Leaderboard
						</Text>
					</TouchableOpacity>
				</ScrollView>
			) : (
				<ScrollView contentContainerStyle={styles.scrollContent}>
					<TouchableOpacity style={styles.newTopicButton}>
						<Text style={styles.newTopicText}>
							Start a New Discussion
						</Text>
					</TouchableOpacity>

					<Text style={styles.sectionTitle}>Popular Topics</Text>

					{FORUM_TOPICS.map((topic) => (
						<TouchableOpacity
							key={topic.id}
							style={styles.topicCard}
						>
							<View style={styles.topicHeader}>
								<Text style={styles.topicTitle}>
									{topic.title}
								</Text>
							</View>
							<View style={styles.topicFooter}>
								<View style={styles.topicStat}>
									<MessageCircle
										size={14}
										color={theme.color.textMuted}
									/>
									<Text style={styles.topicStatText}>
										{topic.comments} comments
									</Text>
								</View>
								<View style={styles.topicStat}>
									<TrendingUp
										size={14}
										color={theme.color.textMuted}
									/>
									<Text style={styles.topicStatText}>
										{topic.likes} likes
									</Text>
								</View>
							</View>
						</TouchableOpacity>
					))}

					<TouchableOpacity style={styles.seeMoreButton}>
						<Text style={styles.seeMoreText}>
							Browse All Topics
						</Text>
					</TouchableOpacity>
				</ScrollView>
			)}
		</SafeAreaView>
	);
}

const createStyles = (theme: Theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.color.background,
		},
		header: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			paddingHorizontal: theme.size.lg,
			paddingVertical: theme.size.md,
		},
		headerTitle: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 22,
			color: theme.color.text,
		},
		searchButton: {
			width: 40,
			height: 40,
			borderRadius: 20,
			backgroundColor: theme.color.background,
			justifyContent: "center",
			alignItems: "center",
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		tabsContainer: {
			flexDirection: "row",
			paddingHorizontal: theme.size.lg,
			marginBottom: theme.size.md,
		},
		tab: {
			flexDirection: "row",
			alignItems: "center",
			paddingVertical: theme.size.sm,
			paddingHorizontal: theme.size.md,
			marginRight: theme.size.md,
			borderRadius: theme.br.full,
			backgroundColor: "transparent",
		},
		activeTab: {
			backgroundColor: "rgba(30, 136, 229, 0.1)",
		},
		tabText: {
			fontFamily: "Poppins-Medium",
			fontSize: 14,
			color: theme.color.textMuted,
			marginLeft: theme.size.xs,
		},
		activeTabText: {
			color: theme.color.primary,
		},
		scrollContent: {
			paddingHorizontal: theme.size.lg,
			paddingBottom: theme.size.xl,
		},
		communityImpactCard: {
			borderRadius: theme.br.lg,
			overflow: "hidden",
			marginBottom: theme.size.lg,
		},
		impactGradient: {
			padding: theme.size.lg,
		},
		impactContent: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		impactTextContainer: {
			flex: 1,
		},
		impactLabel: {
			fontFamily: "Poppins-Medium",
			fontSize: 14,
			color: "rgba(255, 255, 255, 0.8)",
		},
		impactValue: {
			fontFamily: "Poppins-Bold",
			fontSize: 32,
			color: "#FFF",
		},
		impactSubtext: {
			fontFamily: "Poppins-Regular",
			fontSize: 14,
			color: "rgba(255, 255, 255, 0.9)",
			marginTop: theme.size.xs,
		},
		impactIconContainer: {
			backgroundColor: "rgba(255, 255, 255, 0.2)",
			width: 60,
			height: 60,
			borderRadius: 30,
			justifyContent: "center",
			alignItems: "center",
		},
		sectionTitle: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 18,
			color: theme.color.text,
			marginBottom: theme.size.md,
		},
		leaderboardContainer: {
			backgroundColor: theme.color.background,
			borderRadius: theme.br.lg,
			padding: theme.size.md,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		leaderboardItem: {
			flexDirection: "row",
			alignItems: "center",
			paddingVertical: theme.size.md,
			borderBottomWidth: 1,
			borderBottomColor: theme.color.border,
		},
		rankContainer: {
			width: 28,
			height: 28,
			borderRadius: 14,
			backgroundColor: "rgba(30, 136, 229, 0.1)",
			justifyContent: "center",
			alignItems: "center",
			marginRight: theme.size.md,
		},
		rankText: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 14,
			color: theme.color.primary,
		},
		userAvatar: {
			width: 40,
			height: 40,
			borderRadius: 20,
			marginRight: theme.size.md,
		},
		userInfoContainer: {
			flex: 1,
		},
		userName: {
			fontFamily: "Poppins-Medium",
			fontSize: 16,
			color: theme.color.text,
		},
		co2Container: {
			flexDirection: "row",
			alignItems: "center",
			marginTop: 2,
		},
		co2Text: {
			fontFamily: "Poppins-Regular",
			fontSize: 14,
			color: theme.color.textMuted,
			marginLeft: theme.size.xs,
		},
		seeMoreButton: {
			backgroundColor: theme.color.background,
			borderRadius: theme.br.lg,
			paddingVertical: theme.size.md,
			marginTop: theme.size.md,
			alignItems: "center",
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		seeMoreText: {
			fontFamily: "Poppins-Medium",
			fontSize: 16,
			color: theme.color.primary,
		},
		newTopicButton: {
			backgroundColor: theme.color.primary,
			borderRadius: theme.br.lg,
			paddingVertical: theme.size.md,
			marginBottom: theme.size.lg,
			alignItems: "center",
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.2,
			shadowRadius: 4,
			elevation: 4,
		},
		newTopicText: {
			fontFamily: "Poppins-SemiBold",
			fontSize: 16,
			color: "#FFF",
		},
		topicCard: {
			backgroundColor: theme.color.background,
			borderRadius: theme.br.lg,
			padding: theme.size.md,
			marginBottom: theme.size.md,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.1,
			shadowRadius: 4,
			elevation: 2,
		},
		topicHeader: {
			marginBottom: theme.size.sm,
		},
		topicTitle: {
			fontFamily: "Poppins-Medium",
			fontSize: 16,
			color: theme.color.text,
		},
		topicFooter: {
			flexDirection: "row",
			justifyContent: "space-between",
		},
		topicStat: {
			flexDirection: "row",
			alignItems: "center",
		},
		topicStatText: {
			fontFamily: "Poppins-Regular",
			fontSize: 14,
			color: theme.color.textMuted,
			marginLeft: theme.size.xs,
		},
	});
