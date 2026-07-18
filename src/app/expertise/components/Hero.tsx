"use client";

import { ArrowRight } from "lucide-react";
import { Reveal, StudioButton } from "./AnimatedComponents";

export const showcaseImages = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-portfolio-cosmic-preview-BpvWJ3Nc.gif",
  "https://motionsites.ai/assets/hero-velorah-preview-CJNTtbpd.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
];

export function CinematicHero() {
  return (
    <>
      <section className="expertise-hero" id="about">
        <div className="expertise-hero-glow" />
        <div className="expertise-hero-inner">
          <Reveal delay={0.1}>
            <p className="expertise-logo">by Fan Williams</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="expertise-tagline">Creative Direction • Photography • Visual Storytelling</p>
          </Reveal>
          <Reveal delay={0.3}>
            <h1 className="expertise-hero-title">
              Build the <span>next wave,</span><br />the <span>bold way.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.4} className="expertise-hero-copy">
            <p>
              ByFanWilliams is a small creative agency for cinematic photography, visual direction, and ready-to-use UI/UX templates. Every project is built to look intentional and work clearly.
            </p>
            <p>
              Choose a photography package, request cameraman coverage, or discuss a custom interface and template. The scope stays flexible, personal, and easy to negotiate.
            </p>
            <p>Photography packages start at Rp400.000.</p>
          </Reveal>
          <Reveal delay={0.5} className="expertise-hero-actions">
            <StudioButton>Start a chat <ArrowRight size={16} /></StudioButton>
            <StudioButton href="#projects" variant="secondary">View projects</StudioButton>
          </Reveal>
        </div>
        <div className="expertise-hero-index" aria-hidden="true">01 / Expertise</div>
      </section>

      <section className="expertise-marquee-shell" aria-label="Selected visual work">
        <div className="expertise-image-marquee">
          {[...showcaseImages, ...showcaseImages].map((src, index) => (
            <figure className="expertise-marquee-item" key={`${src}-${index}`}>
              <img src={src} alt="" loading={index < 3 ? "eager" : "lazy"} decoding="async" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
