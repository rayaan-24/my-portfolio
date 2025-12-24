import React from "react";
import { Col, Row } from "react-bootstrap";

import Cpp from "../../Assets/TechIcons/C++.svg";
import C from "../../Assets/TechIcons/C.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Html from "../../Assets/TechIcons/HTML.svg";
import Css from "../../Assets/TechIcons/CSS.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Mysql from "../../Assets/TechIcons/MySQL.svg";
import Sql from "../../Assets/TechIcons/SQL.svg";
import Plsql from "../../Assets/TechIcons/PLSQL.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Cpp} alt="C++" />
        <div className="tech-icons-text">C++</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={C} alt="C" />
        <div className="tech-icons-text">C</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Mysql} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Sql} alt="SQL" />
        <div className="tech-icons-text">SQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Html} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Css} alt="CSS" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Plsql} alt="PL/SQL" />
        <div className="tech-icons-text">PL / SQL</div>
      </Col>

    </Row>
  );
}

export default Techstack;
