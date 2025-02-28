import { Container, Row, Col } from "react-bootstrap";

import "./Contact.css";
const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault(); 
  
    const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const name = nameInput.value;
  const email = emailInput.value;
  const subject = subjectInput.value;
  const message = messageInput.value;
  
    const whatsappNumber = "+919440988874";
  
    const whatsappMessage = `Hello, I am ${name}. %0A
    Email: ${email} %0A
    Subject: ${subject} %0A
    Message: ${message}`;
  
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
    window.open(whatsappURL, "_blank");
    nameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";

  };

  return (
    <div>
     
        <center> <h2>Contact</h2> </center>
    
      <br />
      <Container>
      <center><p>Feel free to connect for collaborations, discussions, 
        or exciting opportunities. 
        Reach out via WhatsApp or email—I'm happy to assist!</p></center>
        <Row>
          <Col md={4} className="address p-3">
            <div className="section">
              <div className="contacticon">
                <img
                  src="../../../icons8-location-96.png"
                  style={{ height: "40px", width: "40px" }}
                  alt=""
                />
              </div>
              <div>
                <h5>
                  <strong>Address</strong>
                </h5>
                <p>
                  105/3, GIta Residency, Dharmapuri Colony, Uppal,
                  Hyderabad,500039
                </p>
              </div>
            </div>
            <div className="section">
              <div className="contacticon">
                <img
                  src="../../../icons8-call-100.png"
                  style={{ height: "40px", width: "40px" }}
                  alt=""
                />
              </div>
              <div>
                <h5>
                  <strong>Call</strong>
                </h5>
                <p>
                 +91 9440988874
                </p>
              </div>
            </div>
            <div className="section">
              <div className="contacticon">
                <img
                  src="../../../icons8-email-100.png"
                  style={{ height: "40px", width: "40px" }}
                  alt=""
                />
              </div>
              <div>
                <h5>
                  <strong>Email Us</strong>
                </h5>
                <p>
                 dariyakondapalli@hotmail.com
                </p>
              </div>
            </div>
            <div className="maploaction">
            <iframe title="Google Map"  width="100%"
        height="350"  loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d384.0416304940655!2d78.56048522930003!3d17.409723606371692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb994a1b554683%3A0x8e8f317018d18efa!2s105%2F3%2C%20Annapurna%20Nagar%2C%20GIta%20Residency%2C%20Dharmapuri%20Colony%2C%20Uppal%2C%20Hyderabad%2C%20Telangana%20500039!5e1!3m2!1sen!2sin!4v1740636435956!5m2!1sen!2sin" ></iframe>
       
            </div>
          </Col>
          <Col md={7} className="resister p-3">
            <form action="" className="form">
              <div>
               <span> <label htmlFor="name">Your Name</label>
               <input type="text" id="name"/></span>
               <span> <label htmlFor="email">Your Email</label>
               <input type="text" id="email"/></span>
              </div>
              <br /> 
              <div className="subject">
               
               <label htmlFor="subject">Subject</label>
               <input type="text" id="subject"/>
               
              </div>
              <br />
              <div className="message">
              <label htmlFor="message">Message</label>
              <textarea type="text" id="message" placeholder="Type here..." />

              </div>
              <center><button type="submit" onClick={handleSubmit}   >Submit</button></center>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
