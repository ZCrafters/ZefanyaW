import * as React from "react"
import { addPropertyControls, ControlType, motion, useScroll, useTransform } from "framer"

type Props = { heightVh: number; accent: string }
const copy = [
    ["Hello, I'm Zefanya", "Digital Business Student | Content Creator | AI Enthusiast."],
    ["I Create Visual Stories", "Specializing in content creation, digital marketing, and data science."],
    ["I Build Digital Experiences", "Creating digital products that merge design with technology."],
    ["I Turn Ideas Into Impact", "Learn more about what I do."],
]

export default function TextOverlays(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const ref = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
    return (
        <div ref={ref} style={{ position: "relative", height: `${p.heightVh}vh`, pointerEvents: "none" }}>
            <div style={styles.sticky}>
                {copy.map((c, i) => <Block key={c[0]} data={c} index={i} progress={scrollYProgress} accent={p.accent} />)}
            </div>
        </div>
    )
}

function Block({ data, index, progress, accent }: { data: string[]; index: number; progress: any; accent: string }) {
    const start = index * 0.24
    const opacity = useTransform(progress, [start, start + 0.05, start + 0.16, start + 0.22], [0, 1, 1, 0])
    const y = useTransform(progress, [start, start + 0.05, start + 0.22], [32, 0, -24])
    return (
        <motion.div style={{ ...styles.block, opacity, y, textAlign: index % 3 === 1 ? "left" : index % 3 === 2 ? "right" : "center" }}>
            <h2 style={styles.heading}>{data[0]}<span style={{ color: accent }}>.</span></h2>
            <p style={styles.sub}>{data[1]}</p>
        </motion.div>
    )
}

const defaults: Props = { heightVh: 1000, accent: "#e50000" }
addPropertyControls(TextOverlays, {
    heightVh: { type: ControlType.Number, title: "Height vh", defaultValue: defaults.heightVh, min: 200, max: 1800 },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})
const styles: Record<string, React.CSSProperties> = {
    sticky: { position: "sticky", top: 0, height: "100vh", overflow: "hidden", fontFamily: "Inter, Syne, system-ui, sans-serif" },
    block: { position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(28px, 8vw, 96px)", color: "#fff" },
    heading: { margin: "0 0 18px", fontSize: "clamp(44px, 9vw, 128px)", lineHeight: 0.88, fontWeight: 950, textTransform: "uppercase" },
    sub: { margin: 0, maxWidth: 620, color: "rgba(255,255,255,0.64)", fontSize: 17, lineHeight: 1.7 },
}
