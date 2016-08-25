import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
        	<h1 className="text-xs-center"> Recipe Box </h1>
        </header>
            
      		{this.props.children}
      	<footer>
        	<p>Created By Christos Kokolios </p>
       		 <p><a href="https://github.com/KokoChris/fccrecipe">Source Code</a></p>
        	<p><a href="https://github.com/KokoChris/recipeapi">Api Code</a></p>
     	</footer>
      </div>

    );
  }
}
