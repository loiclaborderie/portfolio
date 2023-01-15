import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar variant="dark" className={scrolled ? "scrolled" : ""}>
      <Container fluid className="nav-container">
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            href="#home"
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("home")}
          >
            Menu
          </Nav.Link>
          <Nav.Link
            href="#skills"
            className={
              activeLink === "skills" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("features")}
          >
            Compétences
          </Nav.Link>
          <Nav.Link
            href="#projects"
            className={
              activeLink === "projects" ? "active navbar-link" : "navbar-link"
            }
            onClick={() => onUpdateActiveLink("projects")}
          >
            Projets
          </Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://twitter.com/">
              <img src={navIcon1} alt="icone" />
            </a>
            <a href="https://twitter.com/">
              <img src={navIcon2} alt="icone" />
            </a>
            <a href="https://twitter.com/">
              <img src={navIcon3} alt="icone" />
            </a>
          </div>
          <button
            className="vvd"
            onClick={() => {
              console.log("test");
            }}
          >
            <span>Me contacter</span>
          </button>
        </span>
      </Container>
    </Navbar>
  );
}

export default NavBar;
