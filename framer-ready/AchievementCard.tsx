import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { number: string; label: string; description: string; accent: string; dark: boolean }

export default function AchievementCard(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <motion.div style={{ ...styles.card, background: p.dark ? "#080808" : "#fff", color: p.dark ? "#fff" : "#050505", borderColor: p.dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)" }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -5 }}>
            <p style={{ ...styles.number, color: p.accent }}>{p.number}</p>
            <h3 style={styles.label}>{p.label}</h3>
            <p style={{ ...styles.desc, color: p.dark ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.55)" }}>{p.description}</p>
        </motion.div>
    )
}
const defaults: Props = { number: "6+", label: "Certifications", description: "Professional certifications earned", accent: "#e50000", dark: false }
addPropertyControls(AchievementCard, {
    number: { type: ControlType.String, title: "Number", defaultValue: defaults.number },
    label: { type: ControlType.String, title: "Label", defaultValue: defaults.label },
    description: { type: ControlType.String, title: "Desc", defaultValue: defaults.description },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    dark: { type: ControlType.Boolean, title: "Dark", defaultValue: defaults.dark },
})
const styles: Record<string, React.CSSProperties> = {
    card: { width: "100%", height: "100%", minHeight: 180, padding: 26, borderRadius: 8, border: "1px solid", fontFamily: "Inter, system-ui, sans-serif", boxSizing: "border-box" },
    number: { margin: "0 0 12px", fontSize: 46, lineHeight: 1, fontWeight: 950 },
    label: { margin: "0 0 10px", fontSize: 18, fontWeight: 900 },
    desc: { margin: 0, fontSize: 13, lineHeight: 1.6 },
}
