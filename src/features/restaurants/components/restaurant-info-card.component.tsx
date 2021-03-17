/** @format */

import React, { FC, Fragment } from 'react'
import { View } from 'react-native'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import styled from 'styled-components/native'
import { emptyStarXml, fullStarXml, halfStarXml } from '../../../../assets/stars'
import useRatings from '../../../hooks/useRatings'
import { AppTheme } from '../../../infrastructure/theme'

interface Props {
	restaurant: {
		name: string
		icon: string
		photos: string[]
		isOpenNow: boolean
		address: string
		rating: number
		isClosedTemporarily: boolean
	}
}

export const RestaurantCard = styled(Card)`
	background-color: ${AppTheme.colors.bg.primary};
`
export const RestaurantCardCover = styled(Card.Cover)`
	padding: ${AppTheme.spaces[2]};
	background-color: ${AppTheme.colors.bg.primary};
`
export const Title = styled.Text`
	font-family: ${AppTheme.fonts.heading};
	font-size: ${AppTheme.fontSizes.h5};
	color: ${AppTheme.colors.ui.primary};
`
export const Address = styled.Text`
	font-family: ${AppTheme.fonts.body};
	font-size: ${AppTheme.fontSizes.caption};
	color: ${AppTheme.colors.text.primary};
`
export const Info = styled.View`
	padding: ${AppTheme.spaces[2]};
`
export const RatingContainer = styled.View`
	flex-direction: row;
	padding: ${AppTheme.spaces['2']} 0;
`
const RestaurantInfoCard: FC<Props> = ({ restaurant = {} }) => {
	const {
		address = '101 Some random street center',
		icon,
		isClosedTemporarily,
		name = 'Some Restaurant',
		isOpenNow = true,
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
		],
		rating = 2.7,
	} = restaurant
	const ratingArray = useRatings(rating, 5)
	console.log('ratingArray: ', ratingArray)
	return (
		<Fragment>
			<RestaurantCard elevation={8}>
				<RestaurantCardCover source={{ uri: photos[0] }} key={name} />
				<Info>
					<Title>{name}</Title>
					<RatingContainer>
						{ratingArray.map((item) => {
							return item === 'full' ? (
								<SvgXml xml={fullStarXml} width={20} height={20} />
							) : item === 'half' ? (
								<SvgXml xml={halfStarXml} width={20} height={20} />
							) : (
								item === undefined && <SvgXml xml={emptyStarXml} width={20} height={20} />
							)
						})}
					</RatingContainer>
					<Address>{address}</Address>
				</Info>
			</RestaurantCard>
		</Fragment>
	)
}

export { RestaurantInfoCard }
