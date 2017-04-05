import React from 'react';
// import axios from 'axios';
import superagent from 'superagent'

import './styles/homepage.css';

import About from './About';
import Banner from './Banner';
import CallToAction from './CallToAction';
import Contact from './contact/Contact';
import FeaturesNews from './FeaturesNews';
import HowItWorks from './how/HowItWorks';
import Map from './Map';
// import Map2 from './Map2';
import Partners from './Partners';
// import Places from './Places';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			locations: [],
      venues: []
		}
  }

  componentDidMount(){
		const migoUrl = 'http://dev.getmigo.com/mock/drivers?lat=123&lng=123'

		superagent
		.get(migoUrl)
		.query(null)
		.set('Accept', 'text/json')
		.end((err, res) => {

			const locations = res.body.nearby_drivers

			this.setState({
				locations: locations
			})

      const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=47.6062,-122.3321&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'

  		superagent
  		.get(url)
  		.query(null)
  		.set('Accept', 'text/json')
  		.end((error, response) => {

      const venues = response.body.response.venues;
  			// console.log(JSON.stringify(venues))

  			this.setState({
  				venues: venues
  			})
  		})
		})
	}

  render() {
    const location = {
      lat: 47.6062,
      lng: -122.3321
    }

    return (
      <section id="homepage">
      <Banner />
      <HowItWorks />
        <CallToAction />
      <Partners />
      <Map
        center={location}
        venues={this.state.venues}
      />
      <About />
        <CallToAction />
      <FeaturesNews />
      <Contact />
      </section>
    );
  }
}

export default HomePage;
