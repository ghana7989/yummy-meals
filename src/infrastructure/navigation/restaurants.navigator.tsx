/** @format */

import React, { FC } from 'react'
import { Text, View } from 'react-native'

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen'
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restuarant-detail.screen'

interface Props {}
const RestaurantStack = createStackNavigator()
const RestaurantsNavigator: FC<Props> = () => {
	return (
		<RestaurantStack.Navigator
			headerMode='none'
			screenOptions={{
				...TransitionPresets.ModalPresentationIOS,
			}}>
			<RestaurantStack.Screen name='Restaurants' component={RestaurantsScreen} />
			<RestaurantStack.Screen name='Restaurant Detail' component={RestaurantDetailScreen} />
		</RestaurantStack.Navigator>
	)
}

export { RestaurantsNavigator }
