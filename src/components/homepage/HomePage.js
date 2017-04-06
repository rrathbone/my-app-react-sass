import React from 'react';
import superagent from 'superagent'

import './styles/homepage.css';

import About from './About';
import Banner from './Banner';
import CallToAction from './CallToAction';
import Contact from './contact/Contact';
import FeaturesNews from './FeaturesNews';
import HowItWorks from './how/HowItWorks';
import Map from './map/Map';
import Geolocation from './map/Geolocation';
import Partners from './Partners';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rides: [],
      venues: []
		}
  }

  componentDidMount(){
		const migoUrl = 'http://dev.getmigo.com/mock/drivers?lat=47.6062&lng=-122.3321'

		superagent
		.get(migoUrl)
		.query(null)
		.set('Accept', 'text/json')
		.end((err, res) => {

			const locations = res.body.nearby_drivers

      let rides = [];

      for(let i = 0; i < locations.length; i++) {
        rides.push(locations[i].types[i].rides[i])
      }

			this.setState({
				rides: rides
			})

      // console.log('rides', rides);

      const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=47.6062,-122.3321&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'

  		superagent
  		.get(url)
  		.query(null)
  		.set('Accept', 'text/json')
  		.end((error, response) => {

      const venues = response.body.response.venues;
      // console.log('venues', venues);

  			this.setState({
  				venues: venues
  			})
  		})
		})
	}

  render() {
    const location = {
      lat: 47.598962,
      lng: -122.333799
    }

    return (
      <section id="homepage">
      <Banner />
      <HowItWorks />
        <CallToAction />
      <Partners />
      <Geolocation />
      <Map
        center={location}
        rides={this.state.rides}
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
