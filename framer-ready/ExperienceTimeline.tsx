import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = {
    title: string
    accent: string
}

const items = [
    { period: "2026 - Present", role: "Microfinancing Task Force 365", company: "FIFGROUP", description: "Contributing to financial inclusion initiatives and micro-lending operations.", skills: ["Microfinance", "Financial Analysis", "Client Relations"] },
    { period: "2025 - Present", role: "Owner", company: "Gegaiaan & Cakra Labs", description: "Managing business operations from production and content to marketing and fulfillment.", skills: ["Business", "Content Creation", "Brand Strategy"] },
    { period: "2023 - Present", role: "Campus Ambassador", company: "Cyber University", description: "Promoting the university through creative content and direct engagement.", skills: ["Public Speaking", "Marketing", "Event Doc"] },
]

export default function ExperienceTimeline(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <section style={styles.section}>
            <div style={styles.shell}>
                <h2 style={styles.title}>{p.title}</h2>
                <div style={styles.timeline}>
                    {items.map((item, index) => (
                        <motion.div key={item.role} style={styles.row} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                            <div style={{ ...styles.dot, borderColor: p.accent }} />
                            <div style={styles.card}>
                                <p style={{ ...styles.period, color: p.accent }}>{item.period}</p>
                                <h3 style={styles.role}>{item.role}</h3>
                                <p style={styles.company}>{item.company}</p>
                                <p style={styles.desc}>{item.description}</p>
                                <div style={styles.skills}>{item.skills.map((skill) => <span key={skill} style={styles.chip}>{skill}</span>)}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const defaults: Props = { title: "Experience", accent: "#e50000" }

addPropertyControls(ExperienceTimeline, {
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})

const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", padding: "clamp(80px, 10vw, 140px) 0", background: "#080808", color: "#fff", fontFamily: "Inter, Syne, system-ui, sans-serif" },
    shell: { maxWidth: 960, margin: "0 auto", padding: "0 24px" },
    title: { margin: "0 0 52px", fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.05, fontWeight: 950, textAlign: "center" },
    timeline: { position: "relative", display: "grid", gap: 28 },
    row: { position: "relative", display: "grid", gridTemplateColumns: "28px 1fr", gap: 22, alignItems: "start" },
    dot: { width: 18, height: 18, marginTop: 28, borderRadius: 999, border: "4px solid", background: "#fff", boxShadow: "0 0 20px rgba(229,0,0,0.45)" },
    card: { borderRadius: 8, padding: "clamp(24px, 4vw, 38px)", border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.06)" },
    period: { margin: "0 0 10px", fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em" },
    role: { margin: "0 0 6px", fontSize: 24, lineHeight: 1.18, fontWeight: 900 },
    company: { margin: "0 0 18px", color: "rgba(255,255,255,0.55)", fontSize: 14, fontWeight: 700 },
    desc: { margin: "0 0 20px", color: "rgba(255,255,255,0.68)", fontSize: 15, lineHeight: 1.75 },
    skills: { display: "flex", flexWrap: "wrap", gap: 10 },
    chip: { padding: "7px 12px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.76)", fontSize: 12, fontWeight: 700 },
}
