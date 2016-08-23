import axios from 'axios';

export const GET_RECIPES = 'GET_RECIPES';
const API_URL = 'https://recipator.herokuapp.com/api/recipes';

export function getRecipes() {
	const request = axios.get(API_URL);
	return {
		type:GET_RECIPES,
		payload:request
	}
}