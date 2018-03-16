import React, { Component } from 'react';
import {Row, Button, Icon, SideNav, SideNavItem} from 'react-materialize';
import Form from './form.js';

export default class Nav extends Component {
  render() {
    return (
        <SideNav
          trigger={<Button><Icon medium>keyboard_arrow_left</Icon></Button>}
          draggable={true}
        >
            <SideNavItem>
                <Row>
                    <Form />
                </Row>
            </SideNavItem>
        </SideNav>
    );
  }
}
