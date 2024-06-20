// Education.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import madrasImage from "../assets/img/madras.png"; 
import chaitanyaImage from "../assets/img/chaitanya.png";
import cutmImage from "../assets/img/cutm.png";

const Education = () => {
  return (
    <section className="education" id="education">
      <Container>
        <h2 className="text-center mb-5">EDUCATION DETAILS</h2>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <img src={madrasImage} alt="Madras Image" className="img-fluid mb-3" />
            
            <ul>
              <li>Dual Degree (Btech in Engineering Design & Mtech in Biomedical Engineering)</li>
              <li>Indian Institute of Technology, Madras</li>
              <li>Year of completion: 2026</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <img src={chaitanyaImage} alt="Chaitanya Image" className="img-fluid mb-3" />
            <ul>
              <li>Class XII (BIEAP)</li>
              <li>Sri Chaitanya Junior College Raman Bhavan III, Visakhapatnam</li>
              <li>Year of completion: 2021</li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <img src={cutmImage} alt="CUTM Image" className="img-fluid mb-3" />
            <ul>
              <li>Class X (CBSE)</li>
              <li>Centurion Public School , R.Sitapur,<br/> Paralakhemundi</li>
              <li>Year of completion: 2019</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;
