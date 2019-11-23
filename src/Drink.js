import React from 'react';
import Recipe from './recipeModal';


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
        for (let key in this.props.drinkData) {
            if (key.includes('strIngredient') && this.props.drinkData[key] !== null) {
                this.ingredients.push(this.props.drinkData[key]);
            }
        }
        for (let key in this.props.drinkData) {
            if(key.includes('strMeasure') && this.props.drinkData[key] !== null) {
                this.units.push(this.props.drinkData[key]);
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
                <img src={this.props.drinkData.strDrinkThumb} class="card-img-top" alt="drink"></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.drinkData.strDrink}</h5>
                    <p class="card-text">{this.props.drinkData.strCategory}.</p>
                    <button 
                    class="btn btn-primary" 
                    type="button" data-toggle="modal" 
                    data-target={`#recipeModal${this.props.index}`}>Instructions</button>
                </div>
            </div>
            <Recipe 
            drinkData={this.props.drinkData} 
            ingredients={this.state.ingredients}
            units={this.state.units}
            index={this.props.index}
            />
          </div>
        )
    }
}

export default Drink;