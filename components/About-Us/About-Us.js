'use client'

import "./About-Us.css";

function AboutUs() {

    return (
    <div className="about-us-container" data-aos="fade-up">
    
    <h2 className="about-us-title">About Us</h2>

    <div className="about-us-content">
    <p>Welcome to Veliquix Studio! We are a creative agency dedicated to delivering innovative solutions for our clients.
    Our team of talented professionals specializes in web design, development, and digital marketing. We strive to create
    impactful experiences that help businesses thrive in the digital world.</p>
    </div>

    <button className="about-us-button">See More <div className="arrow">↗</div> </button>

    </div>
);
}

export default AboutUs