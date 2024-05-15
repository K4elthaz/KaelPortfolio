import React, { useState } from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import IosShareIcon from '@mui/icons-material/IosShare'

function Work({ isDarkMode }) {
  const [showChadix, setShowChadix] = useState(false)
  const [showFlux, setShowFlux] = useState(false)
  const [showFregata, setShowFregata] = useState(false)
  const [showCoop, setShowCoop] = useState(false)

  return (
    <Container fluid style={{}}>
      <div className="mt-5">
        <h1>
          Work Experience
          <span
            className={`${isDarkMode ? 'dark-mode-text' : 'light-mode-text'}`}
          >
            .
          </span>
        </h1>
      </div>
      <div className="mt-5">
        <Row className="position-relative">
          <Col xs={12} md={6}>
            <h4 className="">Full Stack Developer</h4>
            <div className="d-flex">
              <p style={{ textDecoration: 'underline', marginBottom: '0' }}>
                <i
                  className={`${
                    isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                  }`}
                >
                  Chadix.ai | DannyVeiga Marketing
                </i>
              </p>
              <IosShareIcon sx={{ fontSize: 20 }} className="ms-2" />
            </div>
            <p style={{ marginTop: '0rem' }}>June 2023 - March 2024</p>
            <small className="ms-5" style={{ marginTop: '0rem' }}>
              At chadix.ai, my responsibility involves creating models using
              Django and seamlessly integrating them into React applications.
              This role requires me to ensure that the models are accurately
              developed and effectively connected with the React front-end,
              enabling smooth and efficient functionality across the
              application.
            </small>

            <div className="mt-4">
              <p>Technologies</p>
              <Image src="https://img.icons8.com/color/48/000000/react-native.png" />
              <Image src="https://img.icons8.com/color/48/000000/nodejs.png" />
              <Image src="https://img.icons8.com/color/48/000000/django.png" />
              <Image src="https://img.icons8.com/color/48/000000/python.png" />
              <Image src="https://img.icons8.com/color/48/000000/javascript.png" />
              <Image src="https://img.icons8.com/color/48/000000/html-5.png" />
              <Image src="https://img.icons8.com/color/48/000000/css3.png" />
              <Image src="https://img.icons8.com/color/48/000000/bootstrap.png" />
              <Image src="https://img.icons8.com/color/48/000000/material-ui.png" />
              <Image src="https://img.icons8.com/color/48/000000/github.png" />
              <Image src="https://img.icons8.com/color/48/000000/wordpress.png" />
            </div>
            {showChadix && (
              <div className="mt-4">
                <p
                  className={`${
                    isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                  }`}
                >
                  Activities
                </p>
                <li className="mb-3">
                  <small>
                    As a React Front End UI/UX Developer, I specialize in
                    creating visually appealing and user-friendly interfaces
                    using React.js
                  </small>
                </li>
                <li className="mb-2">
                  <small>
                    I have worked extensively on WordPress development,
                    including custom theme and plugin creation, to meet our
                    clients' specific requirements and enhance their online
                    presence.
                  </small>
                </li>
                <li className="mb-2">
                  <small>
                    Actively contributed to the back-end development using
                    Python Django, managing databases, implementing server-side
                    logic, and ensuring data integrity and security.
                  </small>
                </li>
                <li className="mb-2">
                  <small>
                    Developed and maintained RESTful APIs to facilitate seamless
                    communication between the front-end and back-end systems.
                  </small>
                </li>
                <li className="mb-2">
                  <small>
                    Responsible for setting up CloudFlare for deployment,
                    optimizing website performance, reliability, and security to
                    deliver a smooth user experience.
                  </small>
                </li>
              </div>
            )}

            <div className="mt-3">
              <Button
                className="buttonScale"
                size="sm"
                variant={isDarkMode ? 'warning' : 'secondary'}
                onClick={() => setShowChadix(!showChadix)}
              >
                <h5>See More</h5>
              </Button>
            </div>
          </Col>
          <div className={isDarkMode ? 'divider' : 'Tdivider'}></div>
          <Col>
            <div className="chadix ms-1">
              <Image
                style={{ width: 'clamp(155px, 100%, 240px )' }}
                roundedCircle
                src="/chadix.PNG"
              />
            </div>
          </Col>

          {/* Fluxfusion */}
          <div className="mt-5">
            <Row>
              <Col>
                <div className="mx-2 d-flex justify-content-end flux">
                  <Image
                    className="chadix"
                    style={{ width: 'clamp(155px, 100%, 240px )' }}
                    roundedCircle
                    src="/flux.png"
                  />
                </div>
              </Col>

              <Col xs={12} md={6} className="">
                <div className="">
                  <h4 className="">Full Stack Developer</h4>
                  <div className="d-flex">
                    <p
                      style={{ textDecoration: 'underline', marginBottom: '0' }}
                    >
                      <i
                        className={`${
                          isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                        }`}
                      >
                        FluxFusion Devs.
                      </i>
                    </p>
                    <IosShareIcon sx={{ fontSize: 20 }} className="ms-2" />
                  </div>
                  <p style={{ marginTop: '0rem' }}>September 2023 - Present</p>
                  <small className="ms-5" style={{ marginTop: '0rem' }}>
                    I am the founder of a startup company and serve as one of
                    the head developers at FluxFusion Devs. Our company
                    specializes in commission-based projects and develops
                    software applications for startup companies. FluxFusion Devs
                    operates as a freelancing company, offering a range of
                    services from custom software development to project
                    commissioning, catering to the diverse needs of our clients
                    in the digital landscape.
                  </small>

                  <div className="mt-4">
                    <p>Technologies</p>
                    <Image src="https://img.icons8.com/color/48/000000/react-native.png" />
                    <Image src="https://img.icons8.com/color/48/000000/nodejs.png" />
                    <Image src="https://img.icons8.com/color/48/000000/django.png" />
                    <Image src="https://img.icons8.com/color/48/000000/python.png" />
                    <Image src="https://img.icons8.com/color/48/000000/javascript.png" />
                    <Image src="https://img.icons8.com/color/48/000000/html-5.png" />
                    <Image src="https://img.icons8.com/color/48/000000/css3.png" />
                    <Image src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                    <Image src="https://img.icons8.com/color/48/000000/material-ui.png" />
                    <Image src="https://img.icons8.com/color/48/000000/github.png" />
                    <Image src="https://img.icons8.com/color/48/000000/wordpress.png" />
                    <Image src="https://img.icons8.com/color/48/000000/firebase.png" />
                    <Image src="https://img.icons8.com/color/48/000000/vite.png" />
                    <Image src="https://img.icons8.com/color/48/000000/tailwindcss.png" />
                    <Image src="https://img.icons8.com/dusk/48/php-logo.png" />
                    <Image src="https://img.icons8.com/nolan/48/express-js.png" />
                    <Image src="https://img.icons8.com/fluency/48/filmora.png" />
                    <Image src="https://img.icons8.com/fluency/48/canva.png" />
                    <Image src="https://img.icons8.com/fluency/48/figma.png" />
                    <Image src="https://img.icons8.com/fluency/48/adobe-photoshop.png" />
                    <Image src="https://img.icons8.com/fluency/48/java-coffee-cup-logo--v1.png" />
                    <Image src="https://img.icons8.com/fluency/48/android-os.png" />
                  </div>
                  {showFlux && (
                    <div className="mt-4">
                      <p
                        className={`${
                          isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                        }`}
                      >
                        Projects
                      </p>
                      <li className="mb-1">
                        <small>Dental Online Scheduling System (MERN)</small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Django RestAP Blog Filtering System (Django, React)
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>Inventory Management (Laravel)</small>
                      </li>
                      <li className="mb-1">
                        <small>Security Health Care Website (MERN Stack)</small>
                      </li>
                      <li className="mb-1">
                        <small>
                          UV Express 4 Android App x Web System (Java , React ,
                          Firebase)
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Mapua App x Web Portal (Java , React, Firebase)
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>Learning App (Java Android Studio)</small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Age Ease Application (Java, Android Studio, Firebase)
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>Connectify MLM (Web Based, Android App)</small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Brgy System (Web Based) (PHP, Open Street)
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Judge and Contestant Management App (Flutter, Mongodb)
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>ReThink Learning App (Web based PHP)</small>
                      </li>
                      <li className="mb-1">
                        <small>
                          FastFood Ordering Application (Android Java)
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Traffic Sign Detection App (Python utilizing Yolov7)
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>URL Shortener</small>
                      </li>
                      <li className="mb-1">
                        <small>Ecommerce UI/UX Project</small>
                      </li>
                      <li className="mb-1">
                        <small>Racal IOT (Python , Flask, PHP MYSQL)</small>
                      </li>
                      <li className="mb-1">
                        <small>Egg Inventory Management (PHP MYSQL)</small>
                      </li>
                      <li className="mb-1">
                        <small>School System Management (PHP MYSQL)</small>
                      </li>
                      <li className="mb-1">
                        <small>
                          FERA Fire Emergency Responder using Google Maps API
                          (Firebase , JS, Java Android Studio)
                        </small>
                      </li>
                    </div>
                  )}

                  <div className="mt-4 mb-5">
                    <Button
                      className="buttonScale"
                      size="sm"
                      variant={isDarkMode ? 'warning' : 'secondary'}
                      onClick={() => setShowFlux(!showFlux)}
                    >
                      <h5>See More</h5>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* Fregata */}
          <div className="mt-3">
            <Row>
              <Col xs={12} md={6} className="">
                <div className="">
                  <h4 className="">Graphics Designer & Social Media Manager</h4>
                  <div className="d-flex">
                    <p
                      style={{ textDecoration: 'underline', marginBottom: '0' }}
                    >
                      <i
                        className={`${
                          isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                        }`}
                      >
                        Fregata Travel and Tours
                      </i>
                    </p>
                    <IosShareIcon sx={{ fontSize: 20 }} className="ms-2" />
                  </div>
                  <p style={{ marginTop: '0rem' }}>
                    September 2022 - March 2023
                  </p>
                  <small className="ms-5" style={{ marginTop: '0rem' }}>
                    At Fregata Travel and Tours, I handle social media
                    management and graphics design for their exciting tours.
                    Through engaging social media strategies, I help showcase
                    the unique experiences and destinations that Fregata offers,
                    creating captivating content that resonates with travelers.
                  </small>

                  <div className="mt-4">
                    <p>Technologies</p>
                    <Image src="https://img.icons8.com/fluency/48/filmora.png" />
                    <Image src="https://img.icons8.com/fluency/48/canva.png" />
                    <Image src="https://img.icons8.com/fluency/48/adobe-photoshop.png" />
                    <Image src="https://img.icons8.com/fluency/48/facebook.png" />
                  </div>
                  {showFregata && (
                    <div className="mt-4">
                      <p
                        className={`${
                          isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                        }`}
                      >
                        Projects
                      </p>
                      <li className="mb-1">
                        <small>
                          Creating Designs / Template and Graphical Poster for
                          their Tours.
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Create and Advertise for their social Medias.
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Manage and reply for their possible clients.
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          Post a Quotes for them to have Engagements.
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>Manage their social media page.</small>
                      </li>
                    </div>
                  )}

                  <div className="mt-4 mb-5">
                    <Button
                      className="buttonScale"
                      size="sm"
                      variant={isDarkMode ? 'warning' : 'secondary'}
                      onClick={() => setShowFregata(!showFregata)}
                    >
                      <h5>See More</h5>
                    </Button>
                  </div>
                </div>
              </Col>

              <Col>
                <div className="chadix ms-1 mt-5">
                  <Image
                    style={{ width: 'clamp(155px, 100%, 240px )' }}
                    roundedCircle
                    src="/fregata.png"
                  />
                </div>
              </Col>
            </Row>
          </div>

          {/* Coop ERDB */}
          <div className="mt-3">
            <Row>
              <Col>
                <div className="mx-2 d-flex justify-content-end flux">
                  <Image
                    className="chadix"
                    style={{ width: 'clamp(155px, 100%, 240px )',  backgroundColor: 'white'  }}
                    roundedCircle
                    src="/cooplogo.png"
                  />
                </div>
              </Col>

              <Col xs={12} md={6} className="">
                <div className="">
                  <h4 className="">Full Stack Developer</h4>
                  <div className="d-flex">
                    <p
                      style={{ textDecoration: 'underline', marginBottom: '0' }}
                    >
                      <i
                        className={`${
                          isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                        }`}
                      >
                        DENDR Multi-Purpose Cooperative
                      </i>
                    </p>
                    <IosShareIcon sx={{ fontSize: 20 }} className="ms-2" />
                  </div>
                  <p style={{ marginTop: '0rem' }}>March 2023 - June 2023</p>
                  <small className="ms-5" style={{ marginTop: '0rem' }}>
                    During my internship at ERDB DENR Multi-Purpose Cooperative,
                    I worked on developing a system for viewing bank accounts
                    using PHP. This involved creating secure and efficient code
                    to display account details, ensuring that users could easily
                    access and manage their financial information. The
                    experience provided me with valuable insights into the
                    practical applications of PHP in financial data management
                    and reinforced my skills in web development.
                  </small>

                  <div className="mt-4">
                    <p>Technologies</p>
                    <Image src="https://img.icons8.com/color/48/000000/javascript.png" />
                    <Image src="https://img.icons8.com/color/48/000000/html-5.png" />
                    <Image src="https://img.icons8.com/color/48/000000/css3.png" />
                    <Image src="https://img.icons8.com/color/48/000000/bootstrap.png" />
                    <Image src="https://img.icons8.com/color/48/000000/github.png" />
                    <Image src="https://img.icons8.com/dusk/48/php-logo.png" />
                    <Image src="https://img.icons8.com/fluency/48/canva.png" />
                    <Image src="https://img.icons8.com/fluency/48/figma.png" />
                    <Image src="https://img.icons8.com/fluency/48/adobe-photoshop.png" />
                  </div>
                  {showCoop && (
                    <div className="mt-4">
                      <p
                        className={`${
                          isDarkMode ? 'dark-mode-text' : 'light-mode-text'
                        }`}
                      >
                        Projects
                      </p>
                      <li className="mb-1">
                        <small>
                          Created a web database for viewing of their
                          Cooperative accounts.{' '}
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          The Users can edit their profile, view their account
                          balances, and create loan form.
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          The admin can create, read, update, and delete.
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          The admin side can create Daily Transaction where it
                          composes of withdraw, deposit and payment for their
                          loan.{' '}
                        </small>
                      </li>
                      <li className="mb-1">
                        <small>
                          The admin can view the list of their members and
                          create a report.
                        </small>
                      </li>
                    </div>
                  )}

                  <div className="mt-4">
                    <Button
                      className="buttonScale"
                      size="sm"
                      variant={isDarkMode ? 'warning' : 'secondary'}
                      onClick={() => setShowCoop(!showCoop)}
                    >
                      <h5>See More</h5>
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </div>
    </Container>
  )
}

export default Work
