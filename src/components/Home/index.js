import './index.scss';
import LimpiezaProfesionalImg from '../../assets/images/home-img/limpieza-profesional.png';
import NuestrosServiciosImg from '../../assets/images/home-img/limpieza-coruña.png';
import ClientesAvalanImg from '../../assets/images/home-img/clientes-avalan.png';
import TrabajaNosotrosImg from '../../assets/images/home-img/trabajo-limpieza.png';
import Loader from 'react-loaders';
import { Col, Container, Row } from 'react-bootstrap';
import { useOutletContext } from "react-router-dom";
import Budget from "../Budget";
import Contact from '../Contact';
import { useEffect, useState } from 'react';


const Home = () => {
    const breakpoint = 991; // width en que img pasa a ocupar 12 cols

    const [width, setWidth] = useState(0)
    
    useEffect(() => {
      const handleResize = () => {
        console.log(window.innerWidth);
        setWidth(window.innerWidth)
      };
      
      window.addEventListener("resize", handleResize);
      
      handleResize();
      
      return () => { 
        window.removeEventListener("resize", handleResize)
      }
    }, [])

    const outletContext = useOutletContext();

    return (
        <>
            <Container className='home-page cursor-default' fluid>
                <Row className='ps-4 pt-4 pb-4 main-info justify-content-between'>
                    <Col xs={12} md={6} className='d-flex align-items-center'>
                      <h1>
                          Empresa de limpieza en Galicia
                      </h1>
                    </Col>
                </Row>
                <Row className='justify-content-center mb-3 align-items-center text-center secondary-info-container'>
                  <Col xs={12} lg={6} xl={6}>
                    <img className='arrow-right-img' src={LimpiezaProfesionalImg} alt='' />
                  </Col>
                  <Col xs={12} lg={6} xl={5} className='secondary-info-right'>
                    <Row className='mb-3'>
                      <Col>
                        <h2>
                          Limpieza Profesional
                        </h2>
                      </Col>
                    </Row>
                    <Row className='text-justify'>
                      <Col>
                        <div className='mb-3'>
                            Nuestra <span className='fw-bold'>Agencia de Limpieza</span> ofrece servicios de mantenimiento a largo plazo así como acondicionamientos por horas.
                        </div>
                        <div className='mb-3'>
                          <span className='fw-bold'>Mantenimientos: </span>Hoteles, Oficinas, Colegios, Universidades, Gimnasios, Comunidades, Entidades bancarias, Centros comerciales, Empresas de construcción, Parkings, Grandes superficies.
                        </div>
                        <div className='mb-3'>
                          <span className='fw-bold'>Acondicionamientos: </span>Limpieza de cristales, Limpieza de moquetas, Limpieza de Naves industriales, Limpieza de obra, Limpieza general de viviendas unifamiliares o chalets.
                        </div>
                        <div className='mb-3'>
                          En <span className='fw-bold'>Stellae S.L.</span> contamos con un equipo de profesionales bien cualificados que nos permiten garantizar la máxima eficacia en cada uno de nuestros trabajos.
                        </div>
                        <div className='mb-3'>
                            Simplemente <a className='link' onClick={() => outletContext?.contactPageRef?.scrollIntoView({ block: "start", behavior: "smooth" })}>contacta con nosotros</a> y solicita tu presupuesto de limpieza sin compromiso.
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='justify-content-center mb-3 align-items-center text-center secondary-info-container'>
                  {width <= breakpoint && 
                  <Col xs={12} lg={6} xl={6}>
                    <img className='arrow-left-img' src={NuestrosServiciosImg} alt='' />
                  </Col>}
                  <Col xs={12} lg={6} xl={5} className='secondary-info-left'>
                    <Row className='mb-3'>
                      <Col>
                        <h2>
                          ¿Dónde puedes contratar nuestros servicios?
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div>
                            Actualmente ofrecemos los servicios de limpieza mencionados en A Coruña, Pontevedra y Lugo.
                        </div>
                        <div>
                            Si eres una empresa o particular ubicada en alguna de estas provincias no dudes en contactar con nosotros.
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  {width > breakpoint && 
                  <Col xs={12} lg={6} xl={6}>
                    <img className='arrow-left-img' src={NuestrosServiciosImg} alt='' />
                  </Col>}
                </Row>
                <Row className='justify-content-center mb-3 align-items-center text-center secondary-info-container'>
                  <Col xs={12} lg={6} xl={6}>
                    <img className='arrow-right-img' src={ClientesAvalanImg} alt='' />
                  </Col>
                  <Col xs={12} lg={6} xl={5} className='secondary-info-right'>
                    <Row className='mb-3'>
                      <Col>
                        <h2>
                          Nuestros clientes nos avalan
                        </h2>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <p>
                            Limpian que da gusto <br/>
                            - Empresa X
                        </p>
                        <p>
                            Nunca había visto una empresa de limpieza que limpiase tanto y tan bien <br/>
                            - Hotel Y
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='justify-content-center mb-3 align-items-center text-center secondary-info-container'>
                  {width <= breakpoint && 
                  <Col xs={12} lg={6} xl={6}>
                    <img className='arrow-left-img' src={TrabajaNosotrosImg} alt='' />
                  </Col>}
                  <Col xs={12} lg={6} xl={5} className='secondary-info-left'>
                    <Row className='mb-3'>
                      <Col>
                        <h2>
                          Trabaja con nosotros como profesional de la limpieza
                        </h2>
                      </Col>
                    </Row>
                    <Row className='text-justify'>
                      <Col>
                        <div>
                          Si buscas trabajo como limpiador o limpiadora en el sector de la limpieza en A Coruña, Pontevedra o Lugo, 
                          no dudes en contactar con nosotros enviando tu curriculum e información relevante a nuestro 
                          <a className='ms-2 me-2 link' onClick={() => outletContext?.contactPageRef?.scrollIntoView({ block: "start", behavior: "smooth" })}>correo electrónico</a> 
                          y nos pondremos en contacto contigo lo antes posible.
                        </div>
                        <div>
                          Tanto si buscas trabajo de limpieza por horas como a tiempo parcial o a jornada completa, contáctanos para que podamos ofrecerte lo que mejor se ajuste a ti.
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  {width > breakpoint && 
                  <Col xs={12} lg={6} xl={6}>
                    <img className='arrow-left-img' src={TrabajaNosotrosImg} alt='' />
                  </Col>}
                </Row>
                <Contact></Contact>
                <Budget></Budget>
            </Container>
            <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}

export default Home;