const API_KEY="c633d5650308ca1373f5aac4b539b8ff";

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    };
}