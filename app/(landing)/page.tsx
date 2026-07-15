"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  const [fade, setFade] = useState(false);

  // 1. Auto-avance a los 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // 2. Navegación tras el fade
  useEffect(() => {
    if (!fade) return;

    const navTimer = setTimeout(() => {
      router.replace("/home");
    }, 600);

    return () => clearTimeout(navTimer);
  }, [fade, router]);

  function handleSkip() {
    setFade(true);
  }

  return (
    <main
      onClick={handleSkip}
      className={`h-screen w-screen flex items-center justify-center bg-white relative cursor-pointer transition-opacity duration-700 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="animate-spin-slow">
        <Image
          src="/logo.png"
          alt="Lacunyada logo"
          width={200}
          height={200}
          priority
        />
      </div>
    </main>
  );
}