import React, { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

export const ListTask = ({ tasks, setTasks }) => {
  const [todo, setTodo] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    const ftodos = tasks?.filter((task) => task.status === "todo");
    const fInProgress = tasks?.filter((task) => task.status === "inprogress");
    const fCompleted = tasks?.filter((task) => task.status === "completed");

    setTodo(ftodos);
    setInProgress(fInProgress);
    setCompleted(fCompleted);
  }, [tasks]);

  const statuses = ["todo", "inprogress", "completed"];
  return (
    <div className="flex gap-16">
      {statuses.map((status, index) => (
        <Section
          key={index}
          status={status}
          tasks={tasks}
          setTasks={setTasks}
          todo={todo}
          inProgress={inProgress}
          completed={completed}
        />
      ))}
    </div>
  );
};

const Section = ({
  status,
  tasks,
  setTasks,
  todo,
  inProgress,
  completed,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => addItemToSection(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addItemToSection = (id) => {
    setTasks((prev) => {
      const mTask = prev.map((t) => {
        if (t.id === id) {
          return { ...t, status: status };
        }
        return t;
      });

      localStorage.setItem("tasks", JSON.stringify(mTask));

      return mTask;
    });
  };

  const sectionInfo = {
    todo: { text: "Todo", bg: "bg-gray-800", tasksToMap: todo },
    inprogress: { text: "In Progress", bg: "bg-gray-700", tasksToMap: inProgress },
    completed: { text: "Completed", bg: "bg-gray-600", tasksToMap: completed }
  };

  const { text, bg, tasksToMap } = sectionInfo[status.toLowerCase()];

  return (
    <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-green-700" : ""} border min-h-[200px] ${bg}`}>
      <Header text={text} bg={bg} count={tasksToMap?.length} />
      {tasksToMap?.map((task) => (
        <Task key={task.id} tasks={tasks} setTasks={setTasks} task={task} />
      ))}
    </div>
  );
};

const Header = ({ text, bg, count }) => {
  return (
    <div className={`${bg} flex items-center h-12 pl-4 text-green-400 rounded-t-md uppercase text-sm`}>
      {text}{" "}
      <div className="ml-auto mr-5 bg-slate-800 w-5 h-5 rounded-full p-4 flex items-center justify-center text-white ">
        {count || 0}
      </div>
    </div>
  );
};

const Task = ({ task, tasks, setTasks }) => {
  const handleRemove = (id) => {
    const fTasks = tasks?.filter((task) => task.id != id);
    setTasks(fTasks);
    localStorage.setItem("tasks", JSON.stringify(fTasks));
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id, type: "TASK" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`relative p-4 mt-8 shadow-md rounded-md ${isDragging ? "opacity-25" : "opacity-100"} cursor-grab bg-black text-green-300`}
    >
      <p>{task.name}</p>
      <button
        className="absolute top-4 right-1 text-red-400"
        onClick={() => handleRemove(task.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
};
