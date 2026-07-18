import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { images: string; size: number; accent: string }

export default function ImageTrail(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const images = p.images.split(",").map((x) => x.trim()).filter(Boolean)
    const [trail, setTrail] = React.useState<Array<{ x: number; y: number; src: string; id: number }>>([])
    const id = React.useRef(0)

    function move(e: React.MouseEvent) {
        const rect = e.currentTarget.getBoundingClientRect()
        const src = images[id.current % images.length]
        const point = { x: e.clientX - rect.left, y: e.clientY - rect.top, src, id: id.current++ }
        setTrail((v) => [...v.slice(-10), point])
    }

    return (
        <div onMouseMove={move} style={styles.wrap}>
            <h2 style={{ ...styles.title, color: p.accent }}>ALBUMS</h2>
            {trail.map((item) => (
                <motion.img key={item.id} src={item.src} alt="" style={{ ...styles.img, width: p.size, height: p.size, left: item.x - p.size / 2, top: item.y - p.size / 2 }} initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1.8] }} transition={{ duration: 1.5 }} />
            ))}
        </div>
    )
}

const defaults: Props = { images: "/assets/poster/ChatGPT Image May 5, 2026, 01_55_53 PM.png,/assets/poster/Desain tanpa judul (10).png", size: 112, accent: "rgba(255,255,255,0.12)" }
addPropertyControls(ImageTrail, {
    images: { type: ControlType.String, title: "Images", defaultValue: defaults.images, displayTextArea: true },
    size: { type: ControlType.Number, title: "Size", defaultValue: defaults.size, min: 40, max: 260 },
    accent: { type: ControlType.Color, title: "Text", defaultValue: defaults.accent },
})
const styles: Record<string, React.CSSProperties> = {
    wrap: { position: "relative", width: "100%", height: "70vh", minHeight: 420, overflow: "hidden", background: "#000", cursor: "none", fontFamily: "Inter, Syne, system-ui, sans-serif" },
    title: { position: "absolute", inset: 0, margin: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "clamp(56px, 14vw, 160px)", fontWeight: 950, pointerEvents: "none" },
    img: { position: "absolute", objectFit: "cover", borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)", pointerEvents: "none" },
}
