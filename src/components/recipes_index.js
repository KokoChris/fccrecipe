import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {getRecipes} from '../actions/index';
import {bindActionCreators} from 'redux';

class RecipesList extends Component {
	componentWillMount(){
		this.props.getRecipes();
	}
	renderRecipes() {

	   if (this.props.recipes.length === 0){

	   	   return <div>...cooking </div>
	   }
       return this.props.recipes.map((recipe) => {

       	 let parsedRecipe = JSON.parse(recipe);
       	 let {title,recipeId} = parsedRecipe;

       	 return(

       	 <li className="list-group-item text-xs-center" key={recipeId}>
			<Link to={"recipes/"+ recipeId}>
				<strong>{title}</strong>
			</Link>
		 </li>
       	 )
       })
	}
	render(){

		return (
		<div> 
		     
			
			<h2 className=" d-inline-block">Our Recipes</h2>
			<Link	to="/new" className="btn btn-primary d-inline-block pull-xs-right">
				Add Recipe
			</Link>
			<ul className="list-group w100">
				{this.renderRecipes()}
			</ul>
			
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