/** @format */

import React, { createContext, FC, Provider, useEffect, useMemo, useState } from 'react'
import { restaurantsRequest, restaurantsTransform } from './restaurants.service'
import { Restaurant } from './restaurants.service'

interface InitialProps {
	restaurants: Partial<Restaurant.Result[]>
	isLoading: boolean
	error: string | null
}

export const RestaurantsContext = createContext<InitialProps>({
	restaurants: [],
	isLoading: false,
	error: null,
})

export const RestaurantsContextProvider: FC = ({ children }) => {
	const [restaurants, setRestaurants] = useState<Restaurant.Result[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const retrieveRestaurants = () => {
		setIsLoading(true)
		// Remove timeout in future, when using real api
		setTimeout(async () => {
			try {
				const result = await restaurantsRequest()
				const results = await restaurantsTransform(result)
				setRestaurants(results)
			} catch (error) {
				setError(error)
			}
			setIsLoading(false)
		}, 2000)
	}
	useEffect(() => {
		retrieveRestaurants()
	}, [])
	return (
		<RestaurantsContext.Provider value={{ restaurants, error, isLoading }}>
			{children}
		</RestaurantsContext.Provider>
	)
}
