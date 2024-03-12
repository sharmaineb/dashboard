import React from 'react';
import QuoteCard from './QuoteCard';
import WeatherCard from './WeatherCard';
import { TodoWrapper } from './ToDo/TodoWrapper';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <QuoteCard />
      <WeatherCard apiKey={process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY} />
      <TodoWrapper />
    </div>
  );
};

export default Dashboard;