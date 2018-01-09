// import React, {Component} from 'react';

//Google maps js is added in index.html
// class GoogleMap extends Component {
//     componentDidMount() { //After render
//         new google.maps.Map(this.refs.map, {
//             zoom: 12,
//             center: {
//                 lat: this.props.lat,
//                 lng: this.props.lon
//             }
//         })
//     }

//     render() {
//         return <div ref="map" />;
//     }
// }

import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
    <GoogleMapLoader
        containerElement={ <div style={{height: '100%' }} /> }
        googleMapElement={
            <GoogleMap defaultZoom={12} defaultCenter={{lat: props.lat, lng: props.lon}} />
        }
        />
}

export default GoogleMap;