
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import './skills.css';
import simu from "../assets/img/19.png";
import sworks from "../assets/img/16.png";
import ansys from "../assets/img/17.png";
import abacus from "../assets/img/18.png";
import fusionE from "../assets/img/15.png";
import python from "../assets/img/4.png";
import matlab from "../assets/img/5.png";
import arduino from "../assets/img/20.png";
import linux from "../assets/img/6.png";
import ros from "../assets/img/8.png";
import nav from "../assets/img/11.png";
import gazebo from "../assets/img/9.png";
import git from "../assets/img/10.png";
import ml from "../assets/img/13.png";
import rl from "../assets/img/14.png";
import rviz from "../assets/img/21.jpeg";
import coppeliasin from "../assets/img/12.png";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container" >
            <div className="row">
              <h1 class="skills-mh">Skills</h1>
              <div className="col-4">
                    <div className="skill-bx wow zoomIn">
                      <h class="skills-h">Softwares</h>
                    <div class="swatch">
                      <div style={{ marginBottom: '10px' }}><img src={simu} alt="Meter 1" class="skills-img" /><p class="skills-p">Simulink</p></div>
                      <div><img src={sworks} alt="Meter 1" class="skills-img" /><p class="skills-p">Solid<br/>works</p></div>
                      <div><img src={ansys} alt="Meter 1" class="skills-img" /><p class="skills-p">Ansys</p></div>
                      <div><img src={abacus} alt="Meter 1" class="skills-img" /><p class="skills-p">Abacus</p></div>
                      <div><img src={fusionE} alt="Meter 1" class="skills-img" /><p class="skills-p">Fusion<br/>ECAD</p></div>
                      <div><img src={fusionE} alt="Meter 1" class="skills-img" /><p class="skills-p">Fusion<br/>MCAD</p></div>
                    </div>
                    </div>
                </div>

                <div className="col-4">
                    <div className="skill-bx wow zoomIn">
                    <h class="skills-h">Programming</h>
                    <div class="swatch">
                      <div><img src={python} alt="Meter 1" class="skills-img" /><p class="skills-p">Python</p></div>
                      <div><img src={matlab} alt="Meter 1" class="skills-img" /><p class="skills-p">Matlab</p></div>
                      <div><img src={arduino} alt="Meter 1" class="skills-img" /><p class="skills-p">Arduino</p></div>
                      <div><img src={ml} alt="Meter 1" class="skills-img" /><p class="skills-p">ML</p></div>
                      <div><img src={rl} alt="Meter 1" class="skills-img" /><p class="skills-p">RL</p></div>
                      <div><img src={git} alt="Meter 1" class="skills-img" /><p class="skills-p">Git</p></div>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="skill-bx wow zoomIn">
                      <h class="skills-h">Robotics Software</h>
                    <div class="swatch">
                      <div><img src={linux} alt="Meter 1" class="skills-img" /><p class="skills-p">Linux</p></div>
                      <div><img src={ros} alt="Meter 1" class="skills-img" /><p class="skills-p">ROS-1&2</p></div>
                      <div><img src={nav} alt="Meter 1" class="skills-img" /><p class="skills-p">Nav-2</p></div>
                      <div><img src={coppeliasin} alt="Meter 1" class="skills-img" /><p class="skills-p">coppeliasin</p></div>
                      <div><img src={gazebo} alt="Meter 1" class="skills-img" /><p class="skills-p">Gazebo</p></div>
                      <div><img src={rviz} alt="Meter 1" class="skills-img" /><p class="skills-p">RViz</p></div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
