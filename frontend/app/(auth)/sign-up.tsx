import React from "react";
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
	Alert,
} from "react-native";
import { Lock, Mail, User } from "lucide-react-native";
import { createAuthStyles, IconSize, useTheme } from "@/theme";
import { GoogleButton } from "@/components/buttons/google-button";
import { OrDivider } from "@/components/form/or-divider";
import { GradientButton } from "@/components/buttons/gradient-button";
import { Input } from "@/components/form/input";
import { useAuth } from "@/hooks/useAuth";
import { useAuthForm } from "@/hooks/useAuthForm";

export default function SignUpScreen() {
	const { Colors } = useTheme();
	const authStyles = createAuthStyles(Colors);

	const { signUp, isLoading, error, clearError } = useAuth();
	const { 
		getFieldProps, 
		validateForm, 
		hasRequiredFields 
	} = useAuthForm({ type: 'signup' });

	const handleSignUp = async () => {
		try {
			clearError();
			
			const validation = validateForm();
			if (!validation.isValid) {
				return;
			}

			const nameProps = getFieldProps('name');
			const emailProps = getFieldProps('email');
			const passwordProps = getFieldProps('password');
			
			await signUp({
				name: nameProps.value,
				email: emailProps.value,
				password: passwordProps.value,
			});
		} catch (error) {
			// Error is handled by useAuth hook
			console.error('Sign up failed:', error);
		}
	};

	// Show error alert when error changes
	React.useEffect(() => {
		if (error) {
			Alert.alert('Sign Up Failed', error, [
				{ text: 'OK', onPress: clearError }
			]);
		}
	}, [error, clearError]);

	const nameProps = getFieldProps('name');
	const emailProps = getFieldProps('email');
	const passwordProps = getFieldProps('password');

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
						<Text style={authStyles.authTitle}>Create Your Account</Text>
					</View>

					<View style={authStyles.formContainer}>
						<View style={authStyles.form}>
							<Input 
								label='Name'
								icon={<User color={Colors.mutedForeground} size={IconSize.sm}/>}
								placeholder="Enter name"
								textContentType='name'
								{...nameProps}
							/>

							<Input 
								label='Email'
								icon={<Mail color={Colors.mutedForeground} size={IconSize.sm}/>}
								placeholder="Enter email"
								keyboardType='email-address'
								textContentType='emailAddress'
								{...emailProps}
							/>

							<Input 
								label='Password'
								icon={<Lock color={Colors.mutedForeground} size={IconSize.sm}/>}
								isPassword
								placeholder="Enter password"
								{...passwordProps}
							/>
						</View>

						<View style={authStyles.buttonContainer}>
							<GradientButton 
								onPress={handleSignUp}
								disabled={isLoading || !hasRequiredFields}
							>
								{isLoading ? 'Creating Account...' : 'Sign Up'}
							</GradientButton>

							<OrDivider/>

							<GoogleButton onPress={() => router.push("/sign-in")}/>
						</View>

						<View style={authStyles.footer}>
							<Text style={authStyles.footerText}>Already have an account?</Text>
							<TouchableOpacity onPress={() => router.replace('/sign-in')}>
								<Text style={authStyles.footerLink}>Sign in</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}