import React from "react";
import { Projects } from "./Projects";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>

      {Projects.map((project, index) => {
        return (
          <Row xs={1} md={2} className="g-4">
            <Col>
              <Card>
                <Card.Img variant="top" src={require('../../assets/image/' + project.image + '.jpg')} />
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        );
      })}
    </div>
  );
}
