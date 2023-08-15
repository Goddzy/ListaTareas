import { Button, Form } from "react-bootstrap";

const FormularioTarea = () => {
  return (
    <Form className="my-5">
      <Form.Group className="mb-3 d-flex" controlId="formTarea">
        <Form.Control type="text" placeholder="Tarea" />

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form.Group>
    </Form>
  );
};

export default FormularioTarea;
