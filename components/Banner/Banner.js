'use client'

import "./Banner.css"
import Image from "next/image"
import Link from "next/link"


function Banner() {
    return(
        <div className="banner">

            <div className="object1" data-aos="fade">
                <div className="p1"></div>
                <div className="p2">Creative Agency</div>
            </div>


            <div className="object2">
            <h1 className="hero-title" data-aos="fade-left">We build</h1>
            <div className="hero-title1" data-aos="fade-left" data-aos-delay="300">
            <h1 className="hero-title2">a digital</h1>
            <h1 className="hero-title3">experience</h1>
            </div>
            <h1 className="hero-title4" data-aos="fade-left" data-aos-delay="600">and lasting trust.</h1>
            </div>

            <h5 className="object3" data-aos="fade-left" data-aos-delay="800">Operating at the intersection of cutting-edge technology and high-end artistry. </h5> 
            <h5 className="object3" data-aos="fade-left" data-aos-delay="800">We transform visionary ideas into immersive digital realities.</h5>
            
        </div>
    )

}

export default Banner