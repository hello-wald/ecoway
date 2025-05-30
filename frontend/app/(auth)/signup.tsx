import React, { useState } from "react";
import { router } from "expo-router";
import { useTheme } from "@/theme/context/theme-context";
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	Text,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View
} from "react-native";
import { Lock, Mail, User } from "lucide-react-native";
import { IconSize } from "@/theme";
import { GoogleButton } from "@/components/buttons/google-button";
import { OrDivider } from "@/components/form/or-divider";
import { GradientButton } from "@/components/buttons/gradient-button";
import { Input } from "@/components/form/input";
import { createAuthStyles } from "@/theme/styles";

export default function SignUpScreen() {
	const { Colors } = useTheme();
	const authStyles = createAuthStyles(Colors);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSignUp = () => {
		// TODO: Implement signup logic
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
						<Text style={authStyles.authTitle}>Create Your Account</Text>
					</View>

					<View style={authStyles.formContainer}>
						<View style={authStyles.form}>
							<Input label='Name'
										 icon={<User color={Colors.mutedForeground} size={IconSize.sm}/>}
										 placeholder="Enter name"
										 textContentType='name'
										 value={name}
										 onChangeText={setName}
							/>

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
							<GradientButton onPress={handleSignUp}>
								Sign Up
							</GradientButton>

							<OrDivider/>

							<GoogleButton onPress={() => router.push("/signin")}/>
						</View>

						<View style={authStyles.footer}>
							<Text style={authStyles.footerText}>Already have an account?</Text>
							<TouchableOpacity onPress={() => router.replace('/signin')}>
								<Text style={authStyles.footerLink}>Sign in</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}