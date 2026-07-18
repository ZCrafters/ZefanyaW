import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = {
    title: string
    accent: string
}

const socials = [
    ["Instagram", "https://instagram.com/zefanya.williams"],
    ["TikTok", "https://tiktok.com/@zefanya.williams"],
    ["LinkedIn", "https://www.linkedin.com/in/zefanya-williams-272415261/"],
]

export default function SocialLinks(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <section style={styles.section}>
            <div style={styles.shell}>
                <h2 style={styles.title}>{p.title}</h2>
                <div style={styles.grid}>
                    {socials.map((social, index) => (
                        <motion.a key={social[0]} href={social[1]} target="_blank" rel="noreferrer" style={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -6 }}>
                            <span style={{ ...styles.icon, background: `${p.accent}14`, color: p.accent }}>{social[0][0]}</span>
                            <span style={styles.label}>{social[0]}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

const defaults: Props = { title: "Connect With Me", accent: "#e50000" }

addPropertyControls(SocialLinks, {
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})

const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", padding: "clamp(80px, 10vw, 140px) 0", background: "#fff", color: "#050505", fontFamily: "Inter, Syne, system-ui, sans-serif" },
    shell: { maxWidth: 1000, margin: "0 auto", padding: "0 24px", textAlign: "center" },
    title: { margin: "0 0 44px", fontSize: "clamp(34px, 5vw, 64px)", lineHeight: 1.05, fontWeight: 950 },
    grid: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "clamp(20px, 4vw, 48px)" },
    card: { minWidth: 170, minHeight: 160, padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22, color: "inherit", textDecoration: "none", borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)", background: "#fff", boxShadow: "0 16px 46px rgba(0,0,0,0.07)" },
    icon: { width: 56, height: 56, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 950 },
    label: { fontSize: 16, fontWeight: 800 },
}
