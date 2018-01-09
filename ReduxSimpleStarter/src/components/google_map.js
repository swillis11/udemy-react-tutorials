import React, {Component} from 'react';

//Google maps js is added in index.html
class GoogleMap extends Component {
    componentDidMount() { //After render
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }

    render() {
        return <div ref="map" />;
    }
}

export default GoogleMap;