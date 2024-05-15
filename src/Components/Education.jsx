import React from 'react'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'

function Education({ isDarkMode }) {
  return (
    <Container fluid style={{ minHeight: '40vh' }}>
      <div style={{ marginTop: '10%' }}>
        <h1>
          Education
          <span
            className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}
          >
            .
          </span>
        </h1>
        <div className="mt-5 d-flex flex-column flex-md-row justify-content-between">
          <div
            className={`p-3 me-1 mb-2 mb-md-0 ${
              isDarkMode
                ? 'dark-mode-backgroundCol'
                : 'light-mode-backgroundCol'
            }`}
          >
            <Row>
              <Col
                className="d-flex justify-content-center justify-content-md-end"
                xs={12}
                md={4}
              >
                <Image
                  src="/letran.png"
                  roundedCircle
                  style={{ width: 'clamp(100px, 100%, 140px )' }}
                />
              </Col>
              <Col xs={12} md={8} className="text-center text-md-start">
                <p className="mt-3 mt-md-5 mb-1">
                  Bachelor of Science in Computer Science
                </p>
                <p className="mb-1">Collegio de San Juan de Letran Calamba</p>
                <small>August 2019 - July 2023</small>
              </Col>
            </Row>
          </div>

          <div
            className={`p-3 ${
              isDarkMode
                ? 'dark-mode-backgroundCol'
                : 'light-mode-backgroundCol'
            }`}
          >
            <Row>
              <Col
                className="d-flex justify-content-center justify-content-md-end"
                xs={12}
                md={4}
              >
                <Image
                  src="/trace.jpg"
                  roundedCircle
                  style={{ width: 'clamp(100px, 100%, 140px )' }}
                />
              </Col>
              <Col xs={12} md={8} className="text-center text-md-start">
                <p className="mt-3 mt-md-5 mb-1">
                  Bachelor of Science in Computer Science
                </p>
                <p className="mb-1">Collegio de San Juan de Letran Calamba</p>
                <small>August 2019 - July 2023</small>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Education
