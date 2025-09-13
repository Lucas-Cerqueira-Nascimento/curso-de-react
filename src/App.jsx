import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar Programação",
      description:
        "Estudar Programaçõa para se tornar um desenvolvedor full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar inglês para se tornar fluente.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler um Livro",
      description: "ler algum livro",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskID) {
    // Pega o id
    const newTasks = tasks.map((task) => {
      // Preciso Atualizar Essa Tarefa
      if (taskID === task.id) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      // não preciso atualizar essa tarefa
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tasks
        </h1>
        <AddTask />
        <Tasks tasks={tasks} test="prop TEST" onTaskClick={onTaskClick} />
      </div>
    </div>
  );
}

export default App;
