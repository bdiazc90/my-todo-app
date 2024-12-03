import Card from "react-bootstrap/Card";

export default function RenderTasks(props) {
    // props.tareas = [{id: 1, text: "Hola", variant: "primary", done: false}]
	return (
		<div>
			<h3 style={{ textAlign: "left" }}>Lista de Tareas</h3>
			<div className="tareas">
				{props.tareas.map((tarea) => (
					<Card key={tarea.id} bg={tarea.variant} text="white" style={{ width: "fit-content" }} className="mb-2">
						<Card.Body>{tarea.text}</Card.Body>
					</Card>
				))}
			</div>
		</div>
	);
}
