"use client";

import React from "react";
import { cn } from "@/lib/utils";

/**
 * BlurVignette
 * Wraps content with a soft, blurred vignette mask around the edges.
 * Implementation: a sibling overlay (`<BlurVignetteArticle />`) sits on top
 * of the content with `backdrop-filter: blur(...)` masked to only the border ring.
 */

type BlurVignetteContextValue = {
  radius: string;
  inset: string;
  transitionLength: string;
  blur: string;
};

const BlurVignetteContext = React.createContext<BlurVignetteContextValue>({
  radius: "24px",
  inset: "0px",
  transitionLength: "80px",
  blur: "12px",
});

interface BlurVignetteProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Border radius of the inner content frame */
  radius?: string;
  /** Distance from container edges where the vignette starts */
  inset?: string;
  /** Width of the blur-to-clear gradient transition */
  transitionLength?: string;
  /** Backdrop blur strength */
  blur?: string;
  /** Tailwind / extra classes for the outer wrapper */
  classname?: string;
  children: React.ReactNode;
}

export function BlurVignette({
  radius = "24px",
  inset = "0px",
  transitionLength = "80px",
  blur = "12px",
  classname,
  children,
  ...rest
}: BlurVignetteProps) {
  return (
    <BlurVignetteContext.Provider value={{ radius, inset, transitionLength, blur }}>
      <div
        {...rest}
        className={cn("relative isolate", classname)}
        style={
          {
            // Expose CSS vars so the article overlay can read them
            ["--bv-radius" as string]: radius,
            ["--bv-inset" as string]: inset,
            ["--bv-transition" as string]: transitionLength,
            ["--bv-blur" as string]: blur,
            ...(rest.style ?? {}),
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </BlurVignetteContext.Provider>
  );
}

interface BlurVignetteArticleProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

/**
 * The blur overlay. Place INSIDE <BlurVignette> after the media element.
 * Uses a CSS mask to apply backdrop-blur only on the outer ring, leaving the
 * inset rectangle crisp.
 */
export function BlurVignetteArticle({ className, style, ...rest }: BlurVignetteArticleProps) {
  return (
    <div
      aria-hidden="true"
      {...rest}
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backdropFilter: "blur(var(--bv-blur))",
        WebkitBackdropFilter: "blur(var(--bv-blur))",
        // Mask: transparent in the center inset rect (no blur) -> opaque at edges
        // Achieved by subtracting a smaller rounded rect via a second mask source.
        WebkitMaskImage: [
          // Outer ring: full opaque
          "linear-gradient(#000, #000)",
          // Inner cutout (rounded): erased so blur is removed inside
          `radial-gradient(closest-side at center, #000 calc(100% - var(--bv-transition)), transparent 100%)`,
        ].join(", "),
        maskImage: [
          "linear-gradient(#000, #000)",
          `radial-gradient(closest-side at center, #000 calc(100% - var(--bv-transition)), transparent 100%)`,
        ].join(", "),
        WebkitMaskComposite: "source-out",
        maskComposite: "exclude",
        WebkitMaskRepeat: "no-repeat, no-repeat",
        maskRepeat: "no-repeat, no-repeat",
        WebkitMaskPosition: "center, center",
        maskPosition: "center, center",
        WebkitMaskSize: "100% 100%, calc(100% - var(--bv-inset) * 2) calc(100% - var(--bv-inset) * 2)",
        maskSize: "100% 100%, calc(100% - var(--bv-inset) * 2) calc(100% - var(--bv-inset) * 2)",
        borderRadius: "var(--bv-radius)",
        ...style,
      }}
    />
  );
}
