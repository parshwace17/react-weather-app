
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchWeatherFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;
// Async action creator for fetching weather data
export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch(fetchWeatherRequest()); // Dispatch fetchWeatherRequest action to set loading state

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={TOKEN}`);
      dispatch(fetchWeatherSuccess(response.data)); // Dispatch fetchWeatherSuccess action with weather data
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message)); // Dispatch fetchWeatherFailure action with error message
    }
  };
};

export default weatherSlice.reducer;


