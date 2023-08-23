import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedin,
  faInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";




const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faFacebookF,
    url: "https://facebook.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faInstagram,
    url: "https://instagram.com",
  },
  {
    icon: faTwitterSquare,
    url: "https://twitter.com",
  },
];

const Footer = () => {
  return (
    <footer className="bg-light text-dark mt-1 pt-5">
      <Container className='footer2'>
        <Row >
          <Col md={6} >
            {/* <h5 className='abt'>Socials</h5> */}
           <div >
           {socials.map(({ icon, url }) => ( 
               <a 
                 key={url} 
                 href={url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
               > 
                 <FontAwesomeIcon icon={icon} size="2x" key={url} className='socials' /> 
               </a> 
             ))} 
           </div>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="/" className='text-dark text-decoration-none'>Home</a>
              </li>
              <li>
                <a href="/about" className='text-dark text-decoration-none'>About</a>
              </li>
              <li>
                <a href="/contact" className='text-dark text-decoration-none'>Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>123 Street, City</li>
              <li>Email: example@example.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-center p-3 bg-light text-dark foot">
        &copy; {new Date().getFullYear()} Momentum. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
