import { combineReducers } from 'redux';

import toysReducer from './toys';
import filtersReducer from './filters';
import cartReducer from './cart';
import favoriteReducer from './favorite';

const rootReducer = combineReducers({
	toys: toysReducer,
	filter: filtersReducer,
	cart: cartReducer,
	favorite: favoriteReducer,
})

export default rootReducer;