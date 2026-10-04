"use client";

import { useEffect, useState } from "react";

export default function HomeClient() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main
      className={`flex-1 flex flex-col bg-white text-black font-sans px-6 md:px-16 py-10 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl">
        <p className="text-[2.6rem] sm:text-5xl md:text-6xl leading-[1.1] md:leading-tight mb-10">
          .lacunyada is a research project focused on objects, material
          exploration and experimental form.
        </p>
      </div>

      <div className="mt-10 w-full flex flex-col justify-end flex-1">
        <div className="flex items-end justify-end gap-[3vw] px-0 md:px-16">
          <video
            src="/video.mp4"
            className="w-[55%] md:w-[40vw] md:max-w-[520px] md:min-w-[180px] h-auto object-cover"
            autoPlay
            muted
            loop
            playsInline
          />

          <img
            src="/image.jpg"
            alt="project"
            className="w-[40%] md:w-[40vw] md:max-w-[420px] md:min-w-[100px] h-auto object-cover"
          />
        </div>
      </div>
    </main>
  );
}