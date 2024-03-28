import React from 'react';
import WeatherSearch from './components/WeatherSearch';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Weather Forecast App</h1>
      <WeatherSearch />
      <WeatherDisplay />
    </div>
  );
};

export default App;
