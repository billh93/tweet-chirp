import React, { Component } from 'react';
import AppBar from "material-ui/AppBar";
import Input from "material-ui/Input";

export default class SearchContainer extends Component {
  render() {
    return (
        <AppBar position="static">
          <Input
            placeholder="Search"
            inputProps={{
              "aria-label": "Description"
            }}
          />
        </AppBar>
    );
  }
}
