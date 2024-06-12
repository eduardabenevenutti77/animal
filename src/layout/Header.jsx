import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand={"lg"}>
        <Navbar.Brand as={Link} className="logo">Centro de Adoção</Navbar.Brand>
        <Navbar.Toggle aria-controls="minhanav" />
          <Navbar.Text as={Link} to="/">
            Inicial
          </Navbar.Text>
          <Navbar.Text as={Link} to="/album">
            Animais Disponíveis
          </Navbar.Text>
          <Navbar.Text as={Link} to="/contato">
            Entre em Contato
          </Navbar.Text>
          <Navbar.Text as={Link} to="/sobre">
            Sobre o Projeto
          </Navbar.Text>
    </Navbar>
  );
}