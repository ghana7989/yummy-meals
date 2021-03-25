/** @format */

import {NavigationProp} from '@react-navigation/core'
import React, {FC} from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native'
import {Spacer} from '../../../components/spacer/spacer.component'
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	Title,
} from '../components/account.styles'

type Props = {}
const AccountScreen: FC<Props> = ({navigation}: any) => {
	return (
		<>
			<AccountBackground>
				<AccountCover />
				<Title variant='body'>Meals To Go</Title>
				<AccountContainer>
					<AuthButton
						icon='lock-open-outline'
						mode='contained'
						onPress={() => navigation.navigate('Login')}>
						Login
					</AuthButton>
					<Spacer variant='topLarge'>
						<AuthButton
							icon='email'
							mode='contained'
							onPress={() => navigation.navigate('Register')}>
							Register
						</AuthButton>
					</Spacer>
				</AccountContainer>
			</AccountBackground>
		</>
	)
}

export {AccountScreen}
