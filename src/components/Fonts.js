import React from "react";
import Container from "react-bootstrap/Container";
import colorSharp3 from "../assets/img/color-sharp3.png";

function Fonts() {
  return (
    <section id="fonts">
      <Container fluid>
        <div id="text">
          <div className="line">
            <p className="word">Loic</p>
            <p className="word">Laborderie</p>
          </div>
          <div className="line">
            <p className="word">front-end</p>
            <p className="word">&</p>
            <p className="word">php</p>
          </div>
          <div className="line">
            <p className="word">voir</p>
            <p className="word">mon</p>
            <a className="word fancy" id="github" href="https://github.com/loiclaborderie" target="_blank">
              <span className="letter">g</span>
              <span className="letter">i</span>
              <span className="letter">t</span>
              <span className="letter">h</span>
              <span className="letter">u</span>
              <span className="letter">b</span>
            </a>
          </div>
          <div className="line">
            <a className="word fancy" id="mail" href="mailto:loiclaborderie@gmail.com">
              <span className="letter">e</span>
              <span className="letter">m</span>
              <span className="letter">a</span>
              <span className="letter">i</span>
              <span className="letter">l</span>
            </a>
            <a className="word fancy" id="linkedin" href="https://www.linkedin.com/in/loic-laborderie-465422153/" target="_blank">
              <span className="letter">l</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
              <span className="letter">k</span>
              <span className="letter">e</span>
              <span className="letter">d</span>
              <span className="letter">i</span>
              <span className="letter">n</span>
            </a>
          </div>
        </div>
      </Container>
      <img src={colorSharp3} className="background-image-two" alt="image-background" />
    </section>
  );
}

export default Fonts;
