import React, {Component} from 'react';
import {Route,IndexRoute} from 'react-router';
import {Link} from 'react-router';

import App from './components/app';

import NewRecipeForm from './components/new_recipe';
import ShowRecipe from './components/show_recipe';
import RecipesList from './components/recipes_index';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={RecipesList}/>
		<Route path="/new" component={NewRecipeForm}/>
		<Route path="/show" component={ShowRecipe}/>
	</Route>


)


