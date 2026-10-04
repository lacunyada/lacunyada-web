"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// l = izquierda (%), t = arriba (%), w = ancho (%), r = proporción ancho/alto
const images = [
  { src: "01", alt: ".xeic, ring on sand",          l: 22, t: 2.8,  w: 13,   r: "218/222" },
  { src: "02", alt: ".xeic, hands in veil",         l: 3,  t: 6.9,  w: 14,   r: "234/402" },
  { src: "03", alt: ".xeic, earrings on bar",       l: 40, t: 0,    w: 12,   r: "202/270" },
  { src: "04", alt: ".xeic, golden veil",           l: 57, t: 8.3,  w: 16,   r: "248/304" },
  { src: "05", alt: ".xeic, portrait",              l: 80, t: 2.8,  w: 12.5, r: "203/322" },
  { src: "06", alt: ".xeic, white veil",            l: 20, t: 29.2, w: 14,   r: "247/373" },
  { src: "07", alt: ".xeic, hands on red cloth",    l: 40, t: 33.3, w: 10,   r: "149/223" },
  { src: "08", alt: ".xeic, glass ring",            l: 76, t: 37.5, w: 13,   r: "184/245" },
  { src: "09", alt: ".xeic, hands on cloth",        l: 56, t: 44.4, w: 11,   r: "158/236" },
  { src: "10", alt: ".xeic, portrait in light",     l: 3,  t: 50,   w: 14,   r: "203/303" },
  { src: "11", alt: ".xeic, earrings in shadow",    l: 38, t: 66.7, w: 15,   r: "218/289" },
  { src: "12", alt: ".xeic, hand and cloth",        l: 20, t: 69.4, w: 13,   r: "217/328" },
  { src: "13", alt: ".xeic, ring",                  l: 72, t: 72.2, w: 12,   r: "203/255" },
  { src: "14", alt: ".xeic, portrait with earring", l: 88, t: 77.8, w: 11,   r: "211/212" },
];

export default function Page() {
  // En móvil: primer toque = muestra el efecto, segundo toque = va a /order
  const [active, setActive] = useState<string | null>(null);

  return (
    <main
      className="bg-white text-black px-6 md:px-16 py-10"
      onClick={() => setActive(null)}
    >
      <h1 className="text-5xl md:text-7xl mb-10">.xeic collection</h1>

      <div className="relative mb-10 w-full md:aspect-[100/72]">
        {images.map((img, i) => {
          const isActive = active === img.src;

          return (
            <Link
              key={img.src}
              href="/order"
              aria-label={`${img.alt} — order`}
              onClick={(e) => {
                e.stopPropagation();
                const isTouch = window.matchMedia("(hover: none)").matches;
                if (isTouch && !isActive) {
                  e.preventDefault();
                  setActive(img.src);
                }
              }}
              className="group relative mb-6 block w-full md:absolute md:mb-0 md:left-[var(--l)] md:top-[var(--t)] md:w-[var(--w)]"
              style={
                {
                  aspectRatio: img.r,
                  "--l": `${img.l}%`,
                  "--t": `${img.t}%`,
                  "--w": `${img.w}%`,
                } as React.CSSProperties
              }
            >
              <Image
                src={`/objects/xeic/${img.src}.jpg`}
                alt={img.alt}
                fill
                priority={i < 3}
                sizes="(min-width: 768px) 16vw, 100vw"
                className={`object-cover transition-opacity duration-300 ${
                  isActive ? "opacity-20" : "group-hover:opacity-20"
                }`}
              />
              <span
                className={`absolute inset-0 flex items-center justify-center text-base md:text-base text-black transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                .order
              </span>
            </Link>
          );
        })}
      </div>

      <div className="w-full border-y border-gray-300 text-sm text-gray-600 divide-y divide-gray-300">
        <p className="py-4">jewellery collection</p>

        <div className="py-4 space-y-1">
          <p>photos by. pablo castillo</p>
          <p>make up. maria marca</p>
          <p>models. yannick marques, laura mercader, maria de lluc, mar de castro</p>
        </div>

        <div className="py-4 space-y-1">
          <p>year. 2023</p>
          <p>material. plexiglass</p>
        </div>
      </div>
    </main>
  );
}