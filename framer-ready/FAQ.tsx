import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = {
    title: string
    accent: string
}

const items = [
    ["What services do you offer?", "I offer digital business consulting, content creation, social media management, and brand strategy development."],
    ["How can we collaborate?", "We can collaborate through project-based work, ongoing consulting, or partnership opportunities."],
    ["What is your availability?", "I'm currently available for new projects and collaborations with a flexible schedule."],
    ["Do you work remotely?", "Yes, I primarily work remotely and can adapt to different time zones."],
]

export default function FAQ(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const [open, setOpen] = React.useState(0)

    return (
        <section style={styles.section}>
            <div style={styles.shell}>
                <p style={styles.eyebrow}>FAQ</p>
                <h2 style={styles.title}>{p.title}</h2>
                <div style={styles.list}>
                    {items.map((item, index) => (
                        <div key={item[0]} style={styles.card}>
                            <button type="button" onClick={() => setOpen(open === index ? -1 : index)} style={styles.button}>
                                <span>{item[0]}</span>
                                <span style={{ ...styles.plus, color: p.accent }}>{open === index ? "-" : "+"}</span>
                            </button>
                            <motion.div initial={false} animate={{ height: open === index ? "auto" : 0, opacity: open === index ? 1 : 0 }} style={styles.answerWrap}>
                                <p style={styles.answer}>{item[1]}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const defaults: Props = { title: "Common Questions", accent: "#e50000" }

addPropertyControls(FAQ, {
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})

const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", background: "#f6f6f6", color: "#050505", padding: "clamp(80px, 10vw, 140px) 0", fontFamily: "Inter, Syne, system-ui, sans-serif" },
    shell: { maxWidth: 980, margin: "0 auto", padding: "0 24px" },
    eyebrow: { margin: "0 0 12px", textAlign: "center", color: "rgba(0,0,0,0.45)", fontSize: 11, fontWeight: 900, letterSpacing: "0.2em", textTransform: "uppercase" },
    title: { margin: "0 0 42px", textAlign: "center", fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.05, fontWeight: 950 },
    list: { display: "grid", gap: 14 },
    card: { borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", overflow: "hidden", boxShadow: "0 12px 36px rgba(0,0,0,0.06)" },
    button: { width: "100%", minHeight: 72, padding: "0 26px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, border: 0, background: "transparent", color: "inherit", fontSize: 17, fontWeight: 850, textAlign: "left", cursor: "pointer", fontFamily: "inherit" },
    plus: { fontSize: 28, lineHeight: 1, fontWeight: 400 },
    answerWrap: { overflow: "hidden" },
    answer: { margin: 0, padding: "0 26px 28px", color: "rgba(0,0,0,0.58)", fontSize: 15, lineHeight: 1.8 },
}
