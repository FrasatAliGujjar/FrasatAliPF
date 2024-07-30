import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Hero2 from '../Components/Hero2/Hero2'
import "../Pages/CSS/Contact.css"
import { Col, Container, Row } from 'react-bootstrap'
import contact from "../assets/Contact/robot_contact.png"

const Contact = () => {
    return (
        <>
            <Navbar />
            {/* ======================== */}

            <Hero2 title="Contact me" desc="Lets have a chat" />

            {/* ======================== */}
            <br />
            <br />
            <Container>
                <Row className="df jc-c ai-c">
                    <Col lg={6} md={12} sm={12} className='df jc-c ai-c'>
                        <div className="form_box df jc-c ai-c">
                            <form className='about_form df jc-sb'>
                                <br />
                                <br />
                                <input className='mt-3 in-black-bb-yellow-w100' type="text" placeholder="Your Name" />
                                <br />
                                <br />
                                <input className='mt-3 in-black-bb-yellow-w100' type="text" placeholder="Your Email" />
                                <br />
                                <br />
                                <input className='mt-3 in-black-bb-yellow-w100' type="text" placeholder="Your Subject" />
                                <br />
                                <br />
                                <textarea className='mt-3 in-black-bb-yellow-w100' rows={10} placeholder="Your Message" ></textarea>
                            </form>
                            <br />
                            <a href="mailto:frasatali120@gmail.com" target='_blank'>
                                <button className='b-s-black' type='email'>Email</button>
                            </a>
                        </div>
                    </Col>
                    {/* ============================================================================ */}
                    <Col lg={6} md={12} sm={12} className='df jc-c ai-c'>
                        <div className="df jc-c ai-c">
                            <img src={contact} className='contact_pic' alt="contact" />
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* ======================== */}
            <br />
            <br />


            {/* ======================== */}
            <Footer />
        </>
    )
}

export default Contact
