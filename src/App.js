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
            {/*<Grid container s={6}>
                <Grid item className="SearchContainer">
                    <SearchContainer />
                </Grid>
            </Grid> */}
            <Grid container s={12} l={12}>
                <Grid item s={12} className="GMapContainer">
                    <GMap />
                </Grid>
            </Grid>
        </Grid>
    );
  }
}

export default App;
