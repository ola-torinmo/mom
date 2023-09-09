// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// import pic5C from './Images/pic5C.jpg'; // Tell webpack this JS file uses this image
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';


export default function JumboComp(props) {

  // const { imageUrl, title } = props.data;
return (
	<Container>
    <div className='jumbo rounded'>
   
    <Image src={props.img} fluid 
    className='image rounded '
    
    />
    <h1 className='mel' >{props.title}</h1>
    
  </div>
  </Container>
);
}
