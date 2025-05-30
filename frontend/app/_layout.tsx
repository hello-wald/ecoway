import {useEffect} from 'react';
import {Stack, SplashScreen} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {useFonts} from 'expo-font';
import LoadingScreen from '@/components/loading';
import {ThemeProvider} from '@/theme/context/theme-context';
import {useFrameworkReady} from "@/hooks/useFrameworkReady";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useFrameworkReady();

  const [fontsLoaded, fontError] = useFonts({
    'PJS-Regular': require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),
    'PJS-Medium': require("@/assets/fonts/PlusJakartaSans-Medium.ttf"),
    'PJS-SemiBold': require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    'PJS-Bold': require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return <LoadingScreen/>;
  }

  return (
    <ThemeProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(auth)" options={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="+not-found" options={{title: 'Oops!'}}/>
      </Stack>
      <StatusBar style="auto"/>
    </ThemeProvider>
  );
}
