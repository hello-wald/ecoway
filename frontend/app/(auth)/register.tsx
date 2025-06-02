import React, { useState } from "react";
import { router } from "expo-router";
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { Lock, Mail, User } from "lucide-react-native";
import { createAuthStyles, IconSize, useTheme } from "@/theme";
import { GoogleButton } from "@/components/buttons/google-button";
import { OrDivider } from "@/components/form/or-divider";
import { GradientButton } from "@/components/buttons/gradient-button";
import { Input } from "@/components/form/input";
import { useAuthForm } from "@/hooks";
import { AuthService } from "@/services";

export default function SignUpScreen() {
	const { Colors } = useTheme();
	const authStyles = createAuthStyles(Colors);
	const { formData, validateForm, getFieldProps, setErrors } = useAuthForm({
		type: "register",
	});

	const handleRegister = async () => {
		console.log("Registering with:", formData);

		if (!validateForm().isValid) return;

		const result = await AuthService.register(formData);
		console.log(result);
		if (result?.errors) {
			setErrors(result.errors);
			return;
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={authStyles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView
					showsVerticalScrollIndicator={false}
					bounces={false}
					contentContainerStyle={authStyles.scrollView}
				>
					<Image
						source={require("@/assets/images/auth/green-city.jpg")}
						style={authStyles.backgroundImage}
					/>

					<View style={authStyles.authHeader}>
						<Text style={authStyles.authTitle}>
							Create Your Account
						</Text>
					</View>

					<View style={authStyles.formContainer}>
						<View style={authStyles.form}>
							<Input
								label="Name"
								icon={
									<User
										color={Colors.mutedForeground}
										size={IconSize.sm}
									/>
								}
								placeholder="Enter name"
								textContentType="name"
								{...getFieldProps("name")}
							/>

							<Input
								label="Email"
								icon={
									<Mail
										color={Colors.mutedForeground}
										size={IconSize.sm}
									/>
								}
								placeholder="Enter email"
								keyboardType="email-address"
								textContentType="emailAddress"
								{...getFieldProps("email")}
							/>

							<Input
								label="Password"
								icon={
									<Lock
										color={Colors.mutedForeground}
										size={IconSize.sm}
									/>
								}
								isPassword
								placeholder="Enter password"
								{...getFieldProps("password")}
							/>
						</View>

						<View style={authStyles.buttonContainer}>
							<GradientButton onPress={handleRegister}>
								Sign Up
							</GradientButton>

							<OrDivider />

							<GoogleButton
								onPress={() => router.push("/login")}
							/>
						</View>

						<View style={authStyles.footer}>
							<Text style={authStyles.footerText}>
								Already have an account?
							</Text>
							<TouchableOpacity
								onPress={() => router.replace("/login")}
							>
								<Text style={authStyles.footerLink}>
									Sign in
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}
