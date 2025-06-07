import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BarraNav from "./components/BarraNav";
import { AuthProvider } from "./contexts/UserContext";

function App() {
  return (
    <>
      <AuthProvider>
        <div className="App">
          <BarraNav />
          <Container>
            <Outlet />
          </Container>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
