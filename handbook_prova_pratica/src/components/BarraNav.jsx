import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FaBookOpen } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { NavLink } from "react-router-dom";

const BarraNav = () => {
  const { usuarioNome, logout } = useContext(AuthContext);

  return (
    <div>
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">
            <FaBookOpen size="1.5rem" className="me-2 mb-2" />
            Handbook Livros
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            <Nav className="me-auto">
              <NavLink href="/cadastro-usuario">Cadastrar Usuário</NavLink>
              <Nav.Link href="/home">Livros</Nav.Link>
              <Nav.Link href="/cadastrar-livro">Cadastrar Livro</Nav.Link>
              <NavLink href="/editar-livro">Editar Livro</NavLink>
            </Nav>

            <Nav className="justify-content-end">
              <Navbar.Text style={{ color: "white", marginRight: "5px" }}>
                Usuário: "Visitante"
              </Navbar.Text>

              {usuarioNome === "Visitante" ? (
                <>
                  <Button variant="primary" href="/login">
                    Entrar
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="danger" href="/login" onClick={logout}>
                    Sair
                  </Button>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default BarraNav;
