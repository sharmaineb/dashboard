import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 898) + 1}`);
        setPokemon(response.data);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };

    fetchPokemon();

    return () => setPokemon(null);
  }, []);

  return (
    <div className="bg-zinc-900 rounded-lg p-4 border border-gray-400 ml-3">
      <h2 className="text-white text-lg font-semibold mb-2">Pokémon</h2>
      <div className="flex flex-col items-center">
        {pokemon && (
          <>
            <img className="w-32 h-32 mb-2" src={pokemon.sprites.front_default} alt={pokemon.name} />
            <div className="text-white text-center">
              <p className="font-bold">{pokemon.name}</p>
              <p className="text-sm">
                {pokemon.types.map((type, index) => (
                  <span key={index}>{type.type.name}{index < pokemon.types.length - 1 && ', '}</span>
                ))}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;