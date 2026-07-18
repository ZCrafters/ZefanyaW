"use client";

import { motion } from "framer-motion";
import { Zap, Heart, Camera, GraduationCap, Compass, Eye } from "lucide-react";
import { Quote } from "lucide-react";

import {
  aboutSkills as SKILLS,
  aboutTimeline as TIMELINE,
  services as SERVICES,
  stats as STATS,
  values as VALUES,
  funFacts as FUN_FACTS,
  faq as FAQ_ITEMS,
} from "@/data/portfolio.data";
import { getIcon } from "@/lib/icons";
import { SkillBar, Counter } from "./AnimatedComponents";
import { ServiceCard, ValueCard, FunFactCard, StatCard, TimelineCard } from "./Cards";
import { FAQAccordion } from "./TabNavFAQ";
import { Byline, Divider, StatusDot, FloatingOrbs } from "./Primitives";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

// ============================================================================
// OVERVIEW TAB
// ============================================================================
export function OverviewTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="grid lg:grid-cols-2 gap-14 md:gap-20 lg:gap-28 items-start">
        {/* Left: Bio */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-red-600" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
            Who <span className="italic font-light text-red-600">I Am</span>
          </h2>
          <div className="space-y-5 text-gray-600 leading-[1.8]">
            <p>
              I am a digital business student actively involved as a BA campus and frequently participate in volunteer activities. I have the ability to work both individually and in groups. Additionally, I am a content creator for personal branding.
            </p>
            <p>
              I&apos;m interested in AI technology and enjoy contributing to various campus project activities. I also enjoy challenges in problem-solving.
            </p>
          </div>
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-10">
            {["Team Leadership", "Problem Solving", "Creative Thinking", "Adaptability", "Strategic Planning"].map((tag, i) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-black/5 text-black/70 text-xs font-medium rounded-full border border-black/5 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          {/* Byline */}
          <div className="mt-6">
            <Byline>
              <span className="flex items-center gap-1.5"><StatusDot status="active" /> Available for projects</span>
              <span>Green Academy Student</span>
              <span>Content Creator</span>
            </Byline>
          </div>
        </div>

        {/* Right: Info Cards */}
        <div className="space-y-6">
          {[
            {
              icon: "compass",
              title: "My Background",
              text: "I started my journey in digital business with a passion for technology and innovation. Over the years, I've developed skills in content creation, digital marketing, and data analysis, which have become essential tools in my professional toolkit.",
            },
            {
              icon: "eye",
              title: "My Vision",
              text: "I aim to leverage technology and digital business strategies to create meaningful solutions that address real-world challenges. I believe in the power of AI and data-driven approaches to transform businesses.",
            },
          ].map((card, i) => {
            const CardIcon = getIcon(card.icon);
            return (
            <motion.div
              key={card.title}
              className="relative group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600/15 to-rose-600/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white border border-black/8 rounded-3xl p-10 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-red-600/10 transition-all duration-500">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-red-600/20">
                    <CardIcon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{card.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// JOURNEY TAB
// ============================================================================
export function JourneyTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="grid lg:grid-cols-2 gap-14 md:gap-16 lg:gap-24">
        <div>
          <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-red-500" />
            Education & Experience
          </h3>
          <div>
            {TIMELINE.map((item, index) => (
              <TimelineCard key={item.period + item.title} item={item} index={index} />
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="bg-gray-50 border border-black/5 rounded-2xl p-7 md:p-8 text-center hover:border-red-500/30 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="text-3xl font-bold text-black mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                {stat.description && (
                  <p className="mt-2 text-xs leading-relaxed text-gray-400">
                    {stat.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
          {/* Photography Highlight */}
          <motion.div
            className="relative overflow-hidden rounded-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-rose-600" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Camera className="w-6 h-6" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider opacity-80">Featured Skill</span>
              </div>
              <h4 className="text-2xl font-bold mb-2">Photography Expertise</h4>
              <p className="text-white/80 leading-relaxed">
                Professional training at Darwis Triadi Photography Academy with focus on portrait, event, and product photography.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// SKILLS TAB
// ============================================================================
export function SkillsTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="grid lg:grid-cols-2 gap-14 md:gap-20 lg:gap-28">
        <div>
          <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
            <Zap className="w-7 h-7 text-red-500" />
            Core Competencies
          </h3>
          <div className="space-y-6">
            {SKILLS.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-black mb-8 flex items-center gap-3">
            <Heart className="w-7 h-7 text-red-500" />
            Core Values
          </h3>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {VALUES.map((value, index) => (
              <ValueCard key={value.title} value={value} index={index} />
            ))}
          </div>
          {/* Quote */}
          <motion.div
            className="mt-8 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="quote-container bg-gradient-to-br from-gray-50 to-white border border-black/5 rounded-2xl p-8 shadow-sm">
              <Quote className="w-8 h-8 text-red-400 mb-4" />
              <p className="text-gray-700 italic leading-relaxed mb-4">
                &ldquo;I am the bridge between creative visual execution and hard data performance.&rdquo;
              </p>
              <p className="text-red-600 text-sm font-semibold">— Zefanya Williams</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================================
// SERVICES TAB
// ============================================================================
export function ServicesTab() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
          What I <span className="text-red-600">Offer</span>
        </h3>
        <p className="text-gray-500 max-w-xl mx-auto">
          Professional services tailored to elevate your digital presence and drive measurable results.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
        {SERVICES.map((service, index) => (
          <ServiceCard key={service.title} service={service} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
