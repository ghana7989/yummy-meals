/** @format */

import React, { FC, useContext, useEffect, useState } from 'react'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components/native'
import { AppTheme } from '../../../infrastructure/theme'
import { LocationContext } from '../../../services/location/location.context'

export const SearchContainer = styled.View`
	padding: ${AppTheme.spaces['3']};
	position: absolute;
	z-index: 9;
	width: 100%;
	top: 40px;
`
const Search: FC = () => {
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
					placeholder='Search for a place'
					icon='map'
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
