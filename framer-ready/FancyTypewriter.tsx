import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { prefix: string; words: string; accent: string; size: number }

export default function FancyTypewriter(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const words = p.words.split(",").map((x) => x.trim()).filter(Boolean)
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        const t = window.setInterval(() => setIndex((v) => (v + 1) % words.length), 1700)
        return () => window.clearInterval(t)
    }, [words.length])

    return (
        <div style={{ fontFamily: "Inter, Syne, system-ui, sans-serif", fontSize: p.size, fontWeight: 900, color: "#fff", display: "flex", gap: 10, alignItems: "baseline" }}>
            <span>{p.prefix}</span>
            <motion.span key={index} style={{ color: p.accent }} initial={{ opacity: 0, y: 14, rotateX: -70 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.45 }}>
                {words[index]}
            </motion.span>
        </div>
    )
}

const defaults: Props = { prefix: "Make it", words: "cinematic,alive,strategic,memorable", accent: "#e50000", size: 42 }
addPropertyControls(FancyTypewriter, {
    prefix: { type: ControlType.String, title: "Prefix", defaultValue: defaults.prefix },
    words: { type: ControlType.String, title: "Words", defaultValue: defaults.words, displayTextArea: true },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    size: { type: ControlType.Number, title: "Size", defaultValue: defaults.size, min: 12, max: 140 },
})
