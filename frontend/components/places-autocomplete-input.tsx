import React from "react";
import { StyleSheet, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Search } from "lucide-react-native";
import { BorderRadius, BorderWidth, Font, IconSize, Spacing, useTheme } from "@/theme";
import { ThemeColors } from "@/theme/colors";

interface PlacesAutocompleteInputProps {
	placeholder?: string;
	containerStyle?: object;
	onPlaceSelected: (data: any, details: any | null) => void;
}

export function PlacesAutocompleteInput({
																					placeholder = "Where do you want to go?",
																					containerStyle,
																					onPlaceSelected,
																				}: PlacesAutocompleteInputProps) {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	return (
		<View style={[containerStyle]}>
			<GooglePlacesAutocomplete
				placeholder={placeholder}
				onPress={(data, details = null) => onPlaceSelected(data, details)}
				query={{
					key: process.env.EXPO_PUBLIC_MAPS_API_KEY,
					language: "en",
					components: "country:id",
				}}
				// fetchDetails={true}
				enablePoweredByContainer={false}
				nearbyPlacesAPI="GooglePlacesSearch"
				debounce={400}
				minLength={2}
				predefinedPlaces={[
					{
						description: "Current Location",
						geometry: {
							location: {
								lat: 37.785834,
								lng: -122.406417,
								latitude: 37.785834,
								longitude: -122.406417,
							},
						},
					},
				]}
				textInputProps={{
					placeholderTextColor: Colors.mutedForeground,
					returnKeyType: "search",
				}}
				styles={{
					container: styles.container,
					textInputContainer: styles.textInputContainer,
					textInput: styles.textInput,
					listView: styles.listView,
					row: {
						backgroundColor: "transparent",
						padding: Spacing.md,
						minHeight: 44,
						flexDirection: "row",
						alignItems: "center",
					},
					separator: {
						height: 1,
						backgroundColor: Colors.border,
						marginLeft: Spacing.md,
					},
					description: {
						color: Colors.foreground,
						fontSize: 15,
						fontFamily: "Poppins-Regular",
						flex: 1,
					},
					predefinedPlacesDescription: {
						color: Colors.primary,
						fontFamily: "Poppins-Medium",
					},
				}}
				renderLeftButton={() => (
					<Search size={IconSize.sm} color={Colors.mutedForeground}/>
				)}
				onFail={(error) => console.error("Places API Error:", error)}
				onNotFound={() => console.log("No results found")}
				onTimeout={() => console.log("Request timeout")}
			/>
		</View>
	);
}

const createStyles = (Colors: ThemeColors) =>
	StyleSheet.create({
		container: {
			flex: 0,
		},
		textInputContainer: {
			flexDirection: "row",
			alignItems: "center",
			backgroundColor: Colors.background,
			borderRadius: BorderRadius.full,
			paddingHorizontal: Spacing.md,
			paddingVertical: Spacing.xs * 0.5,
			borderWidth: BorderWidth.thin,
			borderColor: Colors.border,
		},
		textInput: {
			flex: 1,
			...Font.md.medium,
			color: Colors.foreground,
			marginBottom: 0,
		},
		listView: {
			backgroundColor: Colors.muted,
			borderRadius: BorderRadius.md,
			marginTop: 5,
			shadowColor: "#000",
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 0.15,
			shadowRadius: 6,
			elevation: 5,
			maxHeight: 200,
		}
	});
