import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type Props = { background: string; padding: number; showFooter: boolean }

export default function PageShell(props: React.PropsWithChildren<Partial<Props>>) {
    const p = { ...defaults, ...props }
    return (
        <main style={{ width: "100%", minHeight: "100vh", background: p.background, padding: p.padding, boxSizing: "border-box", color: "#fff", fontFamily: "Inter, system-ui, sans-serif" }}>
            {props.children}
            {p.showFooter && <div style={{ marginTop: 48, color: "rgba(255,255,255,0.35)", fontSize: 12 }}>Zefanya Williams Portfolio</div>}
        </main>
    )
}

const defaults: Props = { background: "#000000", padding: 0, showFooter: false }
addPropertyControls(PageShell, {
    background: { type: ControlType.Color, title: "Bg", defaultValue: defaults.background },
    padding: { type: ControlType.Number, title: "Padding", defaultValue: defaults.padding, min: 0, max: 160 },
    showFooter: { type: ControlType.Boolean, title: "Footer", defaultValue: defaults.showFooter },
})
