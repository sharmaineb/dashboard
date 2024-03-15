import React from 'react';
import WeatherCard from './WeatherCard';
import { TodoWrapper } from './ToDo/TodoWrapper';
import NasaCard from './NasaCard';
import QuickLinksCard from './QuickLinksCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-zinc-900">
      <div className="col-span-1 md:col-span-1 lg:col-span-1 ml-2">
        <TodoWrapper />
      </div>
      <div className="col-span-1 md:col-span-1 lg:col-span-1">
        <WeatherCard apiKey={process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY} />
      </div>
      <img src="/kai.png" alt="Your Image" className="col-span-2 md:col-span-1 lg:col-span-1 mx-auto w-20 h-20 md:w-36 md:h-36 lg:w-52 lg:h-48 rounded-lg" />
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row">
        <NasaCard className="md:w-1/2" />
        <QuickLinksCard className="md:w-1/2" />
      </div>
    </div>
  );
};

export default Dashboard;