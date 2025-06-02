import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { BorderWidth, Spacing, Font, useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";

export function OrDivider() {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	return (
		<View style={styles.divider}>
			<View style={styles.dividerLine}/>
			<Text style={styles.dividerText}>OR</Text>
			<View style={styles.dividerLine}/>
		</View>
	)
}

const createStyles = (colors: ThemeColors) => StyleSheet.create({
	divider: {
		flexDirection: "row",
		alignItems: "center",
		marginVertical: Spacing.md,
	},
	dividerLine: {
		flex: 1,
		height: BorderWidth.thin,
		backgroundColor: colors.border,
	},
	dividerText: {
		color: colors.mutedForeground,
		paddingHorizontal: Spacing.md,
		...Font.sm.medium,
	},
})