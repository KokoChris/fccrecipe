import React,{Component , PropTypes } from 'react';
import {Link} from 'react-router';
import {createRecipe} from '../actions/index';
import {reduxForm} from 'redux-form';




class NewRecipeForm extends Component {
	static contextTypes = {
		router: PropTypes.object
	}
	onSubmit(props) {
		console.log(props)
		this.props.createRecipe(props)
		 .then(()=>{
		 	this.context.router.push('/');
		 });
	}

	render(){

		const { fields:{title,ingredients}, handleSubmit} = this.props;

		return (

			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

				<h3>Create A New Recipe </h3>

				<div className={`form-group ${title.touched && title.invalid ? 'has-danger':'' }`}>
					<label>Title</label>
					<input type="text" className="form-control"{...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>
				<div className={`form-group ${ingredients.touched && ingredients.invalid ? 'has-danger':'' }`}>
			

					<label>Ingredients</label>
					<input type="text" className="form-control"{...ingredients} />
					<div className="text-help">
						{ingredients.touched ? ingredients.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit </button>
				<Link to="/" className="btn btn-danger">Cancel</Link>

			</form>

		)

	}
}


function validate(values) {

	const errors = {};

	if(!values.title){
		errors.title = 'Enter a title for your awesome recipe!';

	}
	if(!values.ingredients){
		errors.ingredients = 'Enter some ingredients...';
	
	}
	return errors;
}


export default reduxForm({
	form:'NewRecipeForm',
	fields:['title', 'ingredients'],
	validate
},null,{createRecipe})(NewRecipeForm)