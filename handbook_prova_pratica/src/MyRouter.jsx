import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PaginaErro from "./pages/PaginaErro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CadastrarLivro from "./pages/CadastrarLivro";
import EditarLivro from "./pages/EditarLivro";
import CadastroUsuario from "./pages/CadastroUsuario";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PaginaErro />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cadastro-usuario",
        element: <CadastroUsuario />,
      },
      {
        path: "/cadastrar-livro",
        element: <CadastrarLivro />,
      },
      {
        path: "/editar-livro/:id",
        element: <EditarLivro />,
      },
    ],
  },
]);

export default router;
