const initialeState = {
	itemsFavorite: {},
	totalCount: 0,
}

const favorite = (state = initialeState, action) => {
	switch (action.type) {
		case "ADD_TOY_TO_FAVORITE": {

			const newItems = {
				...state.itemsFavorite,
				[action.payload.id]: action.payload,
			};

			return {
				...state,
				itemsFavorite: newItems,
				totalCount: Object.keys(newItems).length,
			};
		}
		case "REMOVE_TOY_FAVORITE": {
			const newItems = {
				...state.itemsFavorite,
			}

			delete newItems[action.payload];

			return {
				...state,
				itemsFavorite: newItems,
				totalCount: Object.keys(newItems).length,
			}
		}

		default:
			return state;
	}
}

export default favorite;