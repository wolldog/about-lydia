import React from 'react';
import Navbar from './navbar';
import Container from 'react-bootstrap/Container';

const styles = {
    background: {
        background: '#f5f5f5',
        padding: '20px',
        opacity: '0.9'
        
    }
}
export default function Header(props) {
    return (
        <div style={styles.background}>
            <Container fluid>
                <Navbar handlePageChange={props.handlePageChange} />
            </Container>
        </div>
    );
}