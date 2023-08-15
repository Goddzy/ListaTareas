import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({nombreTarea, borrarTarea}) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between rounded">
        {nombreTarea}
        <Button variant="danger" onClick={()=>{borrarTarea(nombreTarea)}}>Eliminar</Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;