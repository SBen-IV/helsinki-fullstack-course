const dummy = (blogs) => {
	return 1
}

const totalLikes = (blogs) => {
	const reducer = (sum, item) => sum + item.likes

	return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
	if (blogs.length === 0) return {}

	const reducer = (favorite, item) => {
		if (favorite.likes < item.likes) {
			return item
		}

		return favorite
	}

	const mostFavorite = blogs.reduce(reducer)

	return {
		title: mostFavorite.title,
		author: mostFavorite.author,
		likes: mostFavorite.likes
	}

}

module.exports = {
	dummy,
	totalLikes,
	favoriteBlog
}