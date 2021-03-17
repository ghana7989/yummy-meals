/** @format */

import React, { FC, useState } from 'react'
import { StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { AppTheme } from '../../../infrastructure/theme'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

interface Props {}
export const SafeArea = styled.SafeAreaView`
	flex: 1;
	${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
export const Search = styled.View`
	padding: ${AppTheme.spaces['3']};
`
export const RestaurantList = styled.View`
	padding: ${AppTheme.spaces['3']};
	flex: 1;
	background-color: tomato;
`
const RestaurantsScreen: FC<Props> = () => {
	const [searchQuery, setSearchQuery] = useState<string>('')

	return (
		<>
			<SafeArea>
				<Search>
					<Searchbar value={searchQuery} />
				</Search>
				<RestaurantList>
					<RestaurantInfoCard restaurant={{}} />
				</RestaurantList>
			</SafeArea>
		</>
	)
}

export { RestaurantsScreen }
