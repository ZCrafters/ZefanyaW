import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { text: string; highlight: string; color: string; textColor: string; size: number }

export default function TextHighlighter(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const parts = p.text.split(p.highlight)
    return (
        <p style={{ margin: 0, color: p.textColor, fontSize: p.size, lineHeight: 1.8, fontFamily: "Inter, system-ui, sans-serif" }}>
            {parts[0]}
            <span style={{ position: "relative", display: "inline-block" }}>
                <motion.span style={{ position: "absolute", inset: "58% -2px 4% -2px", background: p.color, zIndex: 0 }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                <span style={{ position: "relative", zIndex: 1 }}>{p.highlight}</span>
            </span>
            {parts.slice(1).join(p.highlight)}
        </p>
    )
}

const defaults: Props = { text: "Kreativitas terbaik lahir dari pemahaman data dan strategi yang jelas.", highlight: "pemahaman data", color: "rgba(229,0,0,0.45)", textColor: "#fff", size: 18 }
addPropertyControls(TextHighlighter, {
    text: { type: ControlType.String, title: "Text", defaultValue: defaults.text, displayTextArea: true },
    highlight: { type: ControlType.String, title: "Highlight", defaultValue: defaults.highlight },
    color: { type: ControlType.Color, title: "Color", defaultValue: defaults.color },
    textColor: { type: ControlType.Color, title: "Text", defaultValue: defaults.textColor },
    size: { type: ControlType.Number, title: "Size", defaultValue: defaults.size, min: 8, max: 80 },
})
