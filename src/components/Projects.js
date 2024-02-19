import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import SeekerIn from "../assets/img/h51.png";
import Clinic from "../assets/img/h52.png";
import NFT from "../assets/img/h53.png";
import pc1 from "../assets/img/onepc.png";
import pc2 from "../assets/img/twopc.jpg";
import pc3 from "../assets/img/threepc.jpg";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects1 = [
    {
      title: "m.xunli10.com",
      description: "Front-End Development",
      imgUrl: SeekerIn,
    },
    {
      title: "mbw.xunli05.com",
      description: "Front-End Development",
      imgUrl: Clinic,
    } ,
    {
      title: "Yongle.com",
      description: "Front-End Development",
      imgUrl: NFT,
    },
   
  ];
  const projects2 = [
    {
      title: "xunli.bet",
      description: "Frontend Development",
      imgUrl: pc1,
    },
    {
      title: "pcw.xunli10.com",
      description: "Frontend Development",
      imgUrl: pc2,
    },
    {
      title: "pc.yongle.com",
      description: "Frontend Development",
      imgUrl: pc3,
    }
  ];
  const projects3 = [
    {
      title: "Travel the World",
      description: "Business Website",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Business Website",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Frontend Development",
      imgUrl: projImg3,
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
                <p>Throughout my web development career, I have been fortunate to work on a number of exciting and challenging projects, including [list of projects]. These projects have allowed me to demonstrate my expertise in development technologies and have given me the opportunity to take on various roles. I am proud of the results I have achieved on these projects and am always looking for new opportunities to apply my skills and experience to make a positive impact.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Front-End Projects Mobile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Front-End Projects PC</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other Websites</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <Row>
                        {
                          projects1.map((project, index) => {
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
                          projects2.map((project, index) => {
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
                          projects3.map((project, index) => {
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
