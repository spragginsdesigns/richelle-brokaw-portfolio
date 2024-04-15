import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I'm <span className="purple">Richelle Brokaw</span> from{" "}
            <span className="purple">Fresno, CA</span>.
            <br />
            I graduated from Kaplan Institute with a degree in Medical Office
            Assistance and have developed a strong background in logistics and
            operations throughout my career.
            <br />
            <br />
            In addition to my professional pursuits, I am a dedicated mother to
            two amazing children, Kaylei and Alex.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Engaging in photography and modeling projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new travel destinations
            </li>
            <li className="about-activity">
              <ImPointRight /> Cultivating my personal brand and professional
              network
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I am driven by the desire to create and manage systems that enhance
            efficiency and productivity."
          </p>
          <footer className="blockquote-footer">Richelle Brokaw</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
