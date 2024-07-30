import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Hero2 from '../Components/Hero2/Hero2'
import "../Pages/CSS/About.css"
import { Col, Container, Row } from 'react-bootstrap'
import robot from "../assets/About/robot_think.png"
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <>
            <Navbar />
            {/* ======================== */}

            <Hero2 title="About me" desc="I am friendly a Frontend Developer" />

            {/* ======================== */}

            <Container>
                <Row>
                    <Col lg={6} md={8} sm={8} className=' df jc-c ai-c'>
                        <div className="left df jc-c ai-c">
                            <h1>How I Am ?</h1>
                            <h5>I am a friendly Front-end Developer </h5>
                            <h5>I create responsive websites for my clients</h5>
                            <Link to={'/contact'} style={{ textDecoration: 'none' }}>
                                <button className='pro-button'>Contact</button>
                            </Link>
                        </div>
                    </Col>
                    {/* ================================= */}
                    <Col lg={6} md={4} sm={4} className=' df jc-c ai-c'>
                        <div className="right df jc-c ai-c">
                            <img src={robot} className='think_pic' alt="how" />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ======================== */}
            <Footer />
        </>
    )
}

export default About
