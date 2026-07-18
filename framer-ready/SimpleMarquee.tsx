import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { items: string; accent: string; reverse: boolean; duration: number }

export default function SimpleMarquee(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const items = p.items.split(",").map((x) => x.trim()).filter(Boolean)
    const track = [...items, ...items]
    return (
        <div style={styles.wrap}>
            <motion.div style={styles.track} animate={{ x: p.reverse ? ["-50%", "0%"] : ["0%", "-50%"] }} transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}>
                {track.map((item, i) => <span key={`${item}-${i}`} style={{ ...styles.item, borderColor: p.accent }}>{item}</span>)}
            </motion.div>
        </div>
    )
}

const defaults: Props = { items: "Video Editing,Fotografi,Content Creation,Digital Marketing,Data Analysis,Branding", accent: "#e50000", reverse: false, duration: 28 }
addPropertyControls(SimpleMarquee, {
    items: { type: ControlType.String, title: "Items", defaultValue: defaults.items, displayTextArea: true },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    reverse: { type: ControlType.Boolean, title: "Reverse", defaultValue: defaults.reverse },
    duration: { type: ControlType.Number, title: "Duration", defaultValue: defaults.duration, min: 5, max: 120 },
})
const styles: Record<string, React.CSSProperties> = {
    wrap: { width: "100%", overflow: "hidden", background: "#050505", padding: "14px 0", fontFamily: "Inter, system-ui, sans-serif" },
    track: { display: "flex", width: "max-content", gap: 12 },
    item: { flex: "0 0 auto", color: "#fff", padding: "9px 16px", border: "1px solid", borderRadius: 999, fontSize: 12, fontWeight: 900, textTransform: "uppercase" },
}
