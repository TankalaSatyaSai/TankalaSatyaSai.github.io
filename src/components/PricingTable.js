import React from 'react';
import './PricingTable.css';
import int1 from "../assets/img/solinas.jpeg";
import int2 from "../assets/img/iitm.jpeg";
import int3 from "../assets/img/zoho.png";

const PricingTable = () => {
  return (
    <section className="pricing-section" id="Experiences">
      <div className="container-fluid" style={{paddingTop:"0px",marginTop:"0px"}}>
        <div className="container">
          <div className="row">
            {/* Pricing Cards */}
            <h style={{color:"skyblue",textAlign: "center",paddingBottom:"80px",fontWeight:"Bold",fontSize:"40px"}}>INTERNSHIPS</h>
            {/* Card 1 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <div className="title">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  <h2>Solinas</h2>
                </div>
                <div className="price">
                  <img src={int1} alt="Basic Plan" class="internship-img" />
                  <h2>Mechanical design internship</h2>
                </div>
                <div className="option">
                  <ul>
                    <li> <i className="fa fa-check" aria-hidden="true"></i> Contributed to the innovative "HomoSEP ATOM," a cleaning robot that achieved a 95% reduction in manual scavenging accidents.</li>
                    <li> <i className="fa fa-check" aria-hidden="true"></i> Engineered a unique scissor lift mechanism with a linear guide, ensuring stability for an 80 kg payload, and integrated a winch system for precise actuation.</li>
                    <li> <i className="fa fa-check" aria-hidden="true"></i> Conducted comprehensive static structural, fatigue failure, and dynamic analyses to select optimal materials for the scissor lift mechanism.                                 </li>
                  </ul>
                </div>
                <a href="#">View Certificate</a>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <div className="title">
                  <i className="fa fa-plane" aria-hidden="true"></i>
                  <h2>IIT Madras</h2>
                </div>
                <div className="price">
                  <img src={int2} alt="Standard Plan" class="internship-img"/>
                  <h2>Robotics Summer Internship</h2>
                </div>
                <div className="option">
                  <ul>
                    <li> <i className="fa fa-check" aria-hidden="true"></i> Developed an Outdoor Autonomous Robot from scratch with an optimal mechanical design, which can traverse outdoor terrains effectively.</li>
                    <li> <i className="fa fa-check" aria-hidden="true"></i>Performed comprehensive power calculations, aligned diverse sensor requirements to create a cohesive power supply, and curated a detailed Bill of Materials and schematic for electronic integration.</li>
                    <li> <i className="fa fa-check" aria-hidden="true"></i>Integrated Intel Realsense D455 and Velodyne VLP 16 3D Lidar with ROS, visualizing RGBD and 3D point clouds in Rviz for autonomous navigation.</li>
                  </ul>
                </div>
                <a href="#">View Certificate</a>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-sm-4">
              <div className="card text-center">
                <div className="title">
                  <i className="fa fa-rocket" aria-hidden="true"></i>
                  <h2>ZOHO</h2>
                </div>
                <div className="price">
                  <img src={int3} alt="Premium Plan" class="internship-img" />
                  <h2>Robotics Development Intern</h2>
                </div>
                <div className="option">
                  <ul>
                    <li> <i className="fa fa-check" aria-hidden="true"></i> Developing a security surveillance robot to monitor a large two-storey bike parking facility that accommodates an average of 5000 bikes. </li>
                    <li> <i className="fa fa-check" aria-hidden="true"></i> Implemented line tracking with a robust sensor to navigate a complex path and lane detection using RFID sensors for bike position tracking.</li>
                    <li> <i className="fa fa-check" aria-hidden="true"></i> Implemented ultrasound-based obstacle avoidance and horn indication with Raspberry Pi interface for navigation safety. Enhanced efficiency to 98% through AI-driven lane detection using dual camera video capture.</li>
                  </ul>
                </div>
                <a href="#">View Certificate</a>
              </div>
            </div>
            {/* End of Pricing Cards */}

          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTable;
