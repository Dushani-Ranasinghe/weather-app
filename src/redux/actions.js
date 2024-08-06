import axios from 'axios';

export const fetchWeather = (city) => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_WEATHER_REQUEST' });
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a36a9f9e6f01de8c77bf640751d11e22`);
            dispatch({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });
        } catch (error) {
            dispatch({ type: 'FETCH_WEATHER_FAILURE', payload: error.message });
        }
    };
};