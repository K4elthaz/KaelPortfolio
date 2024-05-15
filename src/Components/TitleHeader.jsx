import React from 'react'
import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined'
import IconButton from '@mui/material/IconButton'
import CV from '../assets/JeremyAlcantaraCV.pdf'

function TitleHeader({ isDarkMode }) {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth', // Optional: smooth scrolling animation
    })
  }

  return (
    <Container>
      <div
        style={{ minHeight: '70vh', cursor: 'default', userSelect: 'none' }}
        className="d-flex flex-column align-items-center justify-content-center text-center mt-5"
      >
        <div
          className={` mt-5 d-flex align-items-center justify-content-center text-center p-2 ${
            isDarkMode ? 'dark-mode-background' : 'light-mode-background'
          }`}
        >
          <h3>
            <b>Hello {'(ㆆ ᴗ ㆆ)'} 🙋🏻‍♂️</b>
          </h3>
        </div>

        <div>
          <h1 className="mt-4">
            Experienced
            <span
              className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}
            >
              {' '}
              Full-Stack
            </span>
          </h1>
          <h1>Developer with a strong focus</h1>
          <h1>
            on{' '}
            <span
              className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}
            >
              backend development.
            </span>{' '}
          </h1>
        </div>

        <div style={{ cursor: 'default', userSelect: 'none' }}>
          <Row className="mt-5 g-3 mt-4 d-flex align-items-center justify-content-center text-center">
            <Col xs={6} md={3}>
              <div
                className={`text-center ${
                  isDarkMode
                    ? 'dark-mode-backgroundCol'
                    : 'light-mode-backgroundCol'
                }`}
              >
                <h5>+ 1.5 </h5>
                <p>Years of Freelance Experience</p>
              </div>
            </Col>

            <Col xs={6} md={3}>
              <div
                className={`text-center ${
                  isDarkMode
                    ? 'dark-mode-backgroundCol'
                    : 'light-mode-backgroundCol'
                }`}
              >
                <h5 className="">+ 1.9 </h5>
                <p>Years of Company Experience</p>
              </div>
            </Col>
            <Col xs={6} md={3}>
              <div
                className={`text-center ${
                  isDarkMode
                    ? 'dark-mode-backgroundCol'
                    : 'light-mode-backgroundCol'
                }`}
              >
                <h5>+ 33 </h5>
                <p>Freelance Project Experience</p>
              </div>
            </Col>
          </Row>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{ width: '100%' }}
        >
          <Row className="mt-5 d-flex justify-content-center">
            <Col className="mt-2">
              <a
                href={CV}
                download="JeremyAlcantaraCV.pdf"
                className="buttonScale"
              >
                <Button
                  className="buttonScale"
                  variant={isDarkMode ? 'warning' : 'secondary'}
                >
                  <Row>
                    <Col md={2}>
                      <TextSnippetOutlinedIcon />
                    </Col>
                    <Col>
                      <h5>Resume</h5>
                    </Col>
                  </Row>
                </Button>
              </a>
            </Col>
            <Col className="mt-2">
              <Button
                className="buttonScale"
                variant={isDarkMode ? 'warning' : 'secondary'}
                onClick={scrollToBottom}
              >
                <Row>
                  <Col md={2}>
                    <TextSnippetOutlinedIcon />
                  </Col>
                  <Col>
                    <h5>Contact</h5>
                  </Col>
                </Row>
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default TitleHeader
