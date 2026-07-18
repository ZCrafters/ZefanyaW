import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { text: string; size: number; color: string; stagger: number }

export default function Letter3DSwap(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", perspective: 900, fontFamily: "Inter, Syne, system-ui, sans-serif" }}>
            {p.text.split("").map((char, i) => (
                <motion.span key={`${char}-${i}`} style={{ display: "inline-block", color: p.color, fontSize: p.size, lineHeight: 0.95, fontWeight: 950, transformStyle: "preserve-3d" }} initial={{ opacity: 0, rotateX: -90, y: 18 }} animate={{ opacity: 1, rotateX: 0, y: 0 }} transition={{ delay: i * p.stagger, type: "spring", damping: 22, stiffness: 150 }}>
                    {char === " " ? "\u00a0" : char}
                </motion.span>
            ))}
        </div>
    )
}

const defaults: Props = { text: "Hi Im Fan", size: 88, color: "#ffffff", stagger: 0.03 }
addPropertyControls(Letter3DSwap, {
    text: { type: ControlType.String, title: "Text", defaultValue: defaults.text },
    size: { type: ControlType.Number, title: "Size", defaultValue: defaults.size, min: 12, max: 220 },
    color: { type: ControlType.Color, title: "Color", defaultValue: defaults.color },
    stagger: { type: ControlType.Number, title: "Stagger", defaultValue: defaults.stagger, min: 0, max: 0.2, step: 0.01 },
})
