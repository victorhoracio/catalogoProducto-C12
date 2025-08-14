import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login=()=>{
    return(
        <section className="container">
            <h1 className="display-4 my-3">Login</h1>
            <Row xs={1} md={2}>
                <Col>
                 <Form>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Ej. Juan Perez@gmail.com" />
        <Form.Text className="text-danger">
          aqui muestro el error
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Contraseña" />
        <Form.Text className="text-danger">
          aqui muestro el error
        </Form.Text>
      </Form.Group>
      
      <Button variant="success" type="submit">
       Enviar
      </Button>
    </Form>
   </Col>
   <img src="https://images.pexels.com/photos/1475001/pexels-photo-1475001.jpeg" alt="Imagen de cafe" className="img-login rounded-3"/>
   <Col>
   </Col>

            </Row>
           
        </section>
    );
};
export default Login; 