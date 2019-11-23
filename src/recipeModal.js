import React from 'react';
function Recipe(props) {
    console.log(props.ingredients)
    return (
        <div>
        <div class="modal fade" id="recipeModal" tabIndex="-1" role="dialog" aria-labelledby="recipeModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="recpieModalLabel">{props.drinkData.strDrink}</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <ul className="ingredients">
                    {props.ingredients.map((data, i) => {
                        console.log(data);
                        return (<li key={i}>{data}</li>)
                    })}
                    </ul>
                    <p>{props.drinkData.strInstructions}</p>
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

export default Recipe;