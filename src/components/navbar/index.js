import React from "react";
import Nav from 'react-bootstrap/Nav';

const styles = {
    link: {
        fontSize: '1.2rem',
    }
}

export default function Navbar(props) {
    return (
            <Nav className="justify-content-end">
             <Nav.Item>
                <Nav.Link style={styles.link} href="#About" onClick={() => props.handlePageChange('About')}>About</Nav.Link>
             </Nav.Item>
             <Nav.Item>
                <Nav.Link style={styles.link} href="#Portfolio" onClick={() => props.handlePageChange('Portfolio')}>Portfolio</Nav.Link>
             </Nav.Item>
             <Nav.Item>
                <Nav.Link style={styles.link} href="#Contact" onClick={() => props.handlePageChange('Contact')}>Contact</Nav.Link>
             </Nav.Item>
             <Nav.Item>
                <Nav.Link style={styles.link} href="#Resume" onClick={() => props.handlePageChange('Resume')}>Resume</Nav.Link>
             </Nav.Item>
             </Nav>
     
    )
}