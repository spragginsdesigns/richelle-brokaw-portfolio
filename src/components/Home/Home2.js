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
              As a seasoned{" "}
              <span className="purple">
                Operations Administrator at FedEx Ground
              </span>
              , I strive to excel in every aspect of logistics and operations
              management. My unwavering commitment to excellence has enabled me
              to refine complex procedures and implement effective inventory
              management strategies. With a meticulous approach and unwavering
              dedication, I consistently drive productivity and efficiency, even
              in the most challenging circumstances.
              <br />
              <br />
              Throughout my career, I have achieved numerous professional
              milestones, fueled by an innate entrepreneurial spirit. My
              endeavors in{" "}
              <span className="purple">Photography and Modeling</span> have been
              a testament to my multifaceted expertise. These creative pursuits
              have not only been a means of artistic expression but have also
              provided a platform to showcase my project management skills and
              ability to cultivate lasting client relationships. These
              competencies are essential in building enduring professional
              networks.
              <br />
              <br />
              Throughout my professional journey, I have honed my agility and
              exceptional organizational capabilities through years of managing
              diverse administrative responsibilities across various industries.
              My versatile skill set has allowed me to thrive in environments
              that require not only proficiency in business administration but
              also a personalized touch in customer interactions.
              <br />
              <br />
              With my extensive experience and solid foundation in{" "}
              <span className="purple">logistics</span>, I am eager to embark on
              the next chapter of my career. My creative dynamism and
              operational safety knowledge make me a catalyst for innovation in{" "}
              <span className="purple">
                business and administrative domains
              </span>
              . I am always proactive in problem-solving, and my unwavering
              focus on customer satisfaction sets me apart as a professional
              ready to make a significant impact in my future endeavors.
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
