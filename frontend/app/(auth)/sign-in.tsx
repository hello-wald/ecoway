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
	Alert,
} from 'react-native';
import { router } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';
import { GradientButton } from "@/components/buttons/gradient-button";
import { OrDivider } from "@/components/form/or-divider";
import { GoogleButton } from "@/components/buttons/google-button";
import { createAuthStyles, IconSize, useTheme } from "@/theme";
import { Input } from "@/components/form/input";
import { useAuth } from "@/hooks/useAuth";
import { useAuthForm } from "@/hooks/useAuthForm";

export default function SignInScreen() {
	const { Colors } = useTheme();
	const authStyles = createAuthStyles(Colors);
	
	const { signIn, isLoading, error, clearError } = useAuth();
	const { 
		getFieldProps, 
		validateForm, 
		hasRequiredFields 
	} = useAuthForm({ type: 'signin' });

	const handleSignIn = async () => {
		try {
			clearError();
			
			const validation = validateForm();
			if (!validation.isValid) {
				return;
			}

			const emailProps = getFieldProps('email');
			const passwordProps = getFieldProps('password');
			
			await signIn({
				email: emailProps.value,
				password: passwordProps.value,
			});
		} catch (error) {
			// Error is handled by useAuth hook
			console.error('Sign in failed:', error);
		}
	};

	// Show error alert when error changes
	React.useEffect(() => {
		if (error) {
			Alert.alert('Sign In Failed', error, [
				{ text: 'OK', onPress: clearError }
			]);
		}
	}, [error, clearError]);

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
								onPress={handleSignIn}
								disabled={isLoading || !hasRequiredFields}
							>
								{isLoading ? 'Signing In...' : 'Sign In'}
							</GradientButton>

							<OrDivider/>

							<GoogleButton onPress={() => router.replace("/sign-in")}/>
						</View>

						<View style={authStyles.footer}>
							<Text style={authStyles.footerText}>Don&#39;t have an account?</Text>
							<TouchableOpacity onPress={() => router.replace('/sign-up')}>
								<Text style={authStyles.footerLink}>Sign up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}


