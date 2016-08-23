import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getRecipes} from '../actions/index';
import {bindActionCreators} from 'redux';




class RecipesList extends Component{
	componentWillMount(){
		this.props.getRecipes();
	}

	renderRecipes() {
		console.log(this.props.recipes)
       return this.props.recipes.map((recipe) => {
       	 return(
       	 	<div>{recipe}</div>
       	 )
       })
	}
	render(){

		return (
		<div> 
		     
			<Link	to="/new" className="btn btn-primary">
				Add Recipe
			</Link>
			{this.renderRecipes()}
		</div>
	 )

	}
	
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getRecipes},dispatch);
}

function mapStateToProps(state) {

	return {recipes:state.recipes.allRecipes}
}


export default connect(mapStateToProps,mapDispatchToProps)(RecipesList);