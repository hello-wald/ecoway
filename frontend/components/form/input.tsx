import {
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	TouchableOpacity,
	View,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";
import { ReactNode, useState } from "react";
import {
	BorderRadius,
	BorderWidth,
	Font,
	IconSize,
	Spacing,
	useTheme,
} from "@/theme";
import { ThemeColors } from "@/theme/colors";

export interface InputProps extends TextInputProps {
	label?: string;
	icon?: ReactNode;
	isPassword?: boolean;
	error?: string;
	hasError?: boolean;
	containerStyle?: object;
	labelStyle?: object;
	inputStyle?: object;
}

export function Input({
	label,
	icon,
	isPassword = false,
	error,
	hasError = false,
	containerStyle,
	inputStyle,
	labelStyle,
	...inputProps
}: InputProps) {
	const { Colors } = useTheme();
	const styles = createStyles(Colors);

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword);
	};

	return (
		<View style={[styles.container, containerStyle]}>
			{label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
			<View
				style={[
					styles.inputContainer,
					inputStyle,
					hasError && styles.inputContainerError,
				]}
			>
				{icon && <View style={styles.inputIcon}>{icon}</View>}
				<TextInput
					style={[styles.input]}
					placeholderTextColor={Colors.mutedForeground}
					secureTextEntry={isPassword && !showPassword}
					{...inputProps}
				/>
				{isPassword && (
					<TouchableOpacity
						onPress={togglePasswordVisibility}
						style={styles.passwordToggle}
					>
						{showPassword ? (
							<EyeOff
								color={Colors.mutedForeground}
								size={IconSize.sm}
							/>
						) : (
							<Eye
								color={Colors.mutedForeground}
								size={IconSize.sm}
							/>
						)}
					</TouchableOpacity>
				)}
			</View>
			{hasError && <Text style={styles.errorText}>{error}</Text>}
		</View>
	);
}

const createStyles = (Colors: ThemeColors) =>
	StyleSheet.create({
		container: {
			marginBottom: Spacing.sm,
		},
		label: {
			...Font.lg.medium,
			marginBottom: Spacing.sm,
			color: Colors.foreground,
		},
		inputContainer: {
			flexDirection: "row",
			alignItems: "center",
			backgroundColor: Colors.muted,
			borderRadius: BorderRadius.full,
			paddingHorizontal: Spacing.md,
			paddingVertical: Spacing.sm * 1.5,
			borderWidth: BorderWidth.thin,
			borderColor: Colors.border,
		},
		inputContainerError: {
			borderColor: Colors.danger,
		},
		inputIcon: {
			marginRight: Spacing.sm * 1.5,
		},
		input: {
			...Font.md.medium,
			flex: 1,
			color: Colors.foreground,
		},
		passwordToggle: {
			paddingLeft: Spacing.sm * 1.5,
		},
		errorText: {
			...Font.sm.regular,
			color: Colors.danger,
			marginTop: Spacing.xs,
			marginLeft: Spacing.md,
		},
	});
