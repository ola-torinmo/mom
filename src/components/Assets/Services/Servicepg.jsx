import React from "react";
import NavbarComp from "../../NavbarComp";
import ContactForm from "../../ContactForm";
import JumboComp from "../../JumboComp";
// import Image from 'react-bootstrap/Image';
import jum3a from '../../Images/jum3a.jpg'; // Tell webpack this JS file uses this image
import Footer from "../../Footer";
import ser1 from '../../Images/ser1.jpg';
import ser2 from '../../Images/ser2.jpg';
import ser3 from '../../Images/ser3.jpg';
import ser4 from '../../Images/ser4.jpg';
// import CoreValue from "../../CoreValue";
import '../../style.css';
import { Container,Row,Col,Image } from "react-bootstrap";


function Servicepg(){
    return(

        <div>
            <NavbarComp />
            <JumboComp  img={jum3a} title={<h1 className="mel ">All Services</h1>}/>
            <div>

            </div>
            <div className='contservice'>
                <Container>
                    <div className="banner">
                    <h1> In the comfort of your own home</h1>
                    </div>
                <Row className='imgr'>
                    <Col xs={12} md={6}>
                        <Image src={ser1} fluid 
                        className=' rounded'/>
                        <h2 className="imgt">Live In Care</h2>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src={ser4} fluid 
                        className=' rounded'/>
                        <h2 className="imgt">Specialist Services</h2>
                    </Col>
                </Row>
                <Row className='imgr'>
                    <Col xs={12} md={6}>
                        <Image src={ser2} fluid 
                        className=' rounded'/>
                        <h2 className="imgt">Daily Care</h2>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src={ser3} fluid 
                        className=' rounded'/>
                        <h2 className="imgt">Bespoke Care Packages</h2>
                    </Col>
                </Row>
                </Container>

            </div>
            {/* <CoreValue/>  */}
            <ContactForm />
            <Footer/>
        </div>
    )
}
export default Servicepg;