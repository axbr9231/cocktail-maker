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
      term: '',
      searched: false,
      searchData: {},
      searchIngredients: [],
      searchUnits: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.homePage = this.homePage.bind(this);
    this.searchIngredients = [];
    this.searchUnits = [];
  }
  componentDidMount() {
    this.setState({
      drinks: drinks
    })
  }

  handleSearch(e) {
    //e.preventDefault()
    this.setState({
      term: e.target.value
    })
  }

  async submitSearch(e) {
    e.preventDefault()
    let newDrink = await $.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.term}`);
    for (let key in newDrink.drinks[0]) {
      if (key.includes('strIngredient') && newDrink.drinks[0][key] !== null) {
        this.searchIngredients.push(newDrink.drinks[0][key]);
      }
    }
    for (let key in newDrink.drinks[0]) {
      if (key.includes('strMeasure') && newDrink.drinks[0][key] !== null) {
        this.searchUnits.push(newDrink.drinks[0][key]);
      }
    }
    this.setState({
      searched: true,
      searchData: newDrink.drinks[0],
      searchIngredients: this.searchIngredients,
      searchUnits: this.searchUnits,
      term: ''
    });
  }

  homePage(e) {
    e.preventDefault();
    this.setState({
      searched: false
    })
  }

  render () {
    if (this.state.searched === false) {
      return (
        <div className="App">
          <header className="App-header">
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
              <div class="navbar-header">
              <iframe 
                title="nipponHorn"
                width="50%"
                height="69" 
                scrolling="no" 
                frameborder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303832426&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
           ></iframe>
              </div>
              <form class="form-inline my-2 my-lg-0">
              <button 
              class="btn btn-danger navbar-btn mr-4"
              >Home</button>
                <input 
                class="form-control mr-sm-2" 
                placeholder="Search" 
                aria-label="Search"
                value={this.state.term}
                onChange={(e) => {this.handleSearch(e)}}
                ></input>
                <button class="btn btn-success my-2 my-sm-0" 
                onClick={(e) => {this.submitSearch(e)}}>Search</button>
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
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <nav class="navbar navbar-inverse">
              <div class="container-fluid">
              <div class="navbar-header">
              <iframe 
                title="nipponHorn"
                width="100%"
                height="70" 
                scrolling="no" 
                frameborder="no" 
                allow="autoplay" 
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303832426&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=false"
           ></iframe>
              </div>
              <form class="form-inline my-2 my-lg-0">
              <button 
                class="btn btn-danger navbar-btn mr-4"
                onClick={(e) => {this.homePage(e)}}
                >Home</button>
                <input 
                class="form-control mr-sm-2" 
    
                placeholder="Search" 
                aria-label="Search"
                value={this.state.term}
                onChange={(e) => {this.handleSearch(e)}}
                ></input>
                <button class="btn btn-success my-2 my-sm-0" 
                onClick={(e) => {this.submitSearch(e)}}>Search</button>
              </form>
            </div>
          </nav>
          </header>
          <div id="searchCard" class="card mb-3">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src={this.state.searchData.strDrinkThumb} class="card-img" alt="drink"></img>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{this.state.searchData.strDrink}</h5>
                  <div class="row mb-2">
                    <div class="col-md-6">
                    {this.state.searchIngredients.map((item, i) => {
                      return (
                        <p>{this.state.searchUnits[i]} {item}</p>
                      )
                    })}
                    </div>
                  <p class="col-md-6">{this.state.searchData.strInstructions}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      )
    }
}
}

export default App;
