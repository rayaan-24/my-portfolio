import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import online_voting from "../../Assets/Projects/online_voting_system.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={online_voting}
              isBlog={false}
              title="Online Voting System"
              description="The Online Voting System is a Java-based application developed as part of my 3rd semester coursework. It demonstrates core Java concepts such as Object-Oriented Programming (OOP), classes, inheritance, file handling, and basic database integration. The project simulates a real-world voting process with secure user interaction."
              ghLink="https://github.com/rayaan-24/Online-Voting-System"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
