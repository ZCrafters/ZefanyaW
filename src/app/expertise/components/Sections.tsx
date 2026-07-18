"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Camera,
  ChevronLeft,
  ChevronRight,
  Check,
  LayoutTemplate,
  Quote,
  Star,
} from "lucide-react";
import { ParallaxPortrait, Reveal, StudioButton, useInViewAnimation } from "./AnimatedComponents";
import { showcaseImages } from "./Hero";

const bookingUrl = "/contact";

const testimonials = [
  {
    name: "Marcus Anderson",
    role: "CEO, Data.storage",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160",
    quote: "With very little guidance, the team delivered visual direction that was consistently spot on. Every review felt focused, fast, and deeply considered.",
  },
  {
    name: "alexwu",
    role: "Founder, Nexgate",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=160",
    quote: "ByFanWilliams led the creation of our best fundraising story to date. The work gave our ambition a visual language investors could immediately understand.",
  },
  {
    name: "James Mitchell",
    role: "VP Product, LaunchPad",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=160",
    quote: "Working with Fan transformed our product vision into something cinematic and credible. The attention to pacing, detail, and emotion was exceptional.",
  },
  {
    name: "Rachel Foster",
    role: "Co-founder, Nexus Labs",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=160",
    quote: "The creative quality exceeded our expectations. Every image felt intentional and the final system gave our team a much stronger point of view.",
  },
  {
    name: "David Zhang",
    role: "Head of Design, Paradigm Labs",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=160",
    quote: "Incredible work from start to finish. The process was sharp, collaborative, and the result feels distinctly ours rather than another visual trend.",
  },
];

const projects = [
  {
    name: "ByFanWilliams",
    description: "Cinematic photography and visual direction shaped around real stories",
    image: "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
    number: "01",
  },
  {
    name: "Automation Machines",
    description: "Streamlining industrial automation processes",
    image: "https://motionsites.ai/assets/hero-automation-machines-preview-DlTveRIN.gif",
    number: "02",
  },
  {
    name: "ByFanWilliams",
    description: "A portfolio system and digital storefront for creative work",
    image: "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
    number: "03",
  },
];

export function TestimonialSection() {
  return (
    <section className="expertise-quote-section">
      <div className="expertise-quote-copy">
        <Reveal delay={0.1}><Quote size={26} strokeWidth={1.5} className="expertise-red" /></Reveal>
        <Reveal delay={0.2}>
          <h2 className="expertise-display expertise-quote-title">
            “I built the studio I always wanted to work with: personal, precise, and <span>fearlessly visual.</span>”
          </h2>
        </Reveal>
        <Reveal delay={0.3}><p className="expertise-author">ByFanWilliams</p></Reveal>
        <Reveal delay={0.4} className="expertise-logo-row">
          <span>APPLE</span><span>IDEO</span><span>POLYGON</span>
        </Reveal>
      </div>
      <Reveal delay={0.5} className="expertise-portrait-wrap">
        <ParallaxPortrait
          src="/assets/assetss/byfanwilliams-profile.jpg"
          alt="Byfanwilliams portrait"
        />
      </Reveal>
    </section>
  );
}

