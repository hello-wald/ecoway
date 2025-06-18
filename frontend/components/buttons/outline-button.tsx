import React, { ReactNode } from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from "react-native";
import { ThemeColors } from "@/theme/colors";
import { BorderRadius, BorderWidth, IconSize, Spacing, Font, useTheme } from "@/theme";
import { GoogleLogo } from "@/components/icons/GoogleLogo";

interface OutlineButtonProps extends TouchableOpacityProps {
	children: ReactNode;
	style?: ViewStyle;
	textStyle?: TextStyle;
}

export function OutlineButton({ children, style, textStyle, ...touchableProps }: OutlineButtonProps) {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	const renderContent = () => {
		if (typeof children === "string") {
			return <Text style={[styles.buttonText, textStyle]}>{children}</Text>;
		}
		return children;
	};

	return (
		<TouchableOpacity style={[styles.button, style]} {...touchableProps}>
			{renderContent()}
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
			color: Colors.foreground,
			...Font.lg.semiBold,
		},
	});