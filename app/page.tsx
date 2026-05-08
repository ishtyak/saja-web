import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/home/HeroSection";
import WhatWeDoSection from "./components/home/WhatWeDoSection";
import AISection from "./components/home/AISection";
import TeamsSection from "./components/home/TeamsSection";
import SecuritySection from "./components/home/SecuritySection";
import IndustriesSection from "./components/home/IndustriesSection";
import SajaAppSection from "./components/home/SajaAppSection";
import ContactSection from "./components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhatWeDoSection />
        <AISection />
        <TeamsSection />
        <SecuritySection />
        <IndustriesSection />
        <SajaAppSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
