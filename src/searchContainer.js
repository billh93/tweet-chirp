import React, { Component } from 'react';

import Form from './form.js';


export default class SearchContainer extends Component {
  render() {
    return (
        <Navbar>
            <Row>
                <Col>
                    <h1>Tweets</h1>
                    <Form className="form"/>
                </Col>
            </Row>
        </Navbar>
    );
  }
}
