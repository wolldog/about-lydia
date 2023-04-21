import React from "react";
import { Projects } from "./Projects";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./portfolio.css";
import { Container } from "react-bootstrap";
import github from "../../assets/icons/github.svg";

const styles = {
  icon: {
    height: "40px",
  },
};

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
          {Projects.map((project, index) => {
            return (
              <Col>
                <Card className="card">
                  <Card.Img
                    src={require("../../assets/image/" +
                      project.image +
                      ".png")}
                    className="image"
                    key={index}
                  />
                  <div className="overlay">
                    <a className="projectLink" href={project.deployedLink}>
                      <h3> {project.title}</h3>
                    </a>
                    <h4 className="techs">{project.tech}</h4>
                    <a href={project.github}>
                      <img style={styles.icon} src={github} />
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
