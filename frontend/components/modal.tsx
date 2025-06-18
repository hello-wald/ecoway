import React, { ReactNode } from "react";
import {
	Modal,
	Text,
	View,
	ViewStyle,
	StyleSheet,
} from "react-native";
import { BorderRadius, Font, Spacing, ThemeColors, useTheme } from "@/theme";

interface BaseModalProps {
	visible: boolean;
	onClose: () => void;
	icon?: ReactNode;
	title?: string;
	message?: string;
	isPolling?: boolean;
	children?: ReactNode;
}

export const BaseModal = ({
																											visible,
																											onClose,
																											title,
																											message,
																											icon,
																											children,
																											style,
																										}: BaseModalProps) => 	{
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	return (
		<Modal
			animationType="fade"
			transparent
			visible={visible}
			onRequestClose={onClose}
		>
			<View style={styles.overlay}>
				<View style={[styles.content, style]}>
					{icon && <View style={styles.icon}>{icon}</View>}
					<Text style={styles.title}>{title}</Text>
					<Text style={styles.message}>{message}</Text>
					{children}
				</View>
			</View>
		</Modal>
	);
};

const createStyles = (Colors: ThemeColors) => StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: "rgba(0, 0, 0, 0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	content: {
		width: "80%",
		backgroundColor: Colors.background,
		borderRadius: BorderRadius.md,
		padding: Spacing.lg,
		alignItems: "center",
	},
	icon: {
		marginBottom: Spacing.xs,
	},
	title: {
		...Font.h4,
		textAlign: "center",
		marginBottom: Spacing.sm,
		color: Colors.foreground,
	},
	message: {
		...Font.md.medium,
		textAlign: 'center',
		color: Colors.mutedForeground,
		marginBottom: Spacing.md,
	},
});
