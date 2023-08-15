import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = () => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between rounded">
        Tarea 1
        <Button variant="danger">Eliminar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;