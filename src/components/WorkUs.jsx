import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import pic1Crv from './Images/pic1Crv.jpg'; // Tell webpack this JS file uses this image
import pic1a from './Images/pic1a.jpg'; // Tell webpack this JS file uses this image
// import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import '../App.css';

function WorkUs() {
  return (
    <Container className=''>
        <Card className="workus  text-white pb-5  ">
    <Card.Img src={pic1a} alt="Card image" fluid />
    <Card.ImgOverlay>
      <Card.Title><h2 className='mt-5 ' >REWARDING CAREERS</h2></Card.Title>
      <Card.Text className='but mt-5 ' >
      
       
       <p className='d-none d-sm-block'>
       Work With Us
        If you are reliable, dedicated, caring and prepared to follow the “County Carers Ethos”<br/> we provide ourselves on – we need to hear from you.</p>
    </Card.Text>
       <Button variant="outline-light"  size="lg" className='but  '>
          Sign Up
        </Button>{' '}
      {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
    </Card.ImgOverlay>
    </Card>
    </Container>

  );
}

export default WorkUs;