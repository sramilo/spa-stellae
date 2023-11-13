import './index.scss';
import { Button, Col, Container, Modal, Nav, Row } from 'react-bootstrap';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Footer = ({
    email,
    emailLink,
    phoneNumber,
    phoneNumberLink,
    facebookLink,
    linkedinLink,
    instagramLink,
    setModalCookiesShow
}) => {

    const [modalAvisoLegalShow, setModalAvisoLegalShow] = useState(false);
    const [modalPrivacidadShow, setModalPrivacidadShow] = useState(false);

    return (
        // <Navbar className="bg-body-tertiary sticky-top">
        //     <Container fluid>
        //         <Navbar.Brand className='logo' href="/"><img src={LogoS} alt='empresas-limpieza-stellae' /></Navbar.Brand>
        //         <Navbar.Toggle />
        //         <Navbar.Collapse className="justify-content-end">
        //             {/* <Nav.Link href="https://github.com/sramilo"><FontAwesomeIcon size='xl' icon={faFacebook} color='#030B5D' /></Nav.Link>
        //             <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/"><FontAwesomeIcon size='xl' icon={faInstagram} color='#030B5D' /></Nav.Link>
        //             <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/"><FontAwesomeIcon size='xl' icon={faLinkedin} color='#030B5D' /></Nav.Link> */}
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
        <>
            <footer className="footer">
                <Container className='text-center'>
                    <Row className='mb-4'>
                        <Col>
                            <h2>&copy; {new Date().getFullYear()} Stellae Limpiezas</h2>
                        </Col>
                    </Row>
                    <Row className='justify-content-center align-items-center mb-3'>
                        <Col xs={12} sm={3}>
                            <h4>Información de Contacto</h4>
                            {/* <p>Dirección: 123 Calle Principal</p> */}
                            <p>
                                <a href={phoneNumberLink}>{phoneNumber}</a>, {parse(emailLink)}
                            </p>
                        </Col>
                        <Col xs={12} sm={3}>
                            <h4>Síguenos en Redes Sociales</h4>
                            <Nav className='justify-content-center icon-container'>
                                <Nav.Link href="https://github.com/sramilo" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='me-3 icon' icon={faFacebook} color='#f5f8ff'></FontAwesomeIcon>
                                </Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='me-3 icon' icon={faInstagram} color='#f5f8ff'></FontAwesomeIcon>
                                </Nav.Link>
                                <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='icon' icon={faLinkedin} color='#f5f8ff'></FontAwesomeIcon>
                                </Nav.Link>
                            </Nav>
                        </Col>
                    </Row>
                    <Row className='text-center'>
                        <Col>
                            <a onClick={() => setModalAvisoLegalShow(true)}>Aviso Legal</a>
                            <span className='pe-3 ps-3'>·</span>
                            <a onClick={() => setModalPrivacidadShow(true)}>Politica de Privacidad</a>
                            <span className='pe-3 ps-3'>·</span>
                            <a onClick={() => setModalCookiesShow(true)}>Politica de Cookies</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
            <Modal
                show={modalAvisoLegalShow}
                onHide={() => setModalAvisoLegalShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                size='xl'
            >
                <Modal.Header closeButton className='d-flex flex-column text-center'>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2>AVISO LEGAL Y CONDICIONES GENERALES DE USO</h2>
                        <h4>https://www.stellaelimpiezas.es/</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="grid-example">
                    <Container className='text-center'>
                    <Row>
                        <Col>
                            <h3>I. INFORMACIÓN GENERAL</h3>
                            <p>En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI-CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:</p>
                            <p>La titularidad de este sitio web,&nbsp;https://www.stellaelimpiezas.es/, (en adelante, Sitio Web) la ostenta:&nbsp;Stellae Limpiezas S.L., con NIF:&nbsp;TODO, y cuyos datos de contacto son:</p>
                            <p>Dirección:&nbsp;TODO, TEO A Coruña</p>
                            <p>Teléfono de contacto:&nbsp;TODO</p>
                            <p>Email de contacto:&nbsp;{parse(email)}</p>
                            <h3>II. TÉRMINOS Y CONDICIONES GENERALES DE USO</h3>
                            <h4>El objeto de las condiciones: El Sitio Web</h4>
                            <p>El objeto de las presentes Condiciones Generales de Uso (en adelante, Condiciones) es regular el acceso y la utilización del Sitio Web. A los efectos de las presentes Condiciones se entenderá como Sitio Web: la apariencia externa de los interfaces de pantalla, tanto de forma estática como de forma dinámica, es decir, el árbol de navegación; y todos los elementos integrados tanto en los interfaces de pantalla como en el árbol de navegación (en adelante, Contenidos) y todos aquellos servicios o recursos en línea que en su caso ofrezca a los Usuarios (en adelante, Servicios).</p>
                            <p>Stellae Limpiezas S.L. TODO&nbsp;se reserva la facultad de modificar, en cualquier momento, y sin aviso previo, la presentación y configuración del Sitio Web y de los Contenidos y Servicios que en él pudieran estar incorporados. El Usuario reconoce y acepta que en cualquier momento&nbsp;Stellae Limpiezas S.L.&nbsp;pueda interrumpir, desactivar y/o cancelar cualquiera de estos elementos que se integran en el Sitio Web o el acceso a los mismos.</p>
                            <p>El acceso al Sitio Web por el Usuario tiene carácter libre y, por regla general, es gratuito sin que el Usuario tenga que proporcionar una contraprestación para poder disfrutar de ello, salvo en lo relativo al coste de conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso que hubiere contratado el Usuario.</p>
                            <p>La utilización de alguno de los Contenidos o Servicios del Sitio Web podrá hacerse mediante la suscripción o registro previo del Usuario.</p>
                            <h4>El Usuario</h4>
                            <p>El acceso, la navegación y uso del Sitio Web,&nbsp;confiere la condición de Usuario, por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso. Dada la relevancia de lo anterior, se recomienda al Usuario leerlas cada vez que visite el Sitio Web.</p>
                            <p>El Sitio Web de&nbsp;Stellae Limpiezas S.L. TODO&nbsp;proporciona gran diversidad de información, servicios y datos. El Usuario asume su responsabilidad para realizar un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:</p>
                            <ul>
                            <li>Un uso de la información, Contenidos y/o Servicios y datos ofrecidos por&nbsp;Stellae Limpiezas S.L.&nbsp;sin que sea contrario a lo dispuesto por las presentes Condiciones, la Ley, la moral o el orden público, o que de cualquier otro modo puedan suponer lesión de los derechos de terceros o del mismo funcionamiento del Sitio Web.</li>
                            <li>La veracidad y licitud de las informaciones aportadas por el Usuario en los formularios extendidos por&nbsp;Stellae Limpiezas S.L.&nbsp;para el acceso a ciertos Contenidos o Servicios ofrecidos por el Sitio Web. En todo caso, el Usuario notificará de forma inmediata a&nbsp;Stellae Limpiezas S.L.&nbsp;acerca de cualquier hecho que permita el uso indebido de la información registrada en dichos formularios, tales como, pero no sólo, el robo, extravío, o el acceso no autorizado a identificadores y/o contraseñas, con el fin de proceder a su inmediata cancelación.</li>
                            </ul>
                            <p>El mero acceso a este Sitio Web no supone entablar ningún tipo de relación de carácter comercial entre&nbsp;Stellae Limpiezas S.L.&nbsp;y el Usuario.</p>
                            <p>Siempre en el respeto de la legislación vigente, este Sitio Web de&nbsp;Stellae Limpiezas S.L.&nbsp;se dirige a todas las personas, sin importar su edad, que puedan acceder y/o navegar por las páginas del Sitio Web.</p>
                            <p>El Sitio Web está dirigido principalmente a Usuarios residentes en&nbsp;España.&nbsp;Stellae Limpiezas S.L.&nbsp;no asegura que el Sitio Web cumpla con legislaciones de otros países, ya sea total o parcialmente. Si el Usuario reside o tiene su domiciliado en otro lugar y decide acceder y/o navegar en el Sitio Web lo hará bajo su propia responsabilidad, deberá asegurarse de que tal acceso y navegación cumple con la legislación local que le es aplicable, no asumiendo&nbsp;Stellae Limpiezas S.L.&nbsp;responsabilidad alguna que se pueda derivar de dicho acceso.</p>
                            <h3>III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB: EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h3>
                            <p>Stellae Limpiezas S.L.&nbsp;no garantiza la continuidad, disponibilidad y utilidad del Sitio Web, ni de los Contenidos o Servicios.&nbsp;Stellae Limpiezas S.L.&nbsp;hará todo lo posible por el buen funcionamiento del Sitio Web, sin embargo, no se responsabiliza ni garantiza que el acceso a este Sitio Web no vaya a ser ininterrumpido o que esté libre de error.</p>
                            <p>Tampoco se responsabiliza o garantiza que el contenido o software al que pueda accederse a través de este Sitio Web, esté libre de error o cause un daño al sistema informático (software y hardware) del Usuario. En ningún caso&nbsp;Stellae Limpiezas S.L.&nbsp;será responsable por las pérdidas, daños o perjuicios de cualquier tipo que surjan por el acceso, navegación y el uso del Sitio Web, incluyéndose, pero no limitándose, a los ocasionados a los sistemas informáticos o los provocados por la introducción de virus.</p>
                            <p>Stellae Limpiezas S.L.&nbsp;tampoco se hace responsable de los daños que pudiesen ocasionarse a los usuarios por un uso inadecuado de este Sitio Web. En particular, no se hace responsable en modo alguno de las caídas, interrupciones, falta o defecto de las telecomunicaciones que pudieran ocurrir.</p>
                            <h3>IV. POLÍTICA DE ENLACES</h3>
                            <p>Se informa que el Sitio Web de&nbsp;Stellae Limpiezas S.L.&nbsp;pone o puede poner a disposición de los Usuarios medios de enlace (como, entre otros, links, banners, botones), directorios y motores de búsqueda que permiten a los Usuarios acceder a sitios web pertenecientes y/o gestionados por terceros.</p>
                            <p>La instalación de estos enlaces, directorios y motores de búsqueda en el Sitio Web tiene por objeto facilitar a los Usuarios la búsqueda de y acceso a la información disponible en Internet, sin que pueda considerarse una sugerencia, recomendación o invitación para la visita de los mismos.</p>
                            <p g-show="radio7 == 'radio7B'">Stellae Limpiezas S.L.&nbsp;no ofrece ni comercializa por sí ni por medio de terceros los productos y/o servicios disponibles en dichos sitios enlazados.</p>
                            {/* <p>Stellae Limpiezas S.L.&nbsp;ofrece contenidos patrocinados, anuncios y/o enlaces de afiliados. La información que aparece en estos enlaces de afiliados o los anuncios insertados, son facilitados por los propios anunciantes, por lo que&nbsp;Stellae Limpiezas S.L.&nbsp;no se hace responsable de posibles inexactitudes o errores que pudieran contener los anuncios, ni garantiza en modo alguno la experiencia, integridad o responsabilidad de los anunciantes o la calidad de sus productos y/o servicios.</p> */}
                            <p>Asimismo, tampoco garantizará la disponibilidad técnica, exactitud, veracidad, validez o legalidad de sitios ajenos a su propiedad a los que se pueda acceder por medio de los enlaces.</p>
                            <p>Stellae Limpiezas S.L.&nbsp;en ningún caso revisará o controlará el contenido de otros sitios web, así como tampoco aprueba, examina ni hace propios los productos y servicios, contenidos, archivos y cualquier otro material existente en los referidos sitios enlazados.</p>
                            <p>Stellae Limpiezas S.L.&nbsp;no asume ninguna responsabilidad por los daños y perjuicios que pudieran producirse por el acceso, uso, calidad o licitud de los contenidos, comunicaciones, opiniones, productos y servicios de los sitios web no gestionados por&nbsp;Stellae Limpiezas S.L.&nbsp;y que sean enlazados en este Sitio Web.</p>
                            <p>El Usuario o tercero que realice un hipervínculo desde una página web de otro, distinto, sitio web al Sitio Web de&nbsp;Stellae Limpiezas S.L.&nbsp;deberá saber que:</p>
                            <p>No se permite la reproducción —total o parcialmente— de ninguno de los Contenidos y/o Servicios del Sitio Web sin autorización expresa de&nbsp;Stellae Limpiezas S.L..</p>
                            <p>No se permite tampoco ninguna manifestación falsa, inexacta o incorrecta sobre el Sitio Web de&nbsp;Stellae Limpiezas S.L., ni sobre los Contenidos y/o Servicios del mismo.</p>
                            <p>A excepción del hipervínculo, el sitio web en el que se establezca dicho hiperenlace no contendrá ningún elemento, de este Sitio Web, protegido como propiedad intelectual por el ordenamiento jurídico español, salvo autorización expresa de&nbsp;Stellae Limpiezas S.L..</p>
                            <p>El establecimiento del hipervínculo no implicará la existencia de relaciones entre&nbsp;Stellae Limpiezas S.L.&nbsp;y el titular del sitio web desde el cual se realice, ni el conocimiento y aceptación de&nbsp;Stellae Limpiezas S.L.&nbsp;de los contenidos, servicios y/o actividades ofrecidos en dicho sitio web, y viceversa.</p>
                            <h3>V. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
                            <p>Stellae Limpiezas S.L.&nbsp;por sí o como parte cesionaria, es titular de todos los derechos de propiedad intelectual e industrial del Sitio Web, así como de los elementos contenidos en el mismo (a título enunciativo y no exhaustivo, imágenes, sonido, audio, vídeo, software o textos, marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.). Serán, por consiguiente, obras protegidas como propiedad intelectual por el ordenamiento jurídico español, siéndoles aplicables tanto la normativa española y comunitaria en este campo, como los tratados internacionales relativos a la materia y suscritos por España.</p>
                            <p>Todos los derechos reservados. En virtud de lo dispuesto en la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización de&nbsp;Stellae Limpiezas S.L..</p>
                            <p>El Usuario se compromete a respetar los derechos de propiedad intelectual e industrial de&nbsp;Stellae Limpiezas S.L.. Podrá visualizar los elementos del Sitio Web o incluso imprimirlos, copiarlos y almacenarlos en el disco duro de su ordenador o en cualquier otro soporte físico siempre y cuando sea, exclusivamente, para su uso personal. El Usuario, sin embargo, no podrá suprimir, alterar, o manipular cualquier dispositivo de protección o sistema de seguridad que estuviera instalado en el Sitio Web.</p>
                            <p>En caso de que el Usuario o tercero considere que cualquiera de los Contenidos del Sitio Web suponga una violación de los derechos de protección de la propiedad intelectual, deberá comunicarlo inmediatamente a&nbsp;Stellae Limpiezas S.L.&nbsp;a través de los datos de contacto del apartado de INFORMACIÓN GENERAL de este Aviso Legal y Condiciones Generales de Uso.</p>
                            <h3>VI. ACCIONES LEGALES, LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
                            <p>Stellae Limpiezas S.L.&nbsp;se reserva la facultad de presentar las acciones civiles o penales que considere necesarias por la utilización indebida del Sitio Web y Contenidos, o por el incumplimiento de las presentes Condiciones.</p>
                            <p>La relación entre el Usuario y&nbsp;Stellae Limpiezas S.L.&nbsp;se regirá por la normativa vigente y de aplicación en el territorio español. De surgir cualquier controversia en relación con la interpretación y/o a la aplicación de estas Condiciones las partes someterán sus conflictos a la jurisdicción ordinaria sometiéndose a los jueces y tribunales que correspondan conforme a derecho.</p>
                        </Col>
                    </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn grow_skew_forward' onClick={() => setModalAvisoLegalShow(false)}>Cerrar</button>
                </Modal.Footer>
            </Modal>
            <Modal
                show={modalPrivacidadShow}
                onHide={() => setModalPrivacidadShow(false)}
                aria-labelledby="contained-modal-title-vcenter"
                size='xl'
            >
                <Modal.Header closeButton className='d-flex flex-column text-center'>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <h2>POLÍTICA DE PRIVACIDAD DEL SITIO WEB</h2>
                        <h4>https://www.stellaelimpiezas.es/</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="grid-example">
                    <Container className='text-center'>
                    <Row>
                        <Col>
                            <h3>I. POLÍTICA DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h3>
                            <p>Respetando lo establecido en la legislación vigente,&nbsp;Stellae Limpiezas S.L.&nbsp;(en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.</p>
                            <h4>Leyes que incorpora esta política de privacidad</h4>
                            <p>Esta política de privacidad está adaptada a la normativa española y europea vigente en materia de protección de datos personales en internet. En concreto, la misma respeta las siguientes normas:</p>
                            <ul>
                                <li>El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD).</li>
                                <li>La Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPD-GDD).</li>
                                <li>El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba el Reglamento de desarrollo de la Ley Orgánica 15/1999, de 13 de diciembre, de Protección de Datos de Carácter Personal (RDLOPD).</li>
                                <li>La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE).</li>
                            </ul>
                            <h4>Identidad del responsable del tratamiento de los datos personales</h4>
                            <p>Dirección:&nbsp;TODO, TEO A Coruña</p>
                            <p>Teléfono de contacto:&nbsp;TODO</p>
                            <p>Email de contacto:&nbsp;{parse(email)}</p>
                            <h4>Registro de Datos de Carácter Personal</h4>
                            <p>En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le informamos que los datos personales recabados por&nbsp;Stellae Limpiezas S.L., mediante los formularios extendidos en sus páginas quedarán incorporados y serán tratados en nuestro fichero con el fin de poder facilitar, agilizar y cumplir los compromisos establecidos entre&nbsp;Stellae Limpiezas S.L.&nbsp;y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este rellene, o para atender una solicitud o consulta del mismo. Asimismo, de conformidad con lo previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicación la excepción prevista en el artículo 30.5 del RGPD, se mantine un registro de actividades de tratamiento que especifica, según sus finalidades, las actividades de tratamiento llevadas a cabo y las demás circunstancias establecidas en el RGPD.</p>
                            <h4>Principios aplicables al tratamiento de los datos personales</h4>
                            <p>El tratamiento de los datos personales del Usuario se someterá a los siguientes principios recogidos en el artículo 5 del RGPD y en el artículo 4 y siguientes de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:</p>
                            <ul>
                                <li>Principio de licitud, lealtad y transparencia: se requerirá en todo momento el consentimiento del Usuario previa información completamente transparente de los fines para los cuales se recogen los datos personales.</li>
                                <li>Principio de limitación de la finalidad: los datos personales serán recogidos con fines determinados, explícitos y legítimos.</li>
                                <li>Principio de minimización de datos: los datos personales recogidos serán únicamente los estrictamente necesarios en relación con los fines para los que son tratados.</li>
                                <li>Principio de exactitud: los datos personales deben ser exactos y estar siempre actualizados.</li>
                                <li>Principio de limitación del plazo de conservación: los datos personales solo serán mantenidos de forma que se permita la identificación del Usuario durante el tiempo necesario para los fines de su tratamiento.</li>
                                <li>Principio de integridad y confidencialidad: los datos personales serán tratados de manera que se garantice su seguridad y confidencialidad.</li>
                                <li>Principio de responsabilidad proactiva: el Responsable del tratamiento será responsable de asegurar que los principios anteriores se cumplen.</li>
                            </ul>
                            <h4>Categorías de datos personales</h4>
                            <p>Las categorías de datos que se tratan en&nbsp;Stellae Limpiezas S.L.&nbsp;son únicamente datos identificativos. En ningún caso, se tratan categorías especiales de datos personales en el sentido del artículo 9 del RGPD.</p>
                            <h4>Base legal para el tratamiento de los datos personales</h4>
                            <p>La base legal para el tratamiento de los datos personales es el consentimiento.&nbsp;Stellae Limpiezas S.L.&nbsp;se compromete a recabar el consentimiento expreso y verificable del Usuario para el tratamiento de sus datos personales para uno o varios fines específicos.</p>
                            <p>El Usuario tendrá derecho a retirar su consentimiento en cualquier momento. Será tan fácil retirar el consentimiento como darlo. Como regla general, la retirada del consentimiento no condicionará el uso del Sitio Web.</p>
                            <p>En las ocasiones en las que el Usuario deba o pueda facilitar sus datos a través de formularios para realizar consultas, solicitar información o por motivos relacionados con el contenido del Sitio Web, se le informará en caso de que la cumplimentación de alguno de ellos sea obligatoria debido a que los mismos sean imprescindibles para el correcto desarrollo de la operación realizada.</p>
                            <h4>Fines del tratamiento a que se destinan los datos personales</h4>
                            <p>Los datos personales son recabados y gestionados por&nbsp;Stellae Limpiezas S.L.&nbsp;con la finalidad de poder facilitar, agilizar y cumplir los compromisos establecidos entre el Sitio Web y el Usuario o el mantenimiento de la relación que se establezca en los formularios que este último rellene o para atender una solicitud o consulta.</p>
                            <p>Igualmente, los datos podrán ser utilizados con una finalidad comercial de personalización, operativa y estadística, y actividades propias del objeto social de&nbsp;Stellae Limpiezas S.L., así como para la extracción, almacenamiento de datos y estudios de marketing para adecuar el Contenido ofertado al Usuario, así como mejorar la calidad, funcionamiento y navegación por el Sitio Web.</p>
                            <p>En el momento en que se obtengan los datos personales, se informará al Usuario acerca del fin o fines específicos del tratamiento a que se destinarán los datos personales; es decir, del uso o usos que se dará a la información recopilada.</p>
                            <h4>Períodos de retención de los datos personales</h4>
                            <p>Los datos personales solo serán retenidos durante el tiempo mínimo necesario para los fines de su tratamiento y, en todo caso, únicamente durante el siguiente plazo:&nbsp;12 meses, o hasta que el Usuario solicite su supresión.</p>
                            <p>En el momento en que se obtengan los datos personales, se informará al Usuario acerca del plazo durante el cual se conservarán los datos personales o, cuando eso no sea posible, los criterios utilizados para determinar este plazo.</p>
                            <h4>Destinatarios de los datos personales</h4>
                            <p>Los datos personales del Usuario no serán compartidos con terceros.</p>
                            <p>En cualquier caso, en el momento en que se obtengan los datos personales, se informará al Usuario acerca de los destinatarios o las categorías de destinatarios de los datos personales.</p>
                            <h4>Datos personales de menores de edad</h4>
                            <p>Respetando lo establecido en los artículos 8 del RGPD y 7 de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, solo los mayores de 14 años podrán otorgar su consentimiento para el tratamiento de sus datos personales de forma lícita por&nbsp;Stellae Limpiezas S.L.. Si se trata de un menor de 14 años, será necesario el consentimiento de los padres o tutores para el tratamiento, y este solo se considerará lícito en la medida en la que los mismos lo hayan autorizado.</p>
                            <h4>Secreto y seguridad de los datos personales</h4>
                            <p>Stellae Limpiezas S.L.&nbsp;se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos, de forma que se garantice la seguridad de los datos de carácter personal y se evite la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.</p>
                            <p>El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que asegura que los datos personales se transmiten de forma segura y confidencial, al ser la transmisión de los datos entre el servidor y el Usuario, y en retroalimentación, totalmente cifrada o encriptada.</p>
                            <p>Sin embargo, debido a que&nbsp;Stellae Limpiezas S.L.&nbsp;no puede garantizar la inexpugabilidad de internet ni la ausencia total de hackers u otros que accedan de modo fraudulento a los datos personales, el Responsable del tratamiento se compromete a comunicar al Usuario sin dilación indebida cuando ocurra una violación de la seguridad de los datos personales que sea probable que entrañe un alto riesgo para los derechos y libertades de las personas físicas. Siguiendo lo establecido en el artículo 4 del RGPD, se entiende por violación de la seguridad de los datos personales toda violación de la seguridad que ocasione la destrucción, pérdida o alteración accidental o ilícita de datos personales transmitidos, conservados o tratados de otra forma, o la comunicación o acceso no autorizados a dichos datos.</p>
                            <p>Los datos personales serán tratados como confidenciales por el Responsable del tratamiento, quien se compromete a informar de y a garantizar por medio de una obligación legal o contractual que dicha confidencialidad sea respetada por sus empleados, asociados, y toda persona a la cual le haga accesible la información.</p>
                            <h4>Derechos derivados del tratamiento de los datos personales</h4>
                            <p>El Usuario tiene sobre&nbsp;Stellae Limpiezas S.L.&nbsp;y podrá, por tanto, ejercer frente al Responsable del tratamiento los siguientes derechos reconocidos en el RGPD y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales:</p>
                            <ul>
                                <li><em>Derecho de acceso:</em>&nbsp;Es el derecho del Usuario a obtener confirmación de si&nbsp;Stellae Limpiezas S.L.&nbsp;está tratando o no sus datos personales y, en caso afirmativo, obtener información sobre sus datos concretos de carácter personal y del tratamiento que&nbsp;Stellae Limpiezas S.L.&nbsp;haya realizado o realice, así como, entre otra, de la información disponible sobre el origen de dichos datos y los destinatarios de las comunicaciones realizadas o previstas de los mismos.</li>
                                <li><em>Derecho de rectificación:</em>&nbsp;Es el derecho del Usuario a que se modifiquen sus datos personales que resulten ser inexactos o, teniendo en cuenta los fines del tratamiento, incompletos.</li>
                                <li><em>Derecho de supresión ("el derecho al olvido"):</em>&nbsp;Es el derecho del Usuario, siempre que la legislación vigente no establezca lo contrario, a obtener la supresión de sus datos personales cuando estos ya no sean necesarios para los fines para los cuales fueron recogidos o tratados; el Usuario haya retirado su consentimiento al tratamiento y este no cuente con otra base legal; el Usuario se oponga al tratamiento y no exista otro motivo legítimo para continuar con el mismo; los datos personales hayan sido tratados ilícitamentemente; los datos personales deban suprimirse en cumplimiento de una obligación legal; o los datos personales hayan sido obtenidos producto de una oferta directa de servicios de la sociedad de la información a un menor de 14 años. Además de suprimir los datos, el Responsable del tratamiento, teniendo en cuenta la tecnología disponible y el coste de su aplicación, deberá adoptar medidas razonables para informar a los responsables que estén tratando los datos personales de la solicitud del interesado de supresión de cualquier enlace a esos datos personales.</li>
                                <li><em>Derecho a la limitación del tratamiento:</em>&nbsp;Es el derecho del Usuario a limitar el tratamiento de sus datos personales. El Usuario tiene derecho a obtener la limitación del tratamiento cuando impugne la exactitud de sus datos personales; el tratamiento sea ilícito; el Responsable del tratamiento ya no necesite los datos personales, pero el Usuario lo necesite para hacer reclamaciones; y cuando el Usuario se haya opuesto al tratamiento.</li>
                                <li><em>Derecho a la portabilidad de los datos:</em>&nbsp;En caso de que el tratamiento se efectúe por medios automatizados, el Usuario tendrá derecho a recibir del Responsable del tratamiento sus datos personales en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable del tratamiento. Siempre que sea técnicamente posible, el Responsable del tratamiento transmitirá directamente los datos a ese otro responsable.</li>
                                <li><em>Derecho de oposición:</em>&nbsp;Es el derecho del Usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de&nbsp;Stellae Limpiezas S.L..</li>
                                <li><em>Derecho a no ser a no ser objeto de una decisión basada únicamente en el tratamiento automatizado, incluida la elaboración de perfiles:</em>&nbsp;Es el derecho del Usuario a no ser objeto de una decisión individualizada basada únicamente en el tratamiento automatizado de sus datos personales, incluida la elaboración de perfiles, existente salvo que la legislación vigente establezca lo contrario.</li>
                            </ul>
                            <p>Así pues, el Usuario podrá ejercitar sus derechos mediante comunicación escrita dirigida al Responsable del tratamiento con la referencia "RGPD-https://www.stellae.com/TODO", especificando:</p>
                            <ul>
                                <li>Nombre, apellidos del Usuario y copia del DNI. En los casos en que se admita la representación, será también necesaria la identificación por el mismo medio de la persona que representa al Usuario, así como el documento acreditativo de la representación. La fotocopia del DNI podrá ser sustituida, por cualquier otro medio válido en derecho que acredite la identidad.</li>
                                <li>Petición con los motivos específicos de la solicitud o información a la que se quiere acceder.</li>
                                <li>Domicilio a efecto de notificaciones.</li>
                                <li>Fecha y firma del solicitante.</li>
                                <li>Todo documento que acredite la petición que formula.</li>
                            </ul>
                            <p>Esta solicitud y todo otro documento adjunto podrá enviarse a la siguiente dirección y/o correo electrónico:</p>
                            <p>Dirección postal:&nbsp;TODO, TEO A Coruña</p>
                            <p>Correo electrónico:&nbsp;{parse(email)}</p>
                            <h4>Enlaces a sitios web de terceros</h4>
                            <p>El Sitio Web puede incluir hipervínculos o enlaces que permiten acceder a páginas web de terceros distintos de&nbsp;Stellae Limpiezas S.L., y que por tanto no son operados por&nbsp;Stellae Limpiezas S.L.. Los titulares de dichos sitios web dispondrán de sus propias políticas de protección de datos, siendo ellos mismos, en cada caso, responsables de sus propios ficheros y de sus propias prácticas de privacidad.</p>
                            <h4>Reclamaciones ante la autoridad de control</h4>
                            <p>En caso de que el Usuario considere que existe un problema o infracción de la normativa vigente en la forma en la que se están tratando sus datos personales, tendrá derecho a la tutela judicial efectiva y a presentar una reclamación ante una autoridad de control, en particular, en el Estado en el que tenga su residencia habitual, lugar de trabajo o lugar de la supuesta infracción. En el caso de España, la autoridad de control es la Agencia Española de Protección de Datos (http://www.agpd.es).</p>
                            <h3>II. ACEPTACIÓN Y CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h3>
                            <p>Es necesario que el Usuario haya leído y esté conforme con las condiciones sobre la protección de datos de carácter personal contenidas en esta Política de Privacidad, así como que acepte el tratamiento de sus datos personales para que el Responsable del tratamiento pueda proceder al mismo en la forma, durante los plazos y para las finalidades indicadas. El uso del Sitio Web implicará la aceptación de la Política de Privacidad del mismo.</p>
                            <p>Stellae Limpiezas S.L.&nbsp;se reserva el derecho a modificar su Política de Privacidad, de acuerdo a su propio criterio, o motivado por un cambio legislativo, jurisprudencial o doctrinal de la Agencia Española de Protección de Datos. Los cambios o actualizaciones de esta Política de Privacidad no serán notificados de forma explícita al Usuario. Se recomienda al Usuario consultar esta página de forma periódica para estar al tanto de los últimos cambios o actualizaciones.</p>
                            <p>Esta Política de Privacidad fue actualizada para adaptarse al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y a la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales.</p>
                            <div>
                                <p>&nbsp;</p>
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <button className='btn grow_skew_forward' onClick={() => setModalPrivacidadShow(false)}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Footer;