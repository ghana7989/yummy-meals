/** @format */

import React, { FC, useState } from 'react'
import { FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component'
import { AppSafeArea } from '../../../components/utils/safe-area.component'
import { AppTheme } from '../../../infrastructure/theme'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'

interface Props {}

export const Search = styled.View`
	padding: ${AppTheme.spaces['3']};
`
export const RestaurantList = styled(FlatList).attrs({
	contentContainerStyle: {
		padding: 16,
	},
})`
	/* background-color: tomato; */
`
const RestaurantsScreen: FC<Props> = () => {
	const [searchQuery, setSearchQuery] = useState<string>('')

	return (
		<>
			<AppSafeArea>
				<Search>
					<Searchbar value={searchQuery} />
				</Search>
				<RestaurantList
					data={[
						{ name: 1 },
						{ name: 2 },
						{ name: 3 },
						{ name: 4 },
						{ name: 5 },
						{ name: 6 },
						{ name: 7 },
						{ name: 8 },
						{ name: 9 },
						{ name: 10 },
						{ name: 11 },
						{ name: 12 },
						{ name: 13 },
						{ name: 14 },
					]}
					renderItem={() => <RestaurantInfoCard />}
					keyExtractor={(item, index) => index.toString()}
					ItemSeparatorComponent={() => <Spacer variant='bottomLarge' />}
				/>
			</AppSafeArea>
		</>
	)
}

export { RestaurantsScreen }
