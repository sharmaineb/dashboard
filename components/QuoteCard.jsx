import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteCard = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    axios.get('https://api.quotable.io/random')
      .then(response => {
        setQuote(response.data.content);
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
      });
  }, []);

  return (
    <div className="bg-white flex justify-between w-full border p-4 rounded-lg">
      <div className="flex flex-col w-full pb-4">
        <p className="text-gray-600">Quote of the Day</p>
        <p className="text-xl font-bold">{quote}</p>
      </div>
    </div>
  );
};

export default QuoteCard;
