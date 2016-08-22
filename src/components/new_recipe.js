import React,{Component} from 'react';
import {Link} from 'react-router';




class NewRecipeForm extends Component {

	render(){

		return (
			<div>
				 New Form 
				<Link	to="/" className="btn btn-primary">
					Back to  Recipes
				</Link>
			</div>


		)

	}
}


export default NewRecipeForm;