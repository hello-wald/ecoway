import { useTheme } from "@/theme/context/theme-context";
import { LinearGradient } from "expo-linear-gradient";
import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { BorderRadius, Font, Shadow, Spacing } from "@/theme";
import { ThemeColors } from "@/theme/colors";

interface GradientButtonProps extends TouchableOpacityProps {
	children: ReactNode;
	style?: ViewStyle;
}

export function GradientButton({
																 children,
																 style,
																 ...touchableProps
															 }: GradientButtonProps) {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	const renderContent = () => {
		if (typeof children === "string") {
			return <Text style={[styles.buttonText]}>{children}</Text>;
		}
		return children;
	};

	return (
		<TouchableOpacity style={[styles.button, style]} {...touchableProps}>
			<LinearGradient
				colors={Colors.primaryGradient}
				style={[styles.gradientButton]}
				start={{ x: 0, y: 0 }}
				end={{ x: 1, y: 0 }}
			>
				{renderContent()}
			</LinearGradient>
		</TouchableOpacity>
	);
}

const createStyles = (Colors: ThemeColors) =>
	StyleSheet.create({
		button: {
			...Shadow(Colors.shadow).base
		},
		gradientButton: {
			borderRadius: BorderRadius.full,
			flexDirection: "row",
			justifyContent: "center",
			alignItems: "center",
			paddingVertical: Spacing.md,
		},
		buttonText: {
			marginRight: Spacing.xs,
			color: Colors.primaryForeground,
			...Font.lg.bold,
		},
	});
