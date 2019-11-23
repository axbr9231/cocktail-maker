import React from 'react';
import './App.css';
import $ from 'jquery';
import Drink from './Drink.js';
import drinks from './drinksList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: [],
      term: ''
    };
  }
  componentDidMount() {
    this.setState({
      drinks: drinks
    })
  }

  handleSearch(e) {
    e.preventDefault()
    
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
          <form class="form-inline my-2 my-lg-0">
          <button class="btn btn-danger navbar-btn mr-4">Random</button>
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </header>
      <div class="container-fluid">
        <div class="row ml-2 mt-5">
          {this.state.drinks.slice(0, 4).map((drink, i) => {
            return (
            <Drink 
            drinkData={drink}
            key={i}
            index={i}
            />)
          })}
        </div>
        <div class="row ml-2 mt-5">
        {this.state.drinks.slice(4, 8).map((drink, i) => {
            return (
            <Drink 
            drinkData={drink}
            key={i}
            index={i + 4}
            />)
          })}
        </div>
      </div>
    </div>
  );
}
}

export default App;
