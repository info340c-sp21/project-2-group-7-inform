// Daniel & Catherine

import React, {useState} from 'react';
import './style.css'
import About from './About';
import App from './App';
import { Switch, Route, Link} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';


export default function InfoNavbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const toggle = () => setIsOpen(!isOpen);
  return(
    <div>
      <Navbar className="navbar-default navbar-brand" light expand="md">
        <NavbarBrand className="navbar-brand text-white">INFOrm</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/courses" className="nav-link" >Courses</Link>
            </NavItem>
            <NavItem>
              <Link to='/about' className="nav-link">About</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/courses' />
        <Route exact path='/about' />
      </Switch>
    </div>
  );
}
