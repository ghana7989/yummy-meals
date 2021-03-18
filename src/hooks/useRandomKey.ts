/** @format */

function useRandomKey(length: number = 8) {
	let result = ''
	let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_-+=`~abcdefghijklmnopqrstuvwxyz0123456789'
	let charactersLength = characters.length
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength))
	}
	return result
}
export default useRandomKey
