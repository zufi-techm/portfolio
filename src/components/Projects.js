import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import ecommerce from "../assets/img/ecommerce.png";
import messenger from "../assets/img/whatsapp.png";
import ebay from "../assets/img/ebay.jpeg";
export const Projects = () => {
  const projects = [
    {
      title: "Ecommerce Website",
      description: "A website to buy and sell electronic products",
      imgUrl: ecommerce,
      link: "https://github.com/zufi-techm/multivendor_ecommerce_app",
    },
    {
      title: "Messenger App",
      description:
        "An app which allows you to send text messages anytime, anywhere",
      imgUrl: messenger,
      link: "https://github.com/zufi-techm/",
    },
    {
      title: "CRM system",
      description: "A customer relationship management system",
      imgUrl: projImg2,
      link: "https://github.com/zufi-techm/CRM-system",
    },
    {
      title: "Ebay ecommerce site clone",
      description: "Business startup",
      imgUrl: ebay,
      link: "https://github.com/zufi-techm/ebay",
    },
    {
      title: "Easy Bank Landing page",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://zufi-techm.github.io/real-estate-landing-page/",
    },
    {
      title: "Multi-step form",
      description: "Design & Development",
      imgUrl: projImg1,
      link: "https://github.com/zufi-techm/multi-stepform",
    },

    {
      title: "Music player",
      description: "Design & Development",
      imgUrl: projImg3,
      link: "https://github.com/zufi-techm/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Completed over 20 full stack projects.. Here are a few of
                    them🙂
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                onClick={(e) => {
                                  window.location = project.link;
                                }}
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p></p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
