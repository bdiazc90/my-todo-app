import { useState } from "react";
import RenderTasks from "./components/RenderTasks";
import NewTask from "./components/NewTask";
import "./App.css";

// Padre: App.jsx
// Hijos: RenderTasks y NewTask
// ¿Cómo se comunican? -> A través de los props que les envía el padre.

function App() {
	const [tasks, setTasks] = useState([]); // Estado principal de la aplicación.
  // tasks: Arreglo que contiene las tareas.
  // setTasks: Función que puede modificar al arreglo tasks.

	return (
		<main>
      {/* Componente que mutará (modificará) el arreglo de tareas */}
      <NewTask tasks={tasks} setTasks={setTasks} />
      {/* Componente que renderizará el arreglo de tareas */}
			<RenderTasks tareas={tasks} />
		</main>
	);
}

export default App;
