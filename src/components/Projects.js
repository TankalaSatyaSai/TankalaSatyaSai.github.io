import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Collaborative Bots for Automated Logistics and Transport",
      description:"Leading a 12-member team to develop two 4WD mecanum wheel-based warehouse automation robots with a Jetson high-level controller and a 70kg payload capacity with passive suspension.Building three additional robots with robotic arms, package pick-and-place mechanisms, and conveyor systems to enhance functionality.",
      imgUrl: projImg1,
    },
    {
      title: "InnoGuide: An Advanced Intelligent Guiding Robot",
      description: "Leading navigation module development, integrating advanced algorithms and large language models for precise robot guidance in the CFI building, enhancing visitor experience and responsiveness.Published a paper, “Integrating speech models and LLMs for conversational navigation bots,” in  AI ML Systems 2023 International Conference.",
      imgUrl: projImg2,
    },
    {
      title: "Intelligent Tennis Trainer",
      description: "Leading the development of an autonomous mobile tennis ball robot, serving as a tennis partner and coach.Overseeing the design, integration, and implementation of electrical, mechanical, and software components.",
      imgUrl: projImg3,
    },
    {
      title: "Krishaka: Multi-Purpose Agricultural Vehicle",
      description: "Developed a Simulink model for the robot's battery management and power electronics, fine-tuning motor control parameters.Created 3D models for the robot's threshing and transplanting mechanisms, optimizing performance through Finite Element Analysis.",
      imgUrl: projImg1,
    },
    {
      title: "E-YRC (e-yantra robotics competition)",
      description: "Simulated a UGV robot with a mounted robotic arm for navigating a fruit garden, plucking ripe fruits, and placing them in designated baskets.",
      imgUrl: projImg2,
    },

  ];
  const courseProjects = [
    {
      title: "Advanced Thermal and Structural Analysis of Gas Turbine Rotor Disk",
      description: "Conducted steady-state thermo-structural analysis on a gas turbine rotor disk using ABAQUS® to evaluate stresses and deformations.Utilized axisymmetry to reduce computation time, and performed a mesh convergence study for optimal element selection.Analyzed deformation, heat flux, and stresses (von Mises, radial, hoop) in post-processing; optimized design to minimize max von Mises stress.",
      imgUrl: projImg2,
    },
    {
      title: "Micro Servo-Based RR Robotics Arm",
      description: "Designed and built a micro servo-based RR robotic arm with a provided PCB shield mounted on an Arduino UNO.Implemented color detection to pick metal cubes at green locations and drop them at user-defined blue/red spots.Integrated an LCD display, buck converter, indicator lights, and trim pots on the PCB for sensor tuning.",
      imgUrl: projImg2,
    },
  
    {
      title: "High-Pass Butterworth Filter Design",
      description: "Designed a high-pass Butterworth filter in MATLAB by converting a normalized low-pass filter using frequency transformations.Applied bilinear transformation to convert the designed analog filter into a digital filter.",
      imgUrl: projImg2,
    },
    {
      title: "Structural Optimization and Stress Analysis Using FEM",
      description: "Conducted finite element analysis to assess the impact of various hole types and configurations on the stress and deformation of plates, optimizing structural integrity.Enhanced the design of an automotive wheel disc through dynamic stress analysis, determining that oval-shaped holes offer maximum stress tolerance, resulting in a reliable and efficient design.",
      imgUrl:projImg2,
    },
    {
      title: "Design of Children's Seat for Bikes",
      description: "Designed a safe, comfortable, affordable bike seat for children that complies with safety regulations, emphasizing enhanced protection and support.Utilized Solidworks to create a 3D seat model based on collected anthropometric data, employing splines and 3D sketches for precise wireframe construction.Integrated ergonomic features into the final seat design to enhance protection and support for young children.",
      imgUrl:projImg2,
    },

      
  ];
  const researchProjects=[
    {
      title: "Multi-Robot Systems",
      description: "Developed a collaborative robot system for transporting oversized items in a warehouse, involving design, fabrication, sensor integration, PCB Design, PD control, and ROS-based joystick navigation.Working on a robust localization system leveraging Pozyx beacons, coupled with OMPL for efficient planning, and integrating a customized kinematics model tailored to our system's requirements.",
      imgUrl:projImg2,
    },{
      title: "Enhancing Indoor Localization for Mobile Robots 	",
      description: "Optimized warehouse robot localization by integrating AprilTag detection with Lidar, IMU, and odometry, achieving an X% increase in navigation accuracy.Implemented joystick steering control and analyzed bag files to refine localization accuracy using optimization algorithms.Publishing findings on localization system optimization in the IDETC-CIE ASME conference, highlighting innovative methodologies.",
      imgUrl:projImg2,
    },{
      title: "Retrofitting Legacy P3AT Robot for Modern Applications",
      description: "Revived non-operational P3AT robot with Raspberry Pi module and Xbox joystick for manual navigation.Established ROS-ARIA bridge for direct communication, enhancing robot functionality and enabling diverse projects. ",
      imgUrl:projImg2,
    },
  ];
  
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Student Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Course Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Research Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                      {
                        courseProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                  </Tab.Pane>

                    <Tab.Pane eventKey="third">
                    <Row>
                      {
                        researchProjects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                            />
                          )
                        })
                      }
                    </Row>
                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
