import './index.scss';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import PresupuestoImg from '../../assets/images/presupuesto.png';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect } from 'react';
import Logo from './Logo';
import Loader from 'react-loaders';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['a', 'm', 'u', 'e', 'l'];
    const jobArray = ['F', 'u', 'll', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 4100);
        }
    }, [])

    return (
        <>
            <Container className='home-page' fluid>
                <Row xs={1} sm={4} md={2} lg={6} xl={4} xxl={4} className='justify-content-around text-center'>
                    <Col className='margin-right-2'>
                        <Card className='main-card'>
                            <Card.Body>
                                <Card.Title>Solicita un presupuesto</Card.Title>
                                <Card.Img className="card-img" variant="top" src={PresupuestoImg} />
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button className='main-button'>Solicitud</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='margin-right-2'>
                        <Card className='main-card'>
                            <Card.Body>
                                <Card.Title>Solicita un presupuesto</Card.Title>
                                <Card.Img className="card-img" variant="top" src={PresupuestoImg} />
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button className='main-button'>Solicitud</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='margin-right-2'>
                        <Card className='main-card'>
                            <Card.Body>
                                <Card.Title>Solicita un presupuesto</Card.Title>
                                <Card.Img className="card-img" variant="top" src={PresupuestoImg} />
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button className='main-button'>Solicitud</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='margin-right-2'>
                        <Card className='main-card'>
                            <Card.Body>
                                <Card.Title>Solicita un presupuesto</Card.Title>
                                <Card.Img className="card-img" variant="top" src={PresupuestoImg} />
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button className='main-button'>Solicitud</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {/* <div className="container home-page">
                    <div className="text-zone">
                        <h1>
                            <span className={letterClass}>H</span>
                            <span className={`${letterClass} _12`}>i,</span>
                            <br />
                            <span className={`${letterClass} _13`}>I</span>
                            <span className={`${letterClass} _14`}>'m</span>
                            <img src={LogoTitle} alt="developer" />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={nameArray}
                                idx={15}
                            />
                            <br />
                            <AnimatedLetters
                                letterClass={letterClass}
                                strArray={jobArray}
                                idx={21}
                            />
                        </h1>
                        <h2>
                            Frontend Developer / Backend developer / Javascript and Java expert
                        </h2>
                        <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                    </div>
                    <Logo />
                </div> */}
            </Container>
            <Loader type='ball-scale-ripple-multiple' />
        </>
    )
}

export default Home;