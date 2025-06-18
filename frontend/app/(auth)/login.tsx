import React from 'react';
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
} from 'react-native';
import { router } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';
import { GradientButton } from "@/components/buttons/gradient-button";
import { OrDivider } from "@/components/form/or-divider";
import { OutlineButton } from "@/components/buttons/outline-button";
import { createAuthStyles, IconSize, useTheme } from "@/theme";
import { Input } from "@/components/form/input";
import { useAuthForm } from "@/hooks";
import { AuthService } from "@/services";
import { GoogleLogo } from "@/components/icons/GoogleLogo";

export default function SignInScreen() {
	const { Colors } = useTheme();
	const authStyles = createAuthStyles(Colors);
	const { formData, validateForm, getFieldProps, setErrors } = useAuthForm({ type: "login" });

	const handleLogin = async () => {
		if (!validateForm().isValid) return;
		const result = await AuthService.login(formData);
		setErrors(result?.errors ?? {});
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={authStyles.container}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<ScrollView showsVerticalScrollIndicator={false} bounces={false} contentContainerStyle={authStyles.scrollView}>
					<Image
						source={require('@/assets/images/auth/green-city.jpg')}
						style={authStyles.backgroundImage}
					/>

					<View style={authStyles.authHeader}>
						<Text style={authStyles.authTitle}>Welcome 👋</Text>
					</View>

					<View style={authStyles.formContainer}>
						<View style={authStyles.form}>
							<Input
								label='Email'
								icon={<Mail color={Colors.mutedForeground} size={IconSize.sm}/>}
								placeholder="Enter email"
								keyboardType='email-address'
								textContentType='emailAddress'
								{...getFieldProps('email')}
							/>

							<Input
								label='Password'
								icon={<Lock color={Colors.mutedForeground} size={IconSize.sm}/>}
								isPassword
								placeholder="Enter password"
								{...getFieldProps('password')}
							/>
						</View>

						<View style={authStyles.buttonContainer}>
							<GradientButton
								onPress={handleLogin}
								// disabled={isLoading || !hasRequiredFields}
							>
								{/*{isLoading ? 'Signing In...' : 'Sign In'}*/}
								Sign In
							</GradientButton>

							<OrDivider/>

							<OutlineButton
								onPress={() => router.push("/login")}
							>
								<GoogleLogo size={IconSize.md}/>
								<Text style={authStyles.googleText}>Sign In with Google</Text>
							</OutlineButton>
						</View>

						<View style={authStyles.footer}>
							<Text style={authStyles.footerText}>Don&#39;t have an account?</Text>
							<TouchableOpacity onPress={() => router.replace('/register')}>
								<Text style={authStyles.footerLink}>Sign up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}


