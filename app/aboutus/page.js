import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./page.css";

const values = [
	{
		number: "01",
		title: "Curiosity",
		text: "We ask better questions before we start building, so every decision has a clear purpose.",
	},
	{
		number: "02",
		title: "Craft",
		text: "We care about the details that make a digital experience feel considered, useful, and memorable.",
	},
	{
		number: "03",
		title: "Partnership",
		text: "We work closely with ambitious teams and keep the process open, focused, and human.",
	},
];

export default function AboutUsPage() {
	return (
		<div className="about-page">
			<Header />

			<main>
				<section className="about-hero">
					<p className="about-eyebrow">About Veliquix Studio</p>
					<h1>We shape ideas into digital experiences people remember.</h1>
					<p className="about-intro">
						Veliquix Studio is a creative digital agency for brands that want to
						move with clarity, character, and purpose.
					</p>
				</section>

				<section className="about-story">
					<div className="section-label">Our approach</div>
					<div className="story-copy">
						<h2>Good work starts with understanding.</h2>
						<p>
							We bring strategy, design, and technology together to create
							work that feels distinctly yours. From the first conversation to
							the final detail, we turn complex challenges into simple,
							engaging experiences.
						</p>
						<p>
							Whether you are launching something new or ready to rethink what
							already exists, we build alongside you with curiosity and care.
						</p>
					</div>
				</section>

				<section className="about-values">
					<div className="section-label">What guides us</div>
					<div className="values-list">
						{values.map((value) => (
							<article className="value-item" key={value.number}>
								<span className="value-number">{value.number}</span>
								<div>
									<h3>{value.title}</h3>
									<p>{value.text}</p>
								</div>
							</article>
						))}
					</div>
				</section>

				<section className="about-cta">
					<p className="about-eyebrow">Have a project in mind?</p>
					<h2>Let&apos;s make something meaningful.</h2>
					<Link className="about-cta-link" href="https://wa.me/01279799010">
						Start a conversation <span aria-hidden="true">↗</span>
					</Link>
				</section>
			</main>

			<Footer />
		</div>
	);
}
