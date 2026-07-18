import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { institution: string; degree: string; year: string; status: string; accent: string }

export default function EducationCard(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <motion.article style={styles.card} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
            <div style={{ ...styles.icon, background: p.accent }}>{p.institution[0]}</div>
            <div>
                <p style={{ ...styles.year, color: p.accent }}>{p.year} - {p.status}</p>
                <h3 style={styles.title}>{p.institution}</h3>
                <p style={styles.degree}>{p.degree}</p>
            </div>
        </motion.article>
    )
}
const defaults: Props = { institution: "Cyber University", degree: "Bachelor of Digital Business", year: "2023 - Present", status: "ongoing", accent: "#e50000" }
addPropertyControls(EducationCard, {
    institution: { type: ControlType.String, title: "School", defaultValue: defaults.institution },
    degree: { type: ControlType.String, title: "Degree", defaultValue: defaults.degree },
    year: { type: ControlType.String, title: "Year", defaultValue: defaults.year },
    status: { type: ControlType.String, title: "Status", defaultValue: defaults.status },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})
const styles: Record<string, React.CSSProperties> = {
    card: { display: "flex", gap: 18, alignItems: "flex-start", width: "100%", padding: 26, borderRadius: 8, background: "#fff", border: "1px solid rgba(0,0,0,0.08)", color: "#050505", fontFamily: "Inter, system-ui, sans-serif", boxSizing: "border-box" },
    icon: { width: 52, height: 52, borderRadius: 8, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 950, flexShrink: 0 },
    year: { margin: "0 0 8px", fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.12em" },
    title: { margin: "0 0 6px", fontSize: 21, fontWeight: 900 },
    degree: { margin: 0, color: "rgba(0,0,0,0.58)", fontSize: 14, lineHeight: 1.6 },
}
