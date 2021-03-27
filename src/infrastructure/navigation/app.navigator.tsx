/** @format */

import {createBottomTabNavigator, BottomTabNavigationOptions} from '@react-navigation/bottom-tabs'
import {RouteProp} from '@react-navigation/native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import {RestaurantsNavigator} from './restaurants.navigator'
import {MapScreen} from '../../features/map/screens/map.screen'
import {FavouritesContextProvider} from '../../services/favourites/favourites.context'
import {LocationContextProvider} from '../../services/location/location.context'
import {RestaurantsContextProvider} from '../../services/restaurant/restaurants.context'
import {SettingsScreen} from '../../features/settings/screens/settings.screen'
import {SettingsNavigator} from './settings.navigator'

const Tab = createBottomTabNavigator()

const TAB_ICON = {
	Restaurants: 'md-restaurant',
	Map: 'md-map',
	Settings: 'md-settings',
}

const createScreenOptions:
	| BottomTabNavigationOptions
	| ((props: {
			route: RouteProp<Record<string, object | undefined>, string>
			navigation: any
	  }) => BottomTabNavigationOptions)
	| undefined = ({route: {name}}) => {
	// @ts-expect-error
	const iconName = TAB_ICON[name]
	return {
		tabBarIcon: ({size, color}) => <Ionicons name={iconName} size={size} color={color} />,
	}
}

const MyTabs = () => (
	<FavouritesContextProvider>
		<LocationContextProvider>
			<RestaurantsContextProvider>
				<Tab.Navigator
					screenOptions={createScreenOptions}
					tabBarOptions={{
						activeTintColor: 'tomato',
						inactiveTintColor: 'gray',
					}}>
					<Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
					<Tab.Screen name='Map' component={MapScreen} />
					<Tab.Screen name='Settings' component={SettingsNavigator} />
				</Tab.Navigator>
			</RestaurantsContextProvider>
		</LocationContextProvider>
	</FavouritesContextProvider>
)

export const AppNavigator = () => {
	return <MyTabs />
}
