"use client";

import "./expertise.css";
import { CinematicHero } from "./components/Hero";
import {
  BottomNav,
  CopyrightBar,
  PartnerSection,
  PricingSection,
  ProjectsSection,
  TestimonialCarousel,
  TestimonialSection,
} from "./components/Sections";

export default function ExpertisePage() {
  return (
    <div className="expertise-page">
      <CinematicHero />
      <TestimonialSection />
      <PricingSection />
      <TestimonialCarousel />
      <ProjectsSection />
      <PartnerSection />
      <CopyrightBar />
      <BottomNav />
    </div>
  );
}
