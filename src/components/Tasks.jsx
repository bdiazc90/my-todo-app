import Card from "react-bootstrap/Card";

export default function Tasks(props) {
	return (
		<div>
			<h3 style={{ textAlign: "left" }}>Lista de Tareas</h3>
			<div className="tareas">
				{props.tareas.map((tarea) => (
					<Card key={tarea.id} bg={tarea.variant} text="white" style={{ width: "18rem" }} className="mb-2">
						<Card.Body>{tarea.text}</Card.Body>
					</Card>
				))}
			</div>
		</div>
	);
}
