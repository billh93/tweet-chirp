import React, { Component } from 'react';
import {Button, Col, Navbar, Row} from 'react-materialize';
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
