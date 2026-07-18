import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { title: string; subtitle: string; accent: string }

export default function ExpertiseHero(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <section style={styles.section}>
            <motion.p style={{ ...styles.kicker, color: p.accent }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>Expertise</motion.p>
            <motion.h1 style={styles.title} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>{p.title}</motion.h1>
            <motion.p style={styles.subtitle} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>{p.subtitle}</motion.p>
        </section>
    )
}
const defaults: Props = { title: "Creative Direction Meets Data", subtitle: "A cross-functional skillset across digital marketing, content creation, analytics, and product storytelling.", accent: "#e50000" }
addPropertyControls(ExpertiseHero, {
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    subtitle: { type: ControlType.String, title: "Subtitle", defaultValue: defaults.subtitle, displayTextArea: true },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})
const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", minHeight: "70vh", padding: "clamp(90px, 12vw, 160px) 24px", background: "radial-gradient(circle at 50% 0%, rgba(229,0,0,0.18), transparent 42%), #050505", color: "#fff", fontFamily: "Inter, Syne, system-ui, sans-serif", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", boxSizing: "border-box" },
    kicker: { margin: "0 0 18px", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.22em" },
    title: { margin: "0 auto 24px", maxWidth: 960, fontSize: "clamp(46px, 8vw, 112px)", lineHeight: 0.92, fontWeight: 950 },
    subtitle: { margin: "0 auto", maxWidth: 680, color: "rgba(255,255,255,0.64)", fontSize: 17, lineHeight: 1.75 },
}
