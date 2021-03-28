/** @format */

import AsyncStorage from '@react-native-async-storage/async-storage'
import {Camera} from 'expo-camera'
import React, {FC, useContext, useEffect, useRef, useState} from 'react'
import {View, Text, GestureResponderEvent} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import AppText from '../../../components/typography/text.component'
import {AuthContext} from '../../../services/auth/auth.context'

type Props = {}

export const ProfileCamera = styled(Camera)`
	width: 100%;
	height: 100%;
`

const CameraScreen: FC<Props> = ({navigation}: any) => {
	const [hasPermission, setHasPermission] = useState<boolean>(false)
	const [type, setType] = useState(Camera.Constants.Type.back)
	// To take a picture
	const {user} = useContext(AuthContext)
	const snap: ((event: GestureResponderEvent) => void) | undefined = async e => {
		if (!!cameraRef) {
			const photo = await cameraRef.current?.takePictureAsync()
			if (photo) {
				AsyncStorage.setItem(`${user?.uid}-photo`, photo?.uri)
				navigation.goBack()
			}
		}
	}
	useEffect(() => {
		const checkPermission = async () => {
			const {status} = await Camera.requestPermissionsAsync()
			if (status === 'granted') {
				setHasPermission(true)
			}
		}
		checkPermission()
	}, [])

	const cameraRef = useRef<Camera | null>()
	return !hasPermission ? (
		<View>
			<AppText variant='error'>No Permission</AppText>
		</View>
	) : (
		<TouchableOpacity onPress={snap}>
			<ProfileCamera
				ratio={'16:9'}
				ref={camera => (cameraRef.current = camera)}
				type={Camera.Constants.Type.front}></ProfileCamera>
		</TouchableOpacity>
	)
}

export {CameraScreen}
