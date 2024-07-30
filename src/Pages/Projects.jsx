import React from 'react';
import "./CSS/Projects.css"
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Hero2 from '../Components/Hero2/Hero2';
import { Container, Row, Col } from 'react-bootstrap';
import ProCard from '../Components/ProCard/ProCard';
import Pro_details from "../../src/Data/Pro_Details";
import React_Pro_Details from "../../src/Data/React_Pro_Details";

const Projects = () => {
    return (
        <>
            <Navbar />
            {/* ======================== */}
            <Hero2 title="Projects" desc="Some of my most recent work" />
            <br />
            {/* ======================== */}
            <Container>
                <Row>
                    <Col lg={12} className='df jc-c ai-c'>
                        <h1 className='heading'>React Projects</h1>
                    </Col>
                </Row>
                <br />
                <Row className='df jc-sb ai-c'>
                    {React_Pro_Details.map((v, i) => {
                        return (
                            <Col className='df jc-c ai-c mb-5' key={i} lg={6} md={6} sm={12}>
                                {/* ===================================================== */}
                                <ProCard id={v.id} name={v.name} desc={v.desc} thumbnail={v.image} url={v.url} />
                                {/* ===================================================== */}
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            {/* ======================== */}
            <br />
            {/* ======================== */}
            <Container>
                <Row>
                    <Col lg={12} className='df jc-c ai-c'>
                        <h1 className='heading'>HTML | CSS | Bootstrap | Js Projects</h1>
                    </Col>
                </Row>
                <br />
                <Row className='df jc-sb ai-c'>
                    {Pro_details.map((v, i) => {
                        return (
                            <Col className='df jc-c ai-c mb-5' key={i} lg={6} md={6} sm={12}>
                                {/* ===================================================== */}
                                <ProCard id={v.id} name={v.name} desc={v.desc} thumbnail={v.image} url={v.url} />
                                {/* ===================================================== */}
                            </Col>
                        );
                    })}
                </Row>
            </Container>
            {/* ======================== */}
            <br />
            <Footer />
        </>
    );
}

export default Projects;
