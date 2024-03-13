import React from 'react';
import QuoteCard from './QuoteCard';
import WeatherCard from './WeatherCard';
import { TodoWrapper } from './ToDo/TodoWrapper';
import Calendar from "@/components/Calendar/Calendar";
import Notepad from './Notepad';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-zinc-900">
      <QuoteCard />
      <WeatherCard apiKey={process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY} />
      <TodoWrapper />
      <div className="col-span-2 flex">
        <div>
          <Calendar />
        </div>
        <div className="ml-4 mt-20">
          <Notepad />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

