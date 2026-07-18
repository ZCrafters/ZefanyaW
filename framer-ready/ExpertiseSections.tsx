import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { accent: string }
const cats = [
    ["Soft Skills", "Organizational Skills, Teamwork, Problem-Solving, Communication"],
    ["Data & Analysis", "Data Visualization, Basic Data Analysis, Reporting, Insights"],
    ["Digital Marketing & Creative", "Social Media, Content Planning, Copywriting, Photography"],
    ["Programming Languages", "Python, C++, HTML/CSS, JavaScript"],
]

export default function ExpertiseSections(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <section style={styles.section}>
            <div style={styles.grid}>
                {cats.map((cat, i) => (
                    <motion.article key={cat[0]} style={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                        <h3 style={styles.title}>{cat[0]}</h3>
                        <div style={styles.list}>{cat[1].split(",").map((x) => <span key={x} style={{ ...styles.chip, borderColor: p.accent }}>{x.trim()}</span>)}</div>
                    </motion.article>
                ))}
            </div>
        </section>
    )
}
const defaults: Props = { accent: "#e50000" }
addPropertyControls(ExpertiseSections, { accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent } })
const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", padding: "clamp(80px, 10vw, 140px) 24px", background: "#fff", color: "#050505", fontFamily: "Inter, system-ui, sans-serif", boxSizing: "border-box" },
    grid: { maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 },
    card: { minHeight: 230, padding: 28, borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", boxShadow: "0 14px 44px rgba(0,0,0,0.06)" },
    title: { margin: "0 0 22px", fontSize: 22, fontWeight: 900, lineHeight: 1.15 },
    list: { display: "flex", flexWrap: "wrap", gap: 10 },
    chip: { padding: "8px 11px", borderRadius: 999, border: "1px solid", color: "rgba(0,0,0,0.66)", fontSize: 12, fontWeight: 750 },
}
