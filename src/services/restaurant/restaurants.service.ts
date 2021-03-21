/** @format */

import { mocks } from './mock'
// @ts-expect-error
import camelize from 'camelize'
import { mockImages } from './mock'

export declare module Restaurant {
	export interface NortheastOrSouthwestOrLocation {
		lat: number
		lng: number
	}

	export interface Viewport {
		northeast: NortheastOrSouthwestOrLocation
		southwest: NortheastOrSouthwestOrLocation
	}

	export interface Geometry {
		location: NortheastOrSouthwestOrLocation
		viewport: Viewport
	}

	export interface OpeningHours {
		open_now: boolean
	}

	export interface Photo {
		height: number
		html_attributions: string[]
		photo_reference: string
		width: number
	}

	export interface PlusCode {
		compound_code: string
		global_code: string
	}

	export interface Result {
		business_status: string
		geometry: Geometry
		icon: string
		name: string
		opening_hours: OpeningHours
		photos: string[]
		place_id: string
		plus_code: PlusCode
		price_level: number
		rating: number
		reference: string
		scope: string
		types: string[]
		user_ratings_total: number
		vicinity: string
		permanently_closed?: boolean
		isOpenNow?: boolean
		isClosedTemporarily?: boolean
	}

	export interface RootObject {
		html_attributions: any[]
		next_page_token: string
		results: Result[]
		status: string
	}
}
export function restaurantsRequest(location: keyof typeof mocks | string = '51.219448,4.402464') {
	return new Promise((resolve, reject) => {
		// @ts-expect-error
		const mock = mocks[location]
		if (!mock) reject('Not found')
		resolve(mock)
	})
}
// (value: unknown) => Result[] | PromiseLike<Result[]>
export const restaurantsTransform = (
	result: Restaurant.RootObject | unknown,
): Restaurant.Result[] | PromiseLike<Restaurant.Result[]> => {
	if (result as Restaurant.RootObject) {
		const mappedResults = (result as Restaurant.RootObject).results.map((restaurant) => {
			restaurant.photos = restaurant.photos.map((_photo: any) => {
				return mockImages[Math.floor(Math.random() * mockImages.length)]
			})
			return {
				...restaurant,
				address: restaurant.vicinity,
				isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
				isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
			}
		})
		return camelize(mappedResults)
	}
	return new Promise((resolve, reject) => {})
}
