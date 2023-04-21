// import dependencies; React, Bootstrap components and internal files
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import github from "../../assets/icons/github.svg";
import { Projects } from "./Projects";
import "./portfolio.css";

//export Portfolio page
export default function Portfolio() {
  return (
    <div>
      <Row>
        <Col>
          <h1 className="heading"> Portfolio </h1>
        </Col>
      </Row>
      <Container className="pageContent">
        <Row xs={1} md={2} lg={3} className="g-4">
          
          {/* Map 'Projects' to cards */}
          {Projects.map((project, index) => {
            return (
              <Col key={index}>
                <Card className="card">
                  <Card.Img
                    src={require("../../assets/image/" +
                      project.image +
                      ".png")}
                    alt={project.alt}
                    className="image"
                  />
                  <div className="overlay">
                    <a className="projectLink" href={project.deployedLink}>
                      <h3> {project.title}</h3>
                    </a>
                    <h4 className="techs">{project.tech}</h4>
                    <a href={project.github}>
                      <img className="logo" src={github} alt="gitHub logo" />
                    </a>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
