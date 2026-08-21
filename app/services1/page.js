import "./page.css";
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
    title: "Services | Veliquix Studio",
    description: "Explore the range of services offered by Veliquix Studio.",
};

const services = [
    {
        number: "01",
        slug: "web-development",
        title: "Web Development",
        description: "Fast, flexible digital experiences built around your goals.",
        tag: "Build"
    },
    {
        number: "04",
        slug: "app-development",
        title: "App Development",
        description: "Native and cross-platform applications that deliver exceptional user experiences.",
        tag: "Build"
    },
    {
        number: "02",
        slug: "graphic-design",
        title: "Graphic Design",
        description: "Visually compelling solutions that communicate your message effectively.",
        tag: "Shape"
    },
    {
        number: "03",
        slug: "digital-marketing",
        title: "Digital Marketing",
        description: "Focused campaigns that put your brand in front of the right people.",
        tag: "Grow"
    },
    {
        number: "05",
        slug: "video-production",
        title: "Video Production",
        description: "Engaging videos that bring your brand to life and connect with your audience.",
        tag: "Tell"
    },
    {
        number: "06",
        slug: "video-montage",
        title: "Video Montage",
        description: "Cinematic storytelling that captures your message and conveys it effectively.",
        tag: "Tell"
    }
];

export { services };

function PageServices() {
    
    return (
        <div>
        <Header />
        <section className="services-page" id="services">
            
            <div className="services-heading">
                <p className="services-kicker">What we do / 06 disciplines</p>
                <h2>Ideas with somewhere to go.</h2>
                <p className="services-intro">From the first sketch to the final click, we turn ambitious ideas into useful digital work.</p>
            </div>
            <div className="services-list">
                {services.map((service) => (
                    <Link className="service-item" href={`/services/${service.slug}`} key={service.number}>
                        <span className="service-number">{service.number}</span>
                        <span className="service-tag">{service.tag}</span>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <span className="service-arrow" aria-hidden="true">↗</span>
                    </Link>
                ))}
            </div>
            <Link className="services-cta" href="/services/web-development">Explore our approach <span aria-hidden="true">↗</span></Link>
        </section>
        <Footer />
        </div>
    );
}

export default PageServices;