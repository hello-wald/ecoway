import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import LoadingScreen from '@/components/loading';
import { useFrameworkReady } from "@/hooks/useFrameworkReady";
import { ThemeProvider } from '@/theme';
import { useAuthStore } from "@/lib/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	useFrameworkReady();

	const [fontsLoaded] = useFonts({
		'PJS-Regular': require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),
		'PJS-Medium': require("@/assets/fonts/PlusJakartaSans-Medium.ttf"),
		'PJS-SemiBold': require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
		'PJS-Bold': require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),
	});

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return <LoadingScreen/>;
	}

	const { isAuthenticated } = useAuthStore.getState();

	return (
		<ThemeProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Protected guard={!isAuthenticated} >
					<Stack.Screen name="(auth)" options={{ headerShown: false }}/>
				</Stack.Protected>
				<Stack.Protected guard={isAuthenticated} >
					<Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
				</Stack.Protected>
				<Stack.Screen name="+not-found" options={{ title: 'Oops!' }}/>
			</Stack>
			<StatusBar style="auto"/>
		</ThemeProvider>
	);
}
