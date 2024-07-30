import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Footer/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTiktok, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <>
            {/* Footer */}
            <Container fluid className="footer_main">
                <Row className="each_row" style={{ justifyContent: 'space-around' }}>

                    {/* Column 1 */}
                    <Col lg={3} md={12} sm={12} className="column_1">
                        <h1>Pages</h1>
                        <br />
                        <Link to="/" className="footer-link">
                            <p className="footer_text">Home</p>
                        </Link>
                        <Link to="/project" className="footer-link">
                            <p className="footer_text">Projects</p>
                        </Link>
                        <Link to="/contact" className="footer-link">
                            <p className="footer_text">Contact</p>
                        </Link>
                        <Link to="/about" className="footer-link">
                            <p className="footer_text">About</p>
                        </Link>
                    </Col>

                    {/* Column 2 */}
                    <Col lg={3} md={12} sm={12} className="column_1">
                        <h1>Social Media</h1>
                        <br />
                        <a href="https://www.youtube.com/@CyberMaxAcademy/videos" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faYoutube} /> YouTube
                            </p>
                        </a>
                        <a href="https://www.facebook.com/CyberMaxAcademy2198" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faFacebook} /> Facebook
                            </p>
                        </a>
                        <a href="https://www.instagram.com/cybermax_academy_0fficial_id/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faInstagram} /> Instagram
                            </p>
                        </a>
                        <a href="https://www.tiktok.com/@cybermax_academy_tiktok?lang=en" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faTiktok} /> TikTok
                            </p>
                        </a>
                        <a href="https://www.linkedin.com/in/m-frasat-ali-0b6219248/" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                            </p>
                        </a>
                        <a href="https://twitter.com/MFrasatAli79" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faTwitter} /> Twitter
                            </p>
                        </a>
                        <a href="https://github.com/FrasatAliGujjar?tab=repositories" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </p>
                        </a>
                    </Col>

                    {/* Column 3 */}
                    <Col lg={3} md={12} sm={12} className="column_1">
                        <h1>Order Now</h1>
                        <br />
                        <a href="https://www.fiverr.com/cybermax_club?up_rollout=true" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faCat} /> Fiverr
                            </p>
                        </a>
                        <a href="https://www.upwork.com/freelancers/~0136e18a719f2ad441" target="_blank" rel="noopener noreferrer" className="footer-link">
                            <p className="footer_text">
                                <FontAwesomeIcon icon={faCat} /> UpWork
                            </p>
                        </a>
                    </Col>
                </Row>
            </Container>
            {/* Footer Bottom */}
            <Container fluid className="footer_bottom">
                <Row>
                    <Col>
                        &copy; &nbsp;Copyrights are reserved by FRASAT ALI
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Footer;
