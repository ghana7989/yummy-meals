/** @format */

import React, {FC, useContext, useState} from 'react'
import {Text} from 'react-native'
import {TextInput, Title} from 'react-native-paper'
import {Spacer} from '../../../components/spacer/spacer.component'
import AppText from '../../../components/typography/text.component'
import {AuthContext} from '../../../services/auth/auth.context'
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	AuthInput,
	ErrorContainer,
} from '../components/account.styles'

type Props = {}
const LoginScreen: FC<Props> = ({navigation}: any) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const {onLogin, error} = useContext(AuthContext)
	return (
		<AccountBackground>
			<AccountCover />
			<Title>Meals To Go</Title>
			<AccountContainer>
				<AuthInput
					label='E-mail'
					value={email}
					textContentType='emailAddress'
					keyboardType='email-address'
					autoCapitalize='none'
					onChangeText={(u: string) => setEmail(u)}
				/>
				<Spacer variant='topLarge'>
          <AuthInput
						label='Password'
						value={password}
						textContentType='password'
						secureTextEntry
						autoCapitalize='none'
						onChangeText={(p: string) => setPassword(p)}
					/>
				</Spacer>
				{!!error && (
					<Spacer variant='topLarge'>
						<ErrorContainer>
							<AppText variant='error'>{error}</AppText>
						</ErrorContainer>
					</Spacer>
				)}
				<Spacer variant='topLarge'>
					<AuthButton
						icon='lock-open-outline'
						mode='contained'
						onPress={() => onLogin(email, password)}>
						Login
					</AuthButton>
				</Spacer>
			</AccountContainer>
			<Spacer variant='topLarge'>
				<AuthButton mode='contained' onPress={() => navigation.goBack()}>
					Back
				</AuthButton>
			</Spacer>
		</AccountBackground>
	)
}

export {LoginScreen}
