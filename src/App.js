import React from 'react';
import './App.css';
import $ from 'jquery';
import Drink from './Drink.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drinks: ''
    };
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
      <Drink />
      </div>
    </div>
  );
}
}

export default App;
