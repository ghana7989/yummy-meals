/** @format */

import React, { createContext, FC, useContext, useEffect, useState } from 'react';

import { LocationContext } from '../location/location.context';
import { Restaurant, restaurantsRequest, restaurantsTransform } from './restaurants.service';

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
	const { location } = useContext(LocationContext)
	const retrieveRestaurants = (loc: string) => {
		setIsLoading(true)
		// Remove timeout in future, when using real api
		setRestaurants([])
		setTimeout(async () => {
			try {
				const result = await restaurantsRequest(loc)
				const results = await restaurantsTransform(result)
				setRestaurants(results)
			} catch (error) {
				setError(error)
			}
			setIsLoading(false)
		}, 2000)
	}
	useEffect(() => {
		const locationString = `${location?.lat},${location?.lng}`
		retrieveRestaurants(locationString)
	}, [location])
	return (
		<RestaurantsContext.Provider value={{ restaurants, error, isLoading }}>
			{children}
		</RestaurantsContext.Provider>
	)
}
