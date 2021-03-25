/** @format */

import React, {useContext} from 'react'
import {Text, View} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'

import {AppSafeArea} from '../../components/utils/safe-area.component'
import {AuthContext} from '../../services/auth/auth.context'
import {AccountNavigator} from './account.navigator'
import {AppNavigator} from './app.navigator'

export const Navigation = () => {
	const {isAuthenticated} = useContext(AuthContext)

	return (
		<NavigationContainer>
			{isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
		</NavigationContainer>
	)
}
