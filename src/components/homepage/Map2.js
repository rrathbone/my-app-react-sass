import React, { Component } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'

class Map2 extends Component {
	render(){
		const mapContainer = <div style={{height: '100%', width:'100%'}}></div>

		const markers = this.props.markers.map((venue, i) => {

			const marker = {
				position: {
					lat: venue.location.lat,
					lng: venue.location.lng
				}
			}

			return <Marker key={i} {...marker} />
		})

		return (
      <section id="map-section" style={{height: "400px", width: "70%", margin: "auto", padding: "20px"}}>

		    <GoogleMapLoader
		        containerElement={ mapContainer }
		        googleMapElement={
			        <GoogleMap
			            defaultZoom={15}
			            defaultCenter={this.props.center}
			            options={{streetViewControl: false, mapTypeControl: false}}>
			            { markers }
			        </GoogleMap>
		    	} />
          </section>
		)
	}
}

export default Map2
