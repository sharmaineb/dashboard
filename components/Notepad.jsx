import React, { useState } from 'react';

const Notepad = () => {
  const [notes, setNotes] = useState('');
  
  const handleChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div className="bg-zinc-400 p-4 rounded-md shadow-md">
      <textarea
        value={notes}
        onChange={handleChange}
        className="bg-zinc-900 w-full h-64 p-2 resize-none border rounded-md focus:outline-none text-white focus:ring-2 focus:ring-cyan-200"
        placeholder="Write notes here..."
      ></textarea>
    </div>
  );
};

export default Notepad;
