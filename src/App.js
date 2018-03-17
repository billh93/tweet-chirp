import React, { Component } from 'react';
import GMap from './map.js';
import SearchContainer from './searchContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <GMap />
        </div>
    );
  }
}

export default App;
