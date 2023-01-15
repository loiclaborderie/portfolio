import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import php from "../assets/img/php.png";
import scss from "../assets/img/sass.png";
import symfony from "../assets/img/symfony.png";
import mysql from "../assets/img/sql.png";
import colorSharp from "../assets/img/color-sharp.png";

function Competences() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skills" id="skills">
      <Container fluid>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Compétences</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                ipsa, iusto excepturi inventore ducimus ipsam minus magnam
                doloribus nam maiores laboriosam. Reprehenderit doloremque
                debitis voluptate architecto adipisci sit, enim hic?
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
              >
                <div className="item">
                  <img src={html} alt="Image" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Image" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={scss} alt="Image" />
                  <h5>SCSS</h5>
                </div>
                <div className="item">
                  <img src={react} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={php} alt="Image" />
                  <h5>PHP</h5>
                </div>
                <div className="item color-fix">
                  <img src={symfony} alt="Image" />
                  <h5>Symfony</h5>
                </div>
                <div className="item">
                  <img src={mysql} alt="Image" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img class="background-image-left" src={colorSharp} alt="" />
    </section>
  );
}

export default Competences;
