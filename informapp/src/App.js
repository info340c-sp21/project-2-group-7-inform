"use strict";
// Import Components
import React, { Component } from 'react';
import Navigation from './Navigation';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);
    }


    render() {
      return <Navigation></Navigation>
    }
}

export default App;