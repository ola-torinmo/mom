import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic1Crv from './Images/pic1Crv.jpg'; // Tell webpack this JS file uses this image
// import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import '../App.css';

function WorkUs() {
  return (
    <Container className='workus '>
        <Card className="bg-dark text-white ">
    <Card.Img src={pic1Crv} alt="Card image" fluid />
    <Card.ImgOverlay>
      {/* <Card.Title>Card title</Card.Title> */}
      <Card.Text className='mt-5 ' >
      <h2 className='pb-2'>REWARDING CAREERS</h2>
       
       <p className='d-none d-sm-block'>
       Work With Us
        If you are reliable, dedicated, caring and prepared to follow the “County Carers Ethos”<br/> we provide ourselves on – we need to hear from you.</p>
    </Card.Text>
    <Button variant="outline-light"  size="lg" className='mt-1 but'>
          Sign Up
        </Button>{' '}
      {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
    </Card.ImgOverlay>
    </Card>
    </Container>

  );
}

export default WorkUs;