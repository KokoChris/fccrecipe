import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';
import {reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  recipes: RecipesReducer,
  form: formReducer
});

export default rootReducer;
