import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="flex items-center justify-between border-b border-white py-2">
      <p
        className={`cursor-pointer ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="flex gap-2">
        <FontAwesomeIcon
          className="edit-icon cursor-pointer text-blue-500 hover:text-blue-700"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon cursor-pointer text-red-500 hover:text-red-700"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
