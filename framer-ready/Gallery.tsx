import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = {
    title: string
    subtitle: string
    images: string
    accent: string
}

const fallback = [
    "/assets/assetss/DSC08129.JPG",
    "/assets/assetss/element.png",
    "/assets/assetss/fire element.png",
    "/assets/assetss/background.png",
    "/assets/assetss/element fire.png",
    "/assets/assetss/banner.png",
]

const positions: React.CSSProperties[] = [
    { top: "4%", left: "7%", transform: "rotate(-10deg)" },
    { top: "13%", right: "8%", transform: "rotate(8deg)" },
    { top: "35%", left: "18%", transform: "rotate(12deg)" },
    { top: "42%", right: "18%", transform: "rotate(-8deg)" },
    { bottom: "12%", left: "10%", transform: "rotate(6deg)" },
    { bottom: "7%", right: "9%", transform: "rotate(-12deg)" },
]

export default function Gallery(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const images = p.images.split(",").map((item) => item.trim()).filter(Boolean)
    const list = images.length ? images : fallback

    return (
        <section style={styles.section}>
            <div style={styles.header}>
                <p style={styles.eyebrow}>Project Gallery</p>
                <h2 style={styles.title}>{p.title} <span style={{ color: p.accent }}>Gallery</span></h2>
                <p style={styles.subtitle}>{p.subtitle}</p>
            </div>
            <div style={styles.stage}>
                {list.slice(0, 6).map((src, index) => (
                    <motion.figure key={`${src}-${index}`} style={{ ...styles.card, ...positions[index] }} initial={{ opacity: 0, scale: 0.92 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -8, scale: 1.03 }}>
                        <img src={src} alt="" loading="lazy" style={styles.image} />
                    </motion.figure>
                ))}
                <motion.h3 style={styles.album} animate={{ opacity: [0.08, 0.16, 0.08] }} transition={{ duration: 3, repeat: Infinity }}>ALBUMS</motion.h3>
            </div>
            <div style={styles.marquee}>
                <motion.div style={styles.track} animate={{ x: ["0%", "-50%"] }} transition={{ duration: 34, repeat: Infinity, ease: "linear" }}>
                    {[...list, ...list].map((src, index) => (
                        <div key={`${src}-find-${index}`} style={styles.findCard}>
                            <img src={src} alt="" loading="lazy" style={styles.image} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

const defaults: Props = {
    title: "Visual",
    subtitle: "A curated collection of moments, designs, and creative explorations",
    images: fallback.join(","),
    accent: "#e50000",
}

addPropertyControls(Gallery, {
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    subtitle: { type: ControlType.String, title: "Subtitle", defaultValue: defaults.subtitle, displayTextArea: true },
    images: { type: ControlType.String, title: "Images", defaultValue: defaults.images, displayTextArea: true },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})

const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", padding: "clamp(80px, 10vw, 136px) 0", background: "radial-gradient(circle at 50% 0%, rgba(229,0,0,0.16), transparent 40%), #000", color: "#fff", fontFamily: "Inter, Syne, system-ui, sans-serif", overflow: "hidden" },
    header: { textAlign: "center", padding: "0 24px", marginBottom: 64 },
    eyebrow: { display: "inline-flex", margin: "0 0 22px", minHeight: 34, padding: "0 18px", alignItems: "center", borderRadius: 999, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.58)", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em" },
    title: { margin: "0 0 14px", fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.05, fontWeight: 900 },
    subtitle: { margin: "0 auto", maxWidth: 560, color: "rgba(255,255,255,0.52)", fontSize: 15, lineHeight: 1.7 },
    stage: { position: "relative", width: "min(1060px, calc(100% - 32px))", height: "clamp(520px, 72vw, 780px)", margin: "0 auto" },
    card: { position: "absolute", width: "clamp(150px, 22vw, 255px)", aspectRatio: "4 / 5", overflow: "hidden", margin: 0, borderRadius: 8, border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)", boxShadow: "0 24px 90px rgba(0,0,0,0.44)" },
    image: { width: "100%", height: "100%", objectFit: "cover", display: "block" },
    album: { position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", margin: 0, color: "#fff", fontSize: "clamp(56px, 14vw, 156px)", lineHeight: 0.9, fontWeight: 950, pointerEvents: "none" },
    marquee: { overflow: "hidden", marginTop: 72 },
    track: { display: "flex", width: "max-content", gap: 14 },
    findCard: { flex: "0 0 auto", width: "clamp(260px, 32vw, 480px)", aspectRatio: "4 / 3", overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)" },
}
