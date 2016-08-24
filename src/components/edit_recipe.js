import React,{Component} from 'react';
import {Link} from 'react-router';




class EditRecipeForm extends Component {

	render(){

		return (
			<div>
				 Edit Form 
				<Link	to="/" className="btn btn-primary">
					Back to  Recipes
				</Link>
			</div>


		)

	}
}


export default EditRecipeForm;
