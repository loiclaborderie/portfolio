import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="align-items-center">
          <Col sm={6} className="text-sml-center">
            <img src={logo} className="logo" alt="logo" />
          </Col>
          <Col sm={6} className="text-center text-sml-end">
            <div className="social-icons">
              <a href="">
                <img src={navIcon1} alt="icone" />
              </a>
              <a href="">
                <img src={navIcon2} alt="icone" />
              </a>
              <a href="">
                <img src={navIcon3} alt="icone" />
              </a>
            </div>
          </Col>
          <p>Tous droits réservés, Loic Laborderie 2023</p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
