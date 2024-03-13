import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <div className='bg-zinc-900 ml-0'>
      <form onSubmit={handleSubmit} className="flex items-center justify-between">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full py-2 px-4 rounded-l border border-pink-400 focus:outline-none focus:border-pink-700 bg-black text-white placeholder-gray-500"
          placeholder="Enter Reminder"
          style={{ marginRight: '8px' }}
        />
        <button
          type="submit"
          className="bg-pink-400 hover:bg-emerald-500 text-white font-bold py-2 px-4 focus:outline-none"
          style={{ borderRadius: '4px 4px 4px 4px' }}
        >
          Add Reminder
        </button>
      </form>
    </div>
  );
};