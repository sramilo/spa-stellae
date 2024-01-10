import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useMemo } from 'react';
import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import parse from 'html-react-parser';
import { useOutletContext } from 'react-router-dom';

const Contact = () => {

    const myRef = useRef(null);

    const outletContext = useOutletContext();

    useEffect(() => {
        outletContext.setContactPageRef(myRef?.current)
    }, [myRef])

    return (
        <>
        <div style={{ position: "relative", bottom: "75px" }} ref={myRef}></div>
        <Container className='contact-page text-center' fluid>
            <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className="justify-content-center contact-page-header mb-3">
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <h1>
                        Contáctanos
                    </h1>
                </Col>
            </Row>
            <Row className='contact-info justify-content-center align-items-center'>
                {/* <Col xs={12} sm={6} md={3} className='mb-4'>
                    <Row className='mt-2 contact-title'>
                        <Col>
                            <FontAwesomeIcon icon={faThumbsUp} color='#4c4c4c'></FontAwesomeIcon>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col>
                            Síguenos
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Nav className='justify-content-center icon-container'>
                                <Nav.Link href="https://github.com/sramilo" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='me-3 icon' icon={faFacebook} color='#4c4c4c'></FontAwesomeIcon>
                                </Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='me-3 icon' icon={faInstagram} color='#4c4c4c'></FontAwesomeIcon>
                                </Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='icon' icon={faLinkedin} color='#4c4c4c'></FontAwesomeIcon>
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                </Col> */}
                <Col xs={12} sm={6} md={3} className='mb-4'>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faPhone} color='#4c4c4c'></FontAwesomeIcon>
                        </Col>
                    </Row>
                    <Row className='mt-2 contact-title'>
                        <Col>
                            Llámanos
                        </Col>
                    </Row>
                    <Row className='mt-2 icon-container'>
                        <Col>
                            <a className='icon' href={outletContext.phoneNumberLink}>{outletContext.phoneNumber}</a>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} sm={6} md={3} className='mb-4'>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faEnvelope} color='#4c4c4c'></FontAwesomeIcon>
                        </Col>
                    </Row>
                    <Row className='mt-2 contact-title'>
                        <Col>
                            Escríbenos
                        </Col>
                    </Row>
                    <Row className='mt-2 icon-container'>
                        <Col>
                            {parse(outletContext.emailLink)}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Contact;