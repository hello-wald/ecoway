import { StyleSheet } from "react-native";
import { ThemeColors } from "../colors";
import { BorderRadius, Shadow } from "../outlines";
import { Font } from "../text-style";
import { Spacing } from "../sizing";

export const createAuthStyles = (Colors: ThemeColors) => StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	scrollView: {
		flexGrow: 1,
	},
	backgroundImage: {
		position: 'absolute',
		width: '100%',
		height: '30%',
	},
	authHeader: {
		height: '25%',
		paddingHorizontal: Spacing.lg,
		justifyContent: 'flex-end',
	},
	authTitle: {
		...Font.h4,
		...Shadow(Colors.shadow).text,
		color: Colors.primaryForeground,
		marginBottom: Spacing.md,
	},
	formContainer: {
		flex: 1,
		backgroundColor: Colors.background,
		borderTopLeftRadius: BorderRadius.xl,
		borderTopRightRadius: BorderRadius.xl,
		paddingHorizontal: Spacing.lg,
		paddingTop: Spacing.xxl,
	},
	form: {
		gap: Spacing.sm,
	},
	buttonContainer: {
		marginVertical: Spacing.lg,
	},
	footer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	footerText: {
		color: Colors.mutedForeground,
		...Font.lg.medium,
	},
	footerLink: {
		marginLeft: Spacing.xs,
		color: Colors.primary,
		...Font.lg.semiBold,
	},
});