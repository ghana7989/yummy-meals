/** @format */

import React, { FC } from 'react'
import { Oswald_400Regular } from '@expo-google-fonts/oswald'
import { Lato_400Regular } from '@expo-google-fonts/lato'
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen'
import { useFonts } from 'expo-font'
import { View, Text } from 'react-native'
import { NavigationContainer, RouteProp } from '@react-navigation/native'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AppSafeArea } from './src/components/utils/safe-area.component'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
}

const MapScreen = () => (
	<AppSafeArea>
		<Text>Map</Text>
	</AppSafeArea>
)
const SettingsScreen = () => (
	<AppSafeArea>
		<Text>Settings</Text>
	</AppSafeArea>
)
const createScreenOptions:
	| BottomTabNavigationOptions
	| ((props: {
			route: RouteProp<Record<string, object | undefined>, string>
			navigation: any
	  }) => BottomTabNavigationOptions)
  | undefined = ( { route: { name } } ) => {
		// @ts-expect-error
		const iconName = TAB_ICON[name]
		return {
			tabBarIcon: ({ size, color }) => <Ionicons name={iconName} size={size} color={color} />,
		}
	}

const MyTabs = () => (
	<Tab.Navigator
		screenOptions={createScreenOptions}
		tabBarOptions={{
			activeTintColor: 'tomato',
			inactiveTintColor: 'gray',
		}}>
		<Tab.Screen name='Restaurants' component={RestaurantsScreen} />
		<Tab.Screen name='Map' component={MapScreen} />
		<Tab.Screen name='Settings' component={SettingsScreen} />
	</Tab.Navigator>
)

export default function App(): JSX.Element {
	let [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular })
	if (!fontsLoaded) {
		return (
			<View>
				<Text>App is still loading</Text>
			</View>
		)
	}
	return (
		<>
			<NavigationContainer>
				<MyTabs />
			</NavigationContainer>
		</>
	)
}
