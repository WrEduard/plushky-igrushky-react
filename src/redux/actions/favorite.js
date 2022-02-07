export const addToyToFavorite = (toyObj) => ({
	type: "ADD_TOY_TO_FAVORITE",
	payload: toyObj,
})

export const removeToyFavorite = (id) => ({
	type: "REMOVE_TOY_FAVORITE",
	payload: id,
})