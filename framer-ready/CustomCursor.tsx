import * as React from "react"
import { addPropertyControls, ControlType, motion, useMotionValue, useSpring } from "framer"

type Props = { accent: string; size: number }

export default function CustomCursor(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const x = useMotionValue(-100)
    const y = useMotionValue(-100)
    const sx = useSpring(x, { stiffness: 420, damping: 34 })
    const sy = useSpring(y, { stiffness: 420, damping: 34 })

    React.useEffect(() => {
        const move = (e: MouseEvent) => { x.set(e.clientX - p.size / 2); y.set(e.clientY - p.size / 2) }
        window.addEventListener("mousemove", move)
        return () => window.removeEventListener("mousemove", move)
    }, [p.size, x, y])

    return <motion.div style={{ position: "fixed", left: 0, top: 0, zIndex: 9999, width: p.size, height: p.size, borderRadius: 999, border: `1px solid ${p.accent}`, pointerEvents: "none", x: sx, y: sy, mixBlendMode: "difference" }} />
}

const defaults: Props = { accent: "#ffffff", size: 28 }
addPropertyControls(CustomCursor, {
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    size: { type: ControlType.Number, title: "Size", defaultValue: defaults.size, min: 8, max: 80 },
})
