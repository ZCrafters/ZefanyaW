import * as React from "react"
import { addPropertyControls, ControlType, motion, AnimatePresence, useScroll, useSpring } from "framer"

type Props = {
    accent: string
    title: string
    subtitle: string
    profileImage: string
    email: string
    style?: React.CSSProperties
}

const stats = [
    ["6+", "Certifications", "Professional certifications earned"],
    ["4+", "Years Experience", "Years of professional experience"],
    ["20+", "Skills Mastered", "Technical and soft skills acquired"],
    ["50+", "Projects", "Completed projects and campaigns"],
]

const timeline = [
    ["2024 - Present", "Green Academy", "Digital Business Student", "Studying digital business with focus on AI technology, digital marketing strategy, and data-driven decisions."],
    ["2024", "Darwis Triadi Photography Academy", "Professional Photography", "Training in camera operation, lighting, composition, portrait, and post-processing workflows."],
    ["2023 - 2025", "Badan Executive Mahasiswa", "Best Member - Medinfo Division", "Led design, content planning, and documentation projects for campus publication."],
    ["2022 - Present", "Campus Volunteer", "Community & Events", "Organized events and community service projects while developing leadership and team coordination."],
]

const skills = [
    ["Digital Marketing", 92, "Marketing"],
    ["Content Creation", 95, "Creative"],
    ["Data Analysis", 85, "Technical"],
    ["Photography", 90, "Creative"],
    ["Video Editing", 88, "Creative"],
    ["Project Management", 82, "Business"],
    ["AI & Automation", 78, "Technical"],
    ["UI/UX Strategy", 90, "Technical"],
]

const services = [
    ["Content Strategy", "Data-driven content plans that align with brand goals and audience behavior.", "Content calendars, Audience analysis, Performance tracking, Brand voice"],
    ["Digital Marketing", "End-to-end digital campaigns that drive engagement and measurable outcomes.", "Social media, SEO, Paid ads, Analytics"],
    ["Visual Production", "Photography and video content that tells a clear brand story.", "Product photography, Event coverage, Video editing, Post-processing"],
    ["AI Integration", "Using AI tools to automate workflows and enhance creative output.", "Workflow automation, AI-assisted design, Data insights, Process optimization"],
]

const values = [
    ["Passion", "Genuine enthusiasm drives excellence in every project."],
    ["Innovation", "Pushing boundaries and exploring new possibilities."],
    ["Integrity", "Honest and transparent in all collaborations."],
    ["Impact", "Creating solutions that make a meaningful difference."],
]

const funFacts = [
    ["Photography", "Capturing moments that tell stories beyond words. Every frame is a frozen memory of truth."],
    ["AI Technology", "Exploring the frontier of artificial intelligence and its transformative creative potential."],
    ["Community", "Dedicated to empowering others through mentorship and collaborative growth."],
]

const faq = [
    ["Who are you?", "I'm Zefanya Williams, a Digital Business student and creative professional bridging visual storytelling with data-driven performance."],
    ["What's your educational background?", "I'm studying Digital Business at Cyber University while pursuing certifications in Data Science, Digital Marketing, and Photography."],
    ["What are your skills?", "My skills span digital marketing, content creation, video editing, photography, project management, and data analysis."],
    ["What are your future goals?", "I aim to become a digital business strategist who combines creative excellence with technological innovation."],
    ["How can I connect with you?", "Reach out through email or social media. I'm open to collaborations, discussions, and new challenges."],
]

const press = [
    ["Milenial.id", "/assets/milenial.png", "Featured article highlighting creative journey and digital innovation impact."],
    ["Republika", "/assets/republika.png", "Coverage on entrepreneurial initiatives and community engagement programs."],
    ["Sidoarjo News", "/assets/sidonews.png", "Local feature covering regional contributions and youth leadership."],
]

