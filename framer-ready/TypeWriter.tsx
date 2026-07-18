import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

type Props = { words: string; color: string; fontSize: number }

export default function TypeWriter(props: Partial<Props>) {
    const p = { ...defaults, ...props }
    const words = p.words.split(",").map((x) => x.trim()).filter(Boolean)
    const [i, setI] = React.useState(0)
    const [text, setText] = React.useState("")
    const [del, setDel] = React.useState(false)

    React.useEffect(() => {
        const word = words[i] || ""
        const t = window.setTimeout(() => {
            if (!del && text === word) return setDel(true)
            if (del && text === "") {
                setDel(false)
                setI((v) => (v + 1) % words.length)
                return
            }
            setText((v) => (del ? word.slice(0, v.length - 1) : word.slice(0, v.length + 1)))
        }, !del && text === word ? 1200 : del ? 38 : 72)
        return () => window.clearTimeout(t)
    }, [del, i, text, words])

    return <span style={{ color: p.color, fontSize: p.fontSize, fontFamily: "Inter, system-ui, sans-serif", fontWeight: 800 }}>{text}_</span>
}

const defaults: Props = { words: "Cinematic,Aura Farming,Better,Motion", color: "#f2c94c", fontSize: 24 }
addPropertyControls(TypeWriter, {
    words: { type: ControlType.String, title: "Words", defaultValue: defaults.words, displayTextArea: true },
    color: { type: ControlType.Color, title: "Color", defaultValue: defaults.color },
    fontSize: { type: ControlType.Number, title: "Size", defaultValue: defaults.fontSize, min: 8, max: 120 },
})
