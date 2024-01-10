import { Outlet } from 'react-router-dom';
import Topnavbar from '../Topnavbar';
import './index.scss';
import { Col, Container, Modal, Row } from 'react-bootstrap';
import { useEffect, useMemo, useRef, useState } from 'react';
import Footer from '../Footer';
import CookieConsent, { getCookieConsentValue, resetCookieConsentValue } from "react-cookie-consent";

const googleAnalyticsId = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;


const Layout = () => {

    const email = "stellae&#64;gmail&#46;com";
    const phoneNumber = "+34606665420";
    const facebookLink = "https://github.com/sramilo";
    const linkedinLink = "https://www.linkedin.com/in/samuel-ramilo";
    const instagramLink = "https://www.linkedin.com/in/samuel-ramilo";

    const emailLink = '<a className="icon" href="mailto:' + email + '">' + email + '</a>';

    const phoneNumberLink = `tel:+34${phoneNumber}`;

    const [hasConsentValue, setHasConsentValue] = useState(false);
    const [contactPageRef, setContactPageRef] = useState(null);
    const [modalCookiesShow, setModalCookiesShow] = useState(false);

    useEffect(() => {
        setHasConsentValue(getCookieConsentValue());

        if (getCookieConsentValue()) {
            loadGoogleAnalytics();
        }

    }, [])

    const loadGoogleAnalytics = () => {
        setHasConsentValue(true);

        const script = document.createElement("script");

        script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
        script.async = true;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];

        function gtag() {
            window.dataLayer.push(arguments);
        }

        gtag("js", new Date());
        gtag("config", `${googleAnalyticsId}`, {
            page_path: window.location.pathname,
        });
    }

    return (
        <div className='page'>
            <Topnavbar contactPageRef={contactPageRef} />
            <Outlet
                context={{
                    contactPageRef: contactPageRef,
                    setContactPageRef: setContactPageRef,
                    email,
                    emailLink,
                    phoneNumber,
                    phoneNumberLink,
                    facebookLink,
                    linkedinLink,
                    instagramLink
                }}
            />
            {/* ¿Posible footer? */}
            {/* <span className='tags bottom-tags'>
                &lt;/body&gt;
                <br />
                <span className='bottom-tag-html'>&lt;/html&gt;</span>
            </span> */}
            <Footer
                email={email}
                emailLink={emailLink}
                phoneNumber={phoneNumber}
                phoneNumberLink={phoneNumberLink}
                facebookLink={facebookLink}
                linkedinLink={linkedinLink}
                instagramLink={instagramLink}
                setModalCookiesShow={setModalCookiesShow}
            />
            {!hasConsentValue && (
                <CookieConsent
                    enableDeclineButton
                    onAccept={loadGoogleAnalytics}
                    onDecline={() => {
                        setHasConsentValue(true);
                    }}
                    location="bottom"
                    buttonText="Aceptar"
                    declineButtonText="Rechazar"
                    cookieName="googleAnalyticsCookie"
                    style={{ background: "#2B373B" }}
                    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                    expires={150}
                >
                    {/* Este sitio web usa cookies con el objetivo de mejorar la experiencia de usuario. */}
                    <span>
                    Este sitio web utiliza cookies para mejorar la experiencia del usuario y para analizar el tráfico. Para obtener más información y para gestionar tus preferencias de cookies, por favor consulta nuestra <a onClick={() => setModalCookiesShow(true)}>Politica de Cookies</a>.
                    </span>
                    <span>
                    
                    </span>
                </CookieConsent>
            )}
            <Modal
                show={modalCookiesShow}
                onHide={() => setModalCookiesShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                size='xl'
            >
                <Modal.Header closeButton className='d-flex flex-column text-center'>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2> POLÍTICA DE COOKIES</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="grid-example">
                    <Container className='text-center'>
                    <Row>
                        <Col>
                            <div class="CookieDeclaration" lang="es" dir="ltr">
                                <h2>¿Qué son las cookies?</h2>
                                <p>
                                Las cookies son pequeños archivos de texto que los sitios web colocan en el dispositivo de un usuario (como una computadora o un dispositivo móvil) cuando este visita el sitio. Estos archivos contienen información que se utiliza para realizar un seguimiento de diversas actividades del usuario, como preferencias, sesiones de inicio de sesión, historial de navegación y otra información relevante para mejorar la experiencia del usuario o recopilar datos analíticos.
                                Las cookies desempeñan varios roles en la navegación web:
                                </p>
                                <p>
                                <ol>
                                    <li>
                                        <span className='fw-bold me-1'>
                                            Mejora de la experiencia del usuario: 
                                        </span>
                                        Almacenar preferencias del usuario, como idioma, ubicación, temas de diseño, etc.
                                    </li>
                                    <li>
                                        <span className='fw-bold me-1'>
                                            Seguimiento de sesiones: 
                                        </span>
                                        Mantener a los usuarios autenticados durante una sesión de navegación o entre sesiones.
                                    </li>
                                    <li>
                                        <span className='fw-bold me-1'>
                                            Análisis y estadísticas: 
                                        </span>
                                        Recopilar datos sobre la interacción del usuario con el sitio web para realizar análisis y mejorar la calidad del contenido y la funcionalidad.
                                    </li>
                                    <li>
                                        <span className='fw-bold me-1'>
                                            Publicidad personalizada: 
                                        </span>
                                        Permitir la entrega de anuncios personalizados según el comportamiento de navegación del usuarioPermitir la entrega de anuncios personalizados según el comportamiento de navegación del usuario.
                                    </li>
                                    <li>
                                        <span className='fw-bold me-1'>
                                        Funcionamiento del carrito de compras: 
                                        </span>
                                        En el caso de sitios de comercio electrónico, las cookies pueden utilizarse para gestionar la información del carrito de compras.
                                    </li>
                                </ol>
                                </p>
                                <h2>¿Qué cookies usa este sitio web?</h2>
                                <p>
                                Las cookies de este sitio web se usan para mejorar la experiencia del usuario y analizar el tráfico a través del servicio de Google Analytics.<br/>
                                En cualquier momento puede cambiar o retirar su consentimiento desde la Politica de Cookies en nuestro sitio web.<br/>
                                Su consentimiento se aplica a los siguientes dominios: www.stellaelimpiezas.es<br/>
                                Estas cookies son almacenadas por Google, de manera que no tenemos control sobre ellas o el modo en el que las utilizan. Por ello, Google nos presta un servicio de análisis que nos permite mejorar el contenido y la funcionalidad.<br/><br/>
                                Más información y desactivación:<br/>
                                <a style={{ color: "black" }} href="http://www.google.com/policies/privacy/" target="_blank">http://www.google.com/policies/privacy/</a><br/>
                                <a style={{ color: "black" }} href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es" target="_blank">https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage?hl=es</a>
                                </p>
                                <h2>Cómo puedo cambiar o retirar mi consentimiento?</h2>
                                <p>
                                    Si desea cambiar o returar el consentimiento al uso de cookies puede borrar las cookies de su navegador. 
                                    La mayoría de los navegadores le permiten evitar el almacenamiento en su equipo de todas las cookies o de algunas en lo sucesivo. 
                                    Para más información sobre cómo borrar o deshabilitar las cookies desde su navegador, utilice el menú de “ayuda” del navegador
                                </p>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn grow_skew_forward' onClick={() => setModalCookiesShow(false)}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Layout;