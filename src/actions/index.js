import axios from 'axios';

const API_KEY = '9af085ab54fd08e5fde6fb76cb43dd18';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ca`;
    const request = axios.get(url);

    // console.log('Request:', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
