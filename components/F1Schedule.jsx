import React, { useState, useEffect } from 'react';
import axios from 'axios';

const F1Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('http://ergast.com/api/f1/2024.json');
        setSchedule(response.data.MRData.RaceTable.Races);
      } catch (error) {
        console.error('Error fetching schedule:', error);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div className="container bg-zinc-900 mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-white text-center">2024 Formula One Schedule</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {schedule.map(race => (
          <div key={race.round} className="bg-zinc-900 shadow-md rounded-md p-4 ml-2 mr-2">
            <h2 className="text-lg font-semibold mb-2 text-pink-300">{race.raceName}</h2> 
            <p className="text-blue-200 mb-1"><strong>Circuit:</strong> {race.Circuit.circuitName}</p>
            <p className="text-blue-200 mb-1"><strong>Date:</strong> {race.date}</p>
            <p className="text-blue-200 mb-1"><strong>Time:</strong> {race.time}</p>
            <p className="text-blue-200"><strong>Round:</strong> {race.round}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default F1Schedule;
