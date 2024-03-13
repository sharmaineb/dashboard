import { useEffect, useState } from "react";
import { CreateTask } from "@/components/Trello/components/CreateTask";
import { ListTask } from "@/components/Trello/components/ListTask";
import toast, { Toaster } from 'react-hot-toast';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import Notepad from "@/components/Notepad";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    console.log("Stored tasks:", storedTasks);
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    } else {
      console.log("No tasks in localStorage.");
      const initialTasks = [
        { id: 1, name: "Pick Up Dry Cleaning", status: "todo" },
        { id: 2, name: "Watch: Dune 2", status: "todo" },
        { id: 3, name: "Watch: The White Lotus - Season 2", status: "inprogress" },
        { id: 4, name: "Read: All The Lovers in the Night", status: "inprogress" },
        { id: 5, name: "Watch: Monarch: Legacy of Monsters", status: "completed" },
        { id: 6, name: "Watch: The Bear", status: "completed" },
        { id: 7, name: "Watch: House of Ninjas", status: "inprogress" },
        { id: 8, name: "Watch: The Glory", status: "completed" },
        { id: 9, name: "Buy a new dog harness for Kai", status: "todo" },
        { id: 10, name: "Schedule Appointment: Service Car", status: "todo" },
        { id: 11, name: "Read: The Psychology of Money", status: "inprogress" },
        { id: 12, name: "Read: Before the Coffee Gets Cold", status: "completed" }
      ];
      setTasks(initialTasks);
      localStorage.setItem("tasks", JSON.stringify(initialTasks));
    }
  }, []);
  

  return (
    <DndProvider backend={HTML5Backend}>
      <Toaster /> 
      <div className="bg-black text-cyan-200 w-full min-h-screen flex flex-col items-center pt-12 pb-12">
        <div className="max-w-screen-lg w-full px-4">
          <CreateTask tasks={tasks} setTasks={setTasks}/>
          <ListTask tasks={tasks} setTasks={setTasks}/>
        </div>
      </div>
      <Notepad />
    </DndProvider>
  );
}

export default App;