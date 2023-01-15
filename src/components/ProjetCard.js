import React from "react";
import Col from "react-bootstrap/Col";

function ProjetCard({ imageUrl, description, titre }) {
  return (
    <Col md={6} className="projet">
      <div className="proj-imgbx">
        <img src={imageUrl} alt="image projet" />
        <div className="projet-txt">
          <h4>{titre}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
}

export default ProjetCard;
