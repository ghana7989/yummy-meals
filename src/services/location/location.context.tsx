/** @format */

import React, { createContext, FC, useEffect, useState } from 'react'
import { LocationResult, Viewport } from './location.mock'
import { locationRequest, locationTransform } from './location.service'

interface InitialProps {
	isLoading: boolean
	error: string | null
	search: null | ((searchQuery: string) => undefined)
	location: LocationContext | null
	keyword: string
}
interface LocationContext {
	lat: number
	lng: number
	viewport: Viewport
}
export const LocationContext = createContext<InitialProps>({
	isLoading: false,
	error: null,
	location: null,
	keyword: '',
	search: null,
})

export const LocationContextProvider: FC = ({ children }) => {
	const [location, setLocation] = useState<LocationContext | null>(null)
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
