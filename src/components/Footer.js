import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
import navIcon4 from '../assets/img/nav-icon4.jpg';

export const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//rf.revolvermaps.com/0/0/6.js?i=522qm9a512d&m=7&c=e63100&cr1=ffffff&f=arial&l=0&bv=90&lx=-420&ly=420&hi=20&he=7&hc=a8ddff&rs=80";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img
              src={logo}
              alt="Logo"
              style={{
                borderRadius: '30%', // Adding border radius for a circular shape
                height: '100px',    // Reducing height
                width: '100px',
                margin: "50px"      // Reducing width
              }}
            />
          </Col>
          
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/tankala-satya-sai-b12b22223/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/TankalaSatyaSai">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://www.researchgate.net/profile/Tankala-Satya-Sai">
                <img src={navIcon3} alt="" />
              </a>
              <a href="https://scholar.google.com/citations?user=Az5hOSsAAAAJ&hl=en">
                <img src={navIcon4} alt="" style={{ borderRadius: '50%', height: '30px', width: '30px' }} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <div className="contact-info-container" style={{ backgroundColor: 'grey', padding: '20px', borderRadius: '5px',fontSize:"90px" }}>
              <p style={{fontSize:"30px",color:"white",fontWeight:"bold"}}>For more details, contact through <a href="mailto:satyasai2004.edu.gmail.com">satyasai2004.edu.gmail.com</a></p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
