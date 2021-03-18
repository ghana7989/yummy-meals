/** @format */

import React, { FC } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import { AppTheme } from '../../infrastructure/theme'

type Variant =
	| 'topSmall'
	| 'topMedium'
	| 'topLarge'
	| 'leftSmall'
	| 'leftMedium'
	| 'leftLarge'
	| 'rightSmall'
	| 'rightMedium'
	| 'rightLarge'
	| 'bottomSmall'
	| 'bottomMedium'
	| 'bottomLarge'

interface Props {
	variant: Variant
}

const TopSmall = styled.View`
	margin-top: ${AppTheme.spaces[1]};
`
const TopMedium = styled.View`
	margin-top: ${AppTheme.spaces[2]};
`
const TopLarge = styled.View`
	margin-top: ${AppTheme.spaces[3]};
`
const LeftSmall = styled.View`
	margin-left: ${AppTheme.spaces[1]};
`
const LeftMedium = styled.View`
	margin-left: ${AppTheme.spaces[2]};
`
const LeftLarge = styled.View`
	margin-left: ${AppTheme.spaces[3]};
`
const RightSmall = styled.View`
	margin-right: ${AppTheme.spaces[1]};
`
const RightMedium = styled.View`
	margin-right: ${AppTheme.spaces[2]};
`
const RightLarge = styled.View`
	margin-right: ${AppTheme.spaces[3]};
`
const BottomSmall = styled.View`
	margin-bottom: ${AppTheme.spaces[1]};
`
const BottomMedium = styled.View`
	margin-bottom: ${AppTheme.spaces[2]};
`
const BottomLarge = styled.View`
	margin-bottom: ${AppTheme.spaces[3]};
`

const Spacer: FC<Props> = ({ variant }) => {
	switch (variant) {
		case 'topMedium':
			return <TopMedium />
		case 'topLarge':
			return <TopLarge />
		case 'topSmall':
			return <TopSmall />
		case 'rightMedium':
			return <RightMedium />
		case 'rightLarge':
			return <RightLarge />
		case 'rightSmall':
			return <RightSmall />
		case 'leftMedium':
			return <LeftMedium />
		case 'leftLarge':
			return <LeftLarge />
		case 'leftSmall':
			return <LeftSmall />
		case 'bottomMedium':
			return <BottomMedium />
		case 'bottomLarge':
			return <BottomLarge />
		case 'bottomSmall':
			return <BottomSmall />
		default:
			return <View></View>
	}
}

export { Spacer }
