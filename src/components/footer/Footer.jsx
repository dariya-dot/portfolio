
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import {  FaArrowUp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={4} className="text-center text-md-start">
            <h5>Dariya</h5>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </Col>
          <Col md={4} className="text-center">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <a href="https://github.com/dariya-dot" target="_blank" rel="noopener noreferrer">
              <img src="../../../github.svg" alt="GitHub" className="social-icon" />
            </a>
            <a  href="https://www.linkedin.com/in/dariya-hussein/" target="_blank" rel="noopener noreferrer">
              <img src="../../../linkedin.svg" alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://wa.me/+919440988874" target="_blank" rel="noopener noreferrer">
              <img src="../../../whatsapp.svg" alt="Twitter" className="social-icon" />
            </a>
          </Col>
        </Row>
      </Container>
      {/* <button className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button> */}
    </footer>
  );
};

export default Footer;
