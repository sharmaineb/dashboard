import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    // prevent default action
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full py-2 px-4 rounded-l border border-gray-300 focus:outline-none focus:border-blue-500"
        placeholder="What is the task today?"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
      >
        Add Task
      </button>
    </form>
  );
};
