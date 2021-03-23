/** @format */

import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { createContext, FC, useEffect, useState } from 'react'
import { Restaurant } from '../restaurant/restaurants.service'

interface DefaultProps {
	favourites: Restaurant.Result[]
	addToFavourites: (restaurant: Restaurant.Result) => void
	removeFromFavourites: (restaurant: Restaurant.Result) => void
}
export const FavouritesContext = createContext<DefaultProps>({
	favourites: [],
	addToFavourites: (): void => {},
	removeFromFavourites: (): void => {},
})

export const FavouritesContextProvider: FC = ({ children }) => {
	const [favourites, setFavourites] = useState<Restaurant.Result[]>([])

	useEffect(() => {
		loadFavourites()
	}, [])
	useEffect(() => {
		saveFavourites(favourites)
  }, [ favourites ] )
  
	// Local Storage Functions
	const saveFavourites = async (value: Object) => {
		try {
			const jsonValue = JSON.stringify(value)
			await AsyncStorage.setItem('favourites', jsonValue)
		} catch (e) {
			console.log('error saving favourites', e)
		}
	}
	const loadFavourites = async () => {
		try {
			const value = await AsyncStorage.getItem('favourites')
			if (value) {
				setFavourites(JSON.parse(value))
			}
		} catch (e) {
			console.log('error saving favourites', e)
		}
	}
	// Local Storage Functions end

	const add = (restaurant: Restaurant.Result) => {
		setFavourites([...favourites, restaurant])
	}
	const remove = (restaurant: Restaurant.Result) => {
		// @ts-expect-error
		setFavourites(favourites.filter((x) => x.placeId !== restaurant.placeId))
	}

	return (
		<FavouritesContext.Provider
			value={{
				favourites,
				addToFavourites: add,
				removeFromFavourites: remove,
			}}>
			{children}
		</FavouritesContext.Provider>
	)
}
