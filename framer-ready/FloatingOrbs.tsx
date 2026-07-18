import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { count: number; color: string; opacity: number }

export default function FloatingOrbs(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <div style={styles.wrap}>
            {Array.from({ length: p.count }).map((_, i) => (
                <motion.span key={i} style={{ ...styles.orb, background: p.color, opacity: p.opacity, left: `${(i * 23) % 92}%`, top: `${(i * 31) % 86}%`, width: 80 + (i % 3) * 48, height: 80 + (i % 3) * 48 }} animate={{ y: [0, -32, 0], x: [0, 18, 0], scale: [1, 1.12, 1] }} transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }} />
            ))}
        </div>
    )
}
const defaults: Props = { count: 6, color: "#e50000", opacity: 0.14 }
addPropertyControls(FloatingOrbs, {
    count: { type: ControlType.Number, title: "Count", defaultValue: defaults.count, min: 1, max: 18 },
    color: { type: ControlType.Color, title: "Color", defaultValue: defaults.color },
    opacity: { type: ControlType.Number, title: "Opacity", defaultValue: defaults.opacity, min: 0, max: 1, step: 0.01 },
})
const styles: Record<string, React.CSSProperties> = {
    wrap: { position: "relative", width: "100%", height: "100%", minHeight: 420, overflow: "hidden", background: "#050505" },
    orb: { position: "absolute", borderRadius: 999, filter: "blur(34px)", pointerEvents: "none" },
}
