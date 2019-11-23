import React from 'react';
import './App.css';
import $ from 'jquery';
import Drink from './Drink.js';
import drinks from './drinksList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: []
    };
  }
  componentDidMount() {
    this.setState({
      drinks: drinks
    })
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar navbar-inverse">
          <div class="container-fluid">
          <div class="navbar-header">
          </div>
          {/* <ul class="nav navbar-nav">
          </ul> */}
          <button class="btn btn-danger navbar-btn">Button</button>
        </div>
      </nav>
      </header>
      <div class="container-fluid">
        <div class="row ml-2 mt-5">
          {this.state.drinks.map((drink, i) => {
            return (
            <Drink 
            drinkData={drink}
            key={i}
            index={i}
            class="col-md-3"
            />)
          })}
        </div>
      </div>
    </div>
  );
}
}

export default App;
