import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  const setExpanded = (e)=>{
    e.preventDefault()
    window.location.reload()
  } 
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container >
        <Navbar.Brand className="home" href="/">Dariya</Navbar.Brand>
        <div className="icon">
          <Nav.Link href="https://github.com/dariya-dot" target="_blank">
            <img className="iconImage" src="../../../github.svg" alt="" />
          </Nav.Link>
          <Nav.Link href="https://wa.me/+919440988874" target="_blank">
            <img className="iconImage" src="../../../whatsapp.svg" alt="" />
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/dariya-hussein/"
            target="_blank"
          >
            <img className="iconImage" src="../../../linkedin.svg" alt="" />
          </Nav.Link>
          <Nav.Link href="mailto:dariyakondapalli@hotmail.com" target="_blank">
            <img className="iconImage" src="../../../envelope.svg" alt="" />
          </Nav.Link>
        </div>
        <Navbar.Toggle    aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>

          <Nav  onClick={setExpanded} >
            <Nav.Link className="links"  as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="links"  as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link className="links" as={Link} to="/resume">
              Resume
            </Nav.Link>
            <Nav.Link className="links" as={Link} to="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="links" as={Link} to="/projects">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
