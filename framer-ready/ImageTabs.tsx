import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { labels: string; images: string; accent: string }

export default function ImageTabs(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const labels = p.labels.split(",").map((x) => x.trim()).filter(Boolean)
    const images = p.images.split(",").map((x) => x.trim()).filter(Boolean)
    const [active, setActive] = React.useState(0)
    return (
        <div style={styles.wrap}>
            <div style={styles.tabs}>{labels.map((label, i) => <button key={label} onClick={() => setActive(i)} style={{ ...styles.tab, background: active === i ? p.accent : "rgba(255,255,255,0.06)", color: "#fff" }}>{label}</button>)}</div>
            <motion.img key={active} src={images[active] || images[0]} alt="" style={styles.image} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} />
        </div>
    )
}

const defaults: Props = { labels: "Photo,Design,Campaign", images: "/assets/assetss/DSC08129.JPG,/assets/assetss/background.png,/assets/assetss/banner.png", accent: "#e50000" }
addPropertyControls(ImageTabs, {
    labels: { type: ControlType.String, title: "Labels", defaultValue: defaults.labels },
    images: { type: ControlType.String, title: "Images", defaultValue: defaults.images, displayTextArea: true },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})
const styles: Record<string, React.CSSProperties> = {
    wrap: { width: "100%", height: "100%", minHeight: 420, background: "#050505", padding: 18, boxSizing: "border-box", borderRadius: 8, fontFamily: "Inter, system-ui, sans-serif" },
    tabs: { display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" },
    tab: { border: 0, borderRadius: 999, padding: "9px 14px", fontSize: 12, fontWeight: 800, cursor: "pointer" },
    image: { width: "100%", height: "calc(100% - 52px)", minHeight: 320, objectFit: "cover", borderRadius: 8, display: "block" },
}
