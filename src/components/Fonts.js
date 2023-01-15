import React from "react";
import Container from "react-bootstrap/Container";
import colorSharp3 from "../assets/img/color-sharp3.png";

function Fonts() {
  return (
    <section id="fonts">
      <Container fluid>
        <div id="text">
          <div class="line">
            <p class="word">Loic</p>
            <p class="word">Laborderie</p>
          </div>
          <div class="line">
            <p class="word">front-end</p>
            <p class="word">&</p>
            <p class="word">php</p>
          </div>
          <div class="line">
            <p class="word">voir</p>
            <p class="word">mon</p>
            <a class="word fancy" id="github" href="#" target="_blank">
              <span className="letter">g</span>
              <span className="letter">i</span>
              <span className="letter">t</span>
              <span className="letter">h</span>
              <span className="letter">u</span>
              <span className="letter">b</span>
            </a>
          </div>
          <div class="line">
            <a class="word fancy" id="mail" href="#" target="_blank">
              <span className="letter">e</span>
              <span className="letter">m</span>
              <span className="letter">a</span>
              <span className="letter">i</span>
              <span className="letter">l</span>
            </a>
            <a class="word fancy" id="linkedin" href="#" target="_blank">
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
      <img
        src={colorSharp3}
        className="background-image-two"
        alt="image-background"
      />
    </section>
  );
}

export default Fonts;
