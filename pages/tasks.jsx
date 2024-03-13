import { useEffect, useState } from "react";
import { CreateTask } from "@/components/Trello/components/CreateTask";
import { ListTask } from "@/components/Trello/components/ListTask";
import toast, { Toaster } from 'react-hot-toast';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("Stored tasks:", storedTasks);
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    } else {
      console.log("No tasks in localStorage. Initializing with default tasks.");
      const initialTasks = [
        { id: 1, name: "Task 1", status: "todo" },
        { id: 2, name: "Task 2", status: "todo" },
        { id: 3, name: "Task 3", status: "inprogress" },
        { id: 4, name: "Task 4", status: "inprogress" },
        { id: 5, name: "Task 5", status: "completed" },
        { id: 6, name: "Task 6", status: "completed" },
      ];
      setTasks(initialTasks);
      localStorage.setItem("tasks", JSON.stringify(initialTasks));
    }
  }, []);
  

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster /> 
      <div className="bg-black text-green-300 w-full min-h-screen flex flex-col items-center pt-12 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Hello, Trello</h1>
        <div className="max-w-screen-lg w-full px-4">
          <CreateTask tasks={tasks} setTasks={setTasks}/>
          <ListTask tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;