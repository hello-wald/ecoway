import React from 'react';
import { Tabs } from 'expo-router';
import { BarChart2, Home, MapPin, User, Users } from 'lucide-react-native';
import { Font, Spacing, useTheme } from "@/theme";

export default function TabLayout() {
	const { Colors } = useTheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors.primary,
				tabBarInactiveTintColor: Colors.mutedForeground,
				tabBarStyle: {
					height: Spacing.xxl * 2.25,
					paddingTop: Spacing.sm,
					// paddingBottom: Spacing.md,
				},
				tabBarLabelStyle: {
					...Font.sm.medium
				},
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'Home',
					tabBarIcon: ({ color, size }) => <Home size={size} color={color}/>,
				}}
			/>
			<Tabs.Screen
				name="rides"
				options={{
					title: 'Rides',
					tabBarIcon: ({ color, size }) => <MapPin size={size} color={color}/>,
				}}
			/>
			<Tabs.Screen
				name="carbon"
				options={{
					title: 'Carbon',
					tabBarIcon: ({ color, size }) => (
						<BarChart2 size={size} color={color}/>
					),
				}}
			/>
			<Tabs.Screen
				name="community"
				options={{
					title: 'Community',
					tabBarIcon: ({ color, size }) => <Users size={size} color={color}/>,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'Profile',
					tabBarIcon: ({ color, size }) => <User size={size} color={color}/>,
				}}
			/>
		</Tabs>
	);
}
