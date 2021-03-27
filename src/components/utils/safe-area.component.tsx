/** @format */
import {StatusBar, SafeAreaView} from 'react-native'
import styled from 'styled-components/native'
import {AppTheme} from '../../infrastructure/theme'

export const AppSafeArea = styled(SafeAreaView)`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
	background-color: ${AppTheme.colors.bg.primary};
`
