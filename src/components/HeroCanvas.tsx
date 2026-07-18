"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll } from "framer-motion";
import { portfolioData } from "@/data/portfolio.data";

const { totalFrames, imagePath, filePrefix, fileSuffix, padLength, containerHeightVh } =
  portfolioData.sequenceConfig;

function getFramePath(index: number): string {
  const padded = String(index + 1).padStart(padLength, "0");
  return `${imagePath}/${filePrefix}${padded}${fileSuffix}`;
}

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const currentFrameRef = useRef(-1);
  const rafRef = useRef<number>(0);
  const dprRef = useRef<number>(1);
  const canvasSizeRef = useRef({ w: 0, h: 0 });
  // Store the context once so we don't need to recreate scale each time
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Initialize canvas size + DPR — called once on mount and on resize
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    dprRef.current = dpr;
    canvasSizeRef.current = { w, h };

    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
      ctxRef.current = ctx;
    }
  }, []);

  // Draw single frame with object-fit: contain logic
  const drawFrame = useCallback((index: number) => {
    const ctx = ctxRef.current;
    const img = imagesRef.current[index];
    if (!ctx || !img || !img.complete || !img.naturalWidth) return;

    const { w, h } = canvasSizeRef.current;
    if (w === 0 || h === 0) return;

    // Black background — matches the frame's dark edges for seamless blending
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, w, h);

    // Object-fit: contain — image never cropped, always centered
    const imgAspect = img.naturalWidth / img.naturalHeight;
    const canvasAspect = w / h;
    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgAspect > canvasAspect) {
      drawW = w;
      drawH = w / imgAspect;
      drawX = 0;
      drawY = (h - drawH) / 2;
    } else {
      drawH = h;
      drawW = h * imgAspect;
      drawX = (w - drawW) / 2;
      drawY = 0;
    }

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Preload all frames eagerly
  useEffect(() => {
    let cancelled = false;
    const images: HTMLImageElement[] = new Array(totalFrames);
    let loadedCount = 0;

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = img.onerror = () => {
        if (cancelled) return;
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalFrames) * 100));
        if (loadedCount >= totalFrames) {
          setLoaded(true);
        }
      };
      images[i] = img;
    }
    imagesRef.current = images;
    return () => { cancelled = true; };
  }, []);

  // Init canvas on mount
  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  // Handle resize — reinit canvas then redraw current frame
  useEffect(() => {
    const handleResize = () => {
      initCanvas();
      if (currentFrameRef.current >= 0) {
        drawFrame(currentFrameRef.current);
      }
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas, drawFrame]);

  // Scroll → frame mapping with RAF
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const progress = Math.max(0, Math.min(value, 1));
      const frameIndex = Math.min(
        Math.floor(progress * (totalFrames - 1)),
        totalFrames - 1
      );

      if (frameIndex === currentFrameRef.current) return;
      currentFrameRef.current = frameIndex;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        drawFrame(frameIndex);
      });
    });
    return () => {
      unsubscribe();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress, drawFrame]);

  // Draw frame 0 once all images loaded
  useEffect(() => {
    if (loaded) {
      currentFrameRef.current = 0;
      drawFrame(0);
    }
  }, [loaded, drawFrame]);

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${containerHeightVh}vh` }}
    >
      {/* Sticky fullscreen canvas */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ display: "block" }}
        />

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black">
            <div className="relative w-14 h-14 mb-6">
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-0 rounded-full border border-transparent border-t-white/80 animate-spin" />
            </div>
            <p className="text-white/50 text-xs uppercase tracking-[0.25em] font-display mb-3">
              Loading Sequence
            </p>
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/60 rounded-full transition-all duration-200"
                style={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="text-white/30 text-xs mt-2 font-display">{loadProgress}%</p>
          </div>
        )}
      </div>
    </div>
  );
}
