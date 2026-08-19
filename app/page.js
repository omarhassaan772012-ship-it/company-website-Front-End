import Image from "next/image";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Banner/Banner";
import B1 from "@/components/Button-1/b1";
import AboutUs from "@/components/About-Us/About-Us";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AboutUs />
      <B1 />
      <Footer />
    </div>
  );
}
