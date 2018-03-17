import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Grid from 'material-ui/Grid';
import GMap from './map.js';
import SearchContainer from './searchContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
        <Grid container s={12} className="App">
            <CssBaseline />
            <Grid item l={4} className="SearchContainer">
                <SearchContainer />
            </Grid>
            <Grid item l={8} className="GMapContainer">
                <GMap />
            </Grid>
        </Grid>
    );
  }
}

export default App;
