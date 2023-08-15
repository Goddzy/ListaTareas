import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between rounded">
        {nombreTarea}
        <Button variant="danger">Eliminar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;