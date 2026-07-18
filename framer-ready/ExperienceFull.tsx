import * as React from "react"
import { addPropertyControls, ControlType, motion, useScroll, useSpring } from "framer"

type Props = {
    accent: string
    title: string
    subtitle: string
    email: string
    style?: React.CSSProperties
}

const experiences = [
    {
        period: "2026 - Present",
        title: "Microfinancing Task Force 365",
        company: "FIFGROUP",
        description: "Working as part of the Microfinancing Task Force, contributing to financial inclusion initiatives and micro-lending operations.",
        achievements: ["Supporting microfinance operations and client onboarding", "Contributing to financial literacy programs", "Assisting in loan portfolio management"],
        skills: ["Microfinance", "Financial Analysis", "Client Relations", "Risk Assessment"],
        featured: true,
    },
    {
        period: "2025 - Present",
        title: "Owner",
        company: "Gegaiaan & Cakra Labs",
        description: "Leading an independent fashion and lifestyle brand, managing operations from production to marketing and fulfillment.",
        achievements: ["Mengelola operasional dari produksi, stok, hingga pengiriman", "Membuat feed konten foto/video produk", "Mengembangkan identitas visual brand"],
        skills: ["Business Management", "Content Creation", "Digital Marketing", "Brand Strategy"],
        featured: true,
    },
    {
        period: "2023 - Present",
        title: "Campus Ambassador",
        company: "Cyber University",
        description: "Representing Cyber University through creative content and direct engagement with prospective students.",
        achievements: ["Membuat konten video/feed promosi kampus", "Melakukan presentasi dan pemasaran ke sekolah", "Melakukan dokumentasi event kampus"],
        skills: ["Public Speaking", "Content Creation", "Event Documentation", "Marketing"],
    },
    {
        period: "2024",
        title: "Video Editor Intern",
        company: "Sekolah Fasilitasi",
        description: "Creating educational and storytelling video content for digital learning platforms.",
        achievements: ["Mengedit video edukatif dan storytelling", "Menyusun alur visual konten", "Bekerja sesuai arahan dan script"],
        skills: ["Video Editing", "Storytelling", "Visual Design"],
    },
    {
        period: "2025",
        title: "Sales Freelance",
        company: "Sentul City",
        description: "Promoting property developments and supporting sales operations for Sentul City real estate projects.",
        achievements: ["Membuat 11 konten promosi properti", "Mendukung follow-up calon pembeli", "Menyiapkan materi presentasi properti"],
        skills: ["Sales", "Property Marketing", "Content Creation"],
    },
    {
        period: "2022 - Present",
        title: "Data Entry Specialist",
        company: "Amartha Greentech Consultant",
        description: "Providing accurate data entry services for survey and research data.",
        achievements: ["Menginput data kuesioner ke Microsoft Excel", "Menjaga akurasi data survei", "Merapikan data untuk kebutuhan laporan"],
        skills: ["Data Entry", "Microsoft Excel", "Data Management"],
    },
]

const otherExperiences = [
    ["Vice Committee", "DECOMPE", "Memimpin Media Marketing & Sponsorship untuk kompetisi UI/UX skala nasional-internasional.", "International Scale"],
    ["Student Exchange Participant", "UTP Malaysia", "Mengembangkan prototype Maza Finance bersama mahasiswa internasional.", "International Collaboration"],
    ["PKM Documentation Lead", "Cyber University", "Menangani dokumentasi foto/video dan pelaporan kegiatan pengabdian masyarakat.", ""],
    ["Media & Informasi", "BEM - Cyber University", "Mengelola publikasi kegiatan kampus, materi informasi, dan dokumentasi event.", ""],
    ["Head of Music Club", "Cyber University", "Memimpin kegiatan klub musik, koordinasi anggota, latihan, dan event internal.", ""],
    ["Head of PRP Coding", "Cyber University", "Mengelola produksi konten edukasi pemrograman Java Series.", ""],
]

