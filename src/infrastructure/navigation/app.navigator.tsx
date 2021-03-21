/** @format */

import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { RouteProp, NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from 'react-native'
import { AppSafeArea } from '../../components/utils/safe-area.component'
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen'
import { RestaurantsNavigator } from './restaurants.navigator'
import { MapScreen } from '../../features/map/screens/map.screen'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
}

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
	| undefined = ({ route: { name } }) => {
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
		<Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
		<Tab.Screen name='Map' component={MapScreen} />
		<Tab.Screen name='Settings' component={SettingsScreen} />
	</Tab.Navigator>
)

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			<MyTabs />
		</NavigationContainer>
	)
}
