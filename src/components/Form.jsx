import { useState } from "react";
import { Alerta } from "./Alerta";
import { v4 as uuidv4 } from "uuid";

export function Form({ tasks, setTasks }) {
  const [input, setInput] = useState("");
  const [alerta, setAlerta] = useState([]);
  const inputElement=document.getElementById('tarea');
  function handleSubmit(e) {
    e.preventDefault();
    if ([input.trim()].includes("")) {
      setAlerta([0, "No puedes añadir tareas vacías"]);
      inputElement.focus();
    } else {
      const nuevaTarea = { input, completed: false, id: uuidv4() };
      const nuevasTareas = [...tasks, nuevaTarea];
      setTasks(nuevasTareas);
      setAlerta([]);
      setInput('');
      inputElement.focus();

    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {alerta && (
        <Alerta tipo={alerta[0]} texto={alerta[1]} setAlerta={setAlerta} />
      )}
      <div className="flex w-full">
        <input
          className="shadow appearance-none border rounded mx-2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
          id="tarea"
          type="text"
          placeholder="New task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-300 transition delay-150 duration-300 focus:bg-blue-400 hover:bg-blue-400 text-white font-bold py-2 px-4 mx-2 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
