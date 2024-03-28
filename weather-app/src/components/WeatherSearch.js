import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {fetchWeather} from "../features/weather/weatherSlice";
function WeatherSearch() {
  const dispatch = useDispatch();
  const [city, setCity] = useState("");
  function handleChange(e) {
    setCity(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchWeather(city));
    setCity('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField label="Enter city name" id="outlined-basic" variant="outlined" fullWidth value={city} onChange={handleChange} className="mb-4"/>
        <Button type="submit" variant="contained" color="primary" fullWidth>Search</Button>
      </form>
      

    </div>
  );
}
export default WeatherSearch;