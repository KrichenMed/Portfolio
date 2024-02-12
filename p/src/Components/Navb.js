import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navb() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Mohamed Krichene</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}

export default Navb;
