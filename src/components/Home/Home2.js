import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/rb-avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DISCOVER WHO <span className="purple">RICHELLE IS</span>
            </h1>
            <p className="home-about-body">
              Dynamic and seasoned in logistics and operations, I am actively
              seeking opportunities where I can bring my extensive experience
              and proactive approach to drive meaningful results. My
              professional journey includes impactful roles at{" "}
              <b className="purple">FedEx Ground</b>, where I spearheaded
              inventory management and operational improvements.
              <br />
              <br />
              My fields of interest include{" "}
              <b className="purple">Photography and Modeling</b>, areas where I
              blend my creativity with my strategic acumen. These passions are
              not only hobbies but have grown into a substantial part of my
              entrepreneurial ventures, enriching my skills in project
              management and client relations.
              <br />
              <br />
              As a resident of <b className="purple">Woodward Bluffs</b> and a
              mother to two wonderful children, Kaylei and Alex, I thrive in
              environments that require flexibility and exceptional
              organizational skills—traits that I apply both at home and in the
              professional sphere.
              <br />
              <br />I am eager to bring my expertise in logistics, alongside my
              creative capabilities, to a role where innovation in{" "}
              <b className="purple">business and administrative positions</b> is
              valued. My skill set is further complemented by a strong
              proficiency in handling complex scheduling, coordinating
              multi-disciplinary teams, and leading with a customer-first
              mindset.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/richelle.brokaw/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/richelle-brokaw-b8ba24256/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
