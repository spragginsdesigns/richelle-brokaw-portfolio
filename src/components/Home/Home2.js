import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/rb-photographer-circle.png";
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
              With a proven track record of driving operational excellence and
              enhancing workflow efficiencies, I am Richelle Brokaw—a highly
              motivated and adept professional. My tenure at{" "}
              <b className="purple">FedEx Ground</b> as an Operations
              Administrator has equipped me with robust expertise in inventory
              management and process optimization. My ability to spearhead
              complex logistics tasks, while maintaining a keen eye for detail,
              underscores my commitment to quality and productivity in
              high-pressure environments.
              <br />
              <br />
              The synergy of my professional acumen and my entrepreneurial flair
              is best exemplified through my pursuits in{" "}
              <b className="purple">Photography and Modeling</b>. These
              endeavors have not only been outlets for my creative expression
              but have also honed my project management and client engagement
              skills, pivotal in nurturing sustainable business relationships.
              <br />
              <br />
              As a Woodwards Bluffs resident and a nurturing mother, I excel in
              dynamic settings that demand extraordinary organizational talents
              and adaptability—qualities that have been the cornerstone of both
              my personal life and my diverse career, spanning administrative to
              customer-centric roles.
              <br />
              <br />I am poised to channel this extensive background into a
              progressive role where my blend of logistical prowess and
              inventive energy will drive innovation, especially in{" "}
              <b className="purple">business and administrative positions</b>.
              My comprehensive skill set is complemented by a commitment to
              operational safety, a talent for anticipating and resolving
              challenges proactively, and a passion for delivering impeccable
              customer experiences.
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
