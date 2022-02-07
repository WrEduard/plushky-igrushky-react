export const setLoaded = value => ({
	type: "SET_LOADED",
	payload: value,
});

export const fetchToys = (category) => (dispatch) => {
	dispatch(setLoaded(false));
	const url = `/toys/${category === 'ALL' || category === null ? '' : '?type=' + category}`;

	fetch(url).then((response) =>
		response.json().then((result) => dispatch(setToys(result)))
	);
};

export const setToys = (items) => ({
	type: "SET_TOYS",
	payload: items,
});