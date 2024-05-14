import React from 'react'
import { Offcanvas, Container, ListGroup } from 'react-bootstrap'
import NoFoodIcon from '@mui/icons-material/NoFood'
import EngineeringIcon from '@mui/icons-material/Engineering'
const OffCanvasMenu = ({ show, onHide, isDarkMode }) => {
    return (
        <Offcanvas
            show={show}
            onHide={onHide}
            placement="top"
            backdrop={false}
            style={{ minHeight: '100vh' }}
            className={`${isDarkMode ? 'dark-mode-canvas' : 'light-mode-canvas'}`}
        >
            <Offcanvas.Header closeButton={false}></Offcanvas.Header>
            <Offcanvas.Body style={{ minHeight: '100vh', overflowY: 'auto' }}>
                <div>
                    <div className="d-flex align-items-end justify-content-end">
                        <NoFoodIcon
                            fontSize="large"
                            onClick={onHide}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                    <div className="mt-5 d-flex flex-column align-items-start justify-content-center">
                        <div className="d-flex align-items-center navScale">
                            <h1>
                                <EngineeringIcon fontSize="xxl" className="mx-4" />
                                About Me
                            </h1>
                        </div>

                        <div className="d-flex align-items-center mt-3 navScale">
                            <h1>
                                <EngineeringIcon fontSize="xxl" className="mx-4" />
                                Skills
                            </h1>
                        </div>

                        <div className="d-flex align-items-center mt-3 navScale">
                            <h1>
                                <EngineeringIcon fontSize="xxl" className="mx-4" />
                                Experience
                            </h1>
                        </div>

                        <div className="d-flex align-items-center mt-3 navScale">
                            <h1>
                                <EngineeringIcon fontSize="xxl" className="mx-4" />
                                Projects
                            </h1>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvasMenu
