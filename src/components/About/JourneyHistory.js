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
          {/* 2024 */}
          <Col md={12} className="journey-item">
            <h4 className="purple">March 2024 — Schooling Completed</h4>
            <p>
              Completed schooling in <strong>March 2024</strong> with a score of
              <strong> 513 / 600 (85.5%)</strong>. Actively participated in{" "}
              <strong>district-level Ball Badminton</strong>, demonstrating
              teamwork, discipline, competitive spirit and served as a captain
            </p>
          </Col>
          <Col md={12} className="journey-item">
            <h4 className="purple">July 2024 — The Beginning</h4>
            <p>
              Started my <strong>BCA</strong> at <strong>VIT Vellore</strong>.
              Learned programming fundamentals using{" "}
              <strong>Python , C and C++</strong>, focusing on logic building
              and problem-solving.
            </p>
          </Col>

          {/* 2025 */}
          <Col md={12} className="journey-item">
            <h4 className="purple">March 2025 — TrackMy Train</h4>
            <p>
              Developed <strong>TrackMy Train</strong>, a database-driven
              application focused on
              <strong> train tracking, backend logic, and DBMS concepts</strong>
              , applying real-world problem-solving techniques.
            </p>
          </Col>

          <Col md={12} className="journey-item">
            <h4 className="purple">September 2025 — WISME AI Internship</h4>
            <p>
              Joined the <strong>WISME AI Internship</strong>, gaining hands-on
              experience in
              <strong> Video Editing </strong>, Created and edited engaging
              video content for an AI-powered study platform
            </p>
          </Col>

          <Col md={12} className="journey-item">
            <h4 className="purple">October 2025 — Online Voting System</h4>
            <p>
              Built a <strong>Java-based Online Voting System</strong>{" "}
              implementing
              <strong>
                {" "}
                Object-Oriented Programming, CRUD operations and secure user
                interaction
              </strong>
              as part of academic coursework.
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
              Aim to become a skilled{" "}
              <strong>Software / AI / ML Engineer</strong>, build impactful
              applications, and continuously grow in tech.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default JourneyHistory;
