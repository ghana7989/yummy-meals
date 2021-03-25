/** @format */

import * as firebase from 'firebase'
import React, {createContext, FC, useState} from 'react'
import {loginRequest} from './auth.service'

export interface InitialAuthContext {
	user?: firebase.auth.UserCredential
	isLoading: boolean
	isAuthenticated: boolean
	error: string
	onLogin: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext<InitialAuthContext>({
	error: '',
	isLoading: false,
	isAuthenticated: false,
	onLogin: async (email: string, password: string) => {},
})

export const AuthContextProvider: FC = ({children}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [user, setUser] = useState<firebase.auth.UserCredential>()
	const [error, setError] = useState('')
	const onLogin = async (email: string, password: string) => {
		try {
			setIsLoading(true)
			const userResult = await loginRequest(email, password)
			if (userResult) {
				setUser(userResult)
				setIsLoading(false)
				setIsAuthenticated(true)
			}
		} catch (e) {
			setIsAuthenticated(false)
			setIsLoading(false)
			setError(e.toString())
		}
	}
	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				error,
				onLogin,
				isAuthenticated,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
