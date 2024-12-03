import { useState } from "react";
import Tasks from "./components/Tasks";
import NewTask from "./components/NewTask";
import "./App.css";

const tareas_prueba = [
	{ id: 1, text: "Tarea 1", variant: "primary", done: false },
	{ id: 2, text: "Tarea 2", variant: "danger", done: false },
	{ id: 3, text: "Tarea 3", variant: "success", done: false },
];

function App() {
	const [tasks, setTasks] = useState(tareas_prueba); // Estado principal de la aplicación.

	return (
		<main>
      <NewTask tasks={tasks} setTasks={setTasks} />
			<Tasks tareas={tasks} />
		</main>
	);
}

export default App;
