import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import GMap from './map.js';
import SearchContainer from './searchContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <Row>
      <Col s={12} l={12} className="App">
        <Row>
            <Col s={12} l={4} className="SearchContainer">
                <SearchContainer />
            </Col>
            <Col s={12} className="GMapContainer">
                <GMap />
            </Col>
        </Row>
      </Col>
    </Row>
    );
  }
}

export default App;
