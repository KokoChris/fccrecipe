import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_RECIPE = 'GET_RECIPE';
const API_URL = 'https://recipator.herokuapp.com/api/recipes';

export function getRecipes() {
	const request = axios.get(API_URL);
	return {
		type:GET_RECIPES,
		payload:request
	}
}

export function getRecipe(id){
	const request = axios.get(`${API_URL}/${id}`)
    return {
    	type:GET_RECIPE,
    	payload:request
    }
}