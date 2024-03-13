import React from 'react';
import QuoteCard from './QuoteCard';
import WeatherCard from './WeatherCard';
import { TodoWrapper } from './ToDo/TodoWrapper';
import Calendar from "@/components/Calendar/Calendar";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-zinc-900">
      <QuoteCard />
      <WeatherCard apiKey={process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY} />
      <TodoWrapper />
      <div className="col-span-2">
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;
