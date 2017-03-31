import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';
// import { Link } from 'react-router';

const ReactNavbar = () => {
  return (
    <header>
      <Navbar inverse>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home.html" className="" id="reveal-logo"><img src="/images/migo_white.png" alt="" className="logo" id="nav-logo-white"></img></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <ul className="nav-list">
              <li className="nav-links" id="signup-li"><a href="/signup.html">Sign Up</a></li>
              <li className="nav-links" id="about-li"><a href="#about">About</a></li>
              <li className="nav-links" id="contact-li"><a href="#contact">Contact</a></li>
            </ul>
          </Navbar.Collapse>
        </Grid>
      </Navbar>
    </header>
  );
};

export default ReactNavbar;

// <a href="/home.html" className="hide" id="reveal-logo"><p className="img-responsive logo" id="nav-logo-white">migo</p></a>


// <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
//   <span className="sr-only">Toggle navigation</span>
//   <span className="icon-bar"></span>
//
//   <span className="icon-bar"></span>
//   <span className="icon-bar"></span>
// </button>

// <li className="nav-links" id="signup-li"><a href="#">Sign Up</a></li>
// <li className="nav-links" id="about-li"><a href="#">About</a></li>
// <li className="nav-links" id="contact-li"><a href="#">Contact</a></li>
