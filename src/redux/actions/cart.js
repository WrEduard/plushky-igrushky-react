export const addToyToCart = (toyObj) => ({
	type: "ADD_TOY_TO_CART",
	payload: toyObj,
})

export const removeCartItem = (id) => ({
	type: "REMOVE_CART_ITEM",
	payload: id,
})

export const plusCartItem = (id) => ({
	type: "PLUS_CART_ITEM",
	payload: id,
})

export const minusCartItem = (id) => ({
	type: "MINUS_CART_ITEM",
	payload: id,
})