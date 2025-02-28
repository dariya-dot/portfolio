import { Link } from "react-router-dom";
import "./main.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const Main = () => {
  return (
    <Container className="home-container text-center">
      <Row className="align-items-center hero-section">
        <Col md={6} className="text-section">
          <h1>Hi, I'm Dariya Hussein</h1>
          <h3>Full Stack Developer & UI/UX Enthusiast</h3>
          <p>
            Passionate about building seamless digital experiences with modern
            web technologies. Let's create something amazing together!
          </p>
          <div className="cta-buttons">
            <Button as={Link} to="/projects" variant="primary">
              View Projects
            </Button>
            <Button as={Link} to="/contact" variant="outline-primary">
              Hire Me
            </Button>
          </div>
        </Col>
        <Col md={6} className="image-section">
          <img
            src="../../../Pica-enhance-20250227202701.png"
            alt="Profile"
            className="profile-img"
          />
        </Col>
      </Row>

      <Row className="skills-preview">
        <h2>Skills</h2>
        <Col md={3}>
          <p>React.js</p>
        </Col>
        <Col md={3}>
          <p>Node.js</p>
        </Col>
        <Col md={3}>
          <p>MongoDB</p>
        </Col>
        <Col md={3}>
          <p>UI/UX Design</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
