import React from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

function Projects({ isDarkMode }) {
    return (
        <Container fluid style={{ minHeight: '10vh' }}>
        <div style={{marginTop:"10%"}}>
            <h1>Projects
                <span className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}>.</span>
            </h1>
            <p>To be Uploaded.</p>
        </div>
        </Container>
    )
}

export default Projects