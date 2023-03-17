import React from "react";
import Col from "react-bootstrap/Col";
import navIcon3 from "../assets/img/github.svg";
import site from "../assets/img/site.svg";

function ProjetCard({ imageUrl, description, titre, liens }) {
  const displayGithub = liens.github ? (
    <div className="lien-github">
      <a href={liens.github}>
        <img src={navIcon3}></img>
        <span>Le code</span>
      </a>
    </div>
  ) : (
    <div className="lien-github">
      <p>Ce projet n'est pas en public</p>
    </div>
  );
  const displaySite = liens.site ? (
    <div className="lien-site">
      <a href={liens.site}>
        <img src={site}></img>
        <span>Le site</span>
      </a>
    </div>
  ) : (
    <div className="lien-site">
      <p>Ce projet n'est pas hébergé</p>
    </div>
  );

  return (
    <Col md={6} className="projet">
      <div className="proj-imgbx">
        <img className="main-img" src={imageUrl} alt="image projet" />
        <div className="projet-txt">
          <h4>{titre}</h4>
          <span>{description}</span>
          <div className="project-liens">
            {displayGithub}
            {displaySite}
          </div>
        </div>
      </div>
    </Col>
  );
}

export default ProjetCard;
