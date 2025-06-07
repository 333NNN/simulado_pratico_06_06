import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDeleteLivro } from "../hooks/useApi";

const CardLivro = (props) => {
  const { deletarLivro } = useDeleteLivro();

  const handleDelete = async () => {
    const deletado = await deletarLivro(props.id);
    console.log();
    alert(`Livro ${deletado.titulo} deletado com sucesso`);
    window.location.reload();
  };

  return (
    <div>
      <Card style={{ width: "15rem", height: "30rem" }}>
        <Card.Body>
          <Card.Title>Livro: {props.titulo}</Card.Title>
          <Card.Subtitle>Autor: {props.nome_autor}</Card.Subtitle>
          <Card.Text>Gênero: {props.genero}</Card.Text>
          <Card.Text>Status: {props.status}</Card.Text>
          <Card.Link href={`/editarproduto/${props.id}`}>
            <Button variant="warning">Editar</Button>
          </Card.Link>
          <Card.Link>
            <Button variant="danger" type="button" onClick={handleDelete}>
              Excluir
            </Button>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardLivro;
