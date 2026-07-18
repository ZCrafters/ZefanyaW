import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = {
    eyebrow: string
    title: string
    highlight: string
    body: string
    accent: string
}

const stats = [
    ["6+", "Certifications", "Professional certifications earned"],
    ["4+", "Years Experience", "Years of professional experience"],
    ["20+", "Skills Mastered", "Technical and soft skills acquired"],
    ["50+", "Projects", "Completed projects and campaigns"],
]

const skills = ["Video Editing", "Fotografi", "Content Creation", "Digital Marketing", "Data Analysis", "Python", "Branding", "Social Media", "UI/UX", "Creative Strategy"]

export default function About(props: Partial<Props>) {
    const p = { ...defaults, ...props }

    return (
        <section style={styles.section}>
            <div style={{ ...styles.marquee, background: p.accent }}>
                <motion.div style={styles.track} animate={{ x: ["0%", "-50%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }}>
                    {[...skills, ...skills].map((item, index) => (
                        <span key={`${item}-${index}`} style={styles.marqueeItem}>{item} *</span>
                    ))}
                </motion.div>
            </div>

            <div style={styles.shell}>
                <p style={styles.eyebrow}>{p.eyebrow}</p>
                <div style={styles.grid}>
                    <div>
                        <h2 style={styles.title}>
                            {p.title} <span style={{ color: p.accent }}>{p.highlight}</span>
                        </h2>
                        <p style={styles.body}>{p.body}</p>
                        <p style={styles.bodyMuted}>Saya percaya kreativitas terbaik lahir dari pemahaman data. Setiap visual dibuat dengan strategi terukur dan tujuan bisnis yang jelas.</p>
                        <div style={styles.statsGrid}>
                            {stats.map((item, index) => (
                                <motion.div key={item[1]} style={styles.statCard} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                                    <p style={{ ...styles.statValue, color: p.accent }}>{item[0]}</p>
                                    <p style={styles.statLabel}>{item[1]}</p>
                                    <p style={styles.statDesc}>{item[2]}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div style={styles.panel}>
                        <p style={{ ...styles.panelTitle, color: p.accent }}>Keahlian</p>
                        <div style={styles.skillGrid}>
                            {skills.slice(0, 6).map((skill, index) => (
                                <motion.div key={skill} style={styles.skillCard} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} whileHover={{ y: -5 }}>
                                    <span style={styles.skillIcon}>{skill[0]}</span>
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                        <div style={styles.chips}>
                            {skills.map((skill) => <span key={skill} style={styles.chip}>{skill}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const defaults: Props = {
    eyebrow: "Tentang Saya",
    title: "Berjiwa Kreatif,",
    highlight: "Berpikir Data",
    body: "Saya adalah mahasiswa Bisnis Digital dengan pengalaman di bidang pengeditan video, fotografi, pembuatan konten, dan analisis data. Saya telah berkontribusi di startup, media kampus, hingga program internasional untuk membangun prototipe solusi digital yang berdampak.",
    accent: "#e50000",
}

addPropertyControls(About, {
    eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: defaults.eyebrow },
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    highlight: { type: ControlType.String, title: "Highlight", defaultValue: defaults.highlight },
    body: { type: ControlType.String, title: "Body", defaultValue: defaults.body, displayTextArea: true },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})

const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", background: "#000", color: "#fff", padding: "clamp(76px, 10vw, 126px) 0", fontFamily: "Inter, Syne, system-ui, sans-serif", overflow: "hidden" },
    marquee: { overflow: "hidden", padding: "14px 0", marginBottom: "clamp(72px, 8vw, 104px)" },
    track: { display: "flex", width: "max-content" },
    marqueeItem: { flex: "0 0 auto", padding: "0 30px", color: "#fff", fontSize: 11, fontWeight: 800, whiteSpace: "nowrap", textTransform: "uppercase" },
    shell: { maxWidth: 1280, margin: "0 auto", padding: "0 clamp(18px, 4vw, 36px)" },
    eyebrow: { margin: "0 0 20px", color: "rgba(255,255,255,0.48)", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "clamp(52px, 7vw, 104px)", alignItems: "start" },
    title: { margin: "0 0 24px", fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.05, fontWeight: 900 },
    body: { margin: "0 0 20px", color: "rgba(255,255,255,0.75)", fontSize: 15, lineHeight: 1.9 },
    bodyMuted: { margin: "0 0 40px", color: "rgba(255,255,255,0.6)", fontSize: 15, lineHeight: 1.9 },
    statsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))", gap: 14 },
    statCard: { minHeight: 132, padding: 18, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.045)" },
    statValue: { margin: "0 0 6px", fontSize: 34, fontWeight: 900, lineHeight: 1 },
    statLabel: { margin: "0 0 8px", color: "#fff", fontSize: 12, fontWeight: 800 },
    statDesc: { margin: 0, color: "rgba(255,255,255,0.45)", fontSize: 11, lineHeight: 1.45 },
    panel: { borderRadius: 8, padding: "clamp(30px, 4vw, 48px)", border: "1px solid rgba(255,255,255,0.12)", background: "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.035))" },
    panelTitle: { margin: "0 0 24px", fontSize: 10, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase" },
    skillGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(138px, 1fr))", gap: 12, marginBottom: 28 },
    skillCard: { display: "flex", alignItems: "center", gap: 10, minHeight: 58, padding: "12px 14px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.28)", color: "rgba(255,255,255,0.88)", fontSize: 12, fontWeight: 800 },
    skillIcon: { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 24, height: 24, borderRadius: 999, background: "rgba(255,255,255,0.1)", fontSize: 11, fontWeight: 900 },
    chips: { display: "flex", flexWrap: "wrap", gap: 12 },
    chip: { padding: "8px 14px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)", fontSize: 11, fontWeight: 700 },
}
