import React from 'react';
import drinksList from './drinksList';
import $ from 'jquery';


class Drink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(

            <div class="card">
                <img src={drinksList[0].strDrinkThumb} class="card-img-top" alt="drink"></img>
                <div class="card-body">
                    <h5 class="card-title">{drinksList[0].strDrink}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button class="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        )
    }
}

export default Drink;