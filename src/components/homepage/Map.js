import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

class Map extends React.Component {
  render() {
    const markers = this.props.venues.map((venue, i) => {

		const marker = {
			position: {
				lat: venue.location.lat,
				lng: venue.location.lng
			}
		}

		return <Marker key={i} {...marker} />
	})

    return (
      <section id="map-section" style={{height: "400px", width: "90%", margin: "auto", padding: "20px"}}>
        <GoogleMapLoader
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
            defaultZoom={15}
            defaultCenter={this.props.center}>
            {markers}
          </GoogleMap>
        }
      />
      </section>
    )
  }
};

export default Map;
