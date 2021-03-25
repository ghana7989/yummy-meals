/** @format */

import React, {FC} from 'react'
import {View, Text} from 'react-native'
import styled from 'styled-components/native'
import { AccountBackground } from '../components/account.styles';

type Props = {}
const RegisterScreen: FC<Props> = () => {
	return (
		<>
			<AccountBackground></AccountBackground>
		</>
	)
}

export {RegisterScreen}
