"use client";

import { useRef } from "react";
import "./experience.css";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Award,
  GraduationCap,
  Star,
  Sparkles,
  Target,
  Rocket,
} from "lucide-react";

// Components
import ParticleBackground from "./components/ParticleBackground";
import FloatingOrbs from "./components/FloatingOrbs";
import GlowingButton from "./components/GlowingButton";
import TimelineCard from "./components/TimelineCard";
import OtherExperienceCard from "./components/OtherExperienceCard";

// Data — single source of truth
import {
  experiences,
  otherExperiences,
  education,
  allSkillsFlat as skills,
  testimonials,
} from "@/data/portfolio.data";
import { getIcon } from "@/lib/icons";

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scaleX = useSpring(scrollYProgress, springConfig);

  return (
    <div ref={containerRef} className="relative bg-white min-h-screen overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e50000] to-[#ff3333] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ================================================================
          HERO SECTION
      ================================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-gray-50/80 to-white">
        <ParticleBackground />
        <FloatingOrbs />

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(229,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(229,0,0,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.6)_70%,white_100%)] pointer-events-none" />

        {/* Floating role tags (decorative) */}
        <motion.div
          className="hidden lg:block absolute top-[18%] left-[6%] px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e50000]/15 shadow-lg shadow-[#e50000]/5 text-xs font-semibold text-[#e50000]"
          initial={{ opacity: 0, x: -30, rotate: -8 }}
          animate={{ opacity: 1, x: 0, rotate: -8 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          UI/UX Designer
        </motion.div>
        <motion.div
          className="hidden lg:block absolute top-[28%] right-[8%] px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e50000]/15 shadow-lg shadow-[#e50000]/5 text-xs font-semibold text-[#e50000]"
          initial={{ opacity: 0, x: 30, rotate: 6 }}
          animate={{ opacity: 1, x: 0, rotate: 6 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          Content Creator
        </motion.div>
        <motion.div
          className="hidden lg:block absolute bottom-[28%] left-[8%] px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e50000]/15 shadow-lg shadow-[#e50000]/5 text-xs font-semibold text-[#e50000]"
          initial={{ opacity: 0, x: -30, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: 5 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          Data Specialist
        </motion.div>
        <motion.div
          className="hidden lg:block absolute bottom-[34%] right-[6%] px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e50000]/15 shadow-lg shadow-[#e50000]/5 text-xs font-semibold text-[#e50000]"
          initial={{ opacity: 0, x: 30, rotate: -7 }}
          animate={{ opacity: 1, x: 0, rotate: -7 }}
          transition={{ delay: 2.0, duration: 0.6 }}
        >
          Microfinance
        </motion.div>

        <div className="container-main relative z-10 pt-24 pb-28">
          <div className="max-w-5xl mx-auto text-center">
            {/* Breadcrumb badge */}
            <motion.div
              className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full bg-white border border-black/8 shadow-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#e50000]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-700">
                Portfolio <span className="text-gray-300 mx-1">/</span> <span className="text-[#e50000]">Experience</span>
              </span>
            </motion.div>

            {/* Label */}
            <motion.div
              className="inline-flex items-center gap-3 mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-10 h-[2px] bg-gradient-to-r from-transparent to-[#e50000]" />
              <span className="text-[11px] md:text-xs font-bold uppercase tracking-[0.35em] text-gray-500">
                Professional Journey
              </span>
              <div className="w-10 h-[2px] bg-gradient-to-l from-transparent to-[#e50000]" />
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-black mb-6 leading-[0.98] tracking-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">Work</span>
              <motion.span
                className="relative inline-block text-[#e50000]"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Experience
                {/* Underline annotation */}
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.0, duration: 1.2, ease: "easeInOut" }}
                >
                  <motion.path
                    d="M2 6 Q 75 2, 150 6 T 298 6"
                    stroke="#e50000"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.svg>
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-7 leading-[1.75]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              A comprehensive timeline of my professional growth,
              from leadership roles to entrepreneurial ventures and creative pursuits.
            </motion.p>

            {/* Live status pill */}
            <motion.div
              className="inline-flex items-center gap-2.5 mb-8 px-4 py-2 rounded-full bg-black text-white text-xs md:text-sm shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
              </span>
              <span className="font-medium">
                Currently <span className="text-gray-400">@</span> <span className="font-bold text-[#ff6b6b]">FIFGROUP</span>
                <span className="text-gray-500 mx-2">·</span>
                <span className="text-gray-300">Microfinance</span>
              </span>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-x-6 md:gap-x-10 gap-y-3 mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
            >
              {[
                { value: "5+", label: "Roles" },
                { value: "3", label: "Industries" },
                { value: "4+", label: "Years" },
                { value: "12+", label: "Skills" },
              ].map((stat, i, arr) => (
                <div key={stat.label} className="flex items-center gap-x-6 md:gap-x-10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-bold text-black tracking-tight">{stat.value}</span>
                    <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-gray-500">{stat.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="hidden sm:inline w-px h-6 bg-gradient-to-b from-transparent via-black/15 to-transparent" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-5 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <GlowingButton href="#timeline">View Timeline</GlowingButton>
              <GlowingButton href="#education" variant="outline">View Education</GlowingButton>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400">Scroll</span>
              <motion.div
                className="w-6 h-10 border-2 border-black/20 rounded-full flex justify-center pt-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              >
                <motion.div
                  className="w-1.5 h-1.5 bg-[#e50000] rounded-full"
                  animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements - improved */}
        <motion.div
          className="absolute top-[15%] left-6 md:left-12 w-32 h-32 border border-[#e50000]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#e50000]" />
        </motion.div>
        <motion.div
          className="absolute bottom-[15%] right-6 md:right-12 w-48 h-48 border border-[#e50000]/12 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#e50000]/70" />
        </motion.div>
        {/* Diagonal accent line */}
        <div className="hidden md:block absolute top-1/2 left-0 w-24 h-px bg-gradient-to-r from-[#e50000]/40 to-transparent" />
        <div className="hidden md:block absolute top-1/2 right-0 w-24 h-px bg-gradient-to-l from-[#e50000]/40 to-transparent" />
      </section>

      {/* ================================================================
          EXPERIENCE TIMELINE SECTION
      ================================================================ */}
      <section id="timeline" className="experience-career-section relative py-20 md:py-28 lg:py-32">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#e50000]/40 to-transparent" />
        <div className="container-main experience-career-container">
          {/* Section Header */}
          <motion.div
            className="experience-career-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="experience-career-kicker">
              Career Path
            </span>
            <h2>
              Professional <span className="text-[#e50000]">Experience</span>
            </h2>
            <p>
              From microfinance operations to creative entrepreneurship,
              each role has shaped my diverse skill set and professional perspective.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="experience-career-list">
            {experiences.map((exp, index) => (
              <TimelineCard key={exp.id} item={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          OTHER EXPERIENCE SECTION
      ================================================================ */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#e50000]/40 to-transparent" />
        {/* Bottom transition fade to black for next section */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black/[0.04]" />
        <div className="container-main">
          <motion.div
            className="text-center mb-20 md:mb-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e50000] mb-4 block">
              Beyond The Main Role
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              Other <span className="text-[#e50000]">Experience</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg leading-[1.75]">
              Leadership, international collaborations, and community involvement that have shaped my professional and personal growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 mt-16 md:mt-20 lg:mt-24">
            {otherExperiences.map((exp, index) => (
              <OtherExperienceCard key={exp.id} exp={exp} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          EDUCATION SECTION
      ================================================================ */}
      <section id="education" className="relative py-20 md:py-28 lg:py-32 bg-black overflow-hidden">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#e50000]/60 to-transparent" />
        {/* Atmospheric background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e50000]/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/6 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#e50000]/4 rounded-full blur-3xl" />
        </div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(rgba(229,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(229,0,0,1)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <div className="container-main relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-20 md:mb-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e50000] mb-4 block">
              Learning Journey
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Education & <span className="text-[#e50000]">Certifications</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg leading-[1.75]">
              Continuous learning is at the core of my professional development.
              From formal education to specialized certifications, every step shapes the craft.
            </p>
          </motion.div>

          {/* Stats Row — horizontal layout, accent border */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-24 md:mb-32">
            {[
              { value: "6+", label: "Certifications", icon: <Award className="w-5 h-5" /> },
              { value: "4+", label: "Years Learning", icon: <Star className="w-5 h-5" /> },
              { value: "3", label: "Institutions", icon: <GraduationCap className="w-5 h-5" /> },
              { value: "BNSP", label: "Certified", icon: <Star className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-7 hover:border-[#e50000]/40 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                {/* Decorative corner accent */}
                <div className="pointer-events-none absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#e50000]/10 blur-2xl group-hover:bg-[#e50000]/25 transition-all duration-500" />
                <div className="relative flex items-center gap-4">
                  <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#e50000]/15 ring-1 ring-[#e50000]/25 flex items-center justify-center text-[#e50000] flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">
                    {stat.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-2xl md:text-3xl lg:text-[2rem] font-bold text-white leading-none mb-1.5 tracking-tight">{stat.value}</div>
                    <div className="text-[10px] md:text-[11px] text-gray-400 uppercase tracking-[0.15em] font-semibold">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Timeline */}
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 md:gap-16 lg:gap-20 items-start mt-20 lg:mt-28 mb-24 md:mb-32">
            {/* Left - Highlight Card (sticky on desktop) */}
            <motion.div
              className="lg:sticky lg:top-28"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-5">
                {/* Hero "Lifelong Learner" card */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#e50000] via-[#ff2d2d] to-[#cc0000] p-8 md:p-10 shadow-2xl shadow-[#e50000]/30">
                  {/* Decorative blobs */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />
                  </div>
                  {/* Corner pattern */}
                  <div className="pointer-events-none absolute -top-1 -right-1 w-24 h-24 border-t-2 border-r-2 border-white/20 rounded-tr-3xl" />
                  <div className="pointer-events-none absolute -bottom-1 -left-1 w-24 h-24 border-b-2 border-l-2 border-white/20 rounded-bl-3xl" />

                  <div className="relative z-10">
                    {/* Live badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/15 backdrop-blur-sm border border-white/25">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">Currently Learning</span>
                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm ring-1 ring-white/30 flex items-center justify-center mb-6 shadow-lg">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">Lifelong Learner</h3>
                    <p className="text-white/85 leading-[1.8] text-sm md:text-base">
                      Always seeking new knowledge and skills. From digital business to photography,
                      data science to video editing — every certification represents dedication to craft.
                    </p>

                    {/* Inline metrics strip */}
                    <div className="grid grid-cols-3 gap-4 mt-7 pt-6 border-t border-white/20">
                      <div>
                        <div className="text-2xl font-bold text-white leading-none">6+</div>
                        <div className="text-[10px] uppercase tracking-wider text-white/70 mt-1.5">Certs</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white leading-none">3</div>
                        <div className="text-[10px] uppercase tracking-wider text-white/70 mt-1.5">Schools</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white leading-none">4+</div>
                        <div className="text-[10px] uppercase tracking-wider text-white/70 mt-1.5">Years</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Facts — redesigned with dividers */}
                <div className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-7 md:p-8 hover:border-[#e50000]/20 transition-colors duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-1 h-5 bg-[#e50000] rounded-full" />
                    <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em]">Quick Facts</h4>
                  </div>
                  <div className="divide-y divide-white/8">
                    {[
                      { label: "Current Focus", value: "Digital Business & AI" },
                      { label: "Latest Cert", value: "Excellent Service (2025)" },
                      { label: "Specialization", value: "Content & Marketing" },
                    ].map((fact, i) => (
                      <div key={i} className="grid grid-cols-[auto_1fr] items-center gap-4 py-3.5 first:pt-0 last:pb-0">
                        <span className="text-gray-500 text-[11px] uppercase tracking-wider font-semibold">{fact.label}</span>
                        <span className="text-white text-sm font-medium text-right leading-snug break-words">{fact.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Education Timeline List with vertical rail */}
            <div className="relative">
              {/* Vertical timeline rail */}
              <div className="absolute left-[18px] md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-[#e50000] via-[#e50000]/40 to-transparent" />
              {/* Animated traveling pulse */}
              <motion.div
                className="absolute left-[18px] md:left-6 -ml-[1px] w-[3px] h-20 bg-gradient-to-b from-transparent via-[#ff3333] to-transparent rounded-full blur-[1px]"
                animate={{ y: ["0%", "1500%"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />

              <div className="space-y-6 md:space-y-7">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="relative group pl-12 md:pl-16"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    {/* Timeline dot with pulse */}
                    <div className="absolute left-[10px] md:left-[18px] top-7 z-10">
                      <motion.span
                        className="absolute inset-0 -m-1.5 rounded-full bg-[#e50000]/30"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.3 }}
                      />
                      <div className="relative w-4 h-4 rounded-full bg-[#e50000] ring-4 ring-black shadow-[0_0_12px_rgba(229,0,0,0.6)] group-hover:scale-125 transition-transform duration-300" />
                    </div>

                    {/* Connector arrow from rail to card */}
                    <div className="absolute left-7 md:left-[34px] top-[34px] h-px w-5 md:w-6 bg-gradient-to-r from-[#e50000]/60 to-transparent" />

                    {/* Card glow on hover */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#e50000]/25 to-purple-500/25 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-[#141414] to-[#0a0a0a] border border-white/[0.08] rounded-2xl p-6 md:p-7 hover:border-[#e50000]/40 transition-all duration-300 overflow-hidden">
                      {/* Top gradient accent */}
                      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#e50000] via-[#ff3333] to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                      {/* Corner glow */}
                      <div className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#e50000]/8 blur-2xl group-hover:bg-[#e50000]/20 transition-colors duration-500" />

                      <div className="flex items-start gap-5 relative">
                        {/* Year badge stack */}
                        <div className="flex flex-col items-center flex-shrink-0">
                          <motion.div
                            className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#e50000]/25 to-[#e50000]/5 ring-1 ring-[#e50000]/20 flex items-center justify-center text-[#e50000] [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            {(() => { const Icon = getIcon(edu.icon); return <Icon />; })()}
                          </motion.div>
                          <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#e50000] whitespace-nowrap">
                            {edu.year}
                          </span>
                        </div>

                        <div className="flex-1 min-w-0 pt-1">
                          <h3 className="text-base md:text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#ff5555] transition-colors duration-300">{edu.degree}</h3>
                          <p className="text-gray-400 text-sm flex items-center gap-2">
                            <GraduationCap className="w-3.5 h-3.5 flex-shrink-0 text-[#e50000]/70" />
                            {edu.institution}
                          </p>
                          {edu.description && (
                            <p className="text-gray-500 text-sm mt-3 leading-[1.7]">{edu.description}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Timeline end marker */}
                <motion.div
                  className="relative pl-12 md:pl-16 pt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-[10px] md:left-[18px] top-2">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#e50000] to-[#ff3333] ring-4 ring-black animate-pulse" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#e50000]">
                    More to come...
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          TESTIMONIALS SECTION
      ================================================================ */}
      <section className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white via-gray-50/60 to-white">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#e50000]/40 to-transparent" />
        {/* Decorative background blobs */}
        <div className="pointer-events-none absolute top-1/4 left-0 w-96 h-96 bg-[#e50000]/[0.04] rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/[0.04] rounded-full blur-3xl" />
        <div className="container-main relative">
          <motion.div
            className="text-center mb-20 md:mb-28"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#e50000] mb-4 block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
              What People <span className="text-[#e50000]">Say</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#e50000]/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-white via-white to-gray-50/80 border border-black/8 rounded-3xl p-10 md:p-12 lg:p-14 h-full shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  {/* Top accent strip */}
                  <div className="pointer-events-none absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#e50000] via-[#ff3333] to-[#e50000] opacity-70 rounded-t-3xl" />
                  <div className="absolute top-8 right-8 text-[#e50000]/12">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-7 relative">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 md:w-6 md:h-6 fill-[#e50000] text-[#e50000]" />
                    ))}
                  </div>

                  <p className="text-gray-700 text-base md:text-lg lg:text-xl italic mb-10 leading-[1.75] relative z-10">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-5 pt-7 border-t border-black/5">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-[#e50000] to-[#ff3333] flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md shadow-[#e50000]/30">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-black text-base md:text-lg">{testimonial.author}</p>
                      <p className="text-sm md:text-base text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================
          CTA SECTION
      ================================================================ */}
      <section className="relative py-36 md:py-48 lg:py-56 overflow-hidden border-b border-white/10">
        {/* Top divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-[#e50000]/60 to-transparent z-10" />
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e50000]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(229,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(229,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container-main relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-[#e50000]" />
              <span className="text-sm text-white/80">Let&apos;s create something amazing together</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to <span className="text-[#e50000]">Collaborate?</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-[1.75]">
              I&apos;m always excited to take on new challenges and work with passionate teams.
              Let&apos;s discuss how we can bring your ideas to life.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#e50000] text-white font-semibold rounded-full hover:bg-[#ff3333] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Rocket className="w-5 h-5" />
                Get In Touch
              </motion.a>
              <motion.a
                href="/expertise"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-5 h-5" />
                View Expertise
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
