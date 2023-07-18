// import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import pic5C from './Images/pic5C.jpg'; // Tell webpack this JS file uses this image
import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from './feature/Style.css';

import React from 'react';
import '../App.css';


export default function JumboComp() {
return (
	<Container>
    <div className='jumbo rounded'>
   
    <Image src={pic5C} fluid 
    className=' rounded'
    
    />
    <h1 className='mel' >Transforming Health and Home Services:<br/> Where Care Meets Innovation!</h1>
    
  </div>

   {/* <article
      className={styles.article}
      style={{ backgroundImage: `url(${pic5C})` }}
    >
      <h1 className={styles.header}>React Is Awesome</h1>
    </article> */}

{/* <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={pic5C} />
        <img src={pic5C} alt="background" />
      </picture>
      <h1 className={styles.header}>React Is Awesome</h1>
    </article> */}
  </Container>
);
}
