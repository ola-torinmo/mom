import React from "react";
import NavbarComp from "../../NavbarComp";
import JumboComp from "../../JumboComp";
import Review from "../../Review";
import Services from "../../Services";
import WorkUs from "../../WorkUs"
import ContactForm from "../../ContactForm";
import Footer from "../../Footer";
// import pic5C from '../../Images/pic5C.jpg'; // Tell webpack this JS file uses this image
import jum1C from '../../Images/jum1C.jpg'; 
import pic6ac from '../../Images/pic6ac.jpg'; // Tell webpack this JS file uses this image
import pic4Cr from '../../Images/pic4Cr.jpg'; // Tell webpack this JS file uses this image
import "./Home.css"


function Home(){
    // const jumboData = {
    //     img: "../../Images/jum1C.jpg",
    //     title: 'Transforming Health and Home Services:<br/> Where Care Meets Innovation!',
    //   };

    // data={jumboData}
    return(
        <div>
            <NavbarComp/>   
            <JumboComp  img={jum1C} title={<h1 className="mel">Transforming Health and Home Services:<br/> Where Care Meets Innovation!</h1>}/> 

            <Review/>
            <Services img1={pic6ac} img2={pic4Cr}
            head1=" YOU’RE IN SAFE HANDS
            About County Carers"
            body1="Our team is like a family and we all work together to provide the best service for our clients. The management team has worked together in the care industry for over 15 years and that solid foundation and wealth of experience is what allows us to operate in such a successful manner, providing an exceptional and reliable service."
            head2="DON’T TAKE OUR WORD FOR IT
            Customer Feedback"
            body2=" “I would like to take this opportunity to thank you for the great service you provide to my father. I know the family are so happy with the care you give him and you have made his life so much better. From our point you are always so easy to talk to if we have any worries and happy to adjust the care time on the odd occasion it has been needed.”
           
            – Mrs B"/>
            <WorkUs/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Home 