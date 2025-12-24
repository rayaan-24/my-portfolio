import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi 👋 I’m <b className="purple">Rayaan</b>, a BCA student passionate
              about learning and building software applications.
              <br />
              <br />
              I enjoy understanding how things work behind the scenes and
              turning simple ideas into working programs and websites.
              <br />
              <br />
              I have hands-on experience with
              <i>
                <b className="purple">
                  {" "}
                  Python, Java, C, C++, SQL, and MySQL{" "}
                </b>
              </i>
              and I’m continuously improving my problem-solving and coding
              skills.
              <br />
              <br />
              My main areas of interest include
              <i>
                <b className="purple">
                  {" "}
                  Web Development, AI & ML Engineer and Software Testing{" "}
                </b>
              </i>
              .
              <br />
              <br />
              I love building beginner-friendly projects and learning modern
              tools and frameworks that help me grow as a future software
              developer 🚀
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
