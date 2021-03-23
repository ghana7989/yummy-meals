/** @format */

import React, { FC, useContext, useEffect, useState } from 'react'
import styled from 'styled-components/native'
import MapView, { Callout, MapViewAnimated, Marker } from 'react-native-maps'
import { Search } from '../components/search.component'
import { LocationContext } from '../../../services/location/location.context'
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context'
import { Loading, LoadingContainer } from '../../restaurants/screens/restaurants.screen'
import { MapCallOutComponent } from '../components/map-callout.component'
import { StackNavigationProp } from '@react-navigation/stack'

export const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`

const MapScreen: FC = ({ navigation }: any) => {
	const { location } = useContext(LocationContext)
	const { restaurants = [] } = useContext(RestaurantsContext)
	const [latitudeDelta, setLatitudeDelta] = useState(0)
	useEffect(() => {
		if (!!location) {
			const northEastLat = location?.viewport?.northeast.lat
			const southWestLat = location?.viewport?.southwest.lat
			setLatitudeDelta(northEastLat - southWestLat)
		}
	}, [location])
	return (
		<>
			<Search />
			{!!location ? (
				<Map
					region={{
						latitude: location?.lat,
						longitude: location?.lng,
						latitudeDelta: latitudeDelta,
						longitudeDelta: 0.02,
					}}>
					{restaurants.map((restaurant) => {
						if (!restaurant)
							return (
								<LoadingContainer>
									<Loading />
								</LoadingContainer>
							)
						return (
							<Marker
								key={restaurant.name}
								title={restaurant.name}
								coordinate={{
									latitude: restaurant?.geometry.location.lat,
									longitude: restaurant?.geometry.location.lng,
								}}>
								<Callout onPress={() => navigation.navigate('RestaurantDetail', { restaurant })}>
									<MapCallOutComponent restaurant={restaurant} />
								</Callout>
							</Marker>
						)
					})}
				</Map>
			) : (
				<LoadingContainer>
					<Loading />
				</LoadingContainer>
			)}
		</>
	)
}

export { MapScreen }
