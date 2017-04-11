import React from 'react';
import superagent from 'superagent'
import { geolocated } from 'react-geolocated';

import './styles/homepage.css';

import About from './About';
import Banner from './Banner';
import CallToAction from './CallToAction';
import Contact from './contact/Contact';
import FeaturesNews from './FeaturesNews';
import HowItWorks from './how/HowItWorks';
import Map from './map/Map';
import Partners from './Partners';

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: 0,
      lng: 0,
      mapLoaded: false,
      rides: [],
      venues: []
		}
  }

  componentDidMount() {
    setTimeout(function() {
      let lat = this.props.coords.latitude
      let lng = this.props.coords.longitude

      this.setState({
        lat: lat,
        lng: lng,
        mapLoaded: true
      });
    }.bind(this), 5000);

		const migoUrl = 'http://dev.getmigo.com/api/drivers?lat=47.608013&lng=-122.335167'

		superagent
		.get(migoUrl)
		.query(null)
		.set('Accept', 'text/json')
		.end((err, res) => {
      console.log(res.body);
			const locations = res.body.nearby_drivers

      let rides = [];
      let rideMarkers = [];

      console.log(res.body.nearby_drivers);
      for(let i = 0; i < locations.length; i++) {
        rides.push(locations[i].types[i].rides)
        rideMarkers.push(rides[i])
      }

			this.setState({
				rides: rideMarkers
			})

      // const url = 'https://api.foursquare.com/v2/venues/search?v=20140806&ll=47.6062,-122.3321&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ'
      //
  		// superagent
  		// .get(url)
  		// .query(null)
  		// .set('Accept', 'text/json')
  		// .end((error, response) => {
      //
      // const venues = response.body.response.venues;
      //
  		// 	this.setState({
  		// 		venues: venues
  		// 	})
  		// })
		})
	}

  render() {
    return (
      <section id="homepage">
        <Banner />
        <HowItWorks />
          <CallToAction />
        <Partners />
        <Map
          lat={this.state.lat}
          lng={this.state.lng}
          mapLoaded={this.state.mapLoaded}
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

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000
})(HomePage);

// {!this.props.isGeolocationAvailable
//   ? <div>Your browser does not support HomePage</div>
//   : !this.props.isGeolocationEnabled
//     ? <div>HomePage is not enabled</div>
//     : this.props.coords
//       ? <table>
//         <tbody>
//           <tr><td>Your current latitude: {this.props.coords.latitude}</td></tr>
//           <tr><td>Your current longitude: {this.props.coords.longitude}</td></tr>
//         </tbody>
//       </table>
//       : <div>Getting the location data&hellip; </div>}
