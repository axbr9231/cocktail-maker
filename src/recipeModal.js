import React from 'react';

class Recipe extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
    return (
        <div>
        <div class="modal fade" id={`recipeModal${this.props.index}`} tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="recpieModalLabel">{this.props.drinkData.strDrink}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <ul className="ingredients">
                        {this.props.ingredients.map((data, i) => {
                        return (<li key={i}>{this.props.units[i]} {data}</li>)
                    })}
                    </ul>
                    <p>{this.props.drinkData.strInstructions}</p>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
    }
}

export default Recipe;