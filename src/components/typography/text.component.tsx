/** @format */
import React from 'react'
import {FC} from 'react'
import styled from 'styled-components/native'
import {AppTheme} from '../../infrastructure/theme'

const defaultTextStyles = (theme: typeof AppTheme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`

const body = (theme: typeof AppTheme) => `
    font-size: ${theme.fontSizes.body};
`

const hint = (theme: typeof AppTheme) => `
    font-size: ${theme.fontSizes.body};
`

const error = (theme: typeof AppTheme) => `
    color: ${theme.colors.text.error};
`

const caption = (theme: typeof AppTheme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`

const label = (theme: typeof AppTheme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`

const variants: {
	body: (theme: typeof AppTheme) => string
	label: (theme: typeof AppTheme) => string
	caption: (theme: typeof AppTheme) => string
	error: (theme: typeof AppTheme) => string
	hint: (theme: typeof AppTheme) => string
} = {
	body,
	label,
	caption,
	error,
	hint,
}

export const StyledText = styled.Text`
	${() => defaultTextStyles(AppTheme)}
	/* @ts-expect-error */
	${({variant}): string => variants[variant](AppTheme)}
`

type Variant = 'body' | 'label' | 'caption' | 'error' | 'hint'
export const AppText: FC<{variant: Variant; numberOfLines?: number}> = ({
	variant = 'body',
	numberOfLines,
	children,
	...props
}) => (
	/* @ts-expect-error */
	<StyledText numberOfLines={numberOfLines} variant={variant} {...props}>
		{children}
	</StyledText>
)
export default AppText
