import React, { useState } from 'react';
import './Navbar.css';
import { Navbar as BootstrapNavbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {


    // ===================================================================
    const [nav, setNav] = useState(false);

    // Scroll Navbar
    const changeValueOnScroll = () => {
        const scrollValue = window.scrollY;
        scrollValue > 10 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changeValueOnScroll);

    // ===================================================================


    return (
        <Container fluid >
            <Row>
                <Col>
                    {/* ======================*/}
                    <BootstrapNavbar expand="lg"  style={{ backgroundColor: 'rgba(0,0,0,0)', paddingTop: 0 }}>
                        <Container fluid className="nav_bar_main_container">
                            {/* ========================================================================== */}
                            <BootstrapNavbar.Brand className="nav_bar_title_bar">
                                <Link to={"/"} style={{ textDecoration: 'none' }}>
                                    <p className="title">Frasat Ali's Portfolio</p>
                                </Link>
                            </BootstrapNavbar.Brand>
                            {/* ========================================================================== */}
                            <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
                            <BootstrapNavbar.Collapse id="navbarSupportedContent">
                                <Nav className="me-auto mb-2 mb-lg-0 list_main">
                                    <Nav.Link as={Link} to="/" className="nav-item" id="nav-btn1">
                                        <p className="home-btn">Home</p>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/project" className="nav-item" id="nav-btn">
                                        <p className="home-btn">Projects</p>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/about" className="nav-item" id="nav-btn">
                                        <p className="home-btn">About</p>
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/contact" className="nav-item" id="nav-btn">
                                        <p className="home-btn">Contact</p>
                                    </Nav.Link>
                                </Nav>
                            </BootstrapNavbar.Collapse>
                            {/* ========================================================================== */}
                        </Container>
                    </BootstrapNavbar>
                    {/* ======================*/}
                </Col>
            </Row>
        </Container>
    );
}

export default Navbar;

