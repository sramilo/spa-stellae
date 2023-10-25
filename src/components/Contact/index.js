import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        return () => {
            setTimeout(() => {
                setLetterClass('text-animate-hover');
            }, 3000);
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'react-portfolio',
                'template_ziymkdy',
                refForm.current,
                'SGOYOzUe1CrlQwc_a'
            )
            .then(
                () => {
                    alert('Message successfully sent!');
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again');
                }
            )
    }
    

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Contact me".split("")}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message" required />
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
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
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default Contact;