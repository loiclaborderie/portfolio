import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import ProjetCard from "./ProjetCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/projImg1.png";
import projImg2 from "../assets/img/projImg2.png";
import projImg3 from "../assets/img/projImg3.png";
import projImg4 from "../assets/img/projImg4.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Projets() {
  const projets = [
    {
      titre: "Marvel Quizzz",
      description: "Développement React",
      imageUrl: projImg4,
    },
    {
      titre: "Calculatrice",
      description: "Design et Développement",
      imageUrl: projImg3,
    },
    {
      titre: "Vêtus - En cours de développement",
      description: "Design et Développement PHP",
      imageUrl: projImg1,
    },
    {
      titre: "Copie du site Instrument",
      description: "Design et Développement",
      imageUrl: projImg2,
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container fluid>
        <Row>
          <Col>
            <TrackVisibility once>
              {({ isVisible }) =>
                isVisible && (
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeInDown animate__fast"
                        : ""
                    }
                  >
                    <h2>Projets</h2>
                  </div>
                )
              }
            </TrackVisibility>
            {/* <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              repellat error cupiditate corrupti hic, tempore saepe laborum quas
              perferendis, accusantium ratione. Eveniet, dolorem debitis? A,
              nisi! Iure quisquam voluptates ullam!
            </p> */}
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav
                className="justify-content-center align-center mb-5"
                activeKey="/home"
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
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projets.map((projets, index) => {
                      return <ProjetCard key={index} {...projets} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>lorem</Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>lorem</Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        src={colorSharp2}
        className="background-image-right"
        alt="image-background"
      />
    </section>
  );
}

export default Projets;
