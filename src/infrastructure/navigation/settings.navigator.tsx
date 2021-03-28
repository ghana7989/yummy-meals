/** @format */

import React, {FC, useEffect} from 'react'
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack'
import {SettingsScreen} from '../../features/settings/screens/settings.screen'
import {FavouritesScreen} from '../../features/settings/screens/favourites.screen'
import {CameraScreen} from '../../features/settings/screens/camera.sceen'

const SettingsStack = createStackNavigator()

export const SettingsNavigator: FC = () => {
	return (
		<SettingsStack.Navigator
			headerMode='screen'
			screenOptions={{
				cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
			}}>
			<SettingsStack.Screen
				name='Settings'
				options={{header: () => null}}
				component={SettingsScreen}
			/>
			<SettingsStack.Screen name='Favourites' component={FavouritesScreen} />
			<SettingsStack.Screen name='Camera' component={CameraScreen} />
		</SettingsStack.Navigator>
	)
}
