/** @format */

import React, { FC, useContext, useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { AppTheme } from '../../../infrastructure/theme'
import { LocationContext } from '../../../services/location/location.context'

export const SearchContainer = styled.View`
	padding: ${AppTheme.spaces['3']};
`
type Props = { isFavouritesToggled: boolean; onFavouritesToggle: () => void }
const Search: FC<Props> = ({ isFavouritesToggled, onFavouritesToggle }) => {
	const { keyword, search } = useContext(LocationContext)
	const [searchQuery, setSearchQuery] = useState<string>(keyword)
	useEffect(() => {
		if (searchQuery && search) {
			search(searchQuery)
		}
	}, [])
	useEffect(() => {
		setSearchQuery(keyword)
	}, [keyword])

	return (
		<>
			<SearchContainer>
				<Searchbar
					icon={isFavouritesToggled ? 'heart' : 'heart-outline'}
					onIconPress={onFavouritesToggle}
					placeholder='Search for a place'
					value={searchQuery}
					onSubmitEditing={() => {
						if (search) {
							search(searchQuery)
						}
					}}
					onChangeText={(txt) => {
						setSearchQuery(txt)
					}}
				/>
			</SearchContainer>
		</>
	)
}

export { Search }
