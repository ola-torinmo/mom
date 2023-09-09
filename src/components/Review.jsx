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

    <div
      aria-live="polite"
      aria-atomic="true"
      className="bg-light position-relative"
      style={{ minHeight: '240px' }}
    >
   <Container className='review'>
    <Row className='mb-3'>
    <Col  md={4}>
    <Toast className='bg-secondary pb-3 toast '>
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
        <Toast.Body  
          className='tb  text-white'>"Momentum Services consistently delivers exceptional quality in their work. Their attention to detail and commitment to excellence is commendable."  
        </Toast.Body>
    </Toast>
    </Col>
    <Col md={4}>
    <Toast className='bg-secondary pb-3 toast'>
      <Toast.Header>
        <img  className="rounded me-2" alt="" />
        <strong className="me-auto">Naomi</strong>
        <div className=''>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} />
        </div>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className='tb  text-white'>"The level of professionalism exhibited by Momentum Services is remarkable. From their communication to their work ethic, they truly set the bar high."
       
      </Toast.Body>
    </Toast>
    </Col>
    <Col md={4}>
    <Toast className='bg-secondary pb-3 toast'>
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
      <Toast.Body  className='tb  text-white'>"Momentum Services has a reputation for their integrity and honesty. They operate with transparency and always prioritize the best interests of their clients."</Toast.Body>
    </Toast>
    </Col>
   </Row>

   <Row className=''>
    <Col md={4} sm={10}>
    <Toast className='bg-secondary pb-3 d-none d-sm-block'>
      <Toast.Header>
        <img  className="rounded me-2" alt="" />
        <strong className="me-auto">Elias</strong>
        <div className=''>
        <FontAwesomeIcon icon={ faStar} className='yellow' />
        <FontAwesomeIcon icon={ faStar} className='yellow' />
        <FontAwesomeIcon icon={ faStar} className='yellow' />
        <FontAwesomeIcon icon={ faStar} className='yellow' />
        <FontAwesomeIcon icon={ faStar} />
        </div>
        
        

        <small>11 mins ago</small>
      </Toast.Header>
        <Toast.Body  
          className='tb  text-white'>"Momentum is a shining example of business excellence. Their consistent growth and commitment to quality make them a beacon in their industry."  
        </Toast.Body>
    </Toast>
    </Col>
    <Col md={4}>
    <Toast className='bg-secondary pb-3 d-none d-sm-block'>
      <Toast.Header>
        <img  className="rounded me-2" alt="" />
        <strong className="me-auto">Tori</strong>
        <div className=''>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} />
        </div>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className='tb  text-white'>"Momentum's passion for innovation is truly remarkable. They have a knack for staying ahead of the curve and continually delighting their customers."
       
      </Toast.Body>
    </Toast>
    </Col>
    <Col md={4}>
    <Toast className='bg-secondary pb-3 d-none d-sm-block '>
      <Toast.Header>
        <img  className="rounded me-2" alt="" />
        <strong className="me-auto">Jenise</strong>
        <div >
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar}className='yellow' />
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        <FontAwesomeIcon icon={ faStar} className='yellow'/>
        </div>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body  className='tb text-white'>"In a world where businesses come and go, Momentum stands strong, a testament to their resilience, dedication, and unwavering pursuit of success."</Toast.Body>
    </Toast>
    </Col>
   </Row>
   </Container>
   </div>
  );
}

export default Review;