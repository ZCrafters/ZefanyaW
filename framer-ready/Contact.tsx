import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = {
    title: string
    description: string
    email: string
    instagram: string
    tiktok: string
    linkedin: string
    accent: string
}

export default function Contact(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const [form, setForm] = React.useState({ name: "", email: "", message: "" })

    function submit(event: React.FormEvent) {
        event.preventDefault()
        const subject = encodeURIComponent(`Project inquiry from ${form.name || "Framer visitor"}`)
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nEmail: ${form.email}`)
        window.location.href = `mailto:${p.email}?subject=${subject}&body=${body}`
    }

    const links = [
        ["Email", p.email, `mailto:${p.email}`],
        ["Instagram", p.instagram, `https://instagram.com/${p.instagram.replace("@", "")}`],
        ["TikTok", p.tiktok, `https://tiktok.com/${p.tiktok}`],
        ["LinkedIn", "Zefanya Williams", p.linkedin],
    ]

    return (
        <section style={styles.section}>
            <div style={styles.shell}>
                <div style={styles.grid}>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div style={styles.labelRow}><span style={{ ...styles.line, background: p.accent }} />Connection</div>
                        <h2 style={styles.title}>{p.title}</h2>
                        <p style={styles.description}>{p.description}</p>
                        <div style={styles.linkList}>
                            {links.map(([label, value, href]) => (
                                <a key={label} href={href} target={label === "Email" ? undefined : "_blank"} rel="noreferrer" style={styles.contactLink}>
                                    <span style={{ ...styles.linkIcon, color: p.accent }}>{label.slice(0, 1)}</span>
                                    <span>
                                        <span style={styles.linkLabel}>{label}</span>
                                        <span style={styles.linkValue}>{value}</span>
                                    </span>
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.form onSubmit={submit} style={styles.form} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
                        <h3 style={styles.formTitle}><span style={{ ...styles.formAccent, background: p.accent }} />Send Message</h3>
                        <label style={styles.label}>Your Name</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.currentTarget.value })} placeholder="John Doe" style={styles.input} />
                        <label style={styles.label}>Your Email</label>
                        <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.currentTarget.value })} placeholder="john@example.com" style={styles.input} />
                        <label style={styles.label}>Your Message</label>
                        <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.currentTarget.value })} placeholder="Tell me about your project..." style={{ ...styles.input, minHeight: 140, resize: "vertical" }} />
                        <button type="submit" style={{ ...styles.button, background: p.accent }}>Send Message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    )
}

const defaults: Props = {
    title: "LET'S TALK",
    description: "Let's engineer the future together. Reach out for collaborations, strategic consulting, or digital project inquiries.",
    email: "zefanyawilliams@gmail.com",
    instagram: "@zefanya.williams",
    tiktok: "@zefanya.williams",
    linkedin: "https://www.linkedin.com/in/zefanya-williams-272415261/",
    accent: "#e50000",
}

addPropertyControls(Contact, {
    title: { type: ControlType.String, title: "Title", defaultValue: defaults.title },
    description: { type: ControlType.String, title: "Desc", defaultValue: defaults.description, displayTextArea: true },
    email: { type: ControlType.String, title: "Email", defaultValue: defaults.email },
    instagram: { type: ControlType.String, title: "Instagram", defaultValue: defaults.instagram },
    tiktok: { type: ControlType.String, title: "TikTok", defaultValue: defaults.tiktok },
    linkedin: { type: ControlType.String, title: "LinkedIn", defaultValue: defaults.linkedin },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})

const styles: Record<string, React.CSSProperties> = {
    section: { width: "100%", background: "#050505", color: "#fff", padding: "clamp(90px, 12vw, 160px) 0", fontFamily: "Inter, Syne, system-ui, sans-serif" },
    shell: { maxWidth: 1180, margin: "0 auto", padding: "0 clamp(18px, 4vw, 36px)" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 360px), 1fr))", gap: "clamp(52px, 8vw, 112px)", alignItems: "start" },
    labelRow: { display: "flex", alignItems: "center", gap: 14, marginBottom: 24, color: "rgba(255,255,255,0.55)", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em" },
    line: { width: 48, height: 2 },
    title: { margin: "0 0 24px", fontSize: "clamp(48px, 8vw, 112px)", lineHeight: 0.9, fontWeight: 950 },
    description: { margin: "0 0 44px", maxWidth: 560, color: "rgba(255,255,255,0.68)", fontSize: 17, lineHeight: 1.85 },
    linkList: { display: "grid", gap: 22 },
    contactLink: { display: "flex", alignItems: "center", gap: 18, color: "#fff", textDecoration: "none" },
    linkIcon: { width: 56, height: 56, borderRadius: 8, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, flexShrink: 0 },
    linkLabel: { display: "block", marginBottom: 3, color: "rgba(255,255,255,0.4)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em" },
    linkValue: { display: "block", color: "#fff", fontSize: 15, fontWeight: 700 },
    form: { padding: "clamp(30px, 4vw, 56px)", borderRadius: 8, border: "1px solid rgba(255,255,255,0.12)", background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.035))" },
    formTitle: { display: "flex", alignItems: "center", gap: 14, margin: "0 0 30px", fontSize: 24, fontWeight: 900 },
    formAccent: { width: 4, height: 32, borderRadius: 999 },
    label: { display: "block", margin: "18px 0 8px", color: "rgba(255,255,255,0.72)", fontSize: 12, fontWeight: 800 },
    input: { width: "100%", boxSizing: "border-box", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 8, background: "rgba(255,255,255,0.055)", color: "#fff", padding: "15px 16px", fontSize: 14, fontFamily: "inherit", outline: "none" },
    button: { width: "100%", minHeight: 48, marginTop: 24, border: 0, borderRadius: 999, color: "#fff", fontSize: 13, fontWeight: 900, textTransform: "uppercase", cursor: "pointer" },
}