function Arrow() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function SectionHeading({ eyebrow, title, accent, light = false }: { eyebrow: string; title: string; accent: string; light?: boolean }) {
    const [a, b] = title.split("|")
    return (
        <motion.div style={styles.sectionHead} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ ...styles.eyebrow, color: accent }}>{eyebrow}</span>
            <h2 style={{ ...styles.sectionTitle, color: light ? "#fff" : "#050505" }}>{a} <span style={{ color: accent }}>{b}</span></h2>
        </motion.div>
    )
}

function SkillBar({ item, accent, index }: { item: (typeof skills)[number]; accent: string; index: number }) {
    return (
        <motion.div style={styles.skillBar} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
            <div style={styles.skillTop}>
                <span>{item[0]} <small style={styles.skillType}>{item[2]}</small></span>
                <b style={{ color: accent }}>{item[1]}%</b>
            </div>
            <div style={styles.skillTrack}>
                <motion.div style={{ ...styles.skillFill, background: accent }} initial={{ width: 0 }} whileInView={{ width: `${item[1]}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.15 + index * 0.04 }} />
            </div>
        </motion.div>
    )
}

function FAQBlock({ accent }: { accent: string }) {
    const [open, setOpen] = React.useState(0)
    return (
        <div style={styles.faqList}>
            {faq.map((item, index) => (
                <div key={item[0]} style={styles.faqItem}>
                    <button type="button" onClick={() => setOpen(open === index ? -1 : index)} style={styles.faqButton}>
                        <span>{item[0]}</span>
                        <span style={{ color: accent, fontSize: 24 }}>{open === index ? "-" : "+"}</span>
                    </button>
                    <motion.div initial={false} animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }} style={{ overflow: "hidden" }}>
                        <p style={styles.faqAnswer}>{item[1]}</p>
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

function TabsContent({ active, accent }: { active: string; accent: string }) {
    if (active === "journey") {
        return (
            <div style={styles.tabGrid}>
                <div>
                    <h3 style={styles.tabTitle}>Education & Experience</h3>
                    <div style={styles.timelineList}>
                        {timeline.map((item, index) => (
                            <motion.article key={item[1]} style={styles.timelineItem} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }}>
                                <span style={{ ...styles.timelineDot, background: accent }} />
                                <p style={{ ...styles.tiny, color: accent }}>{item[0]}</p>
                                <h4 style={styles.timelineTitle}>{item[1]}</h4>
                                <p style={styles.timelineSub}>{item[2]}</p>
                                <p style={styles.timelineText}>{item[3]}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
                <div style={{ ...styles.featureCard, background: accent }}>
                    <h3 style={styles.featureTitle}>Photography Expertise</h3>
                    <p style={styles.featureText}>Professional training at Darwis Triadi Photography Academy with focus on portrait, event, and product photography.</p>
                    <div style={styles.miniStats}>{[["6+", "Certs"], ["4+", "Years"], ["20+", "Skills"]].map((x) => <span key={x[1]}><b>{x[0]}</b>{x[1]}</span>)}</div>
                </div>
            </div>
        )
    }

    if (active === "skills") {
        return (
            <div style={styles.tabGrid}>
                <div>
                    <h3 style={styles.tabTitle}>Core Competencies</h3>
                    <div style={{ display: "grid", gap: 18 }}>{skills.map((item, index) => <SkillBar key={item[0] as string} item={item} accent={accent} index={index} />)}</div>
                </div>
                <div>
                    <h3 style={styles.tabTitle}>Core Values</h3>
                    <div style={styles.valueGrid}>{values.map((item) => <article key={item[0]} style={styles.valueCard}><h4>{item[0]}</h4><p>{item[1]}</p></article>)}</div>
                    <blockquote style={styles.quote}>I am the bridge between creative visual execution and hard data performance.</blockquote>
                </div>
            </div>
        )
    }

    if (active === "services") {
        return (
            <div>
                <div style={{ textAlign: "center", marginBottom: 34 }}>
                    <h3 style={styles.tabTitle}>What I Offer</h3>
                    <p style={styles.mutedText}>Professional services tailored to elevate your digital presence and drive measurable results.</p>
                </div>
                <div style={styles.serviceGrid}>
                    {services.map((item, index) => (
                        <motion.article key={item[0]} style={styles.serviceCard} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                            <span style={{ ...styles.serviceIcon, background: accent }}>{item[0][0]}</span>
                            <h4>{item[0]}</h4>
                            <p>{item[1]}</p>
                            <div style={styles.chips}>{item[2].split(",").map((x) => <span key={x.trim()} style={styles.chip}>{x.trim()}</span>)}</div>
                        </motion.article>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div style={styles.tabGrid}>
            <div>
                <p style={{ ...styles.tiny, color: accent }}>About Me</p>
                <h3 style={styles.tabTitle}>Who I Am</h3>
                <p style={styles.bodyText}>I am a digital business student actively involved as a BA campus and frequently participate in volunteer activities. I can work both individually and in groups, and I create content for personal branding.</p>
                <p style={styles.bodyText}>I'm interested in AI technology, campus projects, and challenges in problem-solving.</p>
                <div style={styles.chips}>{["Team Leadership", "Problem Solving", "Creative Thinking", "Adaptability", "Strategic Planning"].map((x) => <span key={x} style={styles.chip}>{x}</span>)}</div>
            </div>
            <div style={{ display: "grid", gap: 18 }}>
                {[
                    ["My Background", "I started in digital business with a passion for technology and innovation. Content creation, digital marketing, and data analysis became essential tools in my toolkit."],
                    ["My Vision", "I aim to leverage technology and digital business strategy to create meaningful solutions for real-world challenges."],
                ].map((card) => (
                    <article key={card[0]} style={styles.infoCard}>
                        <h4>{card[0]}</h4>
                        <p>{card[1]}</p>
                    </article>
                ))}
            </div>
        </div>
    )
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 1440
 * @framerIntrinsicHeight 6200
 */
export default function AboutFull(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const containerRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
    const [active, setActive] = React.useState("overview")
    const [pressActive, setPressActive] = React.useState(0)
    const tabItems = [["overview", "Overview"], ["journey", "Journey"], ["skills", "Skills"], ["services", "Services"]]

    return (
        <div ref={containerRef} style={{ ...styles.page, ...props.style }}>
            <motion.div style={{ ...styles.progress, background: p.accent, scaleX }} />

            <section style={styles.hero}>
                <div style={styles.gridBg} />
                <div style={styles.redGlow} />
                <div style={styles.shell}>
                    <div style={styles.heroGrid}>
                        <motion.div initial={{ opacity: 0, x: -36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
                            <div style={styles.glassBadge}>Digital Business & Content Creator</div>
                            <h1 style={styles.heroTitle}>THE <span style={{ color: p.accent }}>ARCHITECT</span></h1>
                            <p style={styles.heroCopy}>{p.subtitle}</p>
                            <blockquote style={{ ...styles.heroQuote, borderLeftColor: p.accent }}>I am the bridge between creative visual execution and hard data performance.</blockquote>
                            <div style={styles.heroActions}>
                                <a href="#content" style={{ ...styles.primaryButton, background: p.accent }}>Discover More <Arrow /></a>
                                <a href={`mailto:${p.email}`} style={styles.outlineButton}>Get In Touch</a>
                            </div>
                        </motion.div>

                        <motion.div style={styles.profileWrap} initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.7 }}>
                            <div style={{ ...styles.profileGlow, background: p.accent }} />
                            <div style={styles.profileCard}>
                                <img src={p.profileImage} alt="Zefanya Williams" style={styles.profileImage} />
                                <div style={styles.profileOverlay} />
                                <div style={styles.available}><span style={{ ...styles.statusDot, background: "#22c55e" }} />Available for Projects</div>
                            </div>
                            <span style={{ ...styles.floatingBadge, right: -12, top: 18 }}>Active</span>
                            <span style={{ ...styles.floatingBadge, left: -16, bottom: 18, background: p.accent, color: "#fff" }}>Digital Creator</span>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section style={styles.statsSection}>
                <div style={styles.shell}>
                    <div style={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <motion.article key={stat[1]} style={styles.statCard} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                                <p style={{ ...styles.statValue, color: p.accent }}>{stat[0]}</p>
                                <h3>{stat[1]}</h3>
                                <p>{stat[2]}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section style={styles.mission}>
                <div style={styles.shellNarrow}>
                    <motion.p style={styles.missionText} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        I'm building a space where <span style={{ color: p.accent }}>curiosity meets clarity</span>, where creative vision finds its audience and every project becomes a story worth telling.
                    </motion.p>
                    <motion.p style={styles.missionSub} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        A platform where content, community, and insight flow together with less noise, less friction, and more meaning.
                    </motion.p>
                </div>
            </section>

            <section id="content" style={styles.contentSection}>
                <div style={styles.shell}>
                    <div style={styles.tabNav}>
                        {tabItems.map((tab) => (
                            <button key={tab[0]} type="button" onClick={() => setActive(tab[0])} style={{ ...styles.tabButton, background: active === tab[0] ? p.accent : "rgba(0,0,0,0.05)", color: active === tab[0] ? "#fff" : "rgba(0,0,0,0.58)" }}>{tab[1]}</button>
                        ))}
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.div key={active} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
                            <TabsContent active={active} accent={p.accent} />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            <section style={styles.pressSection}>
                <div style={styles.shell}>
                    <SectionHeading eyebrow="Press & Media" title="Featured In The |News" accent={p.accent} light />
                    <div style={styles.pressGrid}>
                        <div style={styles.pressList}>
                            {press.map((item, index) => (
                                <button key={item[0]} type="button" onClick={() => setPressActive(index)} style={{ ...styles.pressButton, borderColor: pressActive === index ? p.accent : "rgba(255,255,255,0.1)" }}>
                                    <b>{item[0]}</b>
                                    <span>{item[2]}</span>
                                </button>
                            ))}
                        </div>
                        <motion.div key={pressActive} style={styles.pressCard} initial={{ opacity: 0, rotateX: 8, y: 20 }} animate={{ opacity: 1, rotateX: 0, y: 0 }}>
                            <div style={styles.windowDots}><span /><span /><span /></div>
                            <img src={press[pressActive][1]} alt={press[pressActive][0]} style={styles.pressImage} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section style={{ ...styles.redSection, background: `linear-gradient(135deg, #6e0808, ${p.accent}, #2a0000)` }}>
                <div style={styles.shell}>
                    <SectionHeading eyebrow="Get To Know Me" title="Beyond The |Professional" accent="#facc15" light />
                    <div style={styles.funFaqGrid}>
                        <motion.div style={styles.darkPanel} initial={{ opacity: 0, x: -26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h3 style={styles.panelTitle}>Fun Facts</h3>
                            <div style={styles.funGrid}>{funFacts.map((fact) => <article key={fact[0]} style={styles.funCard}><h4>{fact[0]}</h4><p>{fact[1]}</p></article>)}</div>
                            <blockquote style={styles.darkQuote}>Photography, to me, is catching a moment which is passing, and which is true.</blockquote>
                        </motion.div>
                        <motion.div style={styles.darkPanel} initial={{ opacity: 0, x: 26 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h3 style={styles.panelTitle}>Frequently Asked Questions</h3>
                            <FAQBlock accent={p.accent} />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section style={styles.ctaSection}>
                <div style={styles.shellNarrow}>
                    <motion.div style={{ textAlign: "center" }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <span style={styles.ctaBadge}>Ready to collaborate?</span>
                        <h2 style={styles.ctaTitle}>Let's Create Something <span style={{ color: p.accent }}>Amazing</span> Together</h2>
                        <p style={styles.ctaText}>Whether you have a project in mind or just want to connect, I'm always excited to explore new opportunities.</p>
                        <div style={styles.heroActions}>
                            <a href={`mailto:${p.email}`} style={styles.whiteButton}>Start a Conversation <Arrow /></a>
                            <a href="#content" style={styles.darkOutlineButton}>View More</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <footer style={styles.footer}>
                <span>2026 Zefanya Williams</span>
                <span>Digital Business & Content Creator</span>
            </footer>
        </div>
    )
}

const defaults: Props = {
    accent: "#e50000",
    title: "THE ARCHITECT",
    subtitle: "I'm Zefanya Williams, a digital business student, content creator, and creative strategist bridging visual storytelling with data-driven performance.",
    profileImage: "/assets/assetss/DSC08129.JPG",
    email: "zefanyawilliams@gmail.com",
}

addPropertyControls(AboutFull, {
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    subtitle: { type: ControlType.String, title: "Subtitle", defaultValue: defaults.subtitle, displayTextArea: true },
    profileImage: { type: ControlType.String, title: "Image", defaultValue: defaults.profileImage },
    email: { type: ControlType.String, title: "Email", defaultValue: defaults.email },
})

const styles: Record<string, React.CSSProperties> = {
    page: { width: "100%", minHeight: "100vh", background: "#000", color: "#fff", fontFamily: "Inter, Syne, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif", overflowX: "hidden" },
    progress: { position: "fixed", top: 0, left: 0, right: 0, height: 3, zIndex: 50, transformOrigin: "0% 50%" },
    shell: { width: "min(1180px, calc(100% - 40px))", margin: "0 auto", position: "relative", zIndex: 2 },
    shellNarrow: { width: "min(900px, calc(100% - 40px))", margin: "0 auto", position: "relative", zIndex: 2 },
    hero: { position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", background: "#000", overflow: "hidden" },
    gridBg: { position: "absolute", inset: 0, opacity: 0.35, backgroundImage: "linear-gradient(rgba(229,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(229,0,0,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" },
    redGlow: { position: "absolute", top: "50%", left: "50%", width: 800, height: 800, transform: "translate(-50%, -50%)", borderRadius: 999, background: "rgba(229,0,0,0.16)", filter: "blur(80px)" },
    heroGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "clamp(52px, 7vw, 100px)", alignItems: "center", padding: "110px 0 80px" },
    glassBadge: { display: "inline-flex", marginBottom: 30, padding: "11px 18px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)", color: "rgba(255,255,255,0.76)", fontSize: 12, fontWeight: 850, textTransform: "uppercase", letterSpacing: "0.16em" },
    heroTitle: { margin: "0 0 24px", fontSize: "clamp(52px, 9vw, 112px)", lineHeight: 0.92, fontWeight: 950 },
    heroCopy: { margin: "0 0 26px", maxWidth: 610, color: "rgba(255,255,255,0.62)", fontSize: 18, lineHeight: 1.75 },
    heroQuote: { margin: "0 0 34px", padding: "10px 0 10px 22px", borderLeft: "2px solid", color: "#fff", fontStyle: "italic", fontSize: 16, lineHeight: 1.7 },
    heroActions: { display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 15 },
    primaryButton: { display: "inline-flex", alignItems: "center", gap: 9, minHeight: 50, padding: "0 25px", borderRadius: 999, color: "#fff", textDecoration: "none", fontSize: 14, fontWeight: 900 },
    outlineButton: { display: "inline-flex", alignItems: "center", minHeight: 50, padding: "0 25px", borderRadius: 999, color: "#fff", textDecoration: "none", border: "1px solid rgba(255,255,255,0.22)", fontSize: 14, fontWeight: 900 },
    profileWrap: { position: "relative", display: "flex", justifyContent: "center" },
    profileGlow: { position: "absolute", inset: -18, borderRadius: 28, opacity: 0.26, filter: "blur(28px)" },
    profileCard: { position: "relative", width: "min(330px, 84vw)", height: 430, borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.16)" },
    profileImage: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    profileOverlay: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.72), transparent 55%)" },
    available: { position: "absolute", left: 18, right: 18, bottom: 18, display: "flex", alignItems: "center", gap: 9, padding: "13px 14px", borderRadius: 8, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontWeight: 750 },
    statusDot: { width: 9, height: 9, borderRadius: 999, display: "inline-block" },
    floatingBadge: { position: "absolute", padding: "10px 13px", borderRadius: 8, background: "rgba(255,255,255,0.92)", color: "#050505", fontSize: 12, fontWeight: 900, boxShadow: "0 14px 36px rgba(0,0,0,0.28)" },
    statsSection: { padding: "clamp(70px, 8vw, 110px) 0", background: "linear-gradient(90deg, #111, #000, #111)", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" },
    statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: 18 },
    statCard: { padding: 28, borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" },
    statValue: { margin: "0 0 12px", fontSize: 48, lineHeight: 1, fontWeight: 950 },
    mission: { padding: "clamp(90px, 11vw, 160px) 0", background: "#fff", color: "#050505", textAlign: "center" },
    missionText: { margin: "0 0 34px", fontSize: "clamp(28px, 4.4vw, 54px)", lineHeight: 1.32, fontWeight: 750 },
    missionSub: { margin: "0 auto", maxWidth: 760, color: "rgba(0,0,0,0.48)", fontSize: "clamp(18px, 2.3vw, 30px)", lineHeight: 1.5 },
    contentSection: { padding: "clamp(80px, 10vw, 140px) 0", background: "#fff", color: "#050505" },
    tabNav: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 8, marginBottom: 46 },
    tabButton: { border: 0, borderRadius: 999, padding: "11px 18px", fontSize: 13, fontWeight: 850, cursor: "pointer", fontFamily: "inherit" },
    tabGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "clamp(44px, 6vw, 86px)", alignItems: "start" },
    tabTitle: { margin: "0 0 22px", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1, fontWeight: 950 },
    bodyText: { color: "rgba(0,0,0,0.6)", fontSize: 16, lineHeight: 1.85 },
    chips: { display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 },
    chip: { display: "inline-flex", padding: "8px 12px", borderRadius: 999, background: "rgba(0,0,0,0.055)", border: "1px solid rgba(0,0,0,0.07)", color: "rgba(0,0,0,0.66)", fontSize: 12, fontWeight: 750 },
    infoCard: { padding: 28, borderRadius: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 14px 40px rgba(0,0,0,0.06)" },
    timelineList: { display: "grid", gap: 18 },
    timelineItem: { position: "relative", padding: "0 0 22px 34px", borderLeft: "1px solid rgba(229,0,0,0.25)" },
    timelineDot: { position: "absolute", left: -6, top: 2, width: 12, height: 12, borderRadius: 999 },
    timelineTitle: { margin: "0 0 5px", fontSize: 18, fontWeight: 900 },
    timelineSub: { margin: "0 0 9px", color: "rgba(0,0,0,0.55)", fontSize: 13, fontWeight: 750 },
    timelineText: { margin: 0, color: "rgba(0,0,0,0.56)", fontSize: 14, lineHeight: 1.7 },
    tiny: { margin: "0 0 8px", fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.14em" },
    featureCard: { alignSelf: "start", padding: 34, borderRadius: 8, color: "#fff", boxShadow: "0 24px 70px rgba(229,0,0,0.22)" },
    featureTitle: { margin: "0 0 14px", fontSize: 30, fontWeight: 950 },
    featureText: { margin: "0 0 24px", color: "rgba(255,255,255,0.84)", lineHeight: 1.75 },
    miniStats: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 18 },
    skillBar: { width: "100%" },
    skillTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 9, fontSize: 14, fontWeight: 850 },
    skillType: { marginLeft: 8, padding: "3px 8px", borderRadius: 999, background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.45)", fontSize: 10, textTransform: "uppercase" },
    skillTrack: { height: 10, borderRadius: 999, background: "#eee", overflow: "hidden" },
    skillFill: { height: "100%", borderRadius: 999 },
    valueGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 14 },
    valueCard: { padding: 22, borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", boxShadow: "0 12px 32px rgba(0,0,0,0.05)" },
    quote: { margin: "24px 0 0", padding: 24, borderRadius: 8, background: "#f7f7f7", borderLeft: "3px solid #e50000", color: "rgba(0,0,0,0.68)", fontStyle: "italic" },
    mutedText: { margin: "0 auto", maxWidth: 620, color: "rgba(0,0,0,0.52)", lineHeight: 1.7 },
    serviceGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 },
    serviceCard: { padding: 28, borderRadius: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 14px 40px rgba(0,0,0,0.06)" },
    serviceIcon: { width: 52, height: 52, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 950, fontSize: 20, marginBottom: 18 },
    pressSection: { padding: "clamp(80px, 10vw, 140px) 0", background: "#000", color: "#fff" },
    sectionHead: { textAlign: "center", marginBottom: "clamp(46px, 7vw, 78px)" },
    eyebrow: { display: "block", marginBottom: 14, fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.26em" },
    sectionTitle: { margin: 0, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.05, fontWeight: 950 },
    pressGrid: { display: "grid", gridTemplateColumns: "minmax(260px, 0.75fr) minmax(320px, 1.25fr)", gap: 28, alignItems: "center" },
    pressList: { display: "grid", gap: 12 },
    pressButton: { padding: 20, borderRadius: 8, border: "1px solid", background: "rgba(255,255,255,0.06)", color: "#fff", textAlign: "left", cursor: "pointer", fontFamily: "inherit" },
    pressCard: { minHeight: 420, padding: 16, borderRadius: 8, background: "linear-gradient(135deg, rgba(255,255,255,0.14), rgba(229,0,0,0.1))", border: "1px solid rgba(255,255,255,0.14)", boxShadow: "0 32px 90px rgba(0,0,0,0.42)" },
    windowDots: { display: "flex", gap: 7, height: 20, marginBottom: 12 },
    pressImage: { width: "100%", height: 370, objectFit: "contain", borderRadius: 8, background: "#fff" },
    redSection: { padding: "clamp(80px, 10vw, 150px) 0", color: "#fff" },
    funFaqGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: 28 },
    darkPanel: { borderRadius: 8, padding: "clamp(28px, 4vw, 44px)", background: "rgba(10,0,0,0.82)", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 28px 80px rgba(0,0,0,0.34)" },
    panelTitle: { margin: "0 0 24px", fontSize: 30, fontWeight: 950 },
    funGrid: { display: "grid", gap: 14 },
    funCard: { padding: 20, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" },
    darkQuote: { margin: "24px 0 0", padding: 22, borderRadius: 8, background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.78)", fontStyle: "italic" },
    faqList: { display: "grid", gap: 12 },
    faqItem: { borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden" },
    faqButton: { width: "100%", minHeight: 64, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 18, padding: "0 20px", border: 0, background: "transparent", color: "#fff", textAlign: "left", fontFamily: "inherit", fontWeight: 850, cursor: "pointer" },
    faqAnswer: { margin: 0, padding: "0 20px 22px", color: "rgba(255,255,255,0.68)", lineHeight: 1.7 },
    ctaSection: { padding: "clamp(90px, 12vw, 160px) 0", background: "radial-gradient(circle at 50% 0%, rgba(229,0,0,0.22), transparent 42%), #000", color: "#fff" },
    ctaBadge: { display: "inline-flex", marginBottom: 24, padding: "10px 14px", borderRadius: 999, background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)", border: "1px solid rgba(255,255,255,0.16)", fontSize: 13 },
    ctaTitle: { margin: "0 0 18px", fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.04, fontWeight: 950 },
    ctaText: { margin: "0 auto 34px", maxWidth: 620, color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.75 },
    whiteButton: { display: "inline-flex", alignItems: "center", gap: 9, minHeight: 50, padding: "0 25px", borderRadius: 999, color: "#050505", textDecoration: "none", background: "#fff", fontSize: 14, fontWeight: 900 },
    darkOutlineButton: { display: "inline-flex", alignItems: "center", minHeight: 50, padding: "0 25px", borderRadius: 999, color: "#fff", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", fontSize: 14, fontWeight: 900 },
    footer: { display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, padding: "34px clamp(24px, 6vw, 90px)", background: "#000", borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.42)", fontSize: 12 },
}
