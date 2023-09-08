import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import pic6 from './Images/pic6.jpg'; // Tell webpack this JS file uses this image
// import pic6ac from './Images/pic6ac.jpg'; // Tell webpack this JS file uses this image
// import pic4Cr from './Images/pic4Cr.jpg'; // Tell webpack this JS file uses this image

function Services(props) {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='imgr'>
        <Col xs={12} md={6}>
          <p className='mt-5'>
          <h2 className='pb-4 '>
            {props.head1}
          </h2>
          {props.body1}
          </p>
        </Col>
        <Col xs={12} md={6}>
        <Image src={props.img1} fluid 
          className=' rounded'/>
        </Col>
      </Row>
      <Row className='imgr imgrv'>
        <Col xs={12} md={6}>
          <p className='mt-5 '>
           <h2 className=' pb-4 '>
           {props.head2}
           </h2>
            {props.body2}
          </p>
        </Col>
        <Col xs={12} md={6}>
        <Image src={props.img2} fluid 
          className=' rounded'/>
        </Col>
      </Row>
      </Container>

  );
}

export default Services;
