import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { count: number; color: string }

export default function ParticleBackground(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <div style={styles.wrap}>
            {Array.from({ length: p.count }).map((_, i) => (
                <motion.span key={i} style={{ ...styles.dot, background: p.color, left: `${(i * 17) % 100}%`, top: `${(i * 29) % 100}%` }} animate={{ opacity: [0.1, 0.8, 0.1], y: [0, -24, 0] }} transition={{ duration: 2.4 + (i % 5), repeat: Infinity, delay: i * 0.05 }} />
            ))}
        </div>
    )
}
const defaults: Props = { count: 48, color: "#e50000" }
addPropertyControls(ParticleBackground, {
    count: { type: ControlType.Number, title: "Count", defaultValue: defaults.count, min: 4, max: 160 },
    color: { type: ControlType.Color, title: "Color", defaultValue: defaults.color },
})
const styles: Record<string, React.CSSProperties> = {
    wrap: { position: "relative", width: "100%", height: "100%", minHeight: 420, overflow: "hidden", background: "#000" },
    dot: { position: "absolute", width: 3, height: 3, borderRadius: 999, boxShadow: "0 0 12px currentColor" },
}
