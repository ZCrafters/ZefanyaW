import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type Props = { opacity: number; blur: number; color: string }

export default function BlurVignette(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return <div style={{ width: "100%", height: "100%", minHeight: 240, pointerEvents: "none", backdropFilter: `blur(${p.blur}px)`, background: `radial-gradient(circle at center, transparent 28%, ${p.color} ${p.opacity}%)` }} />
}

const defaults: Props = { opacity: 100, blur: 0, color: "rgba(0,0,0,0.72)" }
addPropertyControls(BlurVignette, {
    opacity: { type: ControlType.Number, title: "Spread", defaultValue: defaults.opacity, min: 45, max: 100 },
    blur: { type: ControlType.Number, title: "Blur", defaultValue: defaults.blur, min: 0, max: 40 },
    color: { type: ControlType.Color, title: "Color", defaultValue: defaults.color },
})
