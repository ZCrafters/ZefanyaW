"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio.data";

const heroTexts = portfolioData.heroTexts;

/**
 * Text timing: 4 overlays staggered across the full 0→1 canvas scroll.
 * Each section:
 *   — fades in quickly (0.04 gap)
 *   — holds for a beat (0.10–0.15 gap)
 *   — fades out cleanly (0.05 gap)
 *
 * Total canvas scroll = 1400vh → generous time at each beat.
 */
const textTimings = [
  //            start  fadeInEnd  fadeOutStart   end
  { start: 0.00, fadeInEnd: 0.04, fadeOutStart: 0.12, end: 0.17 },
  { start: 0.22, fadeInEnd: 0.26, fadeOutStart: 0.35, end: 0.40 },
  { start: 0.48, fadeInEnd: 0.52, fadeOutStart: 0.60, end: 0.65 },
  { start: 0.72, fadeInEnd: 0.76, fadeOutStart: 0.87, end: 0.93 },
];

// Layout per text block: centered → left → right → centered
const layouts = [
  { justify: "justify-center", textAlign: "text-center", marginX: "mx-auto" },
  { justify: "justify-start",  textAlign: "text-left",   marginX: "" },
  { justify: "justify-end",    textAlign: "text-right",  marginX: "ml-auto" },
  { justify: "justify-center", textAlign: "text-center", marginX: "mx-auto" },
];

export default function TextOverlays() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full pointer-events-none"
      style={{ height: `${portfolioData.sequenceConfig.containerHeightVh}vh` }}
    >
      {/* Sticky text layer — floats over the canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Mobile vignette for readability — subtle dark ring at edges */}
        <div
          className="absolute inset-0 pointer-events-none md:hidden"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.50) 100%)",
          }}
        />

        {heroTexts.map((text, i) => {
          const { start, fadeInEnd, fadeOutStart, end } = textTimings[i];
          const layout = layouts[i];
          return (
            <TextBlock
              key={i}
              heading={text.heading}
              subtext={text.subtext}
              scrollYProgress={scrollYProgress}
              start={start}
              fadeInEnd={fadeInEnd}
              fadeOutStart={fadeOutStart}
              end={end}
              layout={layout}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
}

function TextBlock({
  heading,
  subtext,
  scrollYProgress,
  start,
  fadeInEnd,
  fadeOutStart,
  end,
  layout,
  index,
}: {
  heading: string;
  subtext: string;
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  fadeInEnd: number;
  fadeOutStart: number;
  end: number;
  layout: { justify: string; textAlign: string; marginX: string };
  index: number;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [start, fadeInEnd, fadeOutStart, end],
    [32, 0, 0, -24]
  );

  // On mobile: shift text up so it clears the center sequence object
  // Different offsets per block to keep it interesting
  const mobileOffsets = ["-20vh", "-18vh", "-16vh", "-20vh"];
  const mobileOffset = mobileOffsets[index];

  return (
    <motion.div
      className={`absolute inset-0 flex items-center ${layout.justify} px-8 md:px-20 z-10`}
      style={{ opacity, y }}
    >
      {/* Shift text up on mobile so it clears the sequence object */}
      <div
        className={`max-w-5xl w-full ${layout.textAlign}`}
        style={{ marginTop: `clamp(${mobileOffset}, 0px, 0px)` } as React.CSSProperties}
      >
        {/* Use a proper <style> hack for mobile via a wrapper div */}
        <div className="md:mt-0 -mt-[18vh] sm:-mt-[10vh]">
          <h2
            className={`
              font-display
              text-5xl sm:text-7xl md:text-8xl lg:text-9xl
              uppercase
              leading-[0.88]
              text-white
              drop-shadow-[0_5px_25px_rgba(0,0,0,0.85)]
              ${layout.textAlign}
            `}
          >
            {heading}
          </h2>
          <p
            className={`
              mt-5 md:mt-7
              text-sm sm:text-base md:text-lg
              text-white/65
              max-w-xl
              tracking-wide
              leading-relaxed
              drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]
              ${layout.marginX}
            `}
          >
            {subtext}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
