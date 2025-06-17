import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Star } from "lucide-react-native";
import { RideOffer } from "@/types/ride.types";
import { Font, IconSize, Spacing, ThemeColors, useTheme } from "@/theme";

interface DriverRowProps {
	offer: RideOffer;
	selected: boolean;
	onPress: () => void;
}

export const DriverRow = ({ offer, selected, onPress }: DriverRowProps) => {
	const { Colors } = useTheme();
	const styles = createStyle(Colors);

	return (
		<TouchableOpacity style={[styles.card, selected && styles.selected]} onPress={onPress}>
			<View style={styles.left}>
				<Image source={require('@/assets/images/ride/avatar.png')} style={styles.avatar}/>
				<View>
					<View style={styles.row}>
						<Text style={styles.name}>{offer.driver_name}</Text>
						<Star size={IconSize.xs} color="#f97316" fill="#f97316" style={{ marginLeft: 4 }}/>
						<Text style={styles.rating}>
							{/*{offer.driver_rating.toFixed(1)}*/}
							5
						</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.info}>To {offer.destination.destination_name}</Text>
						<Text style={[styles.info, {marginHorizontal: Spacing.sm}]}> • </Text>
						<Text style={styles.info}>4 Seats</Text>
					</View>
				</View>
			</View>
			<Image source={require('@/assets/images/ride/car.png')} style={styles.car}/>
		</TouchableOpacity>
	);
};

const createStyle = (Colors: ThemeColors) => StyleSheet.create({
	card: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: Colors.background,
		paddingHorizontal: Spacing.lg,
		paddingVertical: Spacing.md,
		marginBottom: Spacing.md,
	},
	selected: {
		backgroundColor: Colors.secondary + "20",
	},
	left: {
		flexDirection: "row",
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
	},
	avatar: {
		width: 48,
		height: 48,
		borderRadius: 24,
		marginRight: 12,
	},
	name: {
		fontWeight: "600",
		fontSize: 16,
		color: "#111827",
	},
	rating: {
		...Font.sm.medium,
		marginLeft: Spacing.sm,
		color: Colors.foreground,
	},
	details: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: Spacing.sm,
	},
	info: {
		...Font.sm.medium,
		color: Colors.mutedForeground,
	},
	car: {
		width: 64,
		height: 32,
		resizeMode: "contain",
	},
});
