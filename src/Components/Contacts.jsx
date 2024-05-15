import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Contacts({ isDarkMode }) {
  return (
    <Container fluid style={{ minHeight: '40vh' }}>
      <hr></hr>
      <div className="mt-5">
        <h1>
          Contacts
          <span
            className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}
          >
            .
          </span>
        </h1>
        <div className="mt-5">
          <Row className="d-flex align-items-center mb-3">
            <Col
              xs={12}
              sm={4}
              className="d-flex justify-content-center align-items-center mb-3 mb-sm-0"
            >
              <a
                href="https://www.linkedin.com/in/jeremy-daniel-alcantara-19b3b527a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="buttonScale"
                  src="https://img.icons8.com/color/104/linkedin.png"
                />
              </a>
              <div className="d-flex flex-column align-items-center align-items-md-start ms-2">
                <small>LinkedIn</small>
                <p
                  className={`mb-0 ${
                    isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                  }`}
                >
                  jeremy-daniel-alcantara
                </p>
              </div>
            </Col>
            <Col
              xs={12}
              sm={4}
              className="d-flex justify-content-center align-items-center mb-3 mb-sm-0"
            >
              <a
                href="mailto:Businessjeremy25@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="buttonScale"
                  src="https://img.icons8.com/color/104/gmail.png"
                />
              </a>
              <div className="d-flex flex-column align-items-center align-items-md-start ms-2">
                <small>Gmail</small>
                <p
                  className={`mb-0 ${
                    isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                  }`}
                >
                  Businessjeremy25@gmail.com
                </p>
              </div>
            </Col>
            <Col
              xs={7}
              sm={4}
              className="d-flex justify-content-center align-items-center"
            >
              <a
                href="https://github.com/K4elthaz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="buttonScale"
                  src="https://img.icons8.com/color/104/github.png"
                />
              </a>
              <div className="d-flex flex-column align-items-center align-items-md-start ms-2">
                <small>Github</small>
                <p
                  className={`mb-0 ${
                    isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                  }`}
                >
                  K4elthaz
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default Contacts
