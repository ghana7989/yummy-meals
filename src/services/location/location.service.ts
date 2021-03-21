/** @format */

//  @ts-expect-error
import camelize from 'camelize'
import { LocationResult, locations } from './location.mock'

export const locationRequest: (searchTerm: string) => Promise<unknown> = (searchTerm: string) => {
	return new Promise((resolve, reject) => {
		const locationMock = locations[searchTerm as keyof typeof locations]
		if (!locationMock) {
			reject('Not Found for this search term')
		}
		resolve(locationMock)
	})
}
export const locationTransform = (result?: LocationResult) => {
	if (result === undefined) {
		return null
	}
	const {
		geometry: {
			location: { lat, lng },
			viewport,
		},
	} = result.results[0]
	return { lat, lng, viewport }
}
