/** @format */

import * as firebase from 'firebase'

export const loginRequest = (email: string, password: string) => {
	return firebase.auth().signInWithEmailAndPassword(email, password)
}
