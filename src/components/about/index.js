// Import dependancies; Bootstrap components, internal assets and CSS
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import profile from "../../assets/image/profile-pic.png";
import "./about.css";

//Export 'About' page function
export default function About() {
  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col lg={4} md={6}>
            <h2 className="heading"> About </h2>
            <Image src={profile} className="image" />
          </Col>
          <Col className="p-5">
            <p className="emphasis">"I am a software developer."</p>
            <p className="text">
              It feels good to say that and I am proud of it.
            </p>
            <p className="text">
              I have always been a technophile; the one that people turn to when
              the wifi drops out, the software needs updating or they just need
              a bit of help to understand how it works. Last year I made the
              decision to take it to a new level and embarked on an intense Full
              Stack Web development course at Sydney University. Short of having
              children, it is the most challenging thing I have ever done, and
              the most rewarding.
            </p>
            <p className="text">
              I am a tried and tested employee and colleague with a wealth of
              soft skills. My experience to date is in the field of technical
              and software support, training and implementation, where my
              communication, empathy, creative problem solving and an ability to
              convey technical concepts to technophobes were used to great
              effect. Now in addition to my soft skills I can add a whole stack
              (pun intended) of hard skills; HTML, CSS, Javascript, Node,
              Express, SQL, GraphQL, MongoDB, Mongoose and more.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
