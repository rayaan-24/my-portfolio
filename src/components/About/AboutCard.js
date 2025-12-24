import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Mohammed Rayaan N</span>{" "}
            from <span className="purple">Vaniyambadi, India</span>.
            <br />
            I’m currently studying as a{" "}
            <span className="purple">Student</span> at{" "}
            <span className="purple">VIT Vellore</span>.
            <br />I hold an Bachelor of Computer Application (BCA) in{" "}
            <span className="purple">AI & ML</span> from{" "}
            <span className="purple">VIT Vellore</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Editing Videos 🎬
            </li>
            <li className="about-activity">
              <ImPointRight /> Scrolling Reels 📱
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Among sheep, I wear silence; within me, the wolf waits!"{" "}
          </p>
          <footer className="blockquote-footer">Rayaan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
