import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherCard = ({ apiKey }) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeather(city);
    }
  }, [city]);

  const fetchWeather = async (city) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeather(response.data);
      setError(null); 
    } catch (error) {
      console.error('Error fetching weather:', error);
      setError('City not found');
    }
    setLoading(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather(city);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
    setError(null);
  };

  const convertToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const convertToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-4 border border-gray-400 ml-3">
      <h2 className="text-white text-lg font-semibold mb-2">Weather</h2>
      <form onSubmit={handleFormSubmit} className="flex items-center mb-4">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          className="py-2 px-4 rounded-l border border-pink-400 focus:outline-none focus:border-pink-700 bg-black text-white placeholder-gray-500 mr-2"
          placeholder="Enter city name"
        />
      </form>
      {loading && <p className="text-white">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div className="text-white">
          <p className="mb-1">{weather.name}, {weather.sys.country}</p>
          <p className="mb-1">{weather.weather[0].description}</p>
          <p className="font-bold">Temperature: {convertToFahrenheit(convertToCelsius(weather.main.temp)).toFixed(1)}°F</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;