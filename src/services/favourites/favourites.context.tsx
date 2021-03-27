/** @format */

import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {createContext, FC, useContext, useEffect, useState} from 'react'
import {AuthContext} from '../auth/auth.context'
import {Restaurant} from '../restaurant/restaurants.service'

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

export const FavouritesContextProvider: FC = ({children}) => {
	const {user} = useContext(AuthContext)
	const [favourites, setFavourites] = useState<Restaurant.Result[]>([])

	useEffect(() => {
		if (user) {
			loadFavourites(user.user?.uid)
		}
	}, [user])
	useEffect(() => {
		if (user) {
			saveFavourites(favourites, user.user?.uid)
		}
	}, [favourites, user?.user])

	// Local Storage Functions
	const saveFavourites = async (value: Object, uid: string) => {
		try {
			const jsonValue = JSON.stringify(value)
			await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
		} catch (e) {
			console.log('error saving favourites', e)
		}
	}
	const loadFavourites = async (uid: string) => {
		try {
			const value = await AsyncStorage.getItem(`@favourites-${uid}`)
			if (value) {
				setFavourites(JSON.parse(value))
			}
		} catch (e) {
			console.log('error loading favourites', e)
		}
	}
	// Local Storage Functions end

	const add = (restaurant: Restaurant.Result) => {
		setFavourites([...favourites, restaurant])
	}
	const remove = (restaurant: Restaurant.Result) => {
		// @ts-expect-error
		setFavourites(favourites.filter(x => x.placeId !== restaurant.placeId))
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
