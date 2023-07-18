import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
// import pic4C from './Images/pic4C.jpg'; // Tell webpack this JS file uses this image
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

import '../App.css';

function Review() {
  return (
   <Container className='review'>
    <Row>
    <Col md={4}>
    <Toast className='pb-3'>
      <Toast.Header>
        <img  className="rounded me-2" alt="" />
        <strong className="me-auto">Ayobami</strong>
        <div className=''>
        <FontAwesomeIcon icon={ faStar} className='yellow' />
        <FontAwesomeIcon icon={ faStar} className='yellow' />
        <FontAwesomeIcon icon={ faStar} className='yellow' />
        <FontAwesomeIcon icon={ faStar} className='yellow' />
        <FontAwesomeIcon icon={ faStar} />
        </div>
        
        

        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body  className='tb d-none d-sm-block'>"Momentum Services consistently delivers exceptional quality in their work. Their attention to detail and commitment to excellence is commendable."  
        </Toast.Body>
    </Toast>
    </Col>
    <Col md={4}>
    <Toast className='pb-3'>
      <Toast.Header>
        <img  className="rounded me-2" alt="" />
        <strong className="me-auto">Torinmo</strong>
        <div className=''>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} />
        </div>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className='tb d-none d-sm-block'>"The level of professionalism exhibited by Momentum Services is remarkable. From their communication to their work ethic, they truly set the bar high."
       
      </Toast.Body>
    </Toast>
    </Col>
    <Col md={4}>
    <Toast className='pb-3'>
      <Toast.Header>
        <img  className="rounded me-2" alt="" />
        <strong className="me-auto">Olaoluwa</strong>
        <div >
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar}className='yellow' />
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} />
        <FontAwesomeIcon icon={ faStar} />
        </div>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body  className='tb d-none d-sm-block'>"Momentum Services has a reputation for their integrity and honesty. They operate with transparency and always prioritize the best interests of their clients."</Toast.Body>
    </Toast>
    </Col>
   </Row>
   </Container>
  );
}

export default Review;