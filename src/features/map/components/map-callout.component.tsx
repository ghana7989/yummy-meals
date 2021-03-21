/** @format */

import React, { FC } from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components/native'
import { CompactRestaurantInfo } from '../../../components/restaurant/compact-restaurant-info';
import { Restaurant } from '../../../services/restaurant/restaurants.service'

type Props = {
	restaurant: Restaurant.Result | undefined
}
export const MyText = styled.Text``
const MapCallOutComponent: FC<Props> = ({ restaurant }) => {
	return (
		<>
			<CompactRestaurantInfo restaurant={restaurant} />
		</>
	)
}

export { MapCallOutComponent }
