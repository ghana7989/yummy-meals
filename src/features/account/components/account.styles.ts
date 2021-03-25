/** @format */

import {Button, TextInput} from 'react-native-paper'
import styled from 'styled-components/native'
import AppText from '../../../components/typography/text.component'
import {AppTheme} from '../../../infrastructure/theme'
import {colors} from '../../../infrastructure/theme/colors'

export const AccountBackground = styled.ImageBackground.attrs({
	source: require('../../../../assets/home_bg.jpg'),
})`
	flex: 1;
	align-items: center;
	justify-content: center;
`

export const AccountCover = styled.View`
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.3);
`
export const AccountContainer = styled.View`
	background-color: rgba(255, 255, 255, 0.7);
	padding: ${props => AppTheme.spaces[4]};
	margin-top: ${props => AppTheme.spaces[2]};
`

export const AuthButton = styled(Button).attrs({
	color: colors.brand.primary,
})`
	padding: ${props => AppTheme.spaces[2]};
`
// @ts-ignore
export const AuthInput = styled(TextInput)`
	width: 300px;
`

export const Title = styled(AppText)`
	font-size: 30px;
`

export const ErrorContainer = styled.View`
	max-width: 300px;
	align-items: center;
	align-self: center;
	margin-top: ${props => AppTheme.spaces[2]};
	margin-bottom: ${props => AppTheme.spaces[2]};
`