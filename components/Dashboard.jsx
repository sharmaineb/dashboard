import React from 'react';
import QuoteCard from './QuoteCard';
import JokeCard from './JokeCard';
import WeatherCard from './WeatherCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <QuoteCard />
      <JokeCard />
      <WeatherCard apiKey={process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY} />
    </div>
  );
};

export default Dashboard;