import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import GMap from './map.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="GMapContainer">
            <GMap />
        </div>
      </div>
    );
  }
}

export default App;
