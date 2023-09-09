import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
// import pic3 from './Images/pic3.jpg'; // Tell webpack this JS file uses this image
// import pic3a from './Images/pic3a.jpg'; // Tell webpack this JS file uses this image
// import pic3b from './Images/pic3b.jpg'; // Tell webpack this JS file uses this image

import '../App.css';

function ContactForm() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (



   <Container  className='formik rounded mb-5' >
     <Card className="cardset bg-secondary " style={{ backgroundColor: '#f8f9fa' }}  >
      {/* <Card.Img src={pic3b} alt="Card image" /> */}
      {/* <Card.ImgOverlay> */}
        <Card.Body >
        <Card.Title className='text text-white mt-5 '><h2>CONTACT</h2></Card.Title>
        <Card.Text>
        <Container  className='mt-5 pb-5'>
      <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
        lastName: '',
        username: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-4 text-white" xs="8">
            <Form.Group as={Col} md="12" controlId="validationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
           
          </Row>
          <Row className='mb-4 text-white'>
          <Form.Group as={Col} md="12" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
          </Row>
          <Row className="mb-4 text-white">
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

          </Row>

          <Row className="mb-4 text-white">
            <Form.Group as={Col} md="12" controlId="validationFormik03">
              <Form.Label>Adress</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>

          </Row>
          <Row className="mb-4 text-white">
            
            <Form.Group as={Col} md="12" controlId="validationFormikUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
     
          </Row>
          <Row className='mb-4 text-white'>
          <Form.Group as={Col} md="12" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            
          </Row>
          <Row className='mb-4 text-white'>
          <Form.Group as={Col} md="12" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>


          <Form.Group className="mb-4 text-white">
            <Form.Check
              required
              name="terms"
              label="Agree to terms and conditions"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button variant="outline-light" className='subform' type="submit">Submit</Button>{' '}
          {/* <Button  ></Button> */}
        </Form>
      )}
    </Formik>
    </Container>
        </Card.Text>
        </Card.Body>
        {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
      {/* </Card.ImgOverlay> */}
    </Card>
   </Container>




   
  );
}

export default ContactForm;