"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Landing() {
  const router = useRouter();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFade(true); // primero fade out

      setTimeout(() => {
        router.push("/home"); // luego cambio de página
      }, 600); // duración del fade
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <main
      className={`h-screen flex items-center justify-center bg-white relative transition-opacity duration-700 ${
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