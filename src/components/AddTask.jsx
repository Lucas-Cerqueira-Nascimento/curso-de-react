import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // console.log(title); é que nem o addEventListener("input")
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col ">
      <input
        type="text"
        placeholder="Digite o Título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          // Verificar se o titulo e a descrição estão preenchidos e se n tem espaço em branco
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o campo Título e descrição");
          } else {
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
