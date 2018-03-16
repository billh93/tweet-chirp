import React, { Component } from 'react';
import GMap from './map.js';
import SearchBar from './search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="tweetContainer">
            <SearchBar />
        </div>
        <div className="GMapContainer">
            <GMap />
        </div>
      </div>
    );
  }
}

export default App;
