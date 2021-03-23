/** @format */

import { useFonts } from 'expo-font'
import * as firebase from 'firebase'
import React from 'react'
import { View } from 'react-native'

import { Lato_400Regular } from '@expo-google-fonts/lato'
import { Oswald_400Regular } from '@expo-google-fonts/oswald'

import { Navigation } from './src/infrastructure/navigation'
import { FavouritesContextProvider } from './src/services/favourites/favourites.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { RestaurantsContextProvider } from './src/services/restaurant/restaurants.context'
const firebaseConfig = {
	apiKey: 'AIzaSyAWdsQJu8a97d4yM0omshNfC3461-ynZTg',
	authDomain: 'meals-plan-95b5b.firebaseapp.com',
	projectId: 'meals-plan-95b5b',
	storageBucket: 'meals-plan-95b5b.appspot.com',
	messagingSenderId: '250924077573',
	appId: '1:250924077573:web:3667ce7b76ae3f372f026c',
}
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}
export default function App(): JSX.Element {
	let [fontsLoaded] = useFonts({ Oswald_400Regular, Lato_400Regular })
	if (!fontsLoaded) {
		return <View></View>
	}
	return (
		<>
			<FavouritesContextProvider>
				<LocationContextProvider>
					<RestaurantsContextProvider>
						<Navigation />
					</RestaurantsContextProvider>
				</LocationContextProvider>
			</FavouritesContextProvider>
		</>
	)
}
