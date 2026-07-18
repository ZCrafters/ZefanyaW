import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = {
    title: string
    words: string
    cta: string
    link: string
    accent: string
    videoUrl: string
}

function useTypewriter(words: string[]) {
    const [index, setIndex] = React.useState(0)
    const [text, setText] = React.useState("")
    const [deleting, setDeleting] = React.useState(false)

    React.useEffect(() => {
        const word = words[index] || ""
        const isFull = text === word && !deleting
        const isEmpty = text === "" && deleting

        const timer = window.setTimeout(
            () => {
                if (isFull) {
                    setDeleting(true)
                    return
                }
                if (isEmpty) {
                    setDeleting(false)
                    setIndex((value) => (value + 1) % words.length)
                    return
                }
                setText((value) => (deleting ? word.slice(0, value.length - 1) : word.slice(0, value.length + 1)))
            },
            isFull ? 1500 : deleting ? 40 : 70
        )

        return () => window.clearTimeout(timer)
    }, [deleting, index, text, words])

    return text
}

function Arrow() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default function Hero(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const typed = useTypewriter(p.words.split(",").map((item) => item.trim()).filter(Boolean))

    return (
        <section style={styles.hero}>
            <div style={styles.videoWrap} aria-hidden="true">
                <iframe src={p.videoUrl} title="Hero background video" frameBorder="0" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen style={styles.video} />
            </div>
            <div style={styles.shade} />
            <motion.div style={styles.content} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <motion.h1 style={styles.title} initial={{ letterSpacing: 8 }} animate={{ letterSpacing: 0 }} transition={{ duration: 0.85 }}>
                    {p.title}
                </motion.h1>
                <p style={styles.subtitle}>
                    Make Feeling Look <span style={{ color: "#f2c94c" }}>{typed}_</span>
                </p>
                <motion.a href={p.link} style={{ ...styles.button, borderColor: p.accent, boxShadow: `0 0 28px ${p.accent}55` }} whileHover={{ y: -3, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    {p.cta}
                    <Arrow />
                </motion.a>
            </motion.div>
            <div style={styles.fade} />
        </section>
    )
}

const defaults: Props = {
    title: "Hi Im Fan",
    words: "Cinematic,Aura Farming,Better,be alive,Motion",
    cta: "Explore My Work",
    link: "#about",
    accent: "#e50000",
    videoUrl: "https://www.youtube-nocookie.com/embed/PTZnjN0pxOE?autoplay=1&mute=1&loop=1&playlist=PTZnjN0pxOE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1",
}

addPropertyControls(Hero, {
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    words: { type: ControlType.String, title: "Words", defaultValue: defaults.words, displayTextArea: true },
    cta: { type: ControlType.String, title: "CTA", defaultValue: defaults.cta },
    link: { type: ControlType.String, title: "Link", defaultValue: defaults.link },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    videoUrl: { type: ControlType.String, title: "Video", defaultValue: defaults.videoUrl, displayTextArea: true },
})

const styles: Record<string, React.CSSProperties> = {
    hero: { position: "relative", minHeight: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", background: "#000", color: "#fff", fontFamily: "Inter, Syne, system-ui, sans-serif" },
    videoWrap: { position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" },
    video: { position: "absolute", top: "50%", left: "50%", width: "max(100vw, 177.78vh)", height: "max(56.25vw, 100vh)", transform: "translate(-50%, -50%)", border: 0, pointerEvents: "none" },
    shade: { position: "absolute", inset: 0, background: "radial-gradient(circle at center, rgba(0,0,0,0.16), rgba(0,0,0,0.82) 72%, #000)" },
    content: { position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", width: "min(980px, 100%)" },
    title: { margin: "0 0 12px", fontSize: "clamp(42px, 8vw, 108px)", lineHeight: 0.95, fontWeight: 900, textTransform: "lowercase" },
    subtitle: { margin: "0 0 28px", fontSize: "clamp(15px, 1.5vw, 21px)", lineHeight: 1.7, color: "rgba(255,255,255,0.74)", fontStyle: "italic", fontWeight: 500 },
    button: { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, minHeight: 48, padding: "0 28px", borderRadius: 999, color: "#fff", textDecoration: "none", background: "rgba(0,0,0,0.72)", border: "1px solid", fontSize: 14, fontWeight: 700 },
    fade: { position: "absolute", left: 0, right: 0, bottom: 0, height: "30vh", background: "linear-gradient(to bottom, transparent, #000)", pointerEvents: "none" },
}
