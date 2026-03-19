import { Helmet } from "react-helmet-async";
import { HeroSection } from "../components/HeroSection";
import { ServicesSection } from "../components/ServicesSection";
import { AboutSection } from "../components/AboutSection";
import { CareerSection } from "../components/CareerSection";
import { FAQSection } from "../components/FAQSection";
import { AffiliationsSection } from "../components/AffiliationsSection";

export function Home() {
  return (
    <>
      <Helmet>
        <title>Zarkoon Security Limited | Leading Security Solutions UK</title>
        <meta name="description" content="Premier provider of professional manned guarding, event security, and bespoke security services across the United Kingdom." />
      </Helmet>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CareerSection />
      <FAQSection />
      <AffiliationsSection />
    </>
  );
}
