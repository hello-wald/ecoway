import React, { ReactNode } from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { BorderRadius, BorderWidth, Font, Spacing, useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";

interface SecondaryButtonProps extends TouchableOpacityProps {
	children: ReactNode;
	style?: ViewStyle;
	textStyle?: TextStyle;
}

export function SecondaryButton({
																 children,
																 style,
																 textStyle,
																 ...touchableProps
															 }: SecondaryButtonProps) {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	return (
		<TouchableOpacity style={[styles.button, style]} {...touchableProps}>
			<Text style={[styles.buttonText, textStyle]}>{children}</Text>
		</TouchableOpacity>
	);
}

const createStyles = (Colors: ThemeColors) =>
	StyleSheet.create({
		button: {
			borderRadius: BorderRadius.full,
			flexDirection: 'row',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: Colors.muted,
			borderWidth: BorderWidth.thin,
			borderColor: Colors.border,
			paddingVertical: Spacing.md,
		},
		buttonText: {
			color: Colors.foreground,
			...Font.lg.semiBold,
		},
	});
