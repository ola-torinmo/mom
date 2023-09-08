import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function CoreValue (){
    return(
        <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row className='CoreSection'>
        <Col xs={12} md={6}>
          <p className='mt-5'>
          <h2 className='pb-4 '>
          Why Momentum?
          </h2>
          The simple reason is that we offer an excellent service built on a distinct perspective on domiciliary care.

            We ensure continuity of care by scheduling a team of regular caregivers (maximum of three) for daily visits at specific times or on a regular rotation for clients who live in.

            We think that when you reach a point in life where you require care, additional help, or support, you should get the best care possible from a caregiver—someone you would pick as a friend—who not only has the necessary education and expertise.


          </p>
        </Col>
        <Col xs={12} md={6}>
          <p className='mt-5'>
          <h2 className='pb-4 '>
          What qualities you can expect?
          </h2>
          As a company, we think that finding caregivers with the appropriate traits and attitudes is the most crucial step. All of our caregivers are genuinely kind, upbeat, trustworthy, and honest people.

            They understand the value of fostering your independence, protecting your wellbeing, and maintaining the privacy of your personal information, and they have the morals to ensure that you are always treated with dignity and respect. They are dependable, professional, and happy at what they do, therefore their goal will always be to make you smile.

          </p>
        </Col>
      </Row>
      
      </Container>

    );
}
export default CoreValue;