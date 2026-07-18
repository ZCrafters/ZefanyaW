"use client";

import { useState, useRef, useMemo } from "react";
import "./about.css";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Sparkles, ArrowRight, Rocket, Quote, HelpCircle, Newspaper, ArrowUpRight } from "lucide-react";

// Components
import { FloatingOrbs, StatusDot, Byline, Divider } from "./components/Primitives";
import { WordReveal } from "./components/AnimatedComponents";
import { FunFactCard } from "./components/Cards";
import { TabNav, FAQAccordion } from "./components/TabNavFAQ";
import { OverviewTab, JourneyTab, SkillsTab, ServicesTab } from "./components/TabSections";

// Data — single source of truth
import { tabs as TABS, funFacts as FUN_FACTS, faq as FAQ_ITEMS } from "@/data/portfolio.data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
});

function PressImage({ src, alt }: { src: string; alt: string }) {
  return (
    <motion.div
      className="press-preview"
      initial={{ opacity: 0, y: 18, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -12, scale: 0.99 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="press-preview-chrome">
        <div className="press-card-toolbar">
          <span />
          <span />
          <span />
        </div>
        <span className="press-preview-url">press.byfanwilliams.com</span>
        <span className="press-preview-secure">LIVE</span>
      </div>
      <div className="press-preview-image-wrap">
        <img src={src} alt={alt} className="press-article-image" />
      </div>
      <div className="press-preview-scan" aria-hidden="true" />
    </motion.div>
  );
}

const PRESS_ITEMS = [
  {
    id: "milenial",
    outlet: "Milenial.id",
    category: "Profile",
    title: "Creative journey and digital innovation",
    description: "A profile exploring the ideas, discipline, and visual direction behind a new generation of digital storytelling.",
    image: "/assets/milenial.png",
  },
  {
    id: "republika",
    outlet: "Republika",
    category: "Business",
    title: "Building impact through community",
    description: "Coverage of entrepreneurial initiatives and community programs designed to create meaningful, measurable momentum.",
    image: "/assets/republika.png",
  },
  {
    id: "sidonews",
    outlet: "Sidoarjo News",
    category: "Leadership",
    title: "Youth leadership in the creative economy",
    description: "A regional feature on creative contributions, cross-campus collaboration, and the future of youth-led innovation.",
    image: "/assets/sidonews.png",
  },
] as const;

// ============================================================================
// MAIN PAGE
// ============================================================================

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("overview");
  const [activePress, setActivePress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const tabContent = useMemo(() => {
    switch (activeTab) {
      case "overview": return <OverviewTab />;
      case "journey": return <JourneyTab />;
      case "skills": return <SkillsTab />;
      case "services": return <ServicesTab />;
      default: return <OverviewTab />;
    }
  }, [activeTab]);

  return (
    <div ref={containerRef} className="about-page relative min-h-screen overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 to-rose-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ==========================================================
          SECTION 1: HERO
      ========================================================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <FloatingOrbs />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "linear-gradient(rgba(229,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(229,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-red-900/15 via-transparent to-transparent rounded-full blur-3xl" />

        <div className="container-main relative z-10 pt-28 pb-20">
          <div className="grid lg:grid-cols-2 gap-14 md:gap-20 lg:gap-28 items-center min-h-[70vh]">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="liquid-glass inline-flex items-center gap-3 px-5 py-2.5 rounded-full mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Sparkles className="w-4 h-4 text-red-500" />
                <span className="text-sm text-gray-300 uppercase tracking-widest">
                  Digital Business & Content Creator
                </span>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block">THE</span>
                <span className="block bg-gradient-to-r from-red-500 via-rose-500 to-red-600 bg-clip-text text-transparent">
                  ARCHITECT
                </span>
              </motion.h1>

              <motion.p
                className="text-lg text-gray-400 leading-relaxed mb-6 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                I&apos;m Zefanya Williams — a digital business student, content creator, and creative strategist bridging visual storytelling with data-driven performance.
              </motion.p>

              <motion.div
                className="relative pl-6 border-l-2 border-red-600 py-2 mb-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <p className="text-base text-white font-medium italic">
                  &ldquo;I am the bridge between creative visual execution and hard data performance.&rdquo;
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <motion.a
                  href="#content"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white font-semibold rounded-full shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discover More
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right: Profile Visual */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="relative group">
                <motion.div
                  className="absolute -inset-6 bg-gradient-to-r from-red-600/20 to-rose-600/20 rounded-3xl blur-2xl"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="absolute -inset-3 border border-red-600/20 rounded-3xl group-hover:border-red-600/40 transition-colors duration-500" />
                <div className="relative w-72 md:w-80 h-[420px] rounded-3xl overflow-hidden">
                  <img
                    src="/assets/assetss/DSC08129.JPG"
                    alt="Zefanya Williams"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="liquid-glass flex items-center gap-3 px-4 py-3 rounded-xl">
                      <StatusDot status="success" />
                      <span className="text-white text-sm font-medium">Available for Projects</span>
                    </div>
                  </div>
                </div>
                {/* Floating Badges */}
                <motion.div
                  className="liquid-glass absolute -top-3 -right-3 px-4 py-2.5 rounded-2xl"
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <span className="text-[10px] text-gray-400 block">Status</span>
                  <span className="text-white font-bold text-sm">Active</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-3 -left-3 bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2.5 rounded-2xl shadow-lg shadow-red-600/30"
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  whileHover={{ scale: 1.05, rotate: -3 }}
                >
                  <span className="text-[10px] text-white/70 block">Role</span>
                  <span className="text-white font-bold text-sm">Digital Creator</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/15 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-1 bg-red-500 rounded-full"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ==========================================================
          SECTION 3: MISSION
      ========================================================== */}
      <section className="relative py-32 md:py-40 flex flex-col items-center bg-white">
        <div className="container-main w-full">
          <div className="max-w-4xl mx-auto text-center">
            <WordReveal
              className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-normal leading-[1.4] text-black text-center"
              highlights={["curiosity", "meets", "clarity"]}
              text="I'm building a space where curiosity meets clarity — where creative vision finds its audience and every project becomes a story worth telling."
            />
            <WordReveal
              className="text-lg md:text-2xl lg:text-3xl font-medium mt-12 text-gray-400 leading-[1.5] text-center"
              highlights={["meaning"]}
              text="A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved."
            />
          </div>
        </div>
        <div className="w-full container-main mt-14">
          <Divider title="explore further" />
        </div>
      </section>

      {/* ==========================================================
          SECTION 4: TABBED CONTENT
      ========================================================== */}
      <section id="content" className="relative py-28 md:py-36 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50/30 to-transparent pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="flex justify-center mb-12">
            <TabNav tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <AnimatePresence mode="wait">
            <div key={activeTab}>{tabContent}</div>
          </AnimatePresence>
        </div>
      </section>

      {/* ==========================================================
          SECTION 5: NEWS & PRESS
      ========================================================== */}
      <section className="press-section relative py-24 md:py-36 overflow-hidden">
        <div className="press-grid" aria-hidden="true" />
        <div className="container-main relative z-10">
          <motion.div className="press-heading" {...fadeUp()}>
            <div>
              <span className="section-kicker">
                <Newspaper className="h-4 w-4" /> Press &amp; Media
              </span>
              <h2>Stories carried<br />beyond the <em>studio.</em></h2>
            </div>
            <p>
              Selected coverage on creative work, business, and community impact across Indonesia.
            </p>
          </motion.div>

          <div className="press-workspace">
            <div className="press-index" role="tablist" aria-label="Press coverage">
              <div className="press-index-meta">
                <span>Media index</span>
                <span>0{PRESS_ITEMS.length} stories</span>
              </div>
              {PRESS_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={activePress === index}
                  className={`press-index-item ${activePress === index ? "is-active" : ""}`}
                  onClick={() => setActivePress(index)}
                >
                  {activePress === index && (
                    <motion.span
                      className="press-index-active"
                      layoutId="press-active"
                      transition={{ type: "spring", stiffness: 420, damping: 38 }}
                    />
                  )}
                  <span className="press-index-number">0{index + 1}</span>
                  <span className="press-index-copy">
                    <strong>{item.outlet}</strong>
                    <small>{item.category}</small>
                  </span>
                  <ArrowUpRight className="press-index-arrow" />
                </button>
              ))}
              <div className="press-index-footer">
                <span className="press-live-dot" /> Updated selection
              </div>
            </div>

            <div className="press-stage">
              <div className="press-stage-copy">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={PRESS_ITEMS[activePress].id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{PRESS_ITEMS[activePress].category} / 2025</span>
                    <h3>{PRESS_ITEMS[activePress].title}</h3>
                    <p>{PRESS_ITEMS[activePress].description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="press-stage-media">
                <AnimatePresence mode="wait">
                  <PressImage
                    key={PRESS_ITEMS[activePress].id}
                    src={PRESS_ITEMS[activePress].image}
                    alt={PRESS_ITEMS[activePress].outlet}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 6: FUN FACTS & FAQ
      ========================================================== */}
      <section className="personal-section relative py-24 md:py-36 overflow-hidden">
        <div className="personal-surface" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }} />
        <div className="personal-grid" />

        <div className="container-main relative z-10">
          <motion.div className="personal-heading" {...fadeUp()}>
            <motion.div
              className="section-kicker"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>Get To Know Me</span>
            </motion.div>
            <h2>
              Beyond The <em>Professional</em>
            </h2>
            <p>
              Discover what drives my passion and curiosity beyond the workplace
            </p>
          </motion.div>

          <div className="personal-layout">
            {/* Left: Fun Facts */}
            <motion.div
              className="personal-stories"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="personal-stories-shell">
                <div className="personal-stories-panel">
                  <div className="personal-stories-head">
                    <motion.div
                      className="personal-stories-icon"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Sparkles className="w-6 h-6" />
                    </motion.div>
                    <h3>Current Curiosities</h3>
                    <p>
                      Discover what makes me tick beyond the professional realm
                    </p>
                  </div>
                  <div className="personal-fact-list">
                    {FUN_FACTS.map((fact, index) => (
                      <FunFactCard key={fact.id} fact={fact} index={index} />
                    ))}
                  </div>
                  {/* Quote */}
                  <motion.div
                    className="personal-quote"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <div className="personal-quote-inner">
                      <Quote className="w-6 h-6" />
                      <p>
                        &ldquo;Photography, to me, is catching a moment which is passing, and which is true.&rdquo;
                      </p>
                      <p className="text-white/40 text-xs font-medium">— Jacques-Henri Lartigue</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right: FAQ */}
            <motion.div
              className="personal-faq"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="personal-faq-shell">
                <div className="personal-faq-panel">
                  <div className="personal-faq-head">
                    <motion.div
                      className="personal-faq-icon"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <HelpCircle className="w-7 h-7 text-white" />
                    </motion.div>
                    <div>
                      <span>Quick notes</span>
                      <h3>
                        Questions, <em>answered.</em>
                      </h3>
                    </div>
                  </div>
                  <FAQAccordion items={FAQ_ITEMS} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 6: CTA
      ========================================================== */}
      <section className="relative py-28 md:py-40 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-rose-600/10" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.02) 25%, rgba(255,255,255,0.02) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.02) 75%)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container-main relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="flex justify-center mb-10" {...fadeUp()}>
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-7 h-7 rounded-full border border-white" />
              </div>
            </motion.div>

            <motion.div
              className="liquid-glass inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Rocket className="w-5 h-5 text-red-500" />
              <span className="text-sm text-gray-300">Ready to collaborate?</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let&apos;s Create Something{" "}
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Amazing</span>{" "}
              Together
            </h2>

            <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
              Whether you have a project in mind or just want to connect, I&apos;m always excited to explore new opportunities.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:shadow-2xl hover:shadow-black/20 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="/experience"
                className="liquid-glass inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Experience
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================================
          FOOTER
      ========================================================== */}
      <footer className="status-line status-line-dark pt-20 md:pt-24 pb-10 px-6 md:px-16 lg:px-28">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 w-full">
          <Byline dark>
            <span>© 2026 Zefanya Williams</span>
            <span>Digital Business & Content Creator</span>
          </Byline>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
