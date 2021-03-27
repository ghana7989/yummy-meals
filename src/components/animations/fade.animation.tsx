/** @format */

import React, {FC, useEffect, useRef} from 'react'
import {Animated} from 'react-native'

export const FadeInView: FC<{duration?: number}> = ({duration = 1500, ...props}) => {
	const fadeAnim = useRef(new Animated.Value(0)).current
	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1500,
			useNativeDriver: true,
		}).start()
	}, [fadeAnim, duration])
	return (
		<Animated.View
			style={{
				// @ts-ignore
				...props.style,
				opacity: fadeAnim,
			}}>
			{props.children}
		</Animated.View>
	)
}
