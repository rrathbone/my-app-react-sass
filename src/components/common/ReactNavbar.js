import React, { PropTypes } from 'react';
import { Grid, Navbar } from 'react-bootstrap';

const ReactNavbar = () => {
// class ReactNavbar extends React.Component {
// render() {

  return (
    <header>
      <Navbar inverse color="faded">
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
// }
}

ReactNavbar.propTypes = {
  scrollToTop: PropTypes.func,
  scrollToBottom: PropTypes.func,
  scrollToTo: PropTypes.func,
  scrollMore: PropTypes.func,
  handleSetActive: PropTypes.func
}

export default ReactNavbar;
