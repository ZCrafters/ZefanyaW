"use client";

import Image from "next/image";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

type WeeklyFindsMarqueeProps = {
  rows: string[][];
};

export default function WeeklyFindsMarquee({ rows }: WeeklyFindsMarqueeProps) {
  const rowConfig = [
    { direction: "left" as const, offset: 1 },
    { direction: "right" as const, offset: 9 },
    { direction: "left" as const, offset: 17 },
  ];

  return (
    <>
      <h2 className="text-center text-3xl sm:text-5xl md:text-6xl text-white font-bold mb-12">
        Weekly <span className="text-red-500">Finds</span>
      </h2>
      <div className="flex flex-col gap-2 sm:gap-3">
        {rows.map((row, rowIndex) => (
          <SimpleMarquee
            key={rowIndex}
            className="w-full"
            baseVelocity={0.08}
            repeat={2}
            direction={rowConfig[rowIndex]?.direction ?? "left"}
            slowdownOnHover
            slowDownFactor={0.3}
          >
            {row.map((src, imageIndex) => (
              <div
                key={src}
                className="mx-1.5 sm:mx-2 shrink-0 hover:scale-[1.02] cursor-pointer duration-500 ease-in-out"
              >
                <div className="relative w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px] aspect-4/3 rounded-lg overflow-hidden bg-neutral-950">
                  <Image
                    src={src}
                    alt={`Gallery ${(rowConfig[rowIndex]?.offset ?? 1) + imageIndex}`}
                    fill
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 420px, 480px"
                    quality={68}
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </SimpleMarquee>
        ))}
      </div>
    </>
  );
}
