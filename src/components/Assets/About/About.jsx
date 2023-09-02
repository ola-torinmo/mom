import React from "react";
import "./About.css"
import NavbarComp from "../../NavbarComp";
import ContactForm from "../../ContactForm";
import Footer from "../../Footer";


function About() {
    return(
        <div>
            <NavbarComp />
            <ContactForm/>
            <Footer/>
        </div>
    )
}

export default About