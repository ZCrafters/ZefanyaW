import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { role: string; organization: string; description: string; highlight: string; accent: string }

export default function OtherExperienceCard(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <motion.article style={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
            {p.highlight && <span style={{ ...styles.highlight, background: p.accent }}>{p.highlight}</span>}
            <h3 style={styles.role}>{p.role}</h3>
            <p style={{ ...styles.org, color: p.accent }}>{p.organization}</p>
            <p style={styles.desc}>{p.description}</p>
        </motion.article>
    )
}
const defaults: Props = { role: "Vice Committee", organization: "DECOMPE", description: "Managing publication, sponsorship, and creative content for a UI/UX competition.", highlight: "International Scale", accent: "#e50000" }
addPropertyControls(OtherExperienceCard, {
    role: { type: ControlType.String, title: "Role", defaultValue: defaults.role },
    organization: { type: ControlType.String, title: "Org", defaultValue: defaults.organization },
    description: { type: ControlType.String, title: "Desc", defaultValue: defaults.description, displayTextArea: true },
    highlight: { type: ControlType.String, title: "Highlight", defaultValue: defaults.highlight },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})
const styles: Record<string, React.CSSProperties> = {
    card: { position: "relative", width: "100%", height: "100%", minHeight: 230, padding: 28, borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "Inter, system-ui, sans-serif", boxSizing: "border-box" },
    highlight: { display: "inline-flex", padding: "6px 10px", borderRadius: 999, color: "#fff", fontSize: 10, fontWeight: 900, textTransform: "uppercase", marginBottom: 18 },
    role: { margin: "0 0 8px", fontSize: 22, fontWeight: 900 },
    org: { margin: "0 0 14px", fontSize: 13, fontWeight: 800 },
    desc: { margin: 0, color: "rgba(255,255,255,0.62)", fontSize: 14, lineHeight: 1.7 },
}
