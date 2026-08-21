import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/components/Services comp/page";
import "./page.css";

export function generateStaticParams() {
    return services.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }) {
    const { slug } = await params;
    const service = services.find((item) => item.slug === slug);

    if (!service) notFound();

    return (
        <main className="service-detail">
            <Link className="service-back" href="/#services">← All services</Link>
            <div className="service-detail-grid">
                <p className="service-detail-number">{service.number} / {service.tag}</p>
                <div>
                    <h1>{service.title}</h1>
                    <p className="service-detail-lead">{service.description}</p>
                    <p className="service-detail-copy">We bring strategy, craft, and momentum together to create work that earns attention and keeps performing. Every engagement starts with your real business challenge and ends with something your audience can use.</p>
                    <Link className="service-detail-link" href="/aboutus">Start a conversation <span aria-hidden="true">↗</span></Link>
                </div>
            </div>
        </main>
    );
}