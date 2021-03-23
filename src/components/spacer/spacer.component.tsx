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

const Spacer: FC<Props> = ({ variant, children }) => {
	switch (variant) {
		case 'topMedium':
			return <TopMedium>{children}</TopMedium>
		case 'topLarge':
			return <TopLarge>{children}</TopLarge>
		case 'topSmall':
			return <TopSmall>{children}</TopSmall>
		case 'rightMedium':
			return <RightMedium>{children}</RightMedium>
		case 'rightLarge':
			return <RightLarge>{children}</RightLarge>
		case 'rightSmall':
			return <RightSmall>{children}</RightSmall>
		case 'leftMedium':
			return <LeftMedium>{children}</LeftMedium>
		case 'leftLarge':
			return <LeftLarge>{children}</LeftLarge>
		case 'leftSmall':
			return <LeftSmall>{children}</LeftSmall>
		case 'bottomMedium':
			return <BottomMedium>{children}</BottomMedium>
		case 'bottomLarge':
			return <BottomLarge>{children}</BottomLarge>
		case 'bottomSmall':
			return <BottomSmall>{children}</BottomSmall>
		default:
			return <View>{children}</View>
	}
}

export { Spacer }
