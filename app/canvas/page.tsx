"use client"
import { useEffect } from "react"

export default function CanvasPage() {
  useEffect(() => {
    const s = document.createElement("script")
    s.src = "/js/canvas.js"
    s.async = true
    document.body.appendChild(s)
    return () => {
      document.body.removeChild(s)
    }
  }, [])

  return (
    <main className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Canvas</h1>
        <p className="text-muted-foreground mb-6">Halaman kanvas akan aktif dengan skrip dari file asli.</p>
        <canvas id="drawingCanvas" className="w-full rounded" width={800} height={600} />
      </div>
    </main>
  )
}
