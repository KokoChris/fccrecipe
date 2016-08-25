import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getRecipe,deleteRecipe} from '../actions/index';




class ShowRecipe extends Component {
	static contextTypes = {
		router: PropTypes.object
	}

	componentWillMount() {
		this.props.getRecipe(this.props.params.id);
	}
	handleDelete() {
		this.props.deleteRecipe(this.props.params.id)
		.then(() => {
			this.context.router.push('/');
		})
	}
    render(){
    	
    	if(!this.props.recipe) {
			return (
				<div>...loading</div>
			)
		}
	
       let {title,ingredients} = this.props.recipe;
       
	return (


		<div className="card card-block">

		    <h2>{title}</h2>
		    <span>Ingredients: <strong>{ingredients}</strong></span>
			<p className="showButtons">
				
				<Link className="btn btn-sm btn-warning"to={`/recipes/${this.props.params.id}/edit`}>Edit</Link>
				<button 
					className="btn btn-sm btn-danger"
					onClick={this.handleDelete.bind(this)}>Delete
			    </button>
			
				<Link className="btn btn-sm btn-success" to="/">List of Recipes </Link>
			</p>
		</div>
	)
	}	
}








function mapStateToProps(state) {
	return {recipe: state.recipes.recipe}
}





export default connect(mapStateToProps,{getRecipe,deleteRecipe})(ShowRecipe)