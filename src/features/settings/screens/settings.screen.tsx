/** @format */

import React, {useContext, useEffect, useState} from 'react'
import {TouchableOpacity} from 'react-native'
import {Avatar, List} from 'react-native-paper'
import styled from 'styled-components/native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import {useFocusEffect} from '@react-navigation/core'

import {Spacer} from '../../../components/spacer/spacer.component'
import {AppText} from '../../../components/typography/text.component'
import {AppSafeArea} from '../../../components/utils/safe-area.component'
import {AppTheme} from '../../../infrastructure/theme'
import {AuthContext} from '../../../services/auth/auth.context'

export const SettingsItem = styled(List.Item)`
	padding: ${AppTheme.spaces[3]};
`
export const AvatarContainer = styled.View`
	align-items: center;
	padding-top: ${AppTheme.spaces[3]};
`
export const AvatarIcon = styled(Avatar.Icon)``

export const SettingsScreen = ({navigation}: any) => {
	const {onLogout, user} = useContext(AuthContext)
	const [photoUri, setPhotoUri] = useState('')
	const getProfilePicture = async () => {
		try {
			// @ts-ignore
			const picUri = await AsyncStorage.getItem(`${user?.uid}-photo`)
			if (picUri) {
				setPhotoUri(picUri)
			}
		} catch (e) {
			throw new Error('getProfilePicture Failed')
		}
	}
	useFocusEffect(() => {
		getProfilePicture()
	})
	useEffect(() => {
		getProfilePicture()
	}, [user])
	return (
		<AppSafeArea>
			<AvatarContainer>
				<TouchableOpacity onPress={() => navigation.navigate('Camera')}>
					{!photoUri ? (
						// @ts-ignore
						<AvatarIcon backgroundColor='#2182BD' size={180} icon='human' />
					) : (
						<Avatar.Image size={180} source={{uri: photoUri}} />
					)}
				</TouchableOpacity>
				<Spacer variant='topLarge'>
					{user && <AppText variant='label'>{user?.email}</AppText>}
				</Spacer>
			</AvatarContainer>

			<List.Section>
				<SettingsItem
					title='Favourites'
					description='View your favourites'
					left={props => <List.Icon {...props} color='black' icon='heart' />}
					onPress={() => navigation.navigate('Favourites')}
				/>
				<SettingsItem
					title='Logout'
					left={props => <List.Icon {...props} color='black' icon='door' />}
					onPress={onLogout}
				/>
			</List.Section>
		</AppSafeArea>
	)
}
