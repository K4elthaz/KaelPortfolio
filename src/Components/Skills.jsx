import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function Skills({ isDarkMode }) {
  const technologies = [
    { src: 'https://img.icons8.com/color/48/000000/html-5--v1.png', name: 'HTML5' },
    { src: 'https://img.icons8.com/color/48/000000/css3.png', name: 'CSS3' },
    { src: 'https://img.icons8.com/color/48/000000/javascript--v1.png', name: 'JavaScript' },
    { src: 'https://img.icons8.com/color/48/000000/react-native.png', name: 'React' },
    { src: 'https://img.icons8.com/color/48/000000/nodejs.png', name: 'Node.js' },
    { src: 'https://img.icons8.com/color/48/000000/mongodb.png', name: 'MongoDB' },
    { src: 'https://img.icons8.com/color/48/000000/git.png', name: 'Git' },
    { src: 'https://img.icons8.com/sf-regular/48/github.png', name: 'GitHub' },
    { src: 'https://img.icons8.com/color/48/000000/python--v1.png', name: 'Python' },
    { src: 'https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png', name: 'Java' },
    { src: 'https://img.icons8.com/color/48/000000/c-plus-plus-logo.png', name: 'C++' },
    { src: 'https://img.icons8.com/color/48/000000/mysql-logo.png', name: 'MySQL' },
    { src: 'https://img.icons8.com/color/48/000000/visual-studio-code-2019.png', name: 'VS Code' },
    { src: 'https://img.icons8.com/color/48/000000/bootstrap.png', name: 'Bootstrap' },
    { src: 'https://img.icons8.com/color/48/000000/material-ui.png', name: 'Material' },
    { src: 'https://img.icons8.com/color/48/000000/figma--v1.png', name: 'Figma' },
    { src: 'https://img.icons8.com/color/48/000000/adobe-photoshop.png', name: 'Photoshop' },
    { src: 'https://img.icons8.com/color/48/000000/wordpress.png', name: 'WordPress' },
    { src: 'https://img.icons8.com/color/48/000000/firebase.png', name: 'Firebase' },
    { src: 'https://img.icons8.com/color/48/000000/vite.png', name: 'Vite' },
    { src: 'https://img.icons8.com/color/48/000000/tailwindcss.png', name: 'Tailwind' },
    { src: 'https://img.icons8.com/dusk/48/php-logo.png', name: 'PHP' },
    { src: 'https://img.icons8.com/color/48/000000/django.png', name: 'Django' },
    { src: 'https://img.icons8.com/nolan/48/express-js.png', name: 'Express' },
  ];

  const rows = [];
  for (let i = 0; i < technologies.length; i += 10) {
    rows.push(technologies.slice(i, i + 10));
  }

  return (
    <Container fluid style={{ minHeight: '100vh' }}>
      <div style={{userSelect: 'none'}}>
        <h1>
          Skills
          <span className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}>.</span>
        </h1>
        <i>
          <p className="mt-4" style={{textDecoration:'underline'}}>Technologies and Tools</p>
        </i>
      </div>

      <div className="mt-5">
        {rows.map((row, rowIndex) => (
          <Row key={rowIndex} className="d-flex justify-content-center">
            {row.map((tech, colIndex) => (
              <Col
                key={colIndex}
                xs={5} sm={1} md={1}
                style={{cursor: 'pointer'}}
                className={`bounce-out-element text-center me-2 mb-2 p-2 ${isDarkMode ? 'dark-mode-backgroundCol' : 'light-mode-backgroundCol'}`}
              >
                <Image className="mt-3" src={tech.src} />
                <p>{tech.name}</p>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    </Container>
  );
}

export default Skills;
