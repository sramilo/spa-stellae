import './index.scss';
import LogoS from '../../assets/images/logo/logo-azul.png';
import LogoN from '../../assets/images/logo/logo-naranja.png';
import LogoR from '../../assets/images/logo/logo-rosa.png';
import { Container, Navbar } from 'react-bootstrap';

const Topnavbar = ({ contactPageRef }) => {

    return (
        <Navbar className="bg-body-tertiary sticky-top">
            <Container fluid>
                <Navbar.Brand className='logo' href="/"><img src={LogoN} alt='empresas-limpieza-stellae' /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    {/* <Nav.Link href="https://github.com/sramilo"><FontAwesomeIcon size='xl' icon={faFacebook} color='#030B5D' /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/"><FontAwesomeIcon size='xl' icon={faInstagram} color='#030B5D' /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/"><FontAwesomeIcon size='xl' icon={faLinkedin} color='#030B5D' /></Nav.Link> */}
                    <button
                        className='btn grow_skew_forward'
                        onClick={() => {
                            contactPageRef.scrollIntoView({ block: "start", behavior: "smooth" })
                        }}
                    >
                        Contáctanos
                    </button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Topnavbar;