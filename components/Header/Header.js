'use client';

import "./Header.css"
import Image from "next/image"
import logo from "@/Imgs/logo2.jpg"
import Link from "next/link"
import { usePathname } from "next/navigation";

function Header() {
    const pathname = usePathname();

    const ishome = pathname === "/"
    const isabout = pathname === "/about/"
    const iscontact = pathname === "/contact/"
    const isservices = pathname === "/services/"
    const isourwork = pathname === "/our-work/"

    return(
        <header>
            <div>
            <Image src={logo} alt="logo" className="logo"/>
            

            </div>

            <div className="Header-Links">


            {usePathname() === "/" && <Link href={"#"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>}
            {usePathname() === "/" && <Link href={"#"} className={isservices ? 'unique-link' : 'links'}>Services</Link>}
            {usePathname() === "/" && <Link href={"#"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>}
            {usePathname() === "/" && <Link href={"#"} className={isabout ? 'unique-link' : 'links'}>About Us</Link>}

            {usePathname() === "/about/" && <Link href={"#"} className={ishome ? 'unique-link' : 'links'}>Home</Link>} 
            {usePathname() === "/about/" && <Link href={"#"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>} 
            {usePathname() === "/about/" && <Link href={"#"} className={isservices ? 'unique-link' : 'links'}>Services</Link>} 
            {usePathname() === "/about/" &&  <Link href={"#"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>}

            {usePathname() === "/contact/" && <Link href={"#"} className={ishome ? 'unique-link' : 'links'}>Home</Link>}
            {usePathname() === "/contact/" && <Link href={"#"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>}
            {usePathname() === "/contact/" && <Link href={"#"} className={isservices ? 'unique-link' : 'links'}>Services</Link>}
            {usePathname() === "/contact/" && <Link href={"#"} className={isabout ? 'unique-link' : 'links'}>About Us</Link>}

            {usePathname() === "/our-work/" && <Link href={"#"} className={ishome ? 'unique-link' : 'links'}>Home</Link>}
            {usePathname() === "/our-work/" && <Link href={"#"} className={isservices ? 'unique-link' : 'links'}>Services</Link>}
            {usePathname() === "/our-work/" && <Link href={"#"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>}
            {usePathname() === "/our-work/" && <Link href={"#"} className={isabout ? 'unique-link' : 'links'}>About Us</Link>}

            {usePathname() === "/services/" && <Link href={"#"} className={ishome ? 'unique-link' : 'links'}>Home</Link>}
            {usePathname() === "/services/" && <Link href={"#"} className={isourwork ? 'unique-link' : 'links'}>Our Work</Link>}
            {usePathname() === "/services/" && <Link href={"#"} className={iscontact ? 'unique-link' : 'links'}>Contact Us</Link>}
            {usePathname() === "/services/" && <Link href={"#"} className={isabout ? 'unique-link' : 'links'}>About Us</Link>}

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
                {usePathname() === "/" && <Link href={"#"} className="nav-menu-link">Our Work</Link>}
                {usePathname() === "/" && <Link href={"#"} className="nav-menu-link">Services</Link>}
                {usePathname() === "/" && <Link href={"#"} className="nav-menu-link">Contact Us</Link>}
                {usePathname() === "/" && <Link href={"#"} className="nav-menu-link">About Us</Link>}

                {usePathname() === "/about/" && <Link href={"#"} className="nav-menu-link">Home</Link>} 
                {usePathname() === "/about/" && <Link href={"#"} className="nav-menu-link">Our Work</Link>} 
                {usePathname() === "/about/" && <Link href={"#"} className="nav-menu-link">Services</Link>} 
                {usePathname() === "/about/" &&  <Link href={"#"} className="nav-menu-link">Contact Us</Link>}

                {usePathname() === "/contact/" && <Link href={"#"} className="nav-menu-link">Home</Link>}
                {usePathname() === "/contact/" && <Link href={"#"} className="nav-menu-link">Our Work</Link>}
                {usePathname() === "/contact/" && <Link href={"#"} className="nav-menu-link">Services</Link>}
                {usePathname() === "/contact/" && <Link href={"#"} className="nav-menu-link">About Us</Link>}

                {usePathname() === "/our-work/" && <Link href={"#"} className="nav-menu-link">Home</Link>}
                {usePathname() === "/our-work/" && <Link href={"#"} className="nav-menu-link">Services</Link>}
                {usePathname() === "/our-work/" && <Link href={"#"} className="nav-menu-link">Contact Us</Link>}
                {usePathname() === "/our-work/" && <Link href={"#"} className="nav-menu-link">About Us</Link>}

                {usePathname() === "/services/" && <Link href={"#"} className="nav-menu-link">Home</Link>}
                {usePathname() === "/services/" && <Link href={"#"} className="nav-menu-link">Our Work</Link>}
                {usePathname() === "/services/" && <Link href={"#"} className="nav-menu-link">Contact Us</Link>}
                {usePathname() === "/services/" && <Link href={"#"} className="nav-menu-link">About Us</Link>}

            </nav>

        </header>
    )
}

export default Header ;