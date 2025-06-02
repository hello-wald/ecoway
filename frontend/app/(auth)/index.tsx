import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { GradientButton } from "@/components/buttons/gradient-button";
import { GoogleButton } from "@/components/buttons/google-button";
import { OrDivider } from "@/components/form/or-divider";
import { ThemeColors } from "@/theme/colors";
import { createAuthStyles, Font, IconSize, Spacing, useTheme } from "@/theme";

export default function WelcomeScreen() {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);
	const authStyles = createAuthStyles(Colors);

	return (
		<View style={authStyles.container}>
			<Image
				source={require("@/assets/images/auth/green-city.jpg")}
				style={styles.backgroundImage}
			/>

			<LinearGradient
				colors={[
					Colors.background + "00",
					Colors.background + "99",
					Colors.background + "FF",
				]}
				style={styles.overlay}
				locations={[0, 0.6, 1]}
			/>

			<View style={styles.content}>
				<View style={styles.header}>
					<Text style={styles.title}>Let&apos;s get started</Text>
					<Text style={styles.subtitle}>
						Start your journey to find the best route for you
					</Text>
				</View>

				<View style={authStyles.buttonContainer}>
					<GradientButton onPress={() => router.push("/register")}>
						<Text style={styles.buttonText}>Get Started</Text>
						<ChevronRight size={IconSize.md} color={Colors.primaryForeground}/>
					</GradientButton>

					<OrDivider/>

					<GoogleButton onPress={() => router.push("/login")}/>
				</View>

				<View style={authStyles.footer}>
					<Text style={authStyles.footerText}>Already have an account?</Text>
					<TouchableOpacity onPress={() => router.push("/login")}>
						<Text style={authStyles.footerLink}>Sign in</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

const createStyles = (Colors: ThemeColors) =>
	StyleSheet.create({
		backgroundImage: {
			width: "100%",
			height: "50%",
		},
		overlay: {
			position: "absolute",
			width: "100%",
			height: "50%",
		},
		content: {
			flex: 1,
			justifyContent: "center",
			padding: Spacing.lg,
		},
		header: {
			alignItems: "center",
		},
		title: {
			...Font.h3,
			color: Colors.foreground,
		},
		subtitle: {
			marginTop: Spacing.sm,
			...Font.lg.medium,
			textAlign: "center",
			color: Colors.mutedForeground,
		},
		buttonText: {
			color: Colors.primaryForeground,
			marginRight: Spacing.xs,
			...Font.lg.bold,
		},
	});
