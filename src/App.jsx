import { Container } from "react-bootstrap";
import FormularioTarea from "./components/FormularioTarea"
//importar la hoja de estilo
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css';

function App() {
  return (
    <>
    <Container className="my-5">
    <h1 className="text-center">Lista de tareas</h1>
      <hr />
      <FormularioTarea/>
    </Container>
    </>
  );
}

export default App;
