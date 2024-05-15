import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Contacts({ isDarkMode }) {
  return (
    <Container fluid style={{ minHeight: '50vh' }}>
      <div>
        <h1>
          Contacts
          <span
            className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}
          >
            .
          </span>
        </h1>
      </div>
    </Container>
  )
}

export default Contacts
