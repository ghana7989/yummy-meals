/** @format */

import React, {FC} from 'react'
import {Spacer} from '../../../components/spacer/spacer.component'
import LottieView from 'lottie-react-native'
import {
	AccountBackground,
	AccountContainer,
	AccountCover,
	AuthButton,
	Title,
	AnimationWrapper,
} from '../components/account.styles'

type Props = {}
const AccountScreen: FC<Props> = ({navigation}: any) => {
	return (
		<>
			<AccountBackground>
				<AccountCover />
				<AnimationWrapper>
					<LottieView
						key='animation'
						loop
						autoPlay
						resizeMode='cover'
						source={require('../../../../assets/watermelon.json')}
					/>
				</AnimationWrapper>
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
