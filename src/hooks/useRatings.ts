/** @format */


type MaximumRating = 5 | 10
interface Props {
	rating: number
	maximumRating?: MaximumRating
}

const useRatings = (rating: number, maximumRating: MaximumRating = 5): (string | undefined)[] => {
	if (maximumRating <= 1) throw new Error('maximumRating must be number 5 or number 10')
	const ratingArray: (string | undefined)[] = []
	let ratingFraction = rating - Math.floor(rating) >= 0.5 ? true : false
	for (let i = 0; i < maximumRating; i++) {
		if (i < Math.floor(rating)) {
			ratingArray.push('full')
		} else if (ratingFraction) {
			ratingArray.push('half')
			ratingFraction = false
		} else {
			ratingArray.push(undefined)
		}
	}
	return ratingArray
}

export default useRatings
