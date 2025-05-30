import React, { useState } from 'react';
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
import { useTheme } from "@/theme/context/theme-context";
import { GradientButton } from "@/components/buttons/gradient-button";
import { OrDivider } from "@/components/form/or-divider";
import { GoogleButton } from "@/components/buttons/google-button";
import { IconSize } from "@/theme";
import { Input } from "@/components/form/input";
import { createAuthStyles } from "@/theme/styles";

export default function SignInScreen() {
	const { Colors } = useTheme();
	const authStyles = createAuthStyles(Colors);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignIn = () => {
		// TODO: Implement sign in logic
		router.replace('/(tabs)/home');
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
							<Input label='Email'
										 icon={<Mail color={Colors.mutedForeground} size={IconSize.sm}/>}
										 placeholder="Enter email"
										 keyboardType='email-address'
										 textContentType='emailAddress'
										 value={email}
										 onChangeText={setEmail}
							/>

							<Input label='Password'
										 icon={<Lock color={Colors.mutedForeground} size={IconSize.sm}/>}
										 isPassword
										 placeholder="Enter password"
										 value={password}
										 onChangeText={setPassword}
							/>
						</View>

						<View style={authStyles.buttonContainer}>
							<GradientButton onPress={handleSignIn}>
								Sign In
							</GradientButton>

							<OrDivider/>

							<GoogleButton onPress={() => router.replace("/signin")} />
						</View>

						<View style={authStyles.footer}>
							<Text style={authStyles.footerText}>Don&#39;t have an account?</Text>
							<TouchableOpacity onPress={() => router.replace('/signup')}>
								<Text style={authStyles.footerLink}>Sign up</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}


