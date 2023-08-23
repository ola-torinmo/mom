import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pic6 from './Images/pic6.jpg'; // Tell webpack this JS file uses this image
import pic6ac from './Images/pic6ac.jpg'; // Tell webpack this JS file uses this image
import pic4Cr from './Images/pic4Cr.jpg'; // Tell webpack this JS file uses this image

function Services() {
  return (
    <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='imgr'>
        <Col xs={12} md={6}>
          <p className='mt-5'>
          <h2 className='pb-4 '>
          YOU’RE IN SAFE HANDS
          About County Carers
          </h2>
          Our team is like a family and we all work together to provide the best service for our clients. The management team has worked together in the care industry for over 15 years and that solid foundation and wealth of experience is what allows us to operate in such a successful manner, providing an exceptional and reliable service.
          </p>
        </Col>
        <Col xs={12} md={6}>
        <Image src={pic6ac} fluid 
          className=' rounded'/>
        </Col>
      </Row>
      <Row className='imgr imgrv'>
        <Col xs={12} md={6}>
          <p className='mt-5 '>
           <h2 className=' pb-4 '>
           DON’T TAKE OUR WORD FOR IT
           Customer Feedback
           </h2>
           “I would like to take this opportunity to thank you for the great service you provide to my father. I know the family are so happy with the care you give him and you have made his life so much better. From our point you are always so easy to talk to if we have any worries and happy to adjust the care time on the odd occasion it has been needed.”
           
           – Mrs B
          </p>
        </Col>
        <Col xs={12} md={6}>
        <Image src={pic4Cr} fluid 
          className=' rounded'/>
        </Col>
      </Row>
      </Container>

  );
}

export default Services;