const education = [
    ["Cyber University", "Bachelor of Digital Business", "2023 - Present", "Focusing on digital transformation, e-commerce, and business technology integration."],
    ["Green Academy", "Certificate in Data Science", "2023", "Training in data analysis, visualization, and machine learning fundamentals."],
    ["Mentorbox Indonesia", "Digital Marketing & Content Creation Program", "2024", "Completed with BNSP certification."],
    ["Darwis Triadi Photography Academy", "Intermediate Photography Class", "2024", "Photography training covering lighting, composition, and post-processing."],
    ["VideoLabs", "Video Editing Training Program", "2023 - 2025", "Advanced editing for social media, campaigns, and commercial projects."],
    ["Master Tasking Training", "Excellent Service Certification Program", "2025", "Professional service excellence and communication skills."],
]

const skills = [
    ["Digital Marketing", "Marketing", 95],
    ["Content Creation", "Creative", 92],
    ["Video Editing", "Creative", 88],
    ["Project Management", "Management", 85],
    ["Brand Strategy", "Marketing", 87],
    ["Data Analysis", "Technical", 80],
    ["Photography", "Creative", 85],
    ["UI/UX Design", "Technical", 90],
    ["Public Speaking", "Soft Skill", 90],
    ["Team Leadership", "Soft Skill", 88],
]

const achievements = [
    ["6+", "Certifications", "Professional certifications earned"],
    ["4+", "Years Experience", "Years of professional experience"],
    ["20+", "Skills Mastered", "Technical and soft skills acquired"],
    ["50+", "Projects", "Completed projects and campaigns"],
]

const testimonials = [
    ["Zefanya brings exceptional creativity and strategic thinking to every project. Her ability to blend marketing insights with creative execution is remarkable.", "Team Member", "DECOMPE Committee"],
    ["Outstanding leadership skills and attention to detail. Zefanya can inspire teams while delivering results that exceed expectations.", "Colleague", "Music Club CU"],
]

function Arrow() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

function SectionHeading({ eyebrow, title, accent, light = false }: { eyebrow: string; title: string; accent: string; light?: boolean }) {
    return (
        <motion.div style={styles.sectionHead} initial={false} animate={{ opacity: 1, y: 0 }}>
            <span style={{ ...styles.eyebrow, color: accent }}>{eyebrow}</span>
            <h2 style={{ ...styles.sectionTitle, color: light ? "#fff" : "#050505" }}>{title.split("|")[0]} <span style={{ color: accent }}>{title.split("|")[1] || ""}</span></h2>
        </motion.div>
    )
}

function TimelineCard({ item, index, accent }: { item: (typeof experiences)[number]; index: number; accent: string }) {
    const isLeft = index % 2 === 0
    return (
        <motion.div
            style={{ ...styles.timelineRow, justifyContent: isLeft ? "flex-start" : "flex-end" }}
            initial={false} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
        >
            <div style={{ ...styles.timelineDot, borderColor: accent }} />
            <motion.article style={styles.timelineCard} whileHover={{ y: -5 }}>
                {item.featured && <span style={{ ...styles.featured, background: accent }}>Featured</span>}
                <p style={{ ...styles.period, color: accent }}>{item.period}</p>
                <h3 style={styles.cardTitle}>{item.title}</h3>
                <p style={styles.company}>{item.company}</p>
                <p style={styles.description}>{item.description}</p>
                <div style={styles.achievementList}>
                    {item.achievements.map((text) => (
                        <div key={text} style={styles.bullet}><span style={{ ...styles.bulletDot, background: accent }} />{text}</div>
                    ))}
                </div>
                <div style={styles.chips}>{item.skills.map((skill) => <span key={skill} style={styles.chip}>{skill}</span>)}</div>
            </motion.article>
        </motion.div>
    )
}

