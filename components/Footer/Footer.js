import React from 'react';
import Link from "next/link"
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="leftSection">
            <h3 className="logo">VELIQUIX</h3>
            <p className="tagline">Studio</p>
          </div>

          <div className="linksSection">
            <div className="linkColumn">
              <h4 className="linkTitle">Company</h4>
              <ul className="linkList">
                <li><Link href={"#about"}>About Us</Link></li>
                <li><Link href={"#services"}>Services</Link></li>
                <li><Link href={"#work"}>Our Work</Link></li>
                <li><Link href={"#contact"}>Contact</Link></li>
              </ul>
            </div>

            <div className="linkColumn">
              <h4 className="linkTitle">Services</h4>
              <ul className="linkList">
                <li><Link href={"#web-design"}>Web Design</Link></li>
                <li><Link href={"#development"}>Development</Link></li>
                <li><Link href={"#branding"}>Branding</Link></li>
                <li><Link href={"#digital"}>Digital Strategy</Link></li>
              </ul>
            </div>

            <div className="linkColumn">
              <h4 className="linkTitle">Connect</h4>
              <ul className="linkList">
                <li><Link href={"#instagram"}>Instagram</Link></li>
                <li><Link href={"#linkedin"}>LinkedIn</Link></li>
                <li><Link href={"#twitter"}>Twitter</Link></li>
                <li><Link href={"#dribbble"}>Dribbble</Link></li>
              </ul>
            </div>
          </div>

          <div className="rightSection">
            <p className="description">
              Transform visionary ideas into immersive digital realities.
            </p>
            <a
              href="mailto:hello@veliquix.com"
              className="email"
            >
              hello@veliquix.com
            </a>
          </div>
        </div>

        <div className="bottom">
          <p className="copyright">
            © 2026 Veliquix Studio. All rights reserved.
          </p>

          <div className="bottomLinks">
            <Link href={"#privacy"}>Privacy Policy</Link>
            <Link href={"#terms"}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;