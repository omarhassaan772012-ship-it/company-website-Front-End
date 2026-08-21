'use client'
import Link from "next/link";
import "./b1.css"

function B1() {
    return (
        <div className="badge-wrapper" data-aos="fade-left">
    <div className="circle-text">
    <svg viewBox="0 0 100 100" width="140" height="140">
        <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
        <text style={{ fontSize: "11.5", fontWeight: "bold", letterSpacing: "1.5" }}>
        <textPath href="#circlePath">
            • EXPLORE OUR WORK • VELIQUIX STUDIO
        </textPath>
        </text>
        </svg>
    </div>
    <Link href="/our-work" className="center-arrow">↗</Link>
</div>
    )
}

export default B1