function SkillBar({ item, accent, index }: { item: (typeof skills)[number]; accent: string; index: number }) {
    return (
        <motion.div style={styles.skillBar} initial={false} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>
            <div style={styles.skillTop}>
                <span>{item[0]} <small style={styles.skillCategory}>{item[1]}</small></span>
                <b style={{ color: accent }}>{item[2]}%</b>
            </div>
            <div style={styles.skillTrack}><motion.div style={{ ...styles.skillFill, background: accent }} initial={false} animate={{ width: `${item[2]}%` }} transition={{ duration: 1, delay: 0.15 + index * 0.04 }} /></div>
        </motion.div>
    )
}

/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 * @framerIntrinsicWidth 1440
 * @framerIntrinsicHeight 6800
 */
export default function ExperienceFull(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const containerRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] })
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

    return (
        <div ref={containerRef} style={{ ...styles.page, ...props.style }}>
            <motion.div style={{ ...styles.progress, background: p.accent, scaleX }} />

            <section style={styles.hero}>
                <div style={styles.gridBg} />
                <motion.div style={styles.floatTagLeft} initial={{ opacity: 0, x: -28, rotate: -8 }} animate={{ opacity: 1, x: 0, rotate: -8 }} transition={{ delay: 0.8 }}>UI/UX Designer</motion.div>
                <motion.div style={styles.floatTagRight} initial={{ opacity: 0, x: 28, rotate: 6 }} animate={{ opacity: 1, x: 0, rotate: 6 }} transition={{ delay: 1 }}>Content Creator</motion.div>
                <div style={styles.shell}>
                    <motion.div style={styles.heroInner} initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <div style={styles.breadcrumb}>Portfolio / <span style={{ color: p.accent }}>Experience</span></div>
                        <p style={styles.heroLabel}>Professional Journey</p>
                        <h1 style={styles.heroTitle}>{p.title.split(" ")[0]} <span style={{ color: p.accent }}>{p.title.split(" ").slice(1).join(" ")}</span></h1>
                        <p style={styles.heroSubtitle}>{p.subtitle}</p>
                        <div style={styles.statusPill}><span style={{ ...styles.statusDot, background: "#22c55e" }} />Currently @ <b style={{ color: "#ff6b6b" }}>FIFGROUP</b> - Microfinance</div>
                        <div style={styles.statStrip}>
                            {[["5+", "Roles"], ["3", "Industries"], ["4+", "Years"], ["12+", "Skills"]].map((s) => (
                                <div key={s[1]} style={styles.heroStat}><b>{s[0]}</b><span>{s[1]}</span></div>
                            ))}
                        </div>
                        <div style={styles.heroActions}>
                            <a href="#timeline" style={{ ...styles.primaryButton, background: p.accent }}>View Timeline <Arrow /></a>
                            <a href="#achievements" style={styles.secondaryButton}>My Achievements</a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="timeline" style={styles.lightSection}>
                <div style={styles.shell}>
                    <SectionHeading eyebrow="Career Path" title="Professional |Experience" accent={p.accent} />
                    <div style={styles.timelineWrap}>
                        <div style={{ ...styles.timelineLine, background: `linear-gradient(to bottom, transparent, ${p.accent}88, transparent)` }} />
                        {experiences.map((item, index) => <TimelineCard key={item.title} item={item} index={index} accent={p.accent} />)}
                    </div>
                </div>
            </section>

            <section style={styles.graySection}>
                <div style={styles.shell}>
                    <SectionHeading eyebrow="Beyond The Main Role" title="Other |Experience" accent={p.accent} />
                    <div style={styles.otherGrid}>
                        {otherExperiences.map((item, index) => (
                            <motion.article key={item[0]} style={styles.otherCard} initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }} whileHover={{ y: -5 }}>
                                {item[3] && <span style={{ ...styles.otherBadge, background: p.accent }}>{item[3]}</span>}
                                <h3 style={styles.otherTitle}>{item[0]}</h3>
                                <p style={{ ...styles.otherOrg, color: p.accent }}>{item[1]}</p>
                                <p style={styles.otherDesc}>{item[2]}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section style={styles.darkSection}>
                <div style={styles.darkGlow} />
                <div style={styles.shell}>
                    <SectionHeading eyebrow="Learning Journey" title="Education & |Certifications" accent={p.accent} light />
                    <div style={styles.educationGrid}>
                        <motion.div style={{ ...styles.learnerCard, background: p.accent }} initial={false} animate={{ opacity: 1, y: 0 }}>
                            <span style={styles.liveBadge}>Currently Learning</span>
                            <h3 style={styles.learnerTitle}>Lifelong Learner</h3>
                            <p style={styles.learnerText}>Always seeking new knowledge and skills. From digital business to photography, data science to video editing, every certification represents dedication to craft.</p>
                            <div style={styles.learnerStats}>{[["6+", "Certs"], ["3", "Schools"], ["4+", "Years"]].map((s) => <div key={s[1]}><b>{s[0]}</b><span>{s[1]}</span></div>)}</div>
                        </motion.div>
                        <div style={styles.eduList}>
                            {education.map((edu, index) => (
                                <motion.article key={edu[1]} style={styles.eduItem} initial={false} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.06 }}>
                                    <span style={{ ...styles.eduDot, background: p.accent }} />
                                    <p style={{ ...styles.period, color: p.accent }}>{edu[2]}</p>
                                    <h3 style={styles.eduTitle}>{edu[1]}</h3>
                                    <p style={styles.eduSchool}>{edu[0]}</p>
                                    <p style={styles.eduDesc}>{edu[3]}</p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section style={styles.lightSection}>
                <div style={styles.shell}>
                    <SectionHeading eyebrow="Core Abilities" title="Skills |Mastered" accent={p.accent} />
                    <div style={styles.skillGrid}>{skills.map((item, index) => <SkillBar key={item[0] as string} item={item} accent={p.accent} index={index} />)}</div>
                </div>
            </section>

            <section id="achievements" style={styles.graySection}>
                <div style={styles.shell}>
                    <SectionHeading eyebrow="By The Numbers" title="Key |Achievements" accent={p.accent} />
                    <div style={styles.achievementGrid}>
                        {achievements.map((a, index) => (
                            <motion.article key={a[1]} style={styles.achievementCard} initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }}>
                                <p style={{ ...styles.achievementNumber, color: p.accent }}>{a[0]}</p>
                                <h3 style={styles.achievementLabel}>{a[1]}</h3>
                                <p style={styles.achievementDesc}>{a[2]}</p>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section style={styles.lightSection}>
                <div style={styles.shell}>
                    <SectionHeading eyebrow="Testimonials" title="What People |Say" accent={p.accent} />
                    <div style={styles.testimonialGrid}>
                        {testimonials.map((t, index) => (
                            <motion.article key={t[1]} style={styles.testimonialCard} initial={false} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                                <p style={{ ...styles.quoteMark, color: p.accent }}>"</p>
                                <p style={styles.quote}>{t[0]}</p>
                                <div style={styles.person}><span style={{ ...styles.avatar, background: p.accent }}>{t[1][0]}</span><div><b>{t[1]}</b><small>{t[2]}</small></div></div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <section style={styles.ctaSection}>
                <div style={styles.shell}>
                    <motion.div style={styles.ctaInner} initial={false} animate={{ opacity: 1, scale: 1 }}>
                        <span style={styles.ctaBadge}>Let's create something amazing together</span>
                        <h2 style={styles.ctaTitle}>Ready to <span style={{ color: p.accent }}>Collaborate?</span></h2>
                        <p style={styles.ctaText}>I'm always excited to take on new challenges and work with passionate teams. Let's discuss how we can bring your ideas to life.</p>
                        <div style={styles.heroActions}>
                            <a href={`mailto:${p.email}`} style={{ ...styles.primaryButton, background: p.accent }}>Get In Touch <Arrow /></a>
                            <a href="#timeline" style={styles.darkButton}>Back to Timeline</a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

const defaults: Props = {
    accent: "#e50000",
    title: "Work Experience",
    subtitle: "A comprehensive timeline of my professional growth, from leadership roles to entrepreneurial ventures and creative pursuits.",
    email: "zefanyawilliams@gmail.com",
}

addPropertyControls(ExperienceFull, {
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    subtitle: { type: ControlType.String, title: "Subtitle", defaultValue: defaults.subtitle, displayTextArea: true },
    email: { type: ControlType.String, title: "Email", defaultValue: defaults.email },
})

const styles: Record<string, React.CSSProperties> = {
    page: { width: "100%", minHeight: "100vh", background: "#fff", color: "#050505", fontFamily: "Inter, Syne, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif", overflowX: "hidden" },
    progress: { position: "fixed", top: 0, left: 0, right: 0, height: 4, zIndex: 50, transformOrigin: "0% 50%" },
    shell: { width: "min(1180px, calc(100% - 40px))", margin: "0 auto", position: "relative", zIndex: 2 },
    hero: { position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "linear-gradient(to bottom, #fff, #f8f8f8, #fff)" },
    gridBg: { position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(229,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(229,0,0,0.035) 1px, transparent 1px)", backgroundSize: "60px 60px" },
    floatTagLeft: { position: "absolute", top: "18%", left: "6%", padding: "9px 15px", borderRadius: 999, background: "rgba(255,255,255,0.84)", border: "1px solid rgba(229,0,0,0.16)", color: "#e50000", fontSize: 12, fontWeight: 850, boxShadow: "0 14px 34px rgba(229,0,0,0.08)" },
    floatTagRight: { position: "absolute", top: "28%", right: "8%", padding: "9px 15px", borderRadius: 999, background: "rgba(255,255,255,0.84)", border: "1px solid rgba(229,0,0,0.16)", color: "#e50000", fontSize: 12, fontWeight: 850, boxShadow: "0 14px 34px rgba(229,0,0,0.08)" },
    heroInner: { maxWidth: 920, margin: "0 auto", textAlign: "center", padding: "110px 0 90px" },
    breadcrumb: { display: "inline-flex", alignItems: "center", marginBottom: 22, padding: "9px 14px", borderRadius: 999, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 8px 24px rgba(0,0,0,0.04)", fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.16em", color: "rgba(0,0,0,0.62)" },
    heroLabel: { margin: "0 0 18px", color: "rgba(0,0,0,0.5)", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.32em" },
    heroTitle: { margin: "0 0 24px", fontSize: "clamp(56px, 10vw, 118px)", lineHeight: 0.92, fontWeight: 950, letterSpacing: "-0.04em" },
    heroSubtitle: { margin: "0 auto 26px", maxWidth: 760, color: "rgba(0,0,0,0.62)", fontSize: "clamp(16px, 2vw, 21px)", lineHeight: 1.75 },
    statusPill: { display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 26, padding: "10px 15px", borderRadius: 999, background: "#050505", color: "#fff", fontSize: 13, fontWeight: 650 },
    statusDot: { width: 8, height: 8, borderRadius: 999, display: "inline-block" },
    statStrip: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "18px 34px", marginBottom: 34 },
    heroStat: { display: "flex", alignItems: "baseline", gap: 8 },
    heroActions: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 16 },
    primaryButton: { display: "inline-flex", alignItems: "center", gap: 9, minHeight: 48, padding: "0 24px", borderRadius: 999, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 900 },
    secondaryButton: { display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 24px", borderRadius: 999, color: "#050505", textDecoration: "none", background: "#fff", border: "1px solid rgba(0,0,0,0.12)", fontSize: 13, fontWeight: 900 },
    darkButton: { display: "inline-flex", alignItems: "center", minHeight: 48, padding: "0 24px", borderRadius: 999, color: "#fff", textDecoration: "none", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", fontSize: 13, fontWeight: 900 },
    lightSection: { position: "relative", padding: "clamp(82px, 10vw, 140px) 0", background: "#fff" },
    graySection: { position: "relative", padding: "clamp(82px, 10vw, 140px) 0", background: "linear-gradient(to bottom, #f7f7f7, #fff)" },
    darkSection: { position: "relative", padding: "clamp(82px, 10vw, 150px) 0", background: "#050505", color: "#fff", overflow: "hidden" },
    darkGlow: { position: "absolute", top: -160, right: -160, width: 520, height: 520, borderRadius: 999, background: "rgba(229,0,0,0.1)", filter: "blur(60px)" },
    sectionHead: { textAlign: "center", marginBottom: "clamp(54px, 8vw, 92px)" },
    eyebrow: { display: "block", marginBottom: 14, fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.26em" },
    sectionTitle: { margin: 0, fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 1.05, fontWeight: 950 },
    timelineWrap: { position: "relative", maxWidth: 1060, margin: "0 auto", display: "grid", gap: 46 },
    timelineLine: { position: "absolute", top: 0, bottom: 0, left: "50%", width: 2, transform: "translateX(-50%)" },
    timelineRow: { position: "relative", display: "flex", width: "100%" },
    timelineDot: { position: "absolute", left: "50%", top: 34, width: 18, height: 18, borderRadius: 999, border: "4px solid", background: "#fff", transform: "translateX(-50%)", zIndex: 3, boxShadow: "0 0 18px rgba(229,0,0,0.45)" },
    timelineCard: { width: "min(460px, calc(50% - 56px))", minHeight: 300, padding: 30, borderRadius: 8, background: "rgba(255,255,255,0.9)", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 18px 52px rgba(0,0,0,0.08)", boxSizing: "border-box" },
    featured: { display: "inline-flex", marginBottom: 14, padding: "6px 10px", borderRadius: 999, color: "#fff", fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em" },
    period: { margin: "0 0 8px", fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em" },
    cardTitle: { margin: "0 0 6px", fontSize: 24, lineHeight: 1.18, fontWeight: 950 },
    company: { margin: "0 0 16px", color: "rgba(0,0,0,0.56)", fontSize: 14, fontWeight: 750 },
    description: { margin: "0 0 18px", color: "rgba(0,0,0,0.62)", fontSize: 14, lineHeight: 1.75 },
    achievementList: { display: "grid", gap: 10, marginBottom: 20 },
    bullet: { display: "flex", alignItems: "flex-start", gap: 10, color: "rgba(0,0,0,0.64)", fontSize: 13, lineHeight: 1.55 },
    bulletDot: { width: 6, height: 6, borderRadius: 999, marginTop: 7, flexShrink: 0 },
    chips: { display: "flex", flexWrap: "wrap", gap: 8 },
    chip: { padding: "7px 10px", borderRadius: 999, background: "rgba(0,0,0,0.045)", border: "1px solid rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.68)", fontSize: 11, fontWeight: 750 },
    otherGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 },
    otherCard: { minHeight: 238, padding: 28, borderRadius: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 14px 44px rgba(0,0,0,0.06)" },
    otherBadge: { display: "inline-flex", padding: "6px 10px", borderRadius: 999, color: "#fff", fontSize: 10, fontWeight: 900, textTransform: "uppercase", marginBottom: 16 },
    otherTitle: { margin: "0 0 8px", fontSize: 21, fontWeight: 950 },
    otherOrg: { margin: "0 0 14px", fontSize: 13, fontWeight: 850 },
    otherDesc: { margin: 0, color: "rgba(0,0,0,0.58)", fontSize: 14, lineHeight: 1.7 },
    educationGrid: { display: "grid", gridTemplateColumns: "minmax(280px, 0.8fr) minmax(320px, 1.2fr)", gap: 34, alignItems: "start" },
    learnerCard: { borderRadius: 8, padding: 34, color: "#fff", boxShadow: "0 26px 90px rgba(229,0,0,0.24)" },
    liveBadge: { display: "inline-flex", marginBottom: 24, padding: "8px 12px", borderRadius: 999, background: "rgba(255,255,255,0.16)", border: "1px solid rgba(255,255,255,0.22)", fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.18em" },
    learnerTitle: { margin: "0 0 14px", fontSize: 32, lineHeight: 1.1, fontWeight: 950 },
    learnerText: { margin: 0, color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.75 },
    learnerStats: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 28, paddingTop: 22, borderTop: "1px solid rgba(255,255,255,0.22)" },
    eduList: { display: "grid", gap: 16 },
    eduItem: { position: "relative", padding: "22px 24px 22px 42px", borderRadius: 8, background: "linear-gradient(135deg, #141414, #090909)", border: "1px solid rgba(255,255,255,0.1)" },
    eduDot: { position: "absolute", left: 18, top: 28, width: 10, height: 10, borderRadius: 999, boxShadow: "0 0 14px currentColor" },
    eduTitle: { margin: "0 0 6px", color: "#fff", fontSize: 18, fontWeight: 900 },
    eduSchool: { margin: "0 0 9px", color: "rgba(255,255,255,0.52)", fontSize: 13, fontWeight: 750 },
    eduDesc: { margin: 0, color: "rgba(255,255,255,0.46)", fontSize: 13, lineHeight: 1.65 },
    skillGrid: { maxWidth: 860, margin: "0 auto", display: "grid", gap: 18 },
    skillBar: { width: "100%" },
    skillTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 9, fontSize: 14, fontWeight: 850 },
    skillCategory: { marginLeft: 8, padding: "3px 8px", borderRadius: 999, background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.45)", fontSize: 10, textTransform: "uppercase" },
    skillTrack: { height: 10, borderRadius: 999, background: "#eeeeee", overflow: "hidden" },
    skillFill: { height: "100%", borderRadius: 999 },
    achievementGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 },
    achievementCard: { minHeight: 210, padding: 30, borderRadius: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 14px 44px rgba(0,0,0,0.06)", textAlign: "center" },
    achievementNumber: { margin: "0 0 12px", fontSize: 54, lineHeight: 1, fontWeight: 950 },
    achievementLabel: { margin: "0 0 10px", fontSize: 18, fontWeight: 900 },
    achievementDesc: { margin: 0, color: "rgba(0,0,0,0.55)", fontSize: 13, lineHeight: 1.6 },
    testimonialGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22, maxWidth: 960, margin: "0 auto" },
    testimonialCard: { position: "relative", minHeight: 300, padding: 34, borderRadius: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 14px 44px rgba(0,0,0,0.06)" },
    quoteMark: { position: "absolute", top: 8, right: 24, margin: 0, fontSize: 92, lineHeight: 1, opacity: 0.18, fontWeight: 950 },
    quote: { margin: "0 0 28px", color: "rgba(0,0,0,0.68)", fontSize: 17, lineHeight: 1.75, fontStyle: "italic" },
    person: { display: "flex", alignItems: "center", gap: 14, paddingTop: 20, borderTop: "1px solid rgba(0,0,0,0.08)" },
    avatar: { width: 52, height: 52, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 950 },
    ctaSection: { position: "relative", padding: "clamp(110px, 13vw, 190px) 0", background: "radial-gradient(circle at 30% 0%, rgba(229,0,0,0.22), transparent 36%), linear-gradient(135deg, #000, #171717, #000)", color: "#fff" },
    ctaInner: { maxWidth: 840, margin: "0 auto", textAlign: "center" },
    ctaBadge: { display: "inline-flex", marginBottom: 26, padding: "10px 14px", borderRadius: 999, background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.78)", fontSize: 13 },
    ctaTitle: { margin: "0 0 18px", fontSize: "clamp(38px, 6vw, 72px)", lineHeight: 1.04, fontWeight: 950 },
    ctaText: { margin: "0 auto 34px", maxWidth: 680, color: "rgba(255,255,255,0.62)", fontSize: 17, lineHeight: 1.75 },
}
