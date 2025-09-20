import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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

    setTasks(newTasks); // Atualiza os states
  }

  function onDeleteTaskClick(taskId) {
    const DeleteTask = tasks.filter((task) => task.id !== taskId);
    setTasks(DeleteTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: uuidv4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]); //altera o state trazendo tudo q tem dentro dele e tbm colocando uma nova Task
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tasks
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          test="prop TEST"
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
