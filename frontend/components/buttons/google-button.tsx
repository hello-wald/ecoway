import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { useTheme } from "@/theme/context/theme-context";
import { ThemeColors } from "@/theme/colors";
import { BorderRadius, BorderWidth, IconSize, Spacing, Font } from "@/theme";
import { GoogleLogo } from "@/components/icons/GoogleLogo";

interface OutlineButtonProps extends TouchableOpacityProps {
	style?: ViewStyle;
}

export function GoogleButton({ style, ...touchableProps }: OutlineButtonProps) {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	return (
		<TouchableOpacity style={[styles.button, style]} {...touchableProps}>
			<GoogleLogo size={IconSize.md}/>
			<Text style={styles.buttonText}>Sign In with Google</Text>
		</TouchableOpacity>
	);
}

const createStyles = (Colors: ThemeColors) =>
	StyleSheet.create({
		button: {
			borderRadius: BorderRadius.full,
			overflow: 'hidden',
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: 'transparent',
			borderWidth: BorderWidth.thin,
			borderColor: Colors.border,
			paddingVertical: Spacing.md,
		},
		buttonText: {
			marginLeft: Spacing.sm,
			color: Colors.foreground,
			...Font.lg.semiBold,
		},
	});