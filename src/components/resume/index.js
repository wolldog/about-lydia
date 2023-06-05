//import dependencies; React, Bootstrap components, internal assets
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./resume.css";
import resume from "../../assets/pdf/LW-resume.pdf";

// export Resume page component
export default function Resume() {
  return (
    <div>
      <Row>
        <div className="title">
          <h1 className="heading">Resume</h1>
          <Button
            variant="secondary"
            className="download"
            href={resume}
            download
          >
            Download PDF
          </Button>
        </div>
      </Row>
      <Row style={{ padding: "2rem" }}>
        <Col lg={6} xs={12} style={{ textAlign: "center" }}>
          <h4> Front-end Proficiencies </h4>

          <ul className="listGroup">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>React</li>
          </ul>
        </Col>
        <Col lg={6} xs={12} style={{ textAlign: "center" }}>
          <h4>Back-end Proficiencies</h4>
          <ul>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST Apis</li>
            <li>GraphQL</li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}
