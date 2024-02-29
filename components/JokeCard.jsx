// JokeCard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JokeCard = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    axios.get('https://v2.jokeapi.dev/joke/Any')
      .then(response => {
        const data = response.data;
        const setup = data.setup || '';
        const delivery = data.delivery || data.joke || '';
        setJoke(`${setup} ${delivery}`);
      })
      .catch(error => {
        console.error('Error fetching joke:', error);
      });
  }, []);

  return (
    <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
      <div className="flex flex-col w-full pb-4">
        <p className="text-gray-600">Joke of the Day</p>
        <p className="text-xl font-bold">{joke}</p>
      </div>
    </div>
  );
};

export default JokeCard;