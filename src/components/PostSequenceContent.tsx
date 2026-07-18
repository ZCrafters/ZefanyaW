"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio.data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={staggerContainer}
      className={`min-h-screen flex items-center py-24 md:py-32 ${className}`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl w-full">
        {children}
      </div>
    </motion.section>
  );
}

function SectionLabel({ label }: { label: string }) {
  return (
    <motion.p
      variants={fadeUp}
      className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 font-display"
    >
      {label}
    </motion.p>
  );
}

function SectionDivider() {
  return (
    <motion.div variants={fadeUp} className="w-10 h-[2px] bg-white/20 mb-6" />
  );
}

export default function PostSequenceContent() {
  return (
    <div className="relative z-40 bg-black">
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <FinalCTASection />
    </div>
  );
}

function AboutSection() {
  return (
    <SectionWrapper id="about" className="border-t border-white/[0.08]">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <SectionLabel label="01 — About" />
          <SectionDivider />
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-5xl uppercase text-white/90 leading-[0.95] mb-6"
          >
            {portfolioData.about.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base text-white/60 leading-relaxed mb-8"
          >
            {portfolioData.about.description}
          </motion.p>
          <motion.div variants={staggerContainer} className="space-y-3">
            {portfolioData.about.highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 shrink-0" />
                <span className="text-white/70 text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className="hidden md:block" />
      </div>
    </SectionWrapper>
  );
}

function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="border-t border-white/[0.08]">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div className="hidden md:block" />

        <div>
          <SectionLabel label="02 — Skills" />
          <SectionDivider />
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-5xl uppercase text-white/90 leading-[0.95] mb-8"
          >
            {portfolioData.skills.title}
          </motion.h2>
          <div className="space-y-4">
            {portfolioData.skills.categories.map((category, ci) => (
              <motion.div
                key={ci}
                variants={fadeUp}
                className="p-5 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3 className="font-display text-xs uppercase text-white/40 tracking-[0.2em] mb-3">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, ii) => (
                    <span
                      key={ii}
                      className="px-3 py-1.5 rounded-lg text-white/65 text-xs"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function ProjectsSection() {
  return (
    <SectionWrapper id="projects" className="border-t border-white/[0.08]">
      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-start">
        <div>
          <SectionLabel label="03 — Projects" />
          <SectionDivider />
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-5xl uppercase text-white/90 leading-[0.95] mb-8"
          >
            {portfolioData.projects.title}
          </motion.h2>
          <div className="space-y-6">
            {portfolioData.projects.items.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group p-7 md:p-8 rounded-2xl transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white/70 font-display text-xs">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base md:text-lg uppercase text-white/90 leading-tight">
                    {project.name}
                  </h3>
                </div>
                <p className="text-white/50 text-sm leading-[1.75] mb-5 pl-11">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 pl-11">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="text-xs px-2.5 py-1 rounded-full text-white/45"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={fadeUp} className="project-gallery-mini hidden md:block">
          {portfolioData.projects.items.slice(0, 3).map((project, i) => (
            <div key={project.name} className="project-gallery-mini-card p-7 md:p-8">
              <span className="inline-flex mb-5 text-xs font-display uppercase tracking-[0.25em] text-white/40">
                Project {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl md:text-2xl uppercase text-white/90 leading-tight mb-4">
                {project.name}
              </h3>
              <p className="text-white/50 text-sm leading-[1.75] mb-5">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full text-white/55"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="border-t border-white/[0.08]">
      <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">
        <div className="hidden md:block" />

        <div>
          <SectionLabel label="04 — Experience" />
          <SectionDivider />
          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-5xl uppercase text-white/90 leading-[0.95] mb-8"
          >
            {portfolioData.experience.title}
          </motion.h2>
          <div className="space-y-6">
            {portfolioData.experience.items.map((exp, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative pl-6 border-l border-white/[0.15]"
              >
                <div className="absolute left-0 top-1.5 w-2 h-2 rounded-full bg-white/60 -translate-x-[5px]" />
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-1 font-display">
                  {exp.period}
                </p>
                <h3 className="font-display text-lg md:text-xl uppercase text-white/90 mb-1">
                  {exp.role}
                </h3>
                <p className="text-white/40 text-sm mb-2">{exp.company}</p>
                <p className="text-white/55 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function FinalCTASection() {
  return (
    <SectionWrapper id="cta" className="border-t border-white/[0.08]">
      <div className="flex justify-end">
        <div className="max-w-md">
          <SectionLabel label="Let's Create Together" />
          <SectionDivider />

          <motion.h2
            variants={fadeUp}
            className="font-display text-3xl md:text-4xl uppercase text-white/90 leading-[0.95] mb-6"
          >
            {portfolioData.name}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-white/55 text-base mb-8 leading-relaxed"
          >
            Ready to create something extraordinary together? Let&apos;s talk.
          </motion.p>

          <motion.div variants={fadeUp}>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-display text-sm uppercase tracking-wider hover:bg-white/90 transition-colors cursor-pointer"
            >
              Buy Now
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 8H13M13 8L9 4M13 8L9 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
