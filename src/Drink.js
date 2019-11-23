import React from 'react';
import drinksList from './drinksList';
import $ from 'jquery';
import Recipe from './recipeModal';

class Drink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return(
            <div>
            <div class="card">
                <img src={drinksList[0].strDrinkThumb} class="card-img-top" alt="drink"></img>
                <div class="card-body">
                    <h5 class="card-title">{drinksList[0].strDrink}</h5>
                    <p class="card-text">Want to make a tasty {drinksList[0].strDrink}? Click below for instructions.</p>
                    <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#recipeModal">Instructions</button>
                </div>
            </div>
            <Recipe />
          </div>
        )
    }
}

export default Drink;