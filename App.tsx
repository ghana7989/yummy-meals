/** @format */

import {useFonts} from 'expo-font'
import * as firebase from 'firebase'
import React from 'react'
import {View} from 'react-native'

import {Lato_400Regular} from '@expo-google-fonts/lato'
import {Oswald_400Regular} from '@expo-google-fonts/oswald'

import {Navigation} from './src/infrastructure/navigation'
import {AuthContextProvider} from './src/services/auth/auth.context'
const firebaseConfig = {
	apiKey: 'AIzaSyAWdsQJu8a97d4yM0omshNfC3461-ynZTg',
	authDomain: 'meals-plan-95b5b.firebaseapp.com',
	projectId: 'meals-plan-95b5b',
	storageBucket: 'meals-plan-95b5b.appspot.com',
	messagingSenderId: '250924077573',
	appId: '1:250924077573:web:7df4b945b2f4a6592f026c',
}
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig)
}
export default function App(): JSX.Element {
	let [fontsLoaded] = useFonts({Oswald_400Regular, Lato_400Regular})
	if (!fontsLoaded) {
		return <View></View>
	}
	return (
		<>
			<AuthContextProvider>
				<Navigation />
			</AuthContextProvider>
		</>
	)
}
