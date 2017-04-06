import React from 'react';

import ReactNavbar from './common/ReactNavbar';
import HomePage from './homepage/HomePage';
import Footer from './common/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <main>
        <ReactNavbar

        />
        <HomePage />
        <Footer  />
      </main>
    );
  }
}

export default App;
