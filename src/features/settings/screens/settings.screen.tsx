/** @format */

import React, {useContext} from 'react'
import styled from 'styled-components/native'

import {List, Avatar} from 'react-native-paper'

import {AppText} from '../../../components/typography/text.component'
import {Spacer} from '../../../components/spacer/spacer.component'
import {AuthContext} from '../../../services/auth/auth.context'
import {AppSafeArea} from '../../../components/utils/safe-area.component'
import {AppTheme} from '../../../infrastructure/theme'

export const SettingsItem = styled(List.Item)`
	padding: ${AppTheme.spaces[3]};
`
export const AvatarContainer = styled.View`
	align-items: center;
	padding-top: ${AppTheme.spaces[3]};
`
export const AvatarIcon = styled(Avatar.Icon)``

export const SettingsScreen = ({navigation}: any) => {
	const {
		onLogout,
		user: {user},
	} = useContext(AuthContext)
	return (
		<AppSafeArea>
			<AvatarContainer>
				<AvatarIcon backgroundColor='#2182BD' size={180} icon='human' />
				<Spacer variant='topLarge'>
					<AppText variant='label'>{user?.email}</AppText>
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
