'use client';

import "./Header.css"
import Image from "next/image"
import logo from "@/Imgs/logo2.jpg"
import Link from "next/link"
import { usePathname } from "next/navigation";



function Header() {
    const pathname = usePathname();

    const ishome = pathname === "/"
    const isabout = pathname === "/aboutus"
    const iscontact = pathname === "/contact"
    const isservices = pathname === "/services1"
    const isourwork = pathname === "/our-work"

    const handleServicesClick = () => {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    };

    return(
        <header>
            <div>
            <Image src={logo} alt="logo" className="logo"/>
            

            </div>

            <div className="Header-Links">


            {pathname === "/" && <Link href={"/our-work"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>}
            {pathname === "/" && <button type="button" className={isservices ? 'unique-link service-button' : 'links service-button'} onClick={handleServicesClick}>Services</button>}
            {pathname === "/" && <Link href={"/contact"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>}
            {pathname === "/" && <Link href={"/aboutus"} className={isabout ? 'unique-link' : 'links'}>About Us</Link>}

            {pathname === "/aboutus" && <Link href={"/"} className={ishome ? 'unique-link' : 'links'}>Home</Link>} 
            {pathname === "/aboutus" && <Link href={"/our-work"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>} 
            {pathname === "/aboutus" && <Link href={"/services1"} className={isservices ? 'unique-link' : 'links'}>Services</Link>} 
            {pathname === "/aboutus" &&  <Link href={"/contact"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>}

            {pathname === "/contact" && <Link href={"/"} className={ishome ? 'unique-link' : 'links'}>Home</Link>}
            {pathname === "/contact" && <Link href={"/our-work"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>}
            {pathname === "/contact" && <Link href={"/services"} className={isservices ? 'unique-link' : 'links'}>Services</Link>}
            {pathname === "/contact" && <Link href={"/aboutus"} className={isabout ? 'unique-link' : 'links'}>About Us</Link>}

            {pathname === "/our-work" && <Link href={"/"} className={ishome ? 'unique-link' : 'links'}>Home</Link>}
            {pathname === "/our-work" && <Link href={"/services"} className={isservices ? 'unique-link' : 'links'}>Services</Link>}
            {pathname === "/our-work" && <Link href={"/contact"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>}
            {pathname === "/our-work" && <Link href={"/aboutus"} className={isabout ? 'unique-link' : 'links'}>About Us</Link>}

            {pathname === "/services1" && <Link href={"/"} className={ishome ? 'unique-link' : 'links'}>Home</Link>}
            {pathname === "/services1" && <Link href={"/our-work"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>}
            {pathname === "/services1" && <Link href={"/contact"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>}
            {pathname === "/services1" && <Link href={"/aboutus"} className={isabout ? 'unique-link' : 'links'}>About Us</Link>}

            {/* <Link href={"#"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>
            <Link href={"#"} className={isservices ? 'unique-link' : 'links'}>Services</Link>
            <Link href={"#"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>
            <Link href={"#"} className={isabout ? 'unique-link' : 'links'}>About</Link> */}
            </div>

            
            <input type="checkbox" id="burger" className="burger-checkbox"/>
            <label className="burger" htmlFor="burger">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <nav className="nav-menu">
                {pathname === "/" && <Link href="/our-work" className="nav-menu-link">Our Work</Link>}
                {pathname === "/" && <button type="button" className="nav-menu-link service-button" onClick={handleServicesClick}>Services</button>}
                {pathname === "/" && <Link href="/contact" className="nav-menu-link">Contact Us</Link>}
                {pathname === "/" && <Link href="/aboutus" className="nav-menu-link">About Us</Link>}

                {pathname === "/aboutus" && <Link href="/" className="nav-menu-link">Home</Link>} 
                {pathname === "/aboutus" && <Link href="/our-work" className="nav-menu-link">Our Work</Link>} 
                {pathname === "/aboutus" && <Link href="/services" className="nav-menu-link">Services</Link>} 
                {pathname === "/aboutus" &&  <Link href="/contact" className="nav-menu-link">Contact Us</Link>}

                {pathname === "/contact" && <Link href="/" className="nav-menu-link">Home</Link>}
                {pathname === "/contact" && <Link href="/our-work" className="nav-menu-link">Our Work</Link>}
                {pathname === "/contact" && <Link href="/services" className="nav-menu-link">Services</Link>}
                {pathname === "/contact" && <Link href="/aboutus" className="nav-menu-link">About Us</Link>}

                {pathname === "/our-work" && <Link href="/" className="nav-menu-link">Home</Link>}
                {pathname === "/our-work" && <Link href="/services" className="nav-menu-link">Services</Link>}
                {pathname === "/our-work" && <Link href="/contact" className="nav-menu-link">Contact Us</Link>}
                {pathname === "/our-work" && <Link href="/aboutus" className="nav-menu-link">About Us</Link>}

                {pathname === "/services" && <Link href="/" className="nav-menu-link">Home</Link>}
                {pathname === "/services" && <Link href="/our-work" className="nav-menu-link">Our Work</Link>}
                {pathname === "/services" && <Link href="/contact" className="nav-menu-link">Contact Us</Link>}
                {pathname === "/services" && <Link href="/aboutus" className="nav-menu-link">About Us</Link>}

            </nav>

        </header>
    )
}

export default Header ;