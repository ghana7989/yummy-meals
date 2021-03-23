/** @format */

import React, { FC } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { Restaurant } from '../../services/restaurant/restaurants.service'
import WebView from 'react-native-webview'
import { Platform } from 'react-native'
import AppText from '../typography/text.component'

type Props = {
	restaurant: Restaurant.Result | undefined
	isMap: boolean
}
const CompactImage = styled.Image`
	border-radius: 10px;
	width: 120px;
	height: 100px;
`

const CompactWebview = styled(WebView)`
	border-radius: 10px;
	width: 120px;
	height: 100px;
`

const Item = styled.View`
	padding: 10px;
	max-width: 120px;
	align-items: center;
`
// const isAndroid = Platform.OS === 'android'

export const CompactRestaurantInfo: FC<Props> = ({ restaurant, isMap = true }) => {
	return (
		<Item>
			{Platform.OS === 'android' && isMap && restaurant ? (
				<CompactWebview source={{ uri: restaurant?.photos[0] }} />
			) : (
				<CompactImage source={{ uri: restaurant?.photos[0] }} />
			)}
			<AppText variant='caption' numberOfLines={3}>
				{restaurant && restaurant?.name}
			</AppText>
		</Item>
	)
}
