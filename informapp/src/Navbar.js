// Daniel & Catherine

import React from 'react';
import './style.css'

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-default">
        <a className="navbar-brand text-white">INFOrm</a>
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/#"
                >Courses <span className="sr-only"></span></a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">About</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

