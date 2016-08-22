import React,{Component} from 'react';
import {Link} from 'react-router';




class RecipesList extends Component{
	render(){

		return (
		<div> 
		     List of Recipes
			<Link	to="/new" className="btn btn-primary">
				Add Recipe
			</Link>
		</div>
	 )

	}
	
}



export default RecipesList;