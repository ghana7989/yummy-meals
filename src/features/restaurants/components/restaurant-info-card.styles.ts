/** @format */
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg'
import styled from 'styled-components/native'
import { AppTheme } from '../../../infrastructure/theme'

export const RestaurantCard = styled(Card)`
	background-color: ${AppTheme.colors.bg.primary};
`
export const RestaurantCardCover = styled(Card.Cover)`
	padding: ${AppTheme.spaces[3]};
	background-color: ${AppTheme.colors.bg.primary};
`
export const Address = styled.Text`
	font-family: ${AppTheme.fonts.body};
	font-size: ${AppTheme.fontSizes.caption};
	color: ${AppTheme.colors.text.primary};
`
export const Info = styled.View`
	padding: ${AppTheme.spaces[2]};
`
export const Section = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
export const RatingContainer = styled.View`
	flex-direction: row;
	padding: ${AppTheme.spaces['2']} 0;
`
export const SectionEnd = styled.View`
	padding-right: ${AppTheme.spaces[2]};
	flex-direction: row;
	align-items: center;
`
export const Icon = styled.Image`
	width: 15px;
	height: 15px;
`
// SVG's
export const Open = styled(SvgXml)``
export const FullStar = styled(SvgXml)``
export const HalfStar = styled(SvgXml)``
export const EmptyStar = styled(SvgXml)``
