"use client";

import Image from "next/image";
import ImageTrail, { ImageTrailItem } from "@/components/fancy/image/image-trail";

type HomeImageTrailProps = {
  posterImages: string[];
};

export default function HomeImageTrail({ posterImages }: HomeImageTrailProps) {
  const trailImages = posterImages.filter((_, index) => index % 2 === 0).slice(0, 12);

  return (
    <div className="relative">
      <ImageTrail
        threshold={110}
        intensity={0.42}
        keyframes={{ opacity: [0, 1, 1, 0], scale: [0.94, 1, 1.45] }}
        keyframesOptions={{
          opacity: { duration: 1.25, times: [0, 0.04, 0.82, 1] },
          scale: { duration: 1.25, times: [0, 0.76, 1] },
        }}
        repeatChildren={1}
        className="w-full h-[70vh] cursor-none"
      >
        {trailImages.map((src, index) => (
          <ImageTrailItem key={index}>
            <div className="h-24 w-24 sm:w-32 sm:h-28 relative overflow-hidden rounded-lg border border-white/10">
              <Image
                src={src}
                alt="poster"
                fill
                className="object-cover"
                sizes="128px"
                loading="lazy"
              />
            </div>
          </ImageTrailItem>
        ))}
      </ImageTrail>
      <h2 className="text-5xl sm:text-9xl absolute top-1/2 left-1/2 pointer-events-none -translate-x-1/2 -translate-y-1/2 z-100 font-black uppercase text-white/10">
        ALBUMS
      </h2>
    </div>
  );
}
