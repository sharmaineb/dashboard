// WeatherCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCard = ({ apiKey }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=${apiKey}`);
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };

    fetchWeather();
  }, [apiKey]);

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Weather</h2>
      {weather && (
        <div className="text-gray-800">
          <p className="mb-1">{weather.name}, {weather.sys.country}</p>
          <p className="mb-1">{weather.weather[0].description}</p>
          <p className="font-bold">Temperature: {(weather.main.temp - 273.15).toFixed(1)}°C</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;