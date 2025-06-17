import { StyleSheet } from "react-native";
import { BorderRadius, Shadow} from "../outlines";
import { Font } from "../text-style";
import { Spacing } from "../sizing";
import { ThemeColors } from "../colors";

export const createRideStyles = (Colors: ThemeColors) => StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: Spacing.lg,
		paddingBottom: Spacing.md,
	},
	backButton: {
		marginRight: Spacing.md,
	},
	headerTitle: {
		...Font.h5,
		color: Colors.foreground,
	},
	mapContainer: {
		flex: 1,
		position: 'relative',
		marginBottom: -Spacing.xxl,

	},
	map: {
		...StyleSheet.absoluteFillObject,
	},
	webMapPlaceholder: {
		backgroundColor: '#f0f0f0',
		justifyContent: 'center',
		alignItems: 'center',
	},
	webMapText: {
		fontSize: 24,
		fontFamily: 'Poppins-SemiBold',
		color: Colors.mutedForeground,
	},
	webMapSubtext: {
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		color: Colors.mutedForeground,
		marginTop: 8,
	},
	userMarker: {
		width: 40,
		height: 40,
		borderRadius: 20,
		backgroundColor: '#FFF',
		borderWidth: 2,
		borderColor: Colors.primary,
		overflow: 'hidden',
	},
	userMarkerImage: {
		width: '100%',
		height: '100%',
	},
	carMarker: {
		backgroundColor: Colors.success,
		paddingHorizontal: 8,
		paddingVertical: 4,
		borderRadius: BorderRadius.full,
	},
	markerText: {
		color: '#FFF',
		fontSize: 12,
		fontFamily: 'Poppins-Bold',
	},
	mapControlButton: {
		position: 'absolute',
		bottom: Spacing.xxl * 1.5,
		right: Spacing.md,
		backgroundColor: Colors.primary,
		padding: Spacing.sm,
		borderRadius: BorderRadius.full,
		justifyContent: 'center',
		alignItems: 'center',
		...Shadow(Colors.shadow).base,
	},
	modalContainer: {
		backgroundColor: Colors.background,
		paddingHorizontal: Spacing.lg,
		paddingTop: Spacing.lg,
		paddingBottom: Spacing.md,
		borderTopLeftRadius: BorderRadius.lg,
		borderTopRightRadius: BorderRadius.lg,
	},
	modalTitle: {
		...Font.h6,
		color: Colors.foreground,
		marginBottom: Spacing.sm,
	},
	findRideButton: {
		marginTop: Spacing.md,
	},
	cancelButton: {
		marginTop: Spacing.md,
	},
	cancelButtonText: {
		color: Colors.danger,
	}
});