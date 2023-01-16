import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
  const formInitial = {
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitial);
  const [buttonText, setButtonText] = useState("Envoyer");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Envoi...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    let result = await response.json();
    setFormDetails(formInitial);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Votre message a été envoyé avec succès",
      });
    } else {
      setStatus({
        success: false,
        message: "Il y a eu une erreur lors de l'envoi du message",
      });
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contactez-moi" />
          </Col>
          <Col md={6}>
            <h2>Rentrons en contact</h2>
            <form
              name="contact"
              method="post"
              // onSubmit={handleSubmit}
            >
              <Row>
                <Col sm={6} className="px-1">
                  <input type="hidden" name="form-name" value="contact" />
                  <input
                    name="firstName"
                    type="text"
                    value={formDetails.prenom}
                    placeholder="Prénom"
                    onChange={(e) => onFormUpdate("prenom", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="lastName"
                    type="text"
                    value={formDetails.nom}
                    placeholder="Nom"
                    onChange={(e) => onFormUpdate("nom", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="email"
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    name="telephone"
                    type="tel"
                    value={formDetails.telephone}
                    placeholder="Téléphone"
                    onChange={(e) => onFormUpdate("telephone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    name="message"
                    rows="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
              {status.message && (
                <Col className="sentOrNot">
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
