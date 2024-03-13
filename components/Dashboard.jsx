import React from 'react';
import WeatherCard from './WeatherCard';
import { TodoWrapper } from './ToDo/TodoWrapper';
import NasaCard from './NasaCard';
import PokemonCard from './PokemonCard';
import QuickLinksCard from './QuickLinksCard';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-zinc-900">
      <PokemonCard />
      <WeatherCard apiKey={process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY} />
      <TodoWrapper />
      <div className="col-span-3 flex">
        <NasaCard />
        <QuickLinksCard />
      </div>
    </div>
  );
};

export default Dashboard;