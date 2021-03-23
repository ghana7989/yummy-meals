/** @format */

import React, { FC } from 'react'
import { emptyStarXml, fullStarXml, halfStarXml } from '../../../../assets/svgs/stars'
import useRatings from '../../../hooks/useRatings'
import useRandomKey from '../../../hooks/useRandomKey'
import openSvg from '../../../../assets/svgs/openSvg'
import { Spacer } from '../../../components/spacer/spacer.component'
import AppText from '../../../components/typography/text.component'
import {
	Address,
	EmptyStar,
	FullStar,
	HalfStar,
	Icon,
	Info,
	Open,
	RatingContainer,
	RestaurantCard,
	RestaurantCardCover,
	Section,
	SectionEnd,
} from './restaurant-info-card.styles'
import { Favourite } from '../../../components/favourites/favourite.component'
import { View } from 'react-native'

type Props = {
	restaurant?: {
		name: string
		icon: string
		photos: string[]
		isOpenNow: boolean
		address: string
		rating: number
		isClosedTemporarily: boolean
		placeId: string
	}
}

const RestaurantInfoCard: FC<Props> = ({ restaurant }) => {
	const {
		address = '101 Some random street center',
		icon = 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
		isClosedTemporarily = true,
		name = 'Some Restaurant',
		isOpenNow = true,
		photos = [
			'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
		],
		rating = 4.9,
	} = restaurant ? restaurant : {}
	const ratingArray = useRatings(rating, 5)
	return (
		<>
			<RestaurantCard elevation={8}>
				<View>
					<Favourite restaurant={restaurant} />
					<RestaurantCardCover source={{ uri: photos[0] }} key={name} />
				</View>
				<Info>
					<AppText variant='label'>{name}</AppText>
					<Section>
						<RatingContainer>
							{ratingArray.map((item) =>
								item === 'full' ? (
									<FullStar xml={fullStarXml} width={20} height={20} key={useRandomKey()} />
								) : item === 'half' ? (
									<HalfStar xml={halfStarXml} width={20} height={20} key={useRandomKey()} />
								) : (
									item === undefined && (
										<EmptyStar xml={emptyStarXml} width={20} height={20} key={useRandomKey()} />
									)
								),
							)}
						</RatingContainer>
						<SectionEnd>
							{isClosedTemporarily ? <AppText variant='error'>CLOSED TEMPORARILY</AppText> : null}
							<Spacer variant='leftLarge' />

							{isOpenNow && <Open xml={openSvg} width={20} height={20} />}
							<Spacer variant='leftLarge' />
							<Icon source={{ uri: icon }} />
						</SectionEnd>
					</Section>
					<Address>{address}</Address>
				</Info>
			</RestaurantCard>
		</>
	)
}

export { RestaurantInfoCard }
