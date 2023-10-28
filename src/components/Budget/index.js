import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
    const [validated, setValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        // const form = event.currentTarget;
        if (refForm.current.checkValidity()) {
            sendEmail();
        } else {
            event.preventDefault();
            event.stopPropagation();
        }
    
        setValidated(true);
    };

    const sendEmail = () => {

        emailjs
            .sendForm(
                'spa-stellae',
                'template_lr211w6',
                refForm.current,
                'SGOYOzUe1CrlQwc_a'
            )
            .then(
                () => {
                    toast("Message successfully sent!");
                    // alert('Message successfully sent!');
                    refForm.current.reset();
                },
                () => {
                    toast("Ha ocurrido un error. Por favor, intentalo de nuevo en unos instantes");
                    // alert('Failed to send the message, please try again');
                }
            )
    }
    

    return (
        <>
        <Container className='budget-page' fluid>
            <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='text-center budget-page-first-row'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Row>
                        <Col>
                            <h1>
                                Solicita un presupuesto
                                {/* <AnimatedLetters
                                    letterClass={letterClass}
                                    strArray={"".split("")}
                                    idx={15}
                                /> */}
                            </h1>
                        </Col>
                    </Row>
                    <Row className='budget-form'>
                        <Col sm={8}>
                            <Form noValidate validated={validated} ref={refForm} onSubmit={handleSubmit}>
                                <Row className='mb-3 input-row'>
                                    <Form.Group as={Col} controlId="name">
                                        {/* <Form.Label>Nombre y Apellidos</Form.Label> */}
                                        <Form.Control
                                            required
                                            type="text"
                                            name='name'
                                            placeholder="Nombre"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, introduce un nombre
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 input-row'>
                                    <Form.Group as={Col} controlId="email">
                                        {/* <Form.Label>Nombre y Apellidos</Form.Label> */}
                                        <Form.Control
                                            required
                                            type="email"
                                            name='email'
                                            placeholder="Email"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, introduce un email válido
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 input-row'>
                                    <Form.Group as={Col} controlId="phoneNumber">
                                        {/* <Form.Label>Nombre y Apellidos</Form.Label> */}
                                        <Form.Control
                                            required
                                            type="text"
                                            name='phoneNumber'
                                            placeholder="Teléfono"
                                            defaultValue=""
                                            pattern='(\\+34|0034|34)?[ -]*(6|7|8|9)[ -]*([0-9][ -]*){8}'
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, introduce un número de teléfono válido
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 input-row'>
                                    <Form.Group as={Col} controlId="message">
                                        {/* <Form.Label>Nombre y Apellidos</Form.Label> */}
                                        <Form.Control
                                            required
                                            as="textarea"
                                            name='message'
                                            rows={6}
                                            placeholder="Mensaje"
                                            defaultValue=""
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Por favor, explícanos qué necesitas para que podamos ofrecerte un presupuesto
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Row>
                                <Row className='mb-3 input-row'>
                                    <Col>
                                        <Button className='flat-button grow_skew_forward' type='submit'>ENVIAR &rarr;</Button>
                                    </Col>
                                </Row>
                            </Form>
                            {/* <form ref={refForm} onSubmit={sendEmail}>
                                <ul>
                                    <li>
                                        <input type='text' name='name' placeholder='Nombre y Apellidos' required />
                                    </li>
                                    <li>
                                        <input type='email' name='email' placeholder='Email' required />
                                    </li>
                                    <li>
                                        <input type="text"  name="subject" placeholder="Teléfono de contacto" required />
                                    </li>
                                    <li>
                                        <textarea name="message" placeholder="Mensaje" required />
                                    </li>
                                    <li>
                                        <input type="submit" className='flat-button' value="ENVIAR" />
                                    </li>
                                </ul>
                            </form> */}
                        </Col>
                        <Col sm={4}>
                            <p>
                                Envíamos un resumen de lo que necesitas junto con tus datos de contacto y nos pondremos en contacto lo antes posible para darte una solución.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        {/* <div className='container contact-page'>
            <div className='text-zone'>
                
            </div>
            <div className='info-map'>
                Samuel Ramilo, <br />
                Spain, <br />
                Avenida de Portugal, 34, 32002 <br />
                Ourense, Galicia <br />
                <span>samuelramiloconde@gmail.com</span>
            </div>
            <div className='map-wrap'>
                <MapContainer center={[44, 12]} zoom={13}>
                    <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                    <Marker position={[44, 12]}>
                        <Popup>Samuel lives here, come over for a cup of coffee and a nice chat :)</Popup>
                    </Marker>

                </MapContainer>
            </div>
        </div> */}
        <ToastContainer />
        <Loader  type='ball-scale-ripple-multiple' />
        </>
    )
}

export default Contact;