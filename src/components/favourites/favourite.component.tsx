/** @format */

import React, { FC, useContext } from 'react'
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native'
import styled from 'styled-components/native'

import { AntDesign } from '@expo/vector-icons'

import { FavouritesContext } from '../../services/favourites/favourites.context'

interface Props {
	restaurant?: {
		name: string
		icon: string
		photos: string[]
		isOpenNow: boolean
		address: string
		rating: number
		isClosedTemporarily: boolean
	}
}
export const FavouriteButton = styled(TouchableOpacity)`
	/* background-color: transparent;
	border-radius: 50px;
	border-right-color: #20232a; */
	position: absolute;
	top: 25px;
	right: 25px;
	z-index: 9;
`

const Favourite: FC<Props> = ({ restaurant }) => {
	const { addToFavourites, favourites, removeFromFavourites } = useContext(FavouritesContext)
	// @ts-expect-error
	const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)
	const handleOnPress = (e: GestureResponderEvent): void => {
		if (!isFavourite) {
			// @ts-expect-error
			addToFavourites(restaurant)
		} else {
			// @ts-expect-error
			removeFromFavourites(restaurant)
		}
	}
	return (
		<>
			<FavouriteButton onPress={handleOnPress}>
				<AntDesign
					name={isFavourite ? 'heart' : 'hearto'}
					size={30}
					color={isFavourite ? 'red' : 'white'}
				/>
			</FavouriteButton>
		</>
	)
}

export { Favourite }
