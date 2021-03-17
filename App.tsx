/** @format */

import React from 'react'
import {useFonts,Oswald_400Regular} from "@expo-google-fonts/oswald"
import {Lato_400Regular} from "@expo-google-fonts/lato"
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { AppTheme } from './src/infrastructure/theme';

export default function App(): JSX.Element {
 useFonts( { Oswald_400Regular } )
  useFonts( { Lato_400Regular } )
  
	return (
    <>
      <ThemeProvider theme={AppTheme}>
			  <RestaurantsScreen/>
      </ThemeProvider>
		</>
	)
}

