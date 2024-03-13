import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuid4 } from "uuid";

export const CreateTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState({
    id: uuid4(),
    name: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 4) {
      return toast.error("Task should have more than 3 characters", {
        duration: 2000,
      });
    }
    if (task.name.length > 100) {
      return toast.error("Task should not have more than 100 characters", {
        duration: 2000,
      });
    }

    setTasks((prev) => {
      if (!prev) {
        prev = [];
      }
      const list = [...prev, task];
      localStorage.setItem("tasks", JSON.stringify(list));
      return list;
    });
    toast.success("Task Created", { duration: 2000 });
    setTask({
      id: uuid4(),
      name: "",
      status: "todo",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-8">
      <input
        type="text"
        placeholder="Enter A New Task"
        className="border-2 border-gray-400 bg-zinc-900 text-green-300 rounded-md mr-4 h-12 w-64 px-4 focus:outline-none"
        value={task.name}
        onChange={(e) => {
          setTask({ ...task, name: e.target.value });
        }}
      />
      <button className="bg-cyan-200 px-6 py-2 rounded-md text-black font-bold hover:bg-pink-300 focus:outline-none">
        Create Task
      </button>
    </form>
  );
};
