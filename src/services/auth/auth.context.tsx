/** @format */

import * as firebase from 'firebase'
import React, {createContext, FC, useEffect, useState} from 'react'
import {loginRequest} from './auth.service'

export interface InitialAuthContext {
	user?: firebase.auth.UserCredential
	isLoading: boolean
	isAuthenticated: boolean
	error: string
	onLogin: (email: string, password: string) => Promise<void>
	onRegister: (email: string, password: string, confirmedPassword: string) => Promise<void>
	onLogout: () => Promise<void>
}

export const AuthContext = createContext<InitialAuthContext>({
	error: '',
	isLoading: false,
	isAuthenticated: false,
	onLogin: async (email: string, password: string) => {},
	onRegister: async (email: string, password: string, confirmedPassword: string) => {},
	onLogout: async () => {},
})

export const AuthContextProvider: FC = ({children}) => {
	const [isLoading, setIsLoading] = useState(false)
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [user, setUser] = useState<firebase.auth.UserCredential | undefined>()
	const [error, setError] = useState('')
	useEffect(
		() =>
			firebase.auth().onAuthStateChanged((usr: any) => {
				if (usr) {
					// @ts-ignore
					setUser(usr)
					setIsAuthenticated(true)
				}
			}),
		[],
	)
	useEffect(() => {
		if (!error) return
		const errorTimeout = setTimeout(() => {
			setError('')
		}, 3000)
		return clearTimeout(errorTimeout)
	}, [error])
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
	const onRegister = async (email: string, password: string, confirmedPassword: string) => {
		setIsLoading(true)
		if (password !== confirmedPassword) {
			setError('Error: Passwords do not match')
			return
		}

		try {
			setIsLoading(true)
			const userResult = await firebase.auth().createUserWithEmailAndPassword(email, password)
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
	const onLogout = async () => {
		try {
			setUser(undefined)
			setIsAuthenticated(false)
			await firebase.auth().signOut()
		} catch {
			throw new Error('Log Out Failed')
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
				onRegister,
				onLogout,
			}}>
			{children}
		</AuthContext.Provider>
	)
}
