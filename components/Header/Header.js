'use client';

import "./Header.css"
import Image from "next/image"
import logo from "@/Imgs/logo2.jpg"
import Link from "next/link"

function Header() {
    return(
        <header>
            <div>
            <Image src={logo} alt="logo" className="logo"/>
            

            </div>

            <div className="Header-Links">
            <Link href={"#"} className="links" data-aos="fade-up">Our Work</Link>
            <Link href={"#"} className="links">Services</Link>
            <Link href={"#"} className="links">Contact Us</Link>
            <Link href={"#"} className="About">About</Link>
            </div>

           
            <input type="checkbox" id="burger" className="burger-checkbox"/>
            <label className="burger" htmlFor="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <nav className="nav-menu">
                <Link href="#home">الرئيسية</Link>
                <Link href="#services">خدماتنا </Link>
                <Link href="#work">أعمالنا</Link>
                <Link href="#contact">تواصل معنا</Link>
            </nav>

        </header>
    )
}

export default Header ;