
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./projects.css";

const projects = [
 
  {
    id: 1,
    title: "Food Delivery Website (MERN)",
    description:
      "A full-featured food delivery website with Otp-Auth, login, cart,  and payment integration.",
    image: "/images/food-delivery.png",
    liveLink: "https://foodappfrontend-yqy8.vercel.app/",
    repoLink: "https://github.com/dariya-dot/foodappfrontend",
    video:"../../../vid/food app.mp4"
  },
  {
    id: 2,
    title: "Swiggy Vendor Dashboard (MERN)",
    description:
      "A Swiggy vendor dashboard built with MERN stack, featuring order tracking, payment integration, and WhatsApp redirection.",
    image: "/images/swiggy-dashboard.png",
    liveLink:
      "https://vender-dash-bord-git-main-dariyas-projects-4cffdeee.vercel.app/",
    repoLink: "https://github.com/dariya-dot/venderDashBord",
    video:"../../../vid/swiggy veneder dashbord.mp4"
  },
  {
    id: 3,
    title: "Online Bill Generator",
    description:
      "An online bill generator built using HTML, CSS, Bootstrap, and JavaScript. Generates bills dynamically.",
    image: "/images/bill-generator.png",
    liveLink: "https://dariya-dot.github.io/receipt-genarater/",
    repoLink: "https://github.com/dariya-dot/receipt-genarater",
    video:"../../../vid/receipt video.mp4"
  },
  {
    id: 4,
    title: "eMart Frontend App (React)",
    description: "A modern eCommerce frontend built with React, featuring a responsive UI and dynamic product display.",
    liveLink: "https://dariya-dot.github.io/emart/",
    repoLink: "https://github.com/dariya-dot/emart",
    video:"../../../vid/google search video.mp4"
  },
  {
    id: 5,
    title: "Google Homepage Replica",
    description:
      "A pixel-perfect Google homepage replica using HTML, CSS, and JavaScript.",
    image: "/images/google-homepage.png",
    liveLink: "https://dariya-dot.github.io/google-home-page/",
    repoLink: "https://github.com/dariya-dot/google-home-page",
    video:"/vid/google search video.mp4"
  },
  {
    id: 6,
    title: "Wink Search Engine Replica",
    description:
      "A search engine replica designed to mimic the UI and functionality of Wink",
    image: "/images/google-homepage.png",
    liveLink: "https://dariya-dot.github.io/wikisearch/",
    repoLink: "https://github.com/dariya-dot/wikisearch",
    video:"/vid/winki.mp4"
  },
];

const Projects = () => {
  return (


  <>
    <center><h2 >My Projects</h2></center>
  
    <Container className="mt-4">
      <center><p>ere are some of my featured projects showcasing my skills in full-stack and frontend development.</p></center> <br />
      <Row className="maincontainer">
        {projects.map((project) => (
          <Col key={project.id} className="mb-4">
            <Card className="project-card">
              <video controls width="100%" height="200px">
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="d-flex justify-content-between">
                  <Button
                    className="custom-live-btn"
                    as="a"
                    href={project.liveLink}
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                  <Button
                    className="custom-github-btn"
                    as="a"
                    href={project.repoLink}
                    target="_blank"
                  >
                    GitHub Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center mt-4">
        <Link to="/" className="btn btn-outline-primary">
          Back to Home
        </Link>
      </div>
    </Container>
  </>
  );
};

export default Projects;
