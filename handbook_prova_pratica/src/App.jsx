import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import BarraNav from "./components/BarraNav";

function App() {
  return (
    <Container>
      <BarraNav />
      <Outlet />
    </Container>
  );
}

export default App;
