import React from 'react';

import './styles/homepage.css';

import About from './About';
import Banner from './Banner';
import CallToAction from './CallToAction';
import Contact from './contact/Contact';
import FeaturesNews from './FeaturesNews';
import HowItWorks from './HowItWorks';
import Partners from './Partners';

class HomePage extends React.Component {

  render() {
    return (
      <section id="homepage">
      <Banner />
      <HowItWorks />
        <CallToAction />
      <Partners />
        <CallToAction />
      <About />
        <CallToAction />
      <FeaturesNews />
      <Contact />
      </section>
    );
  }
}

export default HomePage;
