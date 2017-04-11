import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
// import Loader from 'halogen/DotLoader';

import Loader from './Loader';

class Map extends React.Component {
  render() {
    let lat;
    let lng;

    if(this.props.lat !== undefined) {
      lat = this.props.lat;
      lng = this.props.lng;
    }

    let rides = this.props.rides
    let newRides;

    for(let i = 0; i < rides.length; i++) {
      newRides = rides[i]
    }

    let markers;

    if(newRides) {
      markers = newRides.map((ride, i) => {
    		const marker = {
    			position: {
    				lat: ride.lat,
    				lng: ride.lng
    			}
    		}

    		return <Marker key={i} {...marker} />
      })
    }
    // console.log('ride MARKERS', markers);

  //  const markers = this.props.venues.map((venue, i) => {
	// 	const marker = {
	// 		position: {
	// 			lat: venue.location.lat,
	// 			lng: venue.location.lng
	// 		}
	// 	}
  //
  //
  //   // console.log('VENUE MARKER', marker.position);
  //   // console.log('individual markers', {...marker});
	// 	return <Marker key={i} {...marker} />
	// })
  // console.log('VENUE MARKERS', markers);

    return (
      <section id="map-section">
        {lat && lng  ? <GoogleMapLoader
        containerElement={
          <div
            {...this.props.containerElementProps}
            style={{
              height: "100%",
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={14}
            defaultCenter={{lat: lat, lng: lng}}>
            {markers}
          </GoogleMap>
        }
      /> : <Loader />}
      </section>
    )
  }
};

export default Map;
