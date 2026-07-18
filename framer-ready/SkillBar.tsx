import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { name: string; category: string; level: number; accent: string }

export default function SkillBar(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <div style={styles.wrap}>
            <div style={styles.row}><span>{p.name}<small style={styles.badge}>{p.category}</small></span><b style={{ color: p.accent }}>{p.level}%</b></div>
            <div style={styles.track}><motion.div style={{ ...styles.fill, background: p.accent }} initial={{ width: 0 }} whileInView={{ width: `${p.level}%` }} viewport={{ once: true }} transition={{ duration: 1 }} /></div>
        </div>
    )
}

const defaults: Props = { name: "Digital Marketing", category: "Marketing", level: 92, accent: "#e50000" }
addPropertyControls(SkillBar, {
    name: { type: ControlType.String, title: "Name", defaultValue: defaults.name },
    category: { type: ControlType.String, title: "Category", defaultValue: defaults.category },
    level: { type: ControlType.Number, title: "Level", defaultValue: defaults.level, min: 0, max: 100 },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})
const styles: Record<string, React.CSSProperties> = {
    wrap: { width: "100%", fontFamily: "Inter, system-ui, sans-serif", color: "#050505" },
    row: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, marginBottom: 10, fontWeight: 850 },
    badge: { marginLeft: 8, padding: "3px 8px", borderRadius: 999, background: "rgba(0,0,0,0.06)", color: "rgba(0,0,0,0.45)", fontSize: 10, textTransform: "uppercase" },
    track: { height: 10, background: "#eee", borderRadius: 999, overflow: "hidden" },
    fill: { height: "100%", borderRadius: 999 },
}
