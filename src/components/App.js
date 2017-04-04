import React from 'react';

import ReactNavbar from './common/ReactNavbar';
import HomePage from './homepage/HomePage';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <main>
        <ReactNavbar
          toggle={this.toggle}
        />
        <HomePage />
        <Footer  />
      </main>
    );
  }
}

export default App;
