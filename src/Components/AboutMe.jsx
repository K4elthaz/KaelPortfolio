import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Bulldoger from '../assets/DoggerMan.png'

function AboutMe({ isDarkMode }) {
  return (
    <Container fluid style={{ minHeight: '95vh' }}>
      <div className="mt-5">
        <h1 className="mb-3">
          About Me
          <span
            className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}
          >
            .
          </span>
        </h1>
        <Row>
          <Col
            sm={7}
            className="d-flex align-items-center justify-content-center"
          >
            <div>
              <p className="" style={{ textAlign: 'initial' }}>
                I am Jeremy Alcantara, a junior full-stack developer. I have a
                strong passion for creating dynamic and user-friendly web
                applications. My expertise spans both front-end and back-end
                technologies, enabling me to bring ideas to life through
                interactive websites and web solutions. I am dedicated to
                maintaining clean code, paying attention to detail, and
                continuously learning to deliver high-quality and innovative
                digital experiences for users.
              </p>

              <p style={{ textAlign: 'initial' }}>
                As a seasoned web developer with a passion for technology and a
                drive for excellence, I bring to the table a solid foundation in
                web development, programming languages, and an innovative
                mindset. My experience in creating efficient and visually
                appealing websites, as well as my expertise in backend and
                frontend development, make me a well-rounded candidate for a
                variety of IT and programming roles.
              </p>
            </div>
          </Col>

          <Col>
            <div className="d-flex justify-content-center">
              <Image
                src={Bulldoger}
                roundedCircle
                style={{ width: 'clamp(155px, 100%, 240px )' }}
              />
            </div>
          </Col>
        </Row>
      </div>
      <div className="mb-4">
        <div className="mt-5">
          <h1>
            Key Skills and Competencies
            <span
              className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}
            >
              .
            </span>
          </h1>

          <Row>
            <Col sm={7}>
              <div className="ms-4 mt-3">
                <li>Excellent verbal and written communication skills.</li>
                <li>
                  Able to document and present the results of analysis clearly
                  and concisely, using reports and diagrams.
                </li>
                <li>
                  Ability to multi-task and quickly react to changes in
                  priorities and meet deadlines.
                </li>
                <li>
                  Proactive, adaptable, confident and with a positive “can-do”
                  attitude
                </li>
                <li>
                  Strong analytical and problem-solving skills, with the ability
                  to think strategically.
                </li>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default AboutMe
