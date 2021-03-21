/** @format */

import React from 'react'
import { Oswald_400Regular } from '@expo-google-fonts/oswald'
import { Lato_400Regular } from '@expo-google-fonts/lato'
import { useFonts } from 'expo-font'
import { View } from 'react-native'
import { RestaurantsContextProvider } from './src/services/restaurant/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { Navigation } from './src/infrastructure/navigation'

export default function App(): JSX.Element {
	let [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular })
	if (!fontsLoaded) {
		return <View></View>
	}
	return (
		<>
			<LocationContextProvider>
				<RestaurantsContextProvider>
					<Navigation />
				</RestaurantsContextProvider>
			</LocationContextProvider>
		</>
	)
}
