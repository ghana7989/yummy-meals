/** @format */

import React, { createContext, FC, useEffect, useState } from 'react'
import { LocationResult, NortheastOrSouthwestOrLocation } from './location.mock'
import { locationRequest, locationTransform } from './location.service'

interface InitialProps {
	isLoading: boolean
	error: string | null
	search: null | ((searchQuery: string) => undefined)
	location: NortheastOrSouthwestOrLocation | null
	keyword: string
}

export const LocationContext = createContext<InitialProps>({
	isLoading: false,
	error: null,
	location: null,
	keyword: '',
	search: null,
})

export const LocationContextProvider: FC = ({ children }) => {
	const [location, setLocation] = useState<NortheastOrSouthwestOrLocation | null>(null)
	const [keyword, setKeyword] = useState('toronto')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const onSearch = (searchKeyWord: string) => {
		if (!searchKeyWord.length) {
			return undefined
		}
		setIsLoading(true)
		setKeyword(searchKeyWord)
		locationRequest(keyword.toLowerCase().trim())
			.then((response) => locationTransform(response as LocationResult))
			.then((result) => {
				setIsLoading(false)
				setLocation(result)
				console.log('result: ', result)
			})
			.catch((error) => {
				setError(error)
				setIsLoading(false)
			})
	}
	useEffect(() => {
		if (!!keyword) {
			onSearch(keyword)
		}
	}, [keyword])

	return (
		<LocationContext.Provider value={{ isLoading, error, search: onSearch, location, keyword }}>
			{children}
		</LocationContext.Provider>
	)
}
