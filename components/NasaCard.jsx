import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NasaCard = () => {
  const [nasaData, setNasaData] = useState(null);

  useEffect(() => {
    const fetchNasaData = async () => {
      try {
        const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}`);
        setNasaData(response.data);
      } catch (error) {
        console.error('Error fetching NASA data:', error);
      }
    };

    fetchNasaData();

    return () => setNasaData(null);
  }, []);

  return (
    <div className="bg-zinc-900 rounded-lg p-4 border border-gray-400">
      <h2 className="text-white text-lg font-semibold mb-2 text-center">NASA Astronomy Picture of the Day</h2>
      {nasaData && (
        <>
          <img className="w-full h-64 mb-2 rounded-lg object-cover" src={nasaData.url} alt={nasaData.title} />
          <div className="text-white">
            <p className="text-xs mb-1">{nasaData.date}</p>
            <p className="text-sm">{nasaData.explanation}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default NasaCard;