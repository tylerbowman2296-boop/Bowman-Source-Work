import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import WebsiteCare from "@/components/WebsiteCare";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustSection />
        <Services />
        <WebsiteCare />
        <Process />
        <Portfolio />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
