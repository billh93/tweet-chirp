import React, { Component } from 'react';
import {Row, Col} from 'react-materialize';
import GMap from './map.js';
import SearchBar from './search.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
            <Col s={1} className="tweetContainer">
                <SearchBar />
            </Col>
            <Col s={1} className="GMapContainer">
                <GMap />
            </Col>
        </Row>
      </div>
    );
  }
}

export default App;
