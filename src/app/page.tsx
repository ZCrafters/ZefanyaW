'use client';

import { Linkedin, ArrowRight, Sparkles, Clapperboard, Camera, BarChart3, Palette, Globe, PenTool } from 'lucide-react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Typewriter } from '@/components/ui/fancy-typewriter';
import Letter3DSwap from '@/components/fancy/text/letter-3d-swap';
import { TextHighlighter } from '@/components/fancy/text/text-highlighter';
import RenderWhenVisible from '@/components/ui/render-when-visible';

const HomeImageTrail = dynamic(() => import('@/components/home/HomeImageTrail'), {
  ssr: false,
});

const WeeklyFindsMarquee = dynamic(() => import('@/components/home/WeeklyFindsMarquee'), {
  ssr: false,
});

/* ═══════════════════════════════════════════════════════════════════
    MARQUEE DATA
═══════════════════════════════════════════════════════════════════ */
const MARQUEE = [
  'Video Editing', 'Fotografi', 'Content Creation', 'Digital Marketing',
  'Data Analysis', 'Python', 'Branding', 'Social Media', 'Web Tools',
  'Copywriting', 'UI/UX', 'Event Doc', 'FinTech', 'Creative Strategy', 'Desain Grafis',
];

const HOME_STATS = [
  { label: 'Certifications', value: '6+', description: 'Professional certifications earned' },
  { label: 'Years Experience', value: '4+', description: 'Years of professional experience' },
  { label: 'Skills Mastered', value: '20+', description: 'Technical and soft skills acquired' },
  { label: 'Projects', value: '50+', description: 'Completed projects and campaigns' },
];

const GALLERY_ROW_1 = [
  '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 01_55_53 PM.png',
  '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 01_57_06 PM.png',
  '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 02_03_35 PM.png',
  '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 02_11_50 PM.png',
  '/assets/galery/sub 1/ChatGPT Image May 5, 2026, 02_23_19 PM.png',
];
const GALLERY_ROW_2 = [
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_37_00 AM.png',
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_40_35 AM.png',
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_43_24 AM.png',
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_44_35 AM.png',
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_46_11 AM.png',
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_57_31 AM.png',
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 11_58_32 AM.png',
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 12_00_26 PM.png',
  '/assets/galery/sub 2/ChatGPT Image May 5, 2026, 12_01_54 PM.png',
  '/assets/galery/sub 2/ChatGPT Image May 6, 2026, 02_33_02 PM.png',
  '/assets/galery/sub 2/ChatGPT Image May 6, 2026, 02_34_32 PM.png',
];
const GALLERY_ROW_3 = [
  '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_23_52 AM.png',
  '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_30_11 AM.png',
  '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_37_59 AM.png',
  '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_38_03 AM.png',
  '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_39_42 AM.png',
  '/assets/galery/sub 3/ChatGPT Image May 7, 2026, 09_43_18 AM.png',
  '/assets/galery/sub 3/Desain tanpa judul (10).png',
];

const POSTER_IMAGES = [
  '/assets/poster/ChatGPT Image May 5, 2026, 01_55_53 PM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 01_57_06 PM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 02_03_35 PM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 02_11_50 PM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 02_23_19 PM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 11_37_00 AM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 11_40_35 AM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 11_43_24 AM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 11_44_35 AM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 11_46_11 AM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 11_57_31 AM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 11_58_32 AM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 12_00_26 PM.png',
  '/assets/poster/ChatGPT Image May 5, 2026, 12_01_54 PM.png',
  '/assets/poster/ChatGPT Image May 6, 2026, 02_33_02 PM.png',
  '/assets/poster/ChatGPT Image May 6, 2026, 02_34_32 PM.png',
  '/assets/poster/ChatGPT Image May 7, 2026, 09_23_52 AM.png',
  '/assets/poster/ChatGPT Image May 7, 2026, 09_30_11 AM.png',
  '/assets/poster/ChatGPT Image May 7, 2026, 09_37_59 AM.png',
  '/assets/poster/ChatGPT Image May 7, 2026, 09_38_03 AM.png',
  '/assets/poster/ChatGPT Image May 7, 2026, 09_39_42 AM.png',
  '/assets/poster/ChatGPT Image May 7, 2026, 09_43_18 AM.png',
  '/assets/poster/Desain tanpa judul (10).png',
];

