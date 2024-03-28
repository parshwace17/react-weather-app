import React from 'react';
import { useSelector} from "react-redux";
import { CardContent, CircularProgress, Card, Typography} from "@mui/material";

const WeatherDisplay = () =>{
  const { loading, data, error } = useSelector(state => state.weather);
  return (
    <div className="w-full max-w-md mx-auto">
      {loading && (<div className="flex justify-center my-8">
          <CircularProgress />
        </div>)}
        {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      {
        data && (
          <Card>
            <CardContent>
            <Typography variant="h5" component="h2" gutterBottom>
              {data.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Temperature: {data.main.temp}°C
            </Typography>
            <Typography variant="body1" gutterBottom>
              Description: {data.weather[0].description}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Humidity: {data.main.humidity}%
            </Typography>
            <Typography variant="body1">
              Wind Speed: {data.wind.speed} m/s
            </Typography>
            </CardContent>
          </Card>
          
        )
      }
    </div>
  )
}
export default WeatherDisplay;