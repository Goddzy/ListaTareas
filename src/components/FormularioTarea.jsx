import { Button, Form } from "react-bootstrap";
import ListaTarea from "./ListaTarea";
import { useState, useEffect } from "react";

const FormularioTarea = () => {
  //buscar las tareas del localStorage si es que existen
  const tareasLocalStorage = JSON.parse(localStorage.getItem('arregloTareasKey')) || [];

  const [tarea, setTarea] = useState("");
  const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage);

  //ciclo de vida de un componente 
  //el arreglo vacío permite que el useEffect solamente se ejecute en el montaje, no en la actualización del proyecto (el montaje es cuando la página carga). Si quiero que se ejecuten en ambos simplemente se borra el array vacío. En este caso, al colocar arregloTareas en el array, estoy diciendo que el useEffect se ejecute solamente en el montaje y actualización del arregloTareas, es decir, cuando el state de éste sea modificado
  useEffect(()=>{
    localStorage.setItem('arregloTareasKey', JSON.stringify(arregloTareas));
    console.log('prueba del ciclo de vida');
  }, [arregloTareas])
   

  function handleSubmit(e) {
    e.preventDefault();
    //arregloTareas.push() no puedo usar un push en un state
    //se utiliza en cambio un spread (...), que hace una copia original y agrega en la última posición lo que quiero. En este caso guarda todo lo que está en arregloTareas, y al final agrega "tarea".
    setArregloTareas([...arregloTareas, tarea]);
    //limpiar el input
    setTarea("");
  }

  function borrarTarea(nombre){
    let arregloModificado = arregloTareas.filter((item)=> item !== nombre);
    //actualizar el state
    setArregloTareas(arregloModificado);
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
      <ListaTarea arregloTareas={arregloTareas} borrarTarea={borrarTarea}></ListaTarea>
    </>
  );
};

export default FormularioTarea;
