import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/astronaut.png";
import { useEffect } from "react";
import { useState } from "react";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Front-End", "PHP", "React"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100 - Math.random() * 50);
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((loopNum + 1) % toRotate.length);
      setDelta(500);
    }
  };
  return (
    <section className="banner" id="home">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenue sur mon portfolio</span>
            <h1>
              {`Loic Laborderie - `}
              <p className="wrap">Développeur {text}</p>
            </h1>
            <p className="description">
              Développeur web junior avec une passion pour la création de sites
              web intuitifs et une forte volonté d'apprendre et d'évoluer dans
              le domaine.
            </p>
            <button>
              <a href="#connect">
                Me contacter <ArrowRightCircle size={25} />
              </a>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
