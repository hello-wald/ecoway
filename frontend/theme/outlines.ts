import { ColorValue } from "react-native";
import { responsiveWidth as rw } from "react-native-responsive-dimensions";

export const BorderRadius = {
	sm: rw(2),
	md: rw(4),
	lg: rw(6),
	xl: rw(8),
	full: rw(50),
}

export const BorderWidth = {
	thin: 1,
	base: 2,
	thick: 3,
}

export const Shadow = (color: ColorValue) => ({
	base: {
		shadowColor: color,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 2,
	},
	text: {
		textShadowColor: color,
		textShadowOffset: { width: 0, height: 0 },
		textShadowRadius: 10,
	}
})