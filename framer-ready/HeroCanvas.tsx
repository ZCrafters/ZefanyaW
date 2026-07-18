import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type Props = { imagePath: string; prefix: string; suffix: string; frames: number; pad: number; heightVh: number }

export default function HeroCanvas(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const wrapRef = React.useRef<HTMLDivElement>(null)
    const images = React.useRef<HTMLImageElement[]>([])
    const [progress, setProgress] = React.useState(0)
    const [loaded, setLoaded] = React.useState(false)

    React.useEffect(() => {
        let count = 0
        images.current = Array.from({ length: p.frames }, (_, i) => {
            const img = new Image()
            img.onload = img.onerror = () => { count++; setProgress(Math.round((count / p.frames) * 100)); if (count >= p.frames) setLoaded(true) }
            img.src = `${p.imagePath}/${p.prefix}${String(i + 1).padStart(p.pad, "0")}${p.suffix}`
            return img
        })
    }, [p.frames, p.imagePath, p.pad, p.prefix, p.suffix])

    React.useEffect(() => {
        const draw = () => {
            const canvas = canvasRef.current
            const wrap = wrapRef.current
            if (!canvas || !wrap) return
            const rect = wrap.getBoundingClientRect()
            const total = rect.height - window.innerHeight
            const percent = Math.max(0, Math.min(1, -rect.top / total))
            const index = Math.min(p.frames - 1, Math.floor(percent * (p.frames - 1)))
            const img = images.current[index]
            const dpr = window.devicePixelRatio || 1
            canvas.width = Math.round(window.innerWidth * dpr)
            canvas.height = Math.round(window.innerHeight * dpr)
            canvas.style.width = "100%"
            canvas.style.height = "100%"
            const ctx = canvas.getContext("2d")
            if (!ctx || !img?.complete || !img.naturalWidth) return
            ctx.scale(dpr, dpr)
            ctx.fillStyle = "#000"
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
            const scale = Math.min(window.innerWidth / img.naturalWidth, window.innerHeight / img.naturalHeight)
            const w = img.naturalWidth * scale
            const h = img.naturalHeight * scale
            ctx.drawImage(img, (window.innerWidth - w) / 2, (window.innerHeight - h) / 2, w, h)
        }
        draw()
        window.addEventListener("scroll", draw, { passive: true })
        window.addEventListener("resize", draw)
        return () => { window.removeEventListener("scroll", draw); window.removeEventListener("resize", draw) }
    }, [loaded, p.frames])

    return (
        <div ref={wrapRef} style={{ height: `${p.heightVh}vh`, background: "#000", position: "relative" }}>
            <div style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}>
                <canvas ref={canvasRef} style={{ display: "block" }} />
                {!loaded && <div style={styles.loader}>Loading Sequence<br />{progress}%</div>}
            </div>
        </div>
    )
}

const defaults: Props = { imagePath: "/Sequence", prefix: "LOL_frame_", suffix: ".jpg", frames: 361, pad: 5, heightVh: 1400 }
addPropertyControls(HeroCanvas, {
    imagePath: { type: ControlType.String, title: "Path", defaultValue: defaults.imagePath },
    prefix: { type: ControlType.String, title: "Prefix", defaultValue: defaults.prefix },
    suffix: { type: ControlType.String, title: "Suffix", defaultValue: defaults.suffix },
    frames: { type: ControlType.Number, title: "Frames", defaultValue: defaults.frames, min: 1, max: 1000 },
    pad: { type: ControlType.Number, title: "Pad", defaultValue: defaults.pad, min: 1, max: 8 },
    heightVh: { type: ControlType.Number, title: "Height", defaultValue: defaults.heightVh, min: 200, max: 2000 },
})
const styles = { loader: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)", fontFamily: "Inter, system-ui, sans-serif", textAlign: "center" as const, letterSpacing: "0.18em", textTransform: "uppercase" as const, fontSize: 12 } }
