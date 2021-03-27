/** @format */

import React, {useContext} from 'react'
import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'

import {Spacer} from '../../../components/spacer/spacer.component'
import AppText from '../../../components/typography/text.component'
import {AppSafeArea} from '../../../components/utils/safe-area.component'
import useRandomKey from '../../../hooks/useRandomKey'
import {FavouritesContext} from '../../../services/favourites/favourites.context'
import {RestaurantInfoCard} from '../../restaurants/components/restaurant-info-card.component'
import {RestaurantList} from '../../restaurants/screens/restaurants.screen'

const NoFavouritesArea = styled(AppSafeArea)`
	align-items: center;
	justify-content: center;
`
export const FavouritesScreen = ({navigation}: any) => {
	const {favourites} = useContext(FavouritesContext)

	return favourites.length ? (
		<AppSafeArea
			style={{
				marginTop: 0,
			}}>
			<RestaurantList
				data={favourites}
				renderItem={({item}) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate('RestaurantDetail', {
									restaurant: item,
								})
							}>
							<Spacer variant='bottomLarge'>
								{/* @ts-ignore */}
								<RestaurantInfoCard restaurant={item} />
							</Spacer>
						</TouchableOpacity>
					)
				}}
				keyExtractor={item => useRandomKey()}
			/>
		</AppSafeArea>
	) : (
		<NoFavouritesArea>
			<AppText variant='body'>No favourites yet</AppText>
		</NoFavouritesArea>
	)
}
