import './index.scss';
import LogoS from '../../assets/images/logo/stellae2-transparent.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Container, Navbar, Nav } from 'react-bootstrap';

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
                <Navbar.Brand className='logo' href="/"><img src={LogoS} alt='logo' /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end social-media-icons">
                    <Nav.Link href="https://github.com/sramilo"><FontAwesomeIcon size='xl' icon={faFacebook} color='#f4f5f7' /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/"><FontAwesomeIcon size='xl' icon={faInstagram} color='#f4f5f7' /></Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/samuel-ramilo/"><FontAwesomeIcon size='xl' icon={faLinkedin} color='#f4f5f7' /></Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Topnavbar;