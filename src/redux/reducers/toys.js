const initialeState = {
	items: [],
	isLoaded: false
}

const toys = (state = initialeState, action) => {
	switch (action.type) {
		case "SET_TOYS":
			return {
				...state,
				items: action.payload,
				isLoaded: true
			};
		case "SET_LOADED":
			return {
				...state,
				isLoaded: action.payload
			};
		default:
			return state;
	}
}

export default toys;