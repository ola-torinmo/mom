import React from "react";
import NavbarComp from "../../NavbarComp";
import JumboComp from "../../JumboComp";
import Review from "../../Review";
import Services from "../../Services";
import WorkUs from "../../WorkUs"
import ContactForm from "../../ContactForm";
import Footer from "../../Footer";
import "./Home.css"


function Home(){
    return(
        <div>
            <NavbarComp/>   
            <JumboComp/> 
            <Review/>
            <Services/>
            <WorkUs/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default Home