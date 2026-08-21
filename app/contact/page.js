import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./page.css";

export const metadata = {
    title: "Contact Us | Veliquix Studio",
    description: "Tell Veliquix Studio about your next digital project.",
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="contact-page">
                <section className="contact-intro">
                    <div className="contact-eyebrow">Let&apos;s make something useful</div>
                    <h1>Have a good<br /><em>idea?</em> Let&apos;s talk.</h1>
                    <p className="contact-description">Tell us a little about what you&apos;re building, changing, or imagining. We&apos;ll get back to you with the next step.</p>

                    <div className="contact-details">
                        <div>
                            <span>Email</span>
                            <a href="mailto:veliquixstudio@gmail.com">veliquixstudio@gmail.com</a>
                        </div>
                        <div>
                            <span>Based in</span>
                            <p>Dakahlia, Egypt<br />Working worldwide</p>
                        </div>
                    </div>
                </section>

                <section className="contact-form-section" aria-labelledby="contact-form-title">
                    <div className="form-topline">
                        <p id="contact-form-title">Start a project</p>
                        <span>01 — 05</span>
                    </div>
                    <form className="contact-form" action="https://formspree.io/f/xrpzdzye" method="POST">
                        <label>
                            <span>Your name</span>
                            <input type="text" name="name" placeholder="John Doe" required />
                        </label>
                        <label>
                            <span>Email address</span>
                            <input type="email" name="email" placeholder="john@company.com" required />
                        </label>
                        <label>
                            <span>Company <small>Optional</small></span>
                            <input type="text" name="company" placeholder="Your company name" />
                        </label>
                        <label>
                            <span>What do you need?</span>
                            <select name="service" defaultValue="">
                                <option value="" disabled>Select a service</option>
                                <option value="web-development">Web Development</option>
                                <option value="app-development">App Development</option>
                                <option value="graphic-design">Graphic Design</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="video-production">Video Production</option>
                                <option value="video-montage">Video Montage</option>
                            </select>
                        </label>
                        <label className="message-field">
                            <span>Tell us about it</span>
                            <textarea name="message" placeholder="A few words about your project, timeline, and goals..." rows="4" required />
                        </label>
                        <div className="form-submit-row">
                            <p>We usually reply within 1-6 business hours.</p>
                            <button type="submit">Send inquiry <span aria-hidden="true">↗</span></button>
                        </div>
                    </form>
                    <Link className="form-back-link" href="/">Back to home</Link>
                </section>
            </main>
            <Footer />
        </>
    );
}