import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = {
    eyebrow: string
    title: string
    description: string
    features: string
    accent: string
    dark: boolean
}

function Check({ color }: { color: string }) {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m5 13 4 4L19 7" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default function Card(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const features = p.features.split(",").map((item) => item.trim()).filter(Boolean)

    return (
        <motion.article
            style={{
                ...styles.card,
                background: p.dark ? "linear-gradient(135deg, rgba(24,24,24,0.96), rgba(8,8,8,0.98))" : "#fff",
                color: p.dark ? "#fff" : "#050505",
                borderColor: p.dark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.08)",
            }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
        >
            <div style={{ ...styles.icon, background: p.accent }}>{p.eyebrow.slice(0, 1).toUpperCase()}</div>
            <p style={{ ...styles.eyebrow, color: p.accent }}>{p.eyebrow}</p>
            <h3 style={styles.title}>{p.title}</h3>
            <p style={{ ...styles.description, color: p.dark ? "rgba(255,255,255,0.64)" : "rgba(0,0,0,0.58)" }}>{p.description}</p>
            <ul style={styles.list}>
                {features.map((feature) => (
                    <li key={feature} style={{ ...styles.item, color: p.dark ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.64)" }}>
                        <Check color={p.accent} />
                        {feature}
                    </li>
                ))}
            </ul>
        </motion.article>
    )
}

const defaults: Props = {
    eyebrow: "Service",
    title: "Content Strategy",
    description: "Data-driven content plans that align with brand goals and audience behavior.",
    features: "Content calendars,Audience analysis,Performance tracking,Brand voice development",
    accent: "#e50000",
    dark: false,
}

addPropertyControls(Card, {
    eyebrow: { type: ControlType.String, title: "Eyebrow", defaultValue: defaults.eyebrow },
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    description: { type: ControlType.String, title: "Desc", defaultValue: defaults.description, displayTextArea: true },
    features: { type: ControlType.String, title: "Features", defaultValue: defaults.features, displayTextArea: true },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    dark: { type: ControlType.Boolean, title: "Dark", defaultValue: defaults.dark },
})

const styles: Record<string, React.CSSProperties> = {
    card: { width: "100%", height: "100%", minHeight: 310, padding: 32, borderRadius: 8, border: "1px solid", boxShadow: "0 18px 60px rgba(0,0,0,0.12)", fontFamily: "Inter, system-ui, sans-serif", boxSizing: "border-box" },
    icon: { width: 52, height: 52, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 20, fontWeight: 900, marginBottom: 22 },
    eyebrow: { margin: "0 0 10px", fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.16em" },
    title: { margin: "0 0 12px", fontSize: 24, lineHeight: 1.16, fontWeight: 900 },
    description: { margin: "0 0 22px", fontSize: 14, lineHeight: 1.7 },
    list: { listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 10 },
    item: { display: "flex", alignItems: "center", gap: 10, fontSize: 13, lineHeight: 1.5 },
}
