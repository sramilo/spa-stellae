import './index.scss';
import LogoS from '../../assets/images/stellae2.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col, Navbar, NavbarBrand, Nav, NavDropdown } from 'react-bootstrap';

const Topnavbar = () => {
    return (
        // <Navbar fixed='top' expand="lg" className="bg-body-tertiary nav-bar-custom">
        //     <Navbar.Brand  className='logo' href="#home"><img src={LogoS} alt='logo'></img></Navbar.Brand>
        //     <Navbar.Toggle />
        //     <Navbar.Collapse id="basic-navbar-nav justify-content-end">
        //     {/* Aquí irán diferentes menuses a gusto  */}
        //     {/* <NavLink exact='true' activeclassname='active' to='/'>
        //         <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
        //     </NavLink> */}
        //         <Nav className="me-auto">
        //             <Nav.Link href="https://github.com/sramilo"><FontAwesomeIcon icon={faLinkedin} color='4d4d4e' /></Nav.Link>
        //             <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/"><FontAwesomeIcon icon={faGithub} color='4d4d4e' /></Nav.Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        <Navbar className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand className='logo' href="#home"><img src={LogoS} alt='logo' /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end social-media-icons">
                    <Nav.Link href="https://github.com/sramilo"><FontAwesomeIcon size='xl' icon={faFacebook} color='4d4d4e' /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/"><FontAwesomeIcon size='xl' icon={faInstagram} color='4d4d4e' /></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Topnavbar;