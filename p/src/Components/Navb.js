import React from "react"; // Import useState hook
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import CustomizedSwitches from "./CustomSwitch";
import MLogoWhite from "../Media/MLogoWhite.png";
import MLogoBlack from "../Media/MLogoBlack.png";

function Navb({ isDarkTheme, onThemeChange }) {
  // Function to handle switch click
  const handleSwitchClick = (newSwitchState) => {
    onThemeChange(newSwitchState);
  };

  return (
    <Navbar
      expand="lg"
      data-bs-theme={isDarkTheme ? "dark" : "light"} // Correct reference to isDarkTheme
      style={{ backgroundColor: isDarkTheme ? "#000" : "#fff" }}
    >
      <Container>
        <Navbar.Brand href="">
          {isDarkTheme ? (
            <img
              alt=""
              src={MLogoWhite}
              height="32"
              className="d-inline-block align-top"
            />
          ) : (
            <img
              alt=""
              src={MLogoBlack}
              height="32"
              className="d-inline-block align-top"
            />
          )}
          {""}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ borderWidth: "0px" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Project 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Project 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Project 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {/* Pass handleSwitchClick function as prop */}
            <CustomizedSwitches onSwitchClick={handleSwitchClick} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
