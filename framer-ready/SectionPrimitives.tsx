import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type Props = { label: string; title: string; body: string; accent: string; dark: boolean }

export default function SectionPrimitives(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <section style={{ ...styles.section, background: p.dark ? "#050505" : "#fff", color: p.dark ? "#fff" : "#050505" }}>
            <p style={{ ...styles.label, color: p.accent }}>{p.label}</p>
            <h2 style={styles.title}>{p.title}</h2>
            <p style={{ ...styles.body, color: p.dark ? "rgba(255,255,255,0.62)" : "rgba(0,0,0,0.62)" }}>{p.body}</p>
        </section>
    )
}
const defaults: Props = { label: "Section", title: "Section Title", body: "Use this as a compact Framer-ready section header primitive.", accent: "#e50000", dark: false }
addPropertyControls(SectionPrimitives, {
    label: { type: ControlType.String, title: "Label", defaultValue: defaults.label },
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    body: { type: ControlType.String, title: "Body", defaultValue: defaults.body, displayTextArea: true },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    dark: { type: ControlType.Boolean, title: "Dark", defaultValue: defaults.dark },
})
const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", padding: "clamp(48px, 8vw, 96px) 24px", fontFamily: "Inter, Syne, system-ui, sans-serif", textAlign: "center", boxSizing: "border-box" },
    label: { margin: "0 0 14px", fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.22em" },
    title: { margin: "0 0 16px", fontSize: "clamp(34px, 6vw, 72px)", lineHeight: 1.02, fontWeight: 950 },
    body: { margin: "0 auto", maxWidth: 650, fontSize: 16, lineHeight: 1.8 },
}
