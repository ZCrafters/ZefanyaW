import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type Props = { brand: string; description: string; email: string; location: string; accent: string }

export default function Footer(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    return (
        <footer style={styles.footer}>
            <div style={styles.shell}>
                <div style={styles.grid}>
                    <div style={styles.brandCol}>
                        <h3 style={styles.brand}>{p.brand}<span style={{ color: p.accent }}>.</span></h3>
                        <p style={styles.desc}>{p.description}</p>
                        <div style={styles.socials}>{["Instagram", "TikTok", "LinkedIn"].map((x) => <a key={x} href="#" style={styles.social}>{x[0]}</a>)}</div>
                    </div>
                    <div>
                        <h4 style={styles.heading}>Navigation</h4>
                        {["Home", "About", "Experience", "Expertise", "Contact"].map((x) => <a key={x} href={`#${x.toLowerCase()}`} style={styles.link}>{x}</a>)}
                    </div>
                    <div>
                        <h4 style={styles.heading}>Contact</h4>
                        <a href={`mailto:${p.email}`} style={styles.link}>{p.email}</a>
                        <p style={styles.muted}>{p.location}</p>
                    </div>
                </div>
                <div style={styles.bottom}>2026 Zefanya Williams. All rights reserved.</div>
            </div>
        </footer>
    )
}

const defaults: Props = { brand: "ZEFANYA", description: "Digital Business Student & Content Creator. Bridging creative visual execution and data performance.", email: "zefanyawilliams@gmail.com", location: "Indonesia", accent: "#e50000" }
addPropertyControls(Footer, {
    brand: { type: ControlType.String, title: "Brand", defaultValue: defaults.brand },
    description: { type: ControlType.String, title: "Desc", defaultValue: defaults.description, displayTextArea: true },
    email: { type: ControlType.String, title: "Email", defaultValue: defaults.email },
    location: { type: ControlType.String, title: "Location", defaultValue: defaults.location },
    accent: { type: ControlType.Color, title: "Accent", defaultValue: defaults.accent },
})
const styles: Record<string, React.CSSProperties> = {
    footer: { width: "100%", background: "#000", color: "#fff", padding: "72px 0 34px", fontFamily: "Inter, system-ui, sans-serif" },
    shell: { maxWidth: 1180, margin: "0 auto", padding: "0 24px" },
    grid: { display: "grid", gridTemplateColumns: "minmax(260px, 2fr) repeat(2, minmax(170px, 1fr))", gap: 48 },
    brandCol: { maxWidth: 470 },
    brand: { margin: "0 0 18px", fontSize: 32, fontWeight: 950 },
    desc: { margin: "0 0 26px", color: "rgba(255,255,255,0.56)", fontSize: 15, lineHeight: 1.75 },
    socials: { display: "flex", gap: 12 },
    social: { width: 46, height: 46, borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none", fontWeight: 900 },
    heading: { margin: "0 0 18px", color: "rgba(255,255,255,0.46)", fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em" },
    link: { display: "block", margin: "0 0 14px", color: "rgba(255,255,255,0.72)", textDecoration: "none", fontSize: 14 },
    muted: { margin: 0, color: "rgba(255,255,255,0.5)", fontSize: 14 },
    bottom: { marginTop: 52, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.36)", fontSize: 13 },
}
