import axios from 'axios';

const API_KEY = '77de6fc87c1c09d1613def082eb93bba';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//Can change country code for different search area
export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    
    console.log('Request:', request);
    
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}