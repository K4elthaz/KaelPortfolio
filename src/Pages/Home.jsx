import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LightModeIcon from '@mui/icons-material/LightMode'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import LunchDiningIcon from '@mui/icons-material/LunchDining'
import NoFoodIcon from '@mui/icons-material/NoFood'
import TitleHeader from '../Components/TitleHeader'
import Kael from '../assets/kael.png'
import OffCanvasMenu from '../Components/OffCanvasMenu'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import Work from '../Components/Work'
import Projects from '../Components/Projects'
import Education from '../Components/Education'
import Contacts from '../Components/Contacts'

function Home({ isDarkMode, toggleMode }) {
  // const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // const toggleMode = () => {
  //   setIsDarkMode(!isDarkMode)
  // }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <Container className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <OffCanvasMenu
        show={isMenuOpen}
        onHide={toggleMenu}
        isDarkMode={isDarkMode}
      />
      <div style={{ minHeight: '100vh' }}>
        <div>
          <Row className="mt-5">
            <Col className="d-flex">
              <img
                src={Kael}
                alt="Kael"
                className="coin"
                style={{ width: 'clamp(75px, 20%, 100px )' }}
              />
            </Col>

            <Col className="d-flex justify-content-end">
              {isDarkMode ? (
                <LightModeIcon
                  style={{ cursor: 'pointer' }}
                  fontSize="large"
                  onClick={toggleMode}
                />
              ) : (
                <NightsStayIcon
                  style={{ cursor: 'pointer' }}
                  fontSize="large"
                  onClick={toggleMode}
                />
              )}
            </Col>

            {/* <Col className="d-flex justify-content-end">
              {!isMenuOpen ? (
                <LunchDiningIcon
                  style={{ cursor: 'pointer' }}
                  fontSize="large"
                  onClick={toggleMenu}
                />
              ) : (
                <NoFoodIcon
                  style={{ cursor: 'pointer' }}
                  fontSize="large"
                  onClick={toggleMenu}
                />
              )}
            </Col> */}
          </Row>
        </div>
        <div>
          <TitleHeader isDarkMode={isDarkMode} />
        </div>
      </div>
      <div style={{userSelect:"none"}}>
        <AboutMe isDarkMode={isDarkMode} />
      </div>

      <div>
        <Skills isDarkMode={isDarkMode} />
      </div>

      <div style={{userSelect:"none"}}>
        <Work isDarkMode={isDarkMode} />
      </div>

      <div className=''>
        <Projects isDarkMode={isDarkMode} />
      </div>

      <div style={{userSelect:"none"}}>
        <Education isDarkMode={isDarkMode} />
      </div>

      <div style={{userSelect:"none"}}>
        <Contacts isDarkMode={isDarkMode} />
      </div>
    </Container>
  )
}

export default Home
