import React from 'react';
import drinksList from './drinksList';
import $ from 'jquery';
import Recipe from './recipeModal';
import drinks from './drinksList';

class Drink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: [],
            units: []
        }
        this.ingredients = [];
        this.units = [];
    }
    componentDidMount() {
        for (let key in drinksList[0]) {
            if (key.includes('strIngredient') && drinksList[0][key] !== null) {
                this.ingredients.push(drinksList[0][key]);
            }
        }
        for (let key in drinksList[0]) {
            if(key.includes('strMeasure') && drinksList[0][key] !== null) {
                this.units.push(drinksList[0][key]);
            }
        }
        this.setState({
            ingredients: this.ingredients,
            units: this.units
        });
    }

    render() {
        return(
            <div>
            <div class="card">
                <img src={drinksList[0].strDrinkThumb} class="card-img-top" alt="drink"></img>
                <div class="card-body">
                    <h5 class="card-title">{drinksList[0].strDrink}</h5>
                    <p class="card-text">Want to make a tasty {drinksList[0].strDrink}? Click below for instructions.</p>
                    <button 
                    class="btn btn-primary" 
                    type="button" data-toggle="modal" 
                    data-target="#recipeModal">Instructions</button>
                </div>
            </div>
            <Recipe 
            drinkData={drinksList[0]} 
            ingredients={this.state.ingredients}
            units={this.state.units}
            />
          </div>
        )
    }
}

export default Drink;