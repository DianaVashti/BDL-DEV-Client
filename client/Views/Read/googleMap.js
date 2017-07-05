import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class GoogleMap extends Component {
	componentDidMount() {
    const incidentLocation = { lat: this.props.lat, lng: this.props.lng }
		const map = new google.maps.Map(this.refs.map, {
			zoom: 15,
			center: incidentLocation,
      disableDefaultUI: true    
		});
    const marker = new google.maps.Marker({
      position: incidentLocation,
      map: map
    })
	}

	render() {
		return <div id='map' ref='map'></div>;
	}
}
