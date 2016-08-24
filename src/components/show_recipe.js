import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getRecipe} from '../actions/index';




class ShowRecipe extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount() {
		this.props.getRecipe(this.props.params.id);
	}
    render(){
    	
    	if(!this.props.recipe) {
			return (
				<div>...loading</div>
			)
		}
	
       let {title,ingredients} = this.props.recipe;
       
	return (


		<div>

		    <h2>{title}</h2>
		    <span>Ingredients: <strong>{ingredients}</strong></span>
			<p className="showButtons">
				
				<Link className="btn btn-sm btn-warning"to={`/recipes/${this.props.params.id}/edit`}>Edit</Link>
				<Link className="btn btn-sm btn-danger"to={`/recipes/${this.props.params.id}/delete`}>Delete</Link>
			</p>
			<p>
				<Link to="/">List of Recipes </Link>
			</p>
		</div>
	)
	}	
}








function mapStateToProps(state) {
	return {recipe: state.recipes.recipe}
}





export default connect(mapStateToProps,{getRecipe})(ShowRecipe)