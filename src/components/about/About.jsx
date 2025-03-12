import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = ({ data }) => {
  const midIndex = Math.ceil(data.length / 2); // Dynamically find the middle index
  const firstHalf = data.slice(0, midIndex);
  const secondHalf = data.slice(midIndex);
  return (
    <>
      <center>
        <h2 className="aboutTitle">About </h2><br />
      </center>
      <Container>
        <center><p>
        A highly motivated and detail-oriented MERN stack developer with
         a strong passion for building dynamic, scalable, and user-friendly web applications.
          Dedicated to creating seamless,
         responsive, and efficient solutions by leveraging MongoDB, Express.js, React, and Node.js.
        </p></center>
        <Row className="imageAndData">
          <Col md={4} className=" p-3 " id="imagecalss">
            <img src="../../../Pica-enhance-20250227202701.png" />
          </Col>
          <Col md={8} className="p-3">
            <h4>MERN Stack Developer | Building Scalable Web Solutions</h4>
            <p>
            With a strong foundation in both frontend and backend development,
             I specialize in crafting high-performance web applications, integrating APIs,
              and optimizing user experiences. I strive to bridge the gap between functionality
               and innovation, ensuring intuitive, secure, and engaging digital solutions.


            </p>
            <div className="list-class">
              <div>
                <ul>
                  <li>
                    <strong>Birthday:</strong>9 Jan 1996
                  </li>
                  <li>
                    <strong>Website:</strong>
                  </li>
                  <li>
                    <strong>Phone:</strong> +91 9440988874
                  </li>
                  <li>
                    <strong>City:</strong>Hyderabad ,India
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>
                    <strong>Age:</strong>29
                  </li>

                  <li>
                    <strong>Degree:</strong>graduation degree
                  </li>
                  <li>
                    <strong>Email:</strong> dariyakondapalli@hotmail.com
                  </li>
                  <li>
                    <strong>Freelance:</strong>Available
                  </li>
                </ul>
              </div>
            </div>
            <p>
            My work revolves around innovation and problem-solving, where I take pride in developing scalable,
             high-performance applications. With every project, 
            I aim to push boundaries, enhance user satisfaction, and stay ahead in the evolving tech landscape.
            </p>
          </Col>
        </Row>
        <center><h2>Skills </h2>
        <p>Technical proficiency and continuous learning define my professional journey.
           I thrive on staying updated with the latest industry trends, refining my skills,
           and applying them to build impactful digital solutions.</p></center>
        <Row>
          <Col md={6} className="p-3">
            <div>
              {firstHalf.map((item, index) => {
                return (
                  <div key={index}>
                    <div className=" skills"><div>{item.skill}</div>  <div>{item.value}%</div></div>
                    
                     <div className="fullbar">
                     <p
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${item.value}%`,
                          height: "10px",
                        }}                    
                      ></p>
                     </div>
                    
                  </div>
                );
              })}
            </div>
          </Col>
          <Col md={6} className="p-3">
          <div>
              {secondHalf.map((item, index) => {
                return (
                  <div key={index}>
                    <div className=" skills"><div>{item.skill}</div>  <div>{item.value}%</div></div>
                    
                     <div className="fullbar">
                     <p
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${item.value}%`,
                          height: "10px",
                        }}                    
                      ></p>
                     </div>
                    
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
