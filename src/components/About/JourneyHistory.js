import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function JourneyHistory() {
  return (
    <Container fluid className="journey-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Journey</strong>
        </h1>

        <Row className="journey-timeline">

          {/* 2024 */}
          <Col md={12} className="journey-item">
            <h4 className="purple">2024 — The Beginning</h4>
            <p>
              Started my <strong>BCA</strong> at <strong>VIT Vellore</strong>.
              Learned programming fundamentals using <strong>Python , C and C++</strong>,
              focusing on logic building and problem-solving.
            </p>
          </Col>

          {/* 2025 */}
          <Col md={12} className="journey-item">
            <h4 className="purple">2025 — Core Skill Building</h4>
            <p>
              Strengthened knowledge in <strong>Java and Python</strong>.
              Studied <strong>DSA, OOP, DBMS, SQL</strong> and built projects like
              a <strong>TrackMy Train and Java-based Online Voting System</strong>.
            </p>
          </Col>

          {/* 2026 */}
          <Col md={12} className="journey-item">
            <h4 className="purple">2026 — Growth & Exploration</h4>
            <p>
              Exploring <strong>Full Stack Web Development</strong> using React.
              Learning <strong>AI & Machine Learning</strong> concepts and
              preparing for internships through real-world projects.
            </p>
          </Col>

          {/* Future */}
          <Col md={12} className="journey-item">
            <h4 className="purple">Future Goals 🚀</h4>
            <p>
              Aim to become a skilled <strong>Software / AI / ML Engineer</strong>,
              build impactful applications, and continuously grow in tech.
            </p>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default JourneyHistory;
