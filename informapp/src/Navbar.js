import React, { useState } from 'react';
import './style.css'
import { Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

// navbar development and interactivity
export default function InfoNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="navbar-default navbar-brand" light expand="md">
        <NavbarBrand className="navbar-brand text-white">INFOrm</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/" className="nav-link">Courses</Link>
            </NavItem>
            <NavItem>
              <Link to="/mycourses" className="nav-link">My Courses</Link>
            </NavItem>
            <NavItem>
              <Link to='/about' className="nav-link">About</Link>
            </NavItem>
            <NavItem className="marginleft-auto">
              <Link className="btn btn-secondary" onClick={props.event}>Log Out {props.user}</Link>
            </NavItem>
          </Nav>

        </Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' />
        <Route exact path='/about' />
      </Switch>
    </div>
  );
}

