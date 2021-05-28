// Daniel & Catherine

import React, {useState} from 'react';
import './style.css'
import About from './About';
import App from './App';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
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
      <Router>
      <Navbar className="navbar-default navbar-brand" light expand="md">
        <NavbarBrand className="navbar-brand text-white">INFOrm</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/#">Courses</Link>
            </NavItem>
            <NavItem>
              <Link to='/about' className="nav-link">About</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Switch>
      <Route exact path='/#' component={ App } />
      <Route exact path='/about' component={ About } />
      </Switch>
      </Router>
    </div>
  );
}

