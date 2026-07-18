import * as React from "react"
import { addPropertyControls, ControlType, motion } from "framer"

type Props = { brand: string; accent: string; items: string; socials: string }

export default function Sidebar(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const [open, setOpen] = React.useState(false)
    const items = p.items.split(",").map((x) => x.trim()).filter(Boolean)
    const socials = p.socials.split(",").map((x) => x.trim()).filter(Boolean)

    return (
        <>
            <button aria-label="Toggle menu" onClick={() => setOpen(!open)} style={{ ...styles.toggle, background: open ? p.accent : "rgba(10,10,10,0.78)" }}>{open ? "x" : "="}</button>
            <motion.div style={styles.backdrop} animate={{ opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }} onClick={() => setOpen(false)} />
            <motion.aside style={styles.panel} animate={{ x: open ? 0 : -320 }} transition={{ type: "spring", damping: 28, stiffness: 220 }}>
                <div style={{ height: 2, background: p.accent }} />
                <div style={styles.brand}>{p.brand}<span style={{ color: p.accent }}>.</span><small>Portfolio</small></div>
                <nav style={styles.nav}>{items.map((item) => <a key={item} href={`#${item.toLowerCase()}`} style={styles.navItem}><span style={{ ...styles.navIcon, background: p.accent }}>{item[0]}</span>{item}</a>)}</nav>
                <div style={styles.socials}>{socials.map((s) => <a key={s} href="#" style={styles.social}>{s[0]}</a>)}</div>
                <p style={styles.copy}>2026 Zefanya Williams</p>
            </motion.aside>
        </>
    )
}

const defaults: Props = { brand: "ZW", accent: "#e50000", items: "Home,About,Experience,Expertise,Contact", socials: "Instagram,TikTok,LinkedIn" }
addPropertyControls(Sidebar, {
    brand: { type: ControlType.String, title: "Brand", defaultValue: defaults.brand },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
    items: { type: ControlType.String, title: "Items", defaultValue: defaults.items, displayTextArea: true },
    socials: { type: ControlType.String, title: "Socials", defaultValue: defaults.socials },
})
const styles: Record<string, React.CSSProperties> = {
    toggle: { position: "fixed", top: 24, left: 24, zIndex: 102, width: 44, height: 44, borderRadius: 999, border: "1px solid rgba(255,255,255,0.16)", color: "#fff", cursor: "pointer", fontSize: 22, lineHeight: 1 },
    backdrop: { position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" },
    panel: { position: "fixed", top: 0, left: 0, zIndex: 101, width: 300, height: "100vh", background: "rgba(8,8,8,0.97)", borderRight: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontFamily: "Inter, system-ui, sans-serif", display: "flex", flexDirection: "column" },
    brand: { padding: "30px 28px", fontSize: 24, fontWeight: 950, lineHeight: 1 },
    nav: { display: "grid", gap: 5, padding: "8px 16px", flex: 1 },
    navItem: { display: "flex", alignItems: "center", gap: 14, padding: "13px 16px", borderRadius: 8, color: "rgba(255,255,255,0.72)", textDecoration: "none", fontSize: 14, fontWeight: 700 },
    navIcon: { width: 32, height: 32, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900 },
    socials: { display: "flex", gap: 10, padding: "18px 28px" },
    social: { width: 38, height: 38, borderRadius: 8, background: "rgba(255,255,255,0.06)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 900 },
    copy: { margin: "0 28px 28px", color: "rgba(255,255,255,0.28)", fontSize: 11 },
}
