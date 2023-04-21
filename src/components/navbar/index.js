import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const styles = {
  links: {
    fontSize: "larger",
    marginLeft: "30px",
    marginRight: "30px",
  },

  brand: {
    fontSize: "40px",
    marginLeft: "20px",
  },
};

export default function Navigation(props) {
  return (
    <Navbar expand="md">
      <Navbar.Brand style={styles.brand} href="#About">
        LydiaWallis
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link
            style={styles.links}
            href="#About"
            onClick={() => props.handlePageChange("About")}
          >
            About
          </Nav.Link>

          <Nav.Link
            style={styles.links}
            href="#Portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
          >
            Portfolio
          </Nav.Link>

          <Nav.Link
            style={styles.links}
            href="#Contact"
            onClick={() => props.handlePageChange("Contact")}
          >
            Contact
          </Nav.Link>

          <Nav.Link
            style={styles.links}
            href="#Resume"
            onClick={() => props.handlePageChange("Resume")}
          >
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      {/* </Container> */}
    </Navbar>
  );
}
