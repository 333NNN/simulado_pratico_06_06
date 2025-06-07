import React from "react";
import { Button, FloatingLabel, Form, Col, Row } from "react-bootstrap";

const CadastroUsuario = () => {
  return (
    <div className="w-50 mx-auto mt-5">
      <h1 className="text-center mb-4">Cadastro</h1>
      <Form>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInputNome"
              label="Nome"
              className="mb-3"
            >
              <Form.Control size="lg" type="text" placeholder=" " />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInputEmail"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="" />
            </FloatingLabel>
          </Col>
        </Row>
      </Form>

      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "10px" }}
      >
        <Button variant="danger">Cadastrar</Button>
      </div>
    </div>
  );
};

export default CadastroUsuario;
