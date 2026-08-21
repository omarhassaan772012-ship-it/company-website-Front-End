import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import B1 from "@/components/Button-1/b1";
import AboutUs from "@/components/About-Us/About-Us";
import OurWork from "@/components/our-work/our-work";
import PageServices from "@/components/Services comp/page";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <PageServices />
      <OurWork />
      <B1 />
      <Footer />
    </div>
  );
}
