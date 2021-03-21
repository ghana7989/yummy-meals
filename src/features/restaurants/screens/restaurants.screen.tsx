/** @format */

import { StackNavigationProp } from '@react-navigation/stack'
import React, { FC, useState, useContext } from 'react'
import { ActivityIndicator, FlatList, Pressable, TouchableOpacity, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component'
import { AppSafeArea } from '../../../components/utils/safe-area.component'
import { AppTheme } from '../../../infrastructure/theme'
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { Search } from '../components/search.component'

export const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`
export const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`
export const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})`
	/* background-color: tomato; */
`
// @ts-expect-error
type RestaurantDetailScreenNavigationProp = StackNavigationProp

type Props = {
	navigation: RestaurantDetailScreenNavigationProp
}
const RestaurantsScreen: FC<Props> = ({ navigation }) => {
	const { restaurants, error, isLoading } = useContext(RestaurantsContext)
	return (
		<>
			<AppSafeArea>
				{isLoading && (
					<LoadingContainer style={{ position: 'absolute', top: '50%', left: '50%' }}>
						<Loading size={50} animating={true} color={AppTheme.colors.brand.primary} />
					</LoadingContainer>
				)}
				<Search />
				<RestaurantList
					data={restaurants}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity
								onPress={() => navigation.navigate('Restaurant Detail', { restaurant: item })}>
								{/* @ts-expect-error */}
								<RestaurantInfoCard restaurant={item} />
							</TouchableOpacity>
						)
					}}
					keyExtractor={(item, index) => index.toString()}
					ItemSeparatorComponent={() => <Spacer variant='bottomLarge' />}
				/>
			</AppSafeArea>
		</>
	)
}

export { RestaurantsScreen }
