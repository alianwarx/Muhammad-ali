import { useEffect, useRef } from "react";
import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import JourneyMap from "@/components/portfolio/JourneyMap";
import CareerTimeline from "@/components/portfolio/CareerTimeline";
import CaseStudies from "@/components/portfolio/CaseStudies";
import ImpactSection from "@/components/portfolio/ImpactSection";
import PhilosophySection from "@/components/portfolio/PhilosophySection";
import DevOpsAISection from "@/components/portfolio/DevOpsAISection";
import LeadershipSection from "@/components/portfolio/LeadershipSection";
import ContactSection from "@/components/portfolio/ContactSection";

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeEls = el.querySelectorAll(".fade-up");
    fadeEls.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <JourneyMap />
      <CareerTimeline />
      <CaseStudies />
      <ImpactSection />
      <PhilosophySection />
      <DevOpsAISection />
      <LeadershipSection />
      <ContactSection />
    </div>
  );
};

export default Index;