/* ═══════════════════════════════════════════════════════════════════
    MARQUEE STRIP
═══════════════════════════════════════════════════════════════════ */
function MarqueeStrip() {
  return (
    <div style={{ background: 'var(--red)', overflow: 'hidden', padding: '14px 0' }}>
      <div className="mq-track">
        {[...MARQUEE, ...MARQUEE].map((item, i) => (
          <span key={i} style={{ fontSize: 11, fontWeight: 800, padding: '0 30px', whiteSpace: 'nowrap', color: '#fff' }}>
            {item} <span style={{ marginLeft: 10 }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
    ABOUT SECTION
═══════════════════════════════════════════════════════════════════ */
function AboutSection() {
  return (
    <section className="home-about-section" style={{ padding: 'clamp(80px, 10vw, 128px) 0 clamp(88px, 10vw, 132px)' }}>
      {/* Marquee */}
      <MarqueeStrip />

      {/* About */}
      <div className="home-about-shell" style={{ maxWidth: 1280, margin: 'clamp(72px, 8vw, 104px) auto 0', padding: '0 clamp(18px, 4vw, 36px)' }}>
        {/* Eyebrow */}
        <div className="sec-label" style={{ marginBottom: 20 }}>Tentang Saya</div>

        <div className="home-about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(360px, 0.95fr)', gap: 'clamp(52px, 7vw, 104px)', alignItems: 'flex-start' }}>
          {/* Left: about text */}
          <div>
            <h2 className="h2" style={{ fontSize: 'clamp(32px,4vw,56px)', marginBottom: 24, lineHeight: 1.05 }}>
              Berjiwa <span style={{ color: 'var(--red)' }}>Kreatif,</span><br />Berpikir Data
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.9, marginBottom: 20 }}>
              Saya adalah mahasiswa Bisnis Digital dengan pengalaman di bidang{" "}
              <TextHighlighter
                className="rounded-[0.3em] px-px"
                transition={{ type: 'spring', duration: 1, delay: 0.4, bounce: 0 }}
                highlightColor="rgba(128,0,0,0.45)"
                useInViewOptions={{ once: true, initial: true, amount: 0.1 }}
              >
                pengeditan video, fotografi, pembuatan konten, dan analisis data
              </TextHighlighter>.{" "}
              Saya telah berkontribusi di{" "}
              <TextHighlighter
                className="rounded-[0.3em] px-px"
                transition={{ type: 'spring', duration: 1, delay: 0.6, bounce: 0 }}
                highlightColor="rgba(128,0,0,0.45)"
                useInViewOptions={{ once: true, initial: true, amount: 0.1 }}
              >
                startup, media kampus, hingga program internasional
              </TextHighlighter>{" "}
              untuk membangun prototipe solusi digital yang berdampak.
            </p>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.9, marginBottom: 40 }}>
              Saya percaya bahwa{" "}
              <TextHighlighter
                className="rounded-[0.3em] px-px"
                transition={{ type: 'spring', duration: 1, delay: 0.4, bounce: 0 }}
                highlightColor="rgba(128,0,0,0.45)"
                useInViewOptions={{ once: true, initial: true, amount: 0.1 }}
              >
                kreativitas terbaik lahir dari pemahaman data
              </TextHighlighter>.{" "}
              Setiap visual yang saya ciptakan selalu didasarkan pada{" "}
              <TextHighlighter
                className="rounded-[0.3em] px-px"
                transition={{ type: 'spring', duration: 1, delay: 0.6, bounce: 0 }}
                highlightColor="rgba(128,0,0,0.45)"
                useInViewOptions={{ once: true, initial: true, amount: 0.1 }}
              >
                strategi yang terukur dan tujuan bisnis yang jelas
              </TextHighlighter>.
            </p>

            {/* Stats */}
            <div className="home-stat-grid">
              {HOME_STATS.map(i => (
                <div key={i.label} className="home-stat-card">
                  <p className="home-stat-value">{i.value}</p>
                  <p className="home-stat-label">{i.label}</p>
                  <p className="home-stat-desc">{i.description}</p>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              <a href="mailto:zefanyawilliams@gmail.com" style={{ textDecoration: 'none' }}>
                <button className="clip-btn red" style={{ padding: '13px 32px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', cursor: 'pointer' }}>
                  Hubungi Saya <ArrowRight size={13} />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/zefanya-williams-272415261/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <button className="clip-btn white" style={{ padding: '13px 32px', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', cursor: 'pointer' }}>
                  LinkedIn <Linkedin size={13} />
                </button>
              </a>
            </div>
          </div>

          {/* Right: skills + experience */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {/* Skills */}
            <div className="glass home-skill-panel" style={{ borderRadius: 20, padding: 'clamp(34px, 4.5vw, 52px)' }}>
              <div className="home-panel-kicker">
                <Sparkles size={14} />
                <span>Keahlian</span>
              </div>
              <div className="home-skill-visual-grid">
                {[
                  { icon: Clapperboard, label: 'Video Editing' },
                  { icon: Camera, label: 'Fotografi' },
                  { icon: BarChart3, label: 'Data Analysis' },
                  { icon: Palette, label: 'Desain Grafis' },
                  { icon: Globe, label: 'Digital Marketing' },
                  { icon: PenTool, label: 'Content Creation' },
                ].map((skill, i) => (
                  <motion.div
                    key={skill.label}
                    className="home-skill-visual-card"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                  >
                    <skill.icon size={20} />
                    <span>{skill.label}</span>
                  </motion.div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                {MARQUEE.map(skill => (
                  <span key={skill} className="home-skill-chip" style={{ fontSize: 11, fontWeight: 700, padding: '8px 14px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="glass" style={{ borderRadius: 16, padding: 'clamp(32px, 4.5vw, 48px)' }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--red)', marginBottom: 24 }}>Pengalaman</p>
              {[
                { period: '2026 – Kini', role: 'Microfinancing Task Force 365', org: 'FIFGROUP' },
                { period: '2025 – Kini', role: 'Owner & Creative Director', org: 'Gegaiaan & Cakra Labs' },
                { period: '2023 – Kini', role: 'Campus Ambassador', org: 'Cyber University' },
              ].map((exp, i) => (
                <div key={i} style={{ paddingBottom: 20, marginBottom: i < 2 ? 20 : 0, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                  <p style={{ fontSize: 10, color: 'var(--red)', fontWeight: 700, letterSpacing: '0.1em', marginBottom: 7 }}>{exp.period}</p>
                  <p style={{ fontSize: 14, fontWeight: 700, color: '#fff', marginBottom: 5 }}>{exp.role}</p>
                  <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', fontWeight: 500 }}>{exp.org}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
    HERO
═══════════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: '100dvh', background: '#000' }}
    >
      <div className="hero-video-bg" aria-hidden="true">
        <iframe
          className="hero-video-frame"
          src="https://www.youtube-nocookie.com/embed/PTZnjN0pxOE?si=0nOQ-7_Au_W0zMpS&autoplay=1&mute=1&loop=1&playlist=PTZnjN0pxOE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&start=1"
          title="Hero background video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
        />
      </div>
      <div className="hero-video-shade" />
      <div className="relative z-10 text-center px-6">
        <h1
          className="h1"
          style={{ fontSize: 'clamp(40px, 7vw, 100px)', marginBottom: 12, textTransform: 'none' }}
        >
          <Letter3DSwap
            mainClassName="text-2xl sm:text-5xl md:text-7xl lowercase"
            frontFaceClassName="bg-transparent text-white"
            secondFaceClassName="bg-transparent text-white"
            rotateDirection="top"
            staggerDuration={0.03}
            staggerFrom="first"
            transition={{ type: 'spring', damping: 25, stiffness: 160 }}
          >
            Hi Im Fan
          </Letter3DSwap>
        </h1>
        <p
          className="whitespace-pre-wrap"
          style={{ fontFamily: 'var(--font-syne, Syne, sans-serif)', fontSize: 'clamp(15px, 1.4vw, 20px)', color: 'rgba(255,255,255,0.72)', marginBottom: 8, lineHeight: 1.7, letterSpacing: '0.06em', fontWeight: 500, fontStyle: 'italic' }}
        >
          <span>{"Make Feeling Look "}</span>
          <Typewriter
            text={[
              "Cinematic",
              "Aura Farming",
              "Better",
              "be alive",
              "Motion",
            ]}
            speed={70}
            className="text-yellow-500"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar="_"
          />
        </p>
        <div className="mt-6 flex justify-center">
          <a href="/about" style={{ textDecoration: 'none' }}>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#800000_50%,#ff0000_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-black/80">
                Explore My Work <ArrowRight size={14} className="ml-2" />
              </span>
            </button>
          </a>
        </div>
      </div>
      {/* Bottom fade overlay for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '30vh', background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 60%, #000 100%)' }}
      />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
    GALLERY SECTION
═══════════════════════════════════════════════════════════════════ */
function GallerySection() {
  const galleryImages = [
    '/assets/assetss/DSC08129.JPG',
    '/assets/assetss/element.png',
    '/assets/assetss/fire element.png',
    '/assets/assetss/background.png',
    '/assets/assetss/element fire.png',
    '/assets/assetss/banner.png',
    '/assets/assetss/overlay.png',
    '/assets/assetss/left corner.png',
  ];

  return (
    <section className="home-gallery-3d-section">
      <div className="home-gallery-orbit home-gallery-orbit-one" />
      <div className="home-gallery-orbit home-gallery-orbit-two" />
      <div className="text-center mb-16 px-6 relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white/55 text-xs font-bold uppercase tracking-[0.24em] mb-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <Sparkles size={14} className="text-red-500" />
          Project Gallery
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Visual <span className="text-red-500">Gallery</span>
        </h2>
        <p className="text-white/50 max-w-xl mx-auto">
          A curated collection of moments, designs, and creative explorations
        </p>
      </div>
      <div className="home-gallery-3d-stage" aria-label="Animated visual gallery">
        {galleryImages.map((src, i) => (
          <motion.figure
            key={src}
            className={`home-gallery-3d-card home-gallery-card-${i + 1}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 768px) calc(100vw - 32px), 35vw"
              quality={70}
              className="object-cover"
            />
          </motion.figure>
        ))}
      </div>
      {/* Image Trail Section */}
      <RenderWhenVisible className="relative z-10 mt-24" minHeight="70vh">
        <HomeImageTrail posterImages={POSTER_IMAGES} />
      </RenderWhenVisible>

      {/* Weekly Finds Marquee Section */}
      <RenderWhenVisible className="relative z-10 mt-24 overflow-hidden py-16" minHeight={760}>
        <WeeklyFindsMarquee rows={[GALLERY_ROW_1, GALLERY_ROW_2, GALLERY_ROW_3]} />
      </RenderWhenVisible>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
    PAGE
═══════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: '#000' }}>
      <Hero />
      <AboutSection />
      <GallerySection />
    </div>
  );
}
