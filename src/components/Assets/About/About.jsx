import React from "react";
import "./About.css"
import NavbarComp from "../../NavbarComp";
import ContactForm from "../../ContactForm";
import JumboComp from "../../JumboComp";
// import Image from 'react-bootstrap/Image';
import jum2Ci from '../../Images/abt_jumbotron.jpg'; // Tell webpack this JS file uses this image
import Footer from "../../Footer";
import CoreValue from "../../CoreValue";
import Services from "../../Services";
import service_about from '../../Images/service_about.jpg'; // Tell webpack this JS file uses this image
import service_about1 from '../../Images/service_about1.jpg'; // Tell webpack this JS file uses this image


function About() {
    // const jumboData = {
    //     imageUrl: '',
    //     title: 'Transforming Health and Home Services:<br/> Where Care Meets Innovation!',
    //   };
    // const serviceData ={
        
    // };
    return(
        <div>
            <NavbarComp />
            <JumboComp  img={jum2Ci} title={<h1 className="mel ">About Us</h1>}/>
            <CoreValue/> 
            <Services img1={service_about} img2={service_about1}
            head1="What we do"
            body1="We take the time to learn about what's essential to you and then pair you with the caregivers who will best suit your requirements and preferences. Together, we create a personalized care plan that is specific and further assures / encourages continuity of care.
            
            We take pride in the exceptional manner in which attention is given to our clients, which is unmatched by other agencies. All of our caregivers possess not just the highest caliber of education and experience that you would anticipate, but also the morals and values you would want in someone you trusted to care for you at home. 
            They consistently go above and beyond the call of duty, take their duties seriously, and never let a client down. They consistently go above and beyond your expectations. County Carers sincerely thinks that the service we provide is unique and that the top caregivers in the field provide it.
            We offer you the help you need, but we do so with tact and as little interference in your life as possible. Our goal is to improve the quality of life for our clients, and based on the comments we have gotten over the years, we are confident that you will be impressed by our innovative approach to providing care in the neighborhood."
            head2="Company Core Values"
            body2="We all work as a team to give our clients the finest service possible. Our team is like a family. The management team has been working together in the care industry for over 15 years, and it is because of this strong foundation and depth of knowledge that we are able to run our business so successfully and deliver an amazing and dependable service.

            Our staff as a whole has the same aim, and we put the needs of our customers and the provision of person-centered care at the top of our list. This enables you or a loved one to continue living at home in safety and independence while also experiencing fulfillment.
            To ensure that we all adhere to the same idea and provide care that is unmatched, we have nurtured and created an excellent staff. As a County Carers client, you can be sure that each visit or placement will involve the same friendly faces at the same time.
            "/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default About


