import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Title from "./components/title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // useEffect(() => {
  //   async function fetchTasks() {
  //     // Chamar a API
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=3",
  //       {
  //         method: "GET",
  //       }
  //     );

  //     // Pegar os dados que ela retorna
  //     const data = await res.json();

  //     // Armazenar/persistir esses no STATE
  //     setTasks(data);
  //   }
  //   // Se quiser, você pode chamar uma API para pegar as Tarefas
  //   // fetchTasks();
  // }, []);

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
        <Title>Gerenciador de Tasks</Title>
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
