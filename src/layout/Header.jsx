import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand={"lg"}>
        <Navbar.Brand as={Link} className="logo">Mary's App</Navbar.Brand>
        <Navbar.Toggle aria-controls="minhanav" />
          <Navbar.Text as={Link} to="/">
            Inicial
          </Navbar.Text>
          <Navbar.Text as={Link} to="/album">
            Album
          </Navbar.Text>
          <Navbar.Text as={Link} to="/contato">
            Contato
          </Navbar.Text>
          <Navbar.Text as={Link} to="/sobre">
            Sobre
          </Navbar.Text>
    </Navbar>
  );
}