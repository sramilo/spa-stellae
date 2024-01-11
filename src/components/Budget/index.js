import './index.scss';
import { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import * as formik from 'formik';
import * as yup from 'yup';

const Contact = () => {
    const { Formik } = formik;
    const schema = yup.object().shape({
        name: yup.string().required("Por favor, introduce un nombre"),
        email: yup.string().email("El email debe tener un formato válido").required("Por favor, introduce un email"),
        phoneNumber: yup.string().matches(/(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/, 'El número de teléfono debe tener un formato válido').required("Por favor, introduce un teléfono"),
        message: yup.string().required("Por favor, explícanos qué necesitas para que podamos ofrecerte un presupuesto"),
        // terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });

    const [validated, setValidated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const refForm = useRef();

    const sendEmail = (actions) => {
        setValidated(true);
        // setIsLoading(true);

        const resolveWithSomeData = () => emailjs
            .sendForm(
                'spa-stellae',
                'template_lr211w6',
                refForm.current,
                'SGOYOzUe1CrlQwc_a'
            );
        toast.promise(
            resolveWithSomeData,
            {
            pending: {
                render() {
                    setIsLoading(true);
                    return "Enviando formulario";
                },
                icon: true,
            },
            success: {
                render({}) {
                    setIsLoading(false);
                    actions.resetForm();
                    setValidated(false);
                    return "El formulario se ha enviado correctamente. En cuanto tengamos más información nos pondremos en contacto contigo.";
                },
                // other options
                icon: true,
            },
            error: {
                render() {
                    setIsLoading(false);
                // When the promise reject, data will contains the error
                    return "Ha ocurrido un error. Por favor, inténtalo de nuevo en unos instantes.";
                }
            }
            }
        )

        // emailjs
        //     .sendForm(
        //         'spa-stellae',
        //         'template_lr211w6',
        //         refForm.current,
        //         'SGOYOzUe1CrlQwc_a'
        //     )
        //     .then(
        //         () => {
        //             toast.success("El formulario se ha enviado correctamente. En cuanto tengamos más información nos pondremos en contacto contigo.");
        //             actions.resetForm();
        //             setValidated(false);
        //             setIsLoading(false);
        //         },
        //         () => {
        //             toast.error("Ha ocurrido un error. Por favor, inténtalo de nuevo en unos instantes.");
        //             setIsLoading(false);
        //             // alert('Failed to send the message, please try again');
        //         }
        //     )
    
    }
    

    return (
        <>
        <Container className='budget-page' fluid>
            <Row xs={12} sm={12} md={12} lg={12} xl={12} xxl={12} className='text-center budget-page-first-row'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                    <Row>
                        <Col>
                            <h1 className='text-center'>
                                Solicita un presupuesto de limpieza
                            </h1>
                        </Col>
                    </Row>
                    <Row className='budget-form'>
                        <Col sm={12} md={5}>
                            <Formik
                                validationSchema={schema}
                                validateOnChange={false}
                                validateOnBlur={true}
                                validateOnMount={false}
                                onSubmit={(_ , actions) => sendEmail(actions)}
                                initialValues={{
                                    name: '',
                                    email: '',
                                    phoneNumber: '',
                                    message: '',
                                }}
                            >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form validated={validated} ref={refForm} onSubmit={handleSubmit}>
                                    <Row className='mb-3 input-row'>
                                        <Form.Group as={Col} controlId="name">
                                            <Form.Label>* Nombre y Apellidos</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name='name'
                                                value={values.name}
                                                onChange={handleChange}
                                                isValid={touched.name && !errors.name}
                                                isInvalid={errors.name}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className='mb-3 input-row'>
                                        <Form.Group as={Col} controlId="email">
                                            <Form.Label>* Email</Form.Label>
                                            <Form.Control
                                                required
                                                type="email"
                                                name='email'
                                                value={values.email}
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className='mb-3 input-row'>
                                        <Form.Group as={Col} controlId="phoneNumber">
                                            <Form.Label>* Teléfono</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                name='phoneNumber'
                                                value={values.phoneNumber}
                                                onChange={handleChange}
                                                isValid={touched.phoneNumber && !errors.phoneNumber}
                                                isInvalid={errors.phoneNumber}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.phoneNumber}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className='mb-3 input-row'>
                                        <Form.Group as={Col} controlId="message">
                                            <Form.Label>* Explíquenos sus necesidades</Form.Label>
                                            <Form.Control
                                                required
                                                as="textarea"
                                                name='message'
                                                rows={6}
                                                value={values.message}
                                                onChange={handleChange}
                                                isValid={touched.message && !errors.message}
                                                isInvalid={errors.message}
                                            />
                                            <Form.Control.Feedback></Form.Control.Feedback>
                                            <Form.Control.Feedback type="invalid">
                                                {errors.message}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className='mb-3 input-row'>
                                        <Col>
                                            {isLoading
                                            ?
                                            <button disabled={true} className='btn grow_skew_forward'>
                                                ENVIANDO...
                                            </button>
                                            :
                                            <button className='btn grow_skew_forward' type='submit'>
                                                ENVIAR &rarr;
                                            </button>
                                            }
                                        </Col>
                                    </Row>
                                </Form>
                            )}
                            </Formik>
                        </Col>
                        <Col sm={12} md={7} className='text-justify ms-auto'>
                            <h2>PREGUNTAS FRECUENTES:</h2>
                            <h4>
                                ¿Cuánto tiempo tardaré en obtener una respuesta?
                            </h4>
                            <p>
                                Lo más habitual es que tardemos menos de 24h en días laborables en proporcionar una respuesta. Si hubiese una demora de más 2 días laborables no dude en contactar con nosotros a través de nuestro teléfono.
                            </p>
                            <h4>¿Cuánto tiempo será necesario para limpiar mi espacio y cuantas personas enviarán?</h4>
                            <p>
                                El tiempo de limpieza variará según el tamaño y la complejidad del espacio. Normalmente, enviamos a un equipo de dos a tres personas para garantizar eficiencia y calidad.
                            </p>
                            <h4>¿Cómo ajustan sus servicios a mis necesidades específicas?</h4>
                            <p>
                                Trabajamos estrechamente contigo para entender tus necesidades y expectativas. Personalizamos nuestros servicios según tus preferencias y estamos abiertos a recibir retroalimentación para mejorar continuamente.
                            </p>
                            <h4>¿Cómo manejan los objetos frágiles o valiosos durante la limpieza?</h4>
                            <p>
                                Instruimos a nuestro personal para que sea especialmente cuidadoso con objetos frágiles o valiosos. Siempre recomendamos notificar sobre artículos especialmente delicados para tomar precauciones adicionales.
                            </p>
                            <h4>¿Se aplican medidas de sostenibilidad en las limpiezas?</h4>
                            <p>
                                Utilizamos productos de limpieza ecológicos siempre que sea posible y práctico. Además, nos esforzamos por reducir el desperdicio y reciclar adecuadamente los materiales utilizados.
                            </p>
                            <h4>¿Ofrecen descuentos o paquetes para servicios regulares?</h4>
                            <p>
                                Sí, ofrecemos descuentos para contratos a largo plazo o servicios regulares. Podemos discutir opciones personalizadas para adaptarnos a tu presupuesto y requisitos.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <ToastContainer
                position={toast.POSITION.BOTTOM_RIGHT}
                autoClose={7000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </Container>
        </>
    )
}

export default Contact;