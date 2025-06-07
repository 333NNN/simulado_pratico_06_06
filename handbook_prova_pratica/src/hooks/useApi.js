const url = import.meta.env.VITE_API_URL;

import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

// export function useVerificaLogin() {
//   const [usuarios, setUsuarios] = useState([]);

//   const { login } = useContext(AuthContext);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const req = await fetch(`${url}/usuarios`);
//         const users = await req.json();
//         setUsuarios(users);
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//     fetchData();
//   }, []);

//   //   const verificaLogin = (data) => {
//   //     const userToFind = usuarios.find((user) => {
//   //       return user.email === data.email;
//   //     });

//   //     if (userToFind != undefined && userToFind.senha === data.senha) {
//   //       login(userToFind);
//   //       console.log("Usuário logado", userToFind.nome);
//   //       return "Login efetuado com sucesso";
//   //     } else {
//   //       return "Usuário ou senha inválidos";
//   //     }
//   //   };
//   //   return { verificaLogin };
// }

export function useListaLivros() {
  const [livros, setLivros] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const req = await fetch(`${url}/livros`);
        const livros = await req.json();
        setLivros(livros);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return livros;
}

export function useDeleteLivro() {
  const deletarLivro = async (idLivro) => {
    const req = await fetch(`${url}/livros/${idLivro}`, {
      method: "DELETE",
    });
    const res = await req.json();
    console.log("Livro deletado: ", res);
    return res;
  };
  return { deletarLivro };
}

// export function useListaCategorias() {
//   const [categorias, setCategorias] = useState();
//   console.log("AQUIIIIIIII");
//   useEffect(() => {
//     console.log("se pa aqui");
//     async function fetchData() {
//       try {
//         const req = await fetch(`${url}/categorias`);
//         console.log(req);
//         const cate = await req.json();
//         console.log(cate);
//         setCategorias(cate);
//         console.log("na real to aqui");
//       } catch (error) {
//         console.log("entrei aqui");
//         console.log(error.message);
//       }
//     }
//     fetchData();
//   }, []);
//   console.log(categorias);
//   return categorias;
// }

export function useInserirLivro() {
  const inserirLivro = async (data) => {
    const req = await fetch(`${url}/livros`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Livro inserido:", res);
    return res;
  };
  return { inserirLivro };
}

export function useBuscarLivroPorId() {
  const buscarLivroPorId = async (idLivro) => {
    const req = await fetch(`${url}/livros/${id_livro}`);
    const res = req.json();
    console.log("Livro encontrado", res);
    return res;
  };
  return { buscarLivroPorId };
}

export function useAtualizaLivro() {
  const atualizaLivro = async (data, id_livro) => {
    const req = await fetch(`${url}/livros/${id_livro}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await req.json();
    console.log("Livro atualizado:", res);
    return res;
  };
  return { atualizaLivro };
}
