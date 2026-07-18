import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { label: string; link: string; accent: string }

export default function GlowingButton(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return <motion.a href={p.link} style={{ ...styles.button, background: p.accent, boxShadow: `0 0 32px ${p.accent}66` }} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>{p.label}</motion.a>
}
const defaults: Props = { label: "Explore More", link: "#", accent: "#e50000" }
addPropertyControls(GlowingButton, {
    label: { type: ControlType.String, title: "Label", defaultValue: defaults.label },
    link: { type: ControlType.String, title: "Link", defaultValue: defaults.link },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})
const styles = { button: { display: "inline-flex", alignItems: "center", justifyContent: "center", minHeight: 48, padding: "0 28px", borderRadius: 999, color: "#fff", textDecoration: "none", fontFamily: "Inter, system-ui, sans-serif", fontSize: 13, fontWeight: 900, textTransform: "uppercase" as const } }
