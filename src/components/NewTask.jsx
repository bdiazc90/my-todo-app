import { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";

const variants = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

const getRandomIntegerInclusive = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function NewTask(props) {
	const [text, setText] = useState("");

	const agregarTarea = () => {
        const random = getRandomIntegerInclusive(0, variants.length);
        const newVariant = variants[random];
		console.log(text);
		const nueva_lista_tareas = [...props.tasks, { id: Date.now(), text: text, done: false, variant: newVariant }];
		props.setTasks(nueva_lista_tareas);
        setText("");
	};

	const escribiendoTarea = (e) => {
		setText(e.target.value);
	};

	return (
		<Card>
			<Card.Header>Tareas</Card.Header>
			<Card.Body>
				<Form.Label>Nueva tarea</Form.Label>
				<Form.Control type="text" placeholder="..." onChange={escribiendoTarea} value={text} />
				<Button variant="primary" onClick={agregarTarea}>
					Agregar
				</Button>
			</Card.Body>
		</Card>
	);
}
