import CardLivro from "../components/CardLivro";
import { useListaLivros } from "../hooks/useApi";
import { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { usuarioNome } = useContext(AuthContext);
  if (usuarioNome === "Visitante") return <Navigate to="/cadastro-usuario" />;

  const livros = useListaLivros();
  return (
    <div>
      <h1>Lista</h1>
      <div className="d-flex col-12 gap-2 mt-3 justify-content-start flex-wrap">
        {livros.map((livro) => (
          <CardLivro
            key={livro.id}
            id={livro.id}
            titulo={livro.titulo}
            genero={livro.genero}
            status={livro.status}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
