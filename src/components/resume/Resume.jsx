import "./Resume.css";
import { Container, Row, Col,Button } from "react-bootstrap";
const Resume = () => {
  return (
    <div>
      
        <center> <h2>Resume</h2> </center>
      
     <br />
      <Container className="resume">
      <center>
        <p>
        A results-driven MERN Stack Developer with a passion
        for building dynamic and user-friendly web applications. 
        Skilled in front-end and back-end technologies, I strive to create seamless 
        digital experiences with innovation and efficiency.
        </p>
      </center>
        <Row>
          <Col md={6} className="p-3">
            <div className="resume">
              <h4 className="resume-title">Sumary</h4>
              <div className="resume-item">
                <h5>Dariya Hussein Kondapalli</h5>
                <p>
                 
                    I am a MERN Stack Developer skilled in React.js, Node.js,
                    Express.js, and MongoDB. I developed a food delivery
                    platform with a Vendor Dashboard and Customer Website,
                    integrating payment gateways. My expertise includes
                    responsive web applications, REST API integration,
                    authentication, and problem-solving, with experience in
                    customer service and technical support.
                  
                </p>
                <ul>
                  <li>Uppal,Hydrabad</li>
                  <li>+91 9440988874</li>
                  <li>dariyakondapalli@hotmail.com</li>
                </ul>
              </div>
            </div>
            <div className="resume">
              <h4 className="resume-title">Education</h4>
              <div className="resume-item">
                <h5>Diploma in Electrical and Electronics Engineering</h5>
                <h6>2011 - 2015</h6>
                <p>State Bord of Technical Education ,Andhra Pradesh</p>
                <p>
                  {" "}
                  I have a strong foundation in electrical and electronics
                  engineering with expertise in electrical machines, power
                  systems. I have also successfully completed a project on
                  wireless power transmission, showcasing my skills in
                  innovative electrical solutions.
                </p>
              </div>

              <div className="resume-item">
                <h5>
                  Bachelor of Technology in Electrical and Electronics
                  Engineering
                </h5>
                <h6>2015 - 2018</h6>
                <p>JNTU Kakinada University ,Andhra Pradesh</p>
                <p>
                  I have strong expertise in electrical machines, power systems,
                  and wiring. I have also completed a project on solar-based
                  wireless power transmission, showcasing my skills in renewable
                  energy and innovative electrical solutions
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="p-3">
            <div className="resume">
              <h4 className="resume-title">Work Experience </h4>
              <div className="resume-item">
                <h5>Amazon – Customer Service Associate </h5>
                <h6>July 2023 – Dec 2023</h6>
                <ul>
                  <li>
                    Resolved customer issues efficiently, ensuring high
                    satisfaction.{" "}
                  </li>
                  <li>
                    Provided end-to-end customer support, troubleshooting
                    technical and account-related issues via email, and chat
                  </li>
                  <li>
                    Developed strong problem-solving and communication skills.
                  </li>
                  <li>
                    Adapted to technology-driven workflows for handling queries.{" "}
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h5>SRK Engineering College – Technical Lab Assistant </h5>
                <h6>Jan 2018 – July 2023</h6>
                <ul>
                  <li>Installed and updated software and hardware systems </li>
                  <li>
                    Conducted electrical-related work in the institute’s
                    electrical labs, maintaining and troubleshooting laboratory
                    equipment
                  </li>
                  <li>
                    Developed training materials and presentations for lab usage{" "}
                  </li>
                  <li>
                    Assisted students and faculty in hands-on projects,
                    providing technical guidance and support.{" "}
                  </li>
                  <li>
                    Conducted troubleshooting and technical support for laptops,
                    desktops, and lab equipment{" "}
                  </li>
                  <li>
                    Managed administrative tasks, including purchase orders,
                    salary statements, attendance reports, and result analysis
                    using Microsoft Excel.
                  </li>
                </ul>
              </div>
            </div>

            <div className="resume">
              <h4 className="resume-title">Certifications</h4>
              <div className="resume-item">
                {/* <h5>Amazon – Customer Service Associate </h5>
                <h6>July 2023 – Dec 2023</h6> */}
                <ul>
                  <li>
                    <strong>
                      Web Development Certification{" "}
                      <p>
                        I have earned a Web Development Certification from NSDC,
                        Skill India Digital Hub, enhancing my expertise in
                        front-end and back-end technologies.
                      </p>
                    </strong>
                  </li>
                  <li>
                    <strong>AWS Academy Graduate</strong>
                    <p>
                      I am an AWS Academy Graduate in Cloud Foundations,
                      equipping me with a strong understanding of cloud
                      computing and AWS services.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <center className="download"><p>Click the button below to download my resume:</p>
      <Button 
        variant="dark" 
        href="../../../public/DARIYA HUSSEIN MERN.pdf" 
        download="Dariya Hussein Resume.pdf"
        target="_blank"
      >
        Download Resume
      </Button></center>
    </div>
  );
};

export default Resume;
