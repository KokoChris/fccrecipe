import React, {Component} from 'react';
import {Route,IndexRoute} from 'react-router';
import {Link} from 'react-router';

import App from './components/app';

const NewRecipeForm = () => {
	return <div>
	 New Form 
	<Link	to="/" className="btn btn-primary">
		Back to  Recipes
	</Link>
	</div>;
}

const EditRecipeForm = () => {
	return <div>  Edit From </div>;
}

const  ShowRecipeForm = () => {
	return <div> Show Form </div>;
}

const RecipesList = () => {
	return <div> List of Recipes
	<Link	to="/new" className="btn btn-primary">
		Add Recipe
	</Link>


	 </div>;
}

export default (
	<Route path='/' component={App}>
		<IndexRoute component={RecipesList}/>
		<Route path="/new" component={NewRecipeForm}/>
		<Route path="/edit" component={EditRecipeForm}/>
		<Route path="/show" component={ShowRecipeForm}/>
	</Route>


)


