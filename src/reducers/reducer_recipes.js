import {GET_RECIPES,GET_RECIPE} from '../actions/index';

const INITIAL_STATE = { allRecipes:[], recipe:null};

export default function (state=INITIAL_STATE,action) {
	switch(action.type) {
		case GET_RECIPES:
			return{...state, allRecipes: action.payload.data}
	    case GET_RECIPE:
	    	return{...state, recipe: action.payload.data}
	default:
	return state;
	}
}