import { Button, Form } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    //arregloTareas.push() no puedo usar un push en un state
    //se utiliza en cambio un spread (...), que hace una copia original y agrega en la última posición lo que quiero. En este caso guarda todo lo que está en arregloTareas, y al final agrega "tarea".
    setArregloTareas([...arregloTareas, tarea]);
    //limpiar el input
    setTarea('');
  }

  return (
    <>
      <Form className="my-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="formTarea">
          <Form.Control
            type="text"
            placeholder="Tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea arregloTareas={arregloTareas} ></ListaTarea>
    </>
  );
};

export default FormularioTarea;
