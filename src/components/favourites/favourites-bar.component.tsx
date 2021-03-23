/** @format */

import React, { FC } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import useRandomKey from '../../hooks/useRandomKey'
import { Restaurant } from '../../services/restaurant/restaurants.service'
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info'
import { Spacer } from '../spacer/spacer.component'

type Props = {
	favourites: Restaurant.Result[]
	onDetail: (pageName: string, props: { [key: string]: any }) => void
}
export const FavouritesWrapper = styled.View``
const FavouritesBar: FC<Props> = ({ favourites, onDetail: onNavigate }) => {
	if (!favourites) {
		return <></>
	} else {
		return (
			<FavouritesWrapper>
				<ScrollView horizontal showsHorizontalScrollIndicator={true}>
					{favourites
						?.slice(0)
						.reverse()
						.map((restaurant) => {
							const key = useRandomKey(4)
							return (
								<Spacer key={key} variant='leftMedium'>
									<TouchableOpacity
										onPress={() => onNavigate('Restaurant Detail', { restaurant: restaurant })}>
										<CompactRestaurantInfo restaurant={restaurant} isMap={false} />
									</TouchableOpacity>
								</Spacer>
							)
						})}
				</ScrollView>
			</FavouritesWrapper>
		)
	}
}

export { FavouritesBar }
