import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { accent: string }
const sections = [
    ["01 - About", "About Me", "Content Creation & Visual Storytelling, Digital Marketing & Strategy, Data Science & Analytics, AI Integration & Automation"],
    ["02 - Skills", "Skills", "Creative, Technical, Business"],
    ["03 - Projects", "Projects", "Visual Campaign, Data Dashboard, AI Content Pipeline"],
    ["04 - Experience", "Experience", "Freelance, University, Creative Strategy"],
]

export default function PostSequenceContent(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <div style={styles.wrap}>
            {sections.map((s, i) => (
                <motion.section key={s[0]} style={styles.section} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <p style={{ ...styles.label, color: p.accent }}>{s[0]}</p>
                    <h2 style={styles.title}>{s[1]}</h2>
                    <div style={styles.items}>{s[2].split(",").map((x) => <span key={x} style={styles.chip}>{x.trim()}</span>)}</div>
                </motion.section>
            ))}
        </div>
    )
}

const defaults: Props = { accent: "#e50000" }
addPropertyControls(PostSequenceContent, { accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent } })
const styles: Record<string, React.CSSProperties> = {
    wrap: { width: "100%", background: "#000", color: "#fff", fontFamily: "Inter, Syne, system-ui, sans-serif" },
    section: { minHeight: "70vh", padding: "clamp(80px, 12vw, 150px) clamp(24px, 8vw, 110px)", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", flexDirection: "column", justifyContent: "center" },
    label: { margin: "0 0 16px", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.22em" },
    title: { margin: "0 0 28px", fontSize: "clamp(40px, 7vw, 92px)", lineHeight: 0.95, fontWeight: 950, textTransform: "uppercase" },
    items: { display: "flex", flexWrap: "wrap", gap: 12 },
    chip: { padding: "10px 14px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.68)", fontSize: 13, fontWeight: 700 },
}
