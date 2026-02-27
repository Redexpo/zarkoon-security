import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { CareerSection } from "./components/CareerSection";
import { FAQSection } from "./components/FAQSection";
import { AffiliationsSection } from "./components/AffiliationsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CareerSection />
      <FAQSection />
      <AffiliationsSection />
      <Footer />
    </div>
  );
}
