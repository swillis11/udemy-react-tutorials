import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart data={temps} color="orange" units="K" />                    
                </td>
                <td>
                    <Chart data={pressures} color="green" units="hPa" />
                </td>
                <td>
                    <Chart data={humidity} color="red" units="%" />
                </td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) { //Pulls weather out of state, state.weather => weather
    //state.weather since we assigned weather reduced to weather key in the reducers/index.js
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);

/* Redux State
    weather: [{
        city: { name: 'San Francisco' },
        list: [{
            main: { temp: 260, humidity: 40, pressure: 40 }
        }, ...]
    }, ...]
*/
/* Data
    city: San Francisco
    ...
    list: [{
        main: {}
    }, ...]

*/