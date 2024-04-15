import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Richelle Brokaw - Operations & Logistics Specialist</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Spraggins Designs</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://www.facebook.com/richelle.brokaw/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/richelle-brokaw-b8ba24256/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
