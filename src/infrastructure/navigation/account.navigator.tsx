/** @format */

import {createStackNavigator} from '@react-navigation/stack'
import React, {FC} from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native'
import {AppSafeArea} from '../../components/utils/safe-area.component'
import {AccountScreen} from '../../features/account/screens/account.screen'
import {LoginScreen} from '../../features/account/screens/login.screen'
import {RegisterScreen} from '../../features/account/screens/register.screen'

type Props = {}

const Stack = createStackNavigator()

const AccountNavigator: FC<Props> = () => {
	return (
		<Stack.Navigator headerMode='none'>
			<Stack.Screen name='Main' component={AccountScreen}></Stack.Screen>
			<Stack.Screen name='Login' component={LoginScreen}></Stack.Screen>
			<Stack.Screen name='Register' component={RegisterScreen}></Stack.Screen>
		</Stack.Navigator>
	)
}

export {AccountNavigator}
