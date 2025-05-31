import { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import LoadingScreen from '@/components/loading';
import { ThemeProvider } from '@/theme/provider/theme-provider';
import { useFrameworkReady } from "@/hooks/useFrameworkReady";
import { useAuth } from "@/hooks/useAuth";

SplashScreen.preventAutoHideAsync();

const isLoggedIn = false; // TODO: replace with actual authentication logic
function AppContent() {
	const { isLoading } = useAuth();

	if (isLoading) {
		return <LoadingScreen/>;
	}

	return (
		<>
			<Stack screenOptions={{ headerShown: false }}>
				{/*<Stack.Protected guard={!isLoggedIn}>*/}
					<Stack.Screen name="(auth)" options={{ headerShown: false }}/>
				{/*</Stack.Protected>*/}

				<Stack.Protected guard={isLoggedIn}>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
				</Stack.Protected>

				<Stack.Screen name="+not-found" options={{ title: 'Oops!' }}/>
			</Stack>
			<StatusBar style="auto"/>
		</>
	);
}

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

	return (
		<ThemeProvider>
			<AppContent/>
		</ThemeProvider>
	);
}
