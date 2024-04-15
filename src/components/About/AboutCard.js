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
            <br />A proud alumnus of Kaplan Institute in Medical Office
            Assistance, I've carved a niche in logistics and operations
            throughout an illustrious career. My journey is punctuated by
            significant roles at leading companies and in community service,
            where I've leveraged my talents to not only succeed professionally
            but also enrich the lives around me.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Led operational transformations at{" "}
              <span className="purple">FedEx Ground</span>, enhancing system
              efficiencies and inventory control.
            </li>
            <li className="about-activity">
              <ImPointRight /> Served the{" "}
              <span className="purple">Woodward Bluffs community</span> with
              dedicated initiatives, fostering a vibrant and supportive
              environment.
            </li>
            <li className="about-activity">
              <ImPointRight /> Advanced retail operations and customer
              engagement during my tenure at{" "}
              <span className="purple">Walgreens</span>, contributing to the
              brand’s regional success.
            </li>
            <li className="about-activity">
              <ImPointRight /> Cultivated a flourishing brand in{" "}
              <span className="purple">Photography</span>, merging artistic
              passion with entrepreneurial acumen.
            </li>
            <li className="about-activity">
              <ImPointRight /> Demonstrated exemplary project management and
              client relations, steering my photography venture far.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I thrive on crafting innovative solutions and fostering community
            spirit, driving growth and excellence in every endeavor."
          </p>
          <footer className="blockquote-footer">Richelle Brokaw</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