export function PricingSection() {
  return (
    <section className="expertise-pricing" id="services">
      <div className="expertise-section-label"><span>02</span> Services &amp; packages</div>
      <div className="expertise-pricing-heading">
        <div>
          <Camera size={20} />
          <h2>Photography coverage</h2>
        </div>
        <p>Simple packages for events, groups, and personal portraits. Extra time and custom coverage can be negotiated.</p>
      </div>
      <div className="expertise-pricing-grid">
        <Reveal delay={0.1} className="expertise-price-card expertise-price-dark">
          <div className="expertise-card-kicker">Essential coverage</div>
          <h3>Paket Basic</h3>
          <p>Focused documentation for shorter events and personal sessions.</p>
          <ul className="expertise-package-list">
            {["Durasi sampai 2 jam", "Foto grup", "Foto individu", "25 foto edit", "Semua file JPG"].map((item) => (
              <li key={item}><Check size={15} /> {item}</li>
            ))}
          </ul>
          <div className="expertise-price"><strong>Rp400.000</strong><span>Per session</span></div>
          <div className="expertise-card-actions">
            <StudioButton href={bookingUrl}>Book Basic <ArrowRight size={15} /></StudioButton>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="expertise-price-card expertise-price-light">
          <div className="expertise-card-kicker">Extended coverage</div>
          <h3>Paket Standard</h3>
          <p>More time, more edited frames, and premium finishing for key photos.</p>
          <ul className="expertise-package-list">
            {["Durasi sampai 4 jam", "Foto grup", "Foto individu", "50 foto edit", "Semua file JPG", "5 foto retouch premium"].map((item) => (
              <li key={item}><Check size={15} /> {item}</li>
            ))}
          </ul>
          <div className="expertise-price"><strong>Rp600.000</strong><span>Per session</span></div>
          <div className="expertise-card-actions">
            <StudioButton href={bookingUrl} variant="tertiary">Book Standard <ArrowRight size={15} /></StudioButton>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.25} className="expertise-negotiation-note">
        <div><span>Flexible scope</span><strong>Acara lebih lama atau butuh cameraman?</strong></div>
        <p>Durasi tambahan, video coverage, lokasi di luar area, dan kebutuhan khusus bisa dinegosiasikan sebelum hari produksi.</p>
        <StudioButton href={bookingUrl} variant="secondary">Negotiate package <ArrowRight size={15} /></StudioButton>
      </Reveal>
      <Reveal delay={0.3} className="expertise-digital-offer">
        <span className="expertise-digital-icon"><LayoutTemplate size={22} /></span>
        <div><small>Digital products</small><h3>UI/UX templates &amp; custom interfaces</h3><p>Ready-to-use templates for portfolios, landing pages, and business websites, with customization available.</p></div>
        <StudioButton href="#projects" variant="secondary">View visual work <ArrowRight size={15} /></StudioButton>
      </Reveal>
    </section>
  );
}

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(427.5);
  const next = useCallback(() => setIndex((value) => (value + 1) % testimonials.length), []);
  const previous = useCallback(() => setIndex((value) => (value - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(next, 3000);
    return () => window.clearInterval(timer);
  }, [next, paused]);

  useEffect(() => {
    const updateCardWidth = () => setCardWidth(Math.min(427.5, window.innerWidth - 48));
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth, { passive: true });
    return () => window.removeEventListener("resize", updateCardWidth);
  }, []);

  return (
    <section className="expertise-testimonials">
      <div className="expertise-testimonial-header">
        <Reveal><h2 className="expertise-display">What <span>builders</span> say</h2></Reveal>
        <Reveal delay={0.1} className="expertise-rating">
          <div>{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={17} fill="currentColor" />)}</div>
          <span>Clutch 5/5</span>
        </Reveal>
      </div>
      <div
        className="expertise-carousel-shell"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="expertise-carousel-window">
          <div className="expertise-carousel-track" style={{ transform: `translateX(-${index * (cardWidth + 24)}px)` }}>
            {testimonials.map((item) => (
              <article className="expertise-testimonial-card" key={item.name}>
                <Quote size={34} className="expertise-red" fill="currentColor" />
                <p>{item.quote}</p>
                <div className="expertise-person">
                  <img src={item.avatar} alt={item.name} loading="lazy" />
                  <div><strong>{item.name}</strong><span>→ {item.role}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="expertise-carousel-controls">
          <button onClick={previous} aria-label="Previous testimonial"><ChevronLeft /></button>
          <span>{String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
          <button onClick={next} aria-label="Next testimonial"><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}

function ProjectItem({ project }: { project: (typeof projects)[number] }) {
  const { ref, isInView } = useInViewAnimation<HTMLElement>();
  return (
    <article ref={ref} className={`expertise-project ${isInView ? "expertise-fade-in-up" : "expertise-before-reveal"}`}>
      <div className="expertise-project-copy">
        <span>{project.number}</span>
        <div><h3>{project.name}</h3><p>{project.description}</p></div>
        <ArrowUpRight size={22} />
      </div>
      <div className="expertise-project-image"><img src={project.image} alt={`${project.name} project`} loading="lazy" decoding="async" /></div>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <section className="expertise-projects" id="projects">
      <div className="expertise-projects-heading">
        <div className="expertise-section-label"><span>03</span> Selected work</div>
        <h2 className="expertise-display">Images with <span>intent.</span><br />Stories with impact.</h2>
      </div>
      <div className="expertise-project-list">{projects.map((project) => <ProjectItem project={project} key={project.number} />)}</div>
    </section>
  );
}

type TrailImage = { id: number; x: number; y: number; src: string; rotation: number };

export function PartnerSection() {
  const [trail, setTrail] = useState<TrailImage[]>([]);
  const lastSpawn = useRef(0);
  const idRef = useRef(0);
  const timeoutRefs = useRef<number[]>([]);

  useEffect(() => () => timeoutRefs.current.forEach(window.clearTimeout), []);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const now = performance.now();
    if (now - lastSpawn.current < 80) return;
    lastSpawn.current = now;
    const rect = event.currentTarget.getBoundingClientRect();
    const id = ++idRef.current;
    const item = {
      id,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      src: showcaseImages[id % showcaseImages.length],
      rotation: -10 + Math.random() * 20,
    };
    setTrail((items) => [...items.slice(-8), item]);
    timeoutRefs.current.push(window.setTimeout(() => setTrail((items) => items.filter((entry) => entry.id !== id)), 1000));
  };

  return (
    <section className="expertise-partner-outer" id="process">
      <div className="expertise-partner" onMouseMove={handleMove}>
        <div className="expertise-partner-grid" />
        {trail.map((item) => (
          <img
            key={item.id}
            src={item.src}
            alt=""
            className="expertise-trail-image"
            style={{ left: item.x, top: item.y, transform: `translate(-50%, -50%) rotate(${item.rotation}deg)` }}
          />
        ))}
        <Reveal className="expertise-partner-content">
          <p>Available for select collaborations</p>
          <h2>Partner with <span>us</span></h2>
          <StudioButton>
            <img src="/assets/assetss/byfanwilliams-profile.jpg" alt="Byfanwilliams" />
            Start chat with Byfanwilliams
          </StudioButton>
        </Reveal>
      </div>
    </section>
  );
}

export function CopyrightBar() {
  return <div className="expertise-copyright"><span>ByFanWilliams Studio</span><span>Jakarta, Indonesia</span></div>;
}

export function BottomNav() {
  return (
    <nav className="expertise-bottom-nav" aria-label="Quick contact">
      <a href="#about" className="expertise-bottom-monogram">F</a>
      <StudioButton>Start a chat</StudioButton>
    </nav>
  );
}
