import React from 'react';
import WeatherCard from './WeatherCard';
import { TodoWrapper } from './ToDo/TodoWrapper';
import NasaCard from './NasaCard';
import PokemonCard from './PokemonCard';
import QuickLinksCard from './QuickLinksCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-zinc-900">
      <PokemonCard />
      <WeatherCard apiKey={process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY} />
      <TodoWrapper />
      <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row">
        <NasaCard className="md:w-1/2" />
        <QuickLinksCard className="md:w-1/2" />
      </div>
    </div>
  );
};

export default Dashboard;