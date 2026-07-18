import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { accent: string }
const tabs = [
    ["Overview", "A Digital Business student blending creative direction with data-driven strategy."],
    ["Journey", "Experience across campus media, international programs, business ownership, and content work."],
    ["Skills", "Digital marketing, content creation, analytics, photography, video editing, and UI/UX strategy."],
    ["Services", "Content strategy, visual production, digital marketing, and AI workflow exploration."],
]

export default function AboutTabs(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const [active, setActive] = React.useState(0)
    return (
        <section style={styles.wrap}>
            <div style={styles.tabs}>{tabs.map((tab, i) => <button key={tab[0]} onClick={() => setActive(i)} style={{ ...styles.tab, background: active === i ? p.accent : "rgba(0,0,0,0.06)", color: active === i ? "#fff" : "#050505" }}>{tab[0]}</button>)}</div>
            <motion.div key={active} style={styles.panel} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
                <h3 style={styles.title}>{tabs[active][0]}</h3>
                <p style={styles.text}>{tabs[active][1]}</p>
            </motion.div>
        </section>
    )
}
const defaults: Props = { accent: "#e50000" }
addPropertyControls(AboutTabs, { accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent } })
const styles: Record<string, React.CSSProperties> = {
    wrap: { width: "100%", padding: 24, background: "#fff", color: "#050505", fontFamily: "Inter, system-ui, sans-serif", boxSizing: "border-box" },
    tabs: { display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 },
    tab: { border: 0, borderRadius: 999, padding: "10px 15px", fontSize: 13, fontWeight: 850, cursor: "pointer" },
    panel: { minHeight: 180, borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)", padding: 30, background: "#fff", boxShadow: "0 14px 44px rgba(0,0,0,0.06)" },
    title: { margin: "0 0 12px", fontSize: 28, fontWeight: 950 },
    text: { margin: 0, color: "rgba(0,0,0,0.62)", fontSize: 16, lineHeight: 1.8 },
}
