import {GET_RECIPES} from '../actions/index';
const INITIAL_STATE = { allRecipes:[], recipe:null};

export default function (state=INITIAL_STATE,action) {
	switch(action.type) {
		case GET_RECIPES:
			return{...state, allRecipes: action.payload.data}
	
	default:
	return state;
	}
}