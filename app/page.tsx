"use client";

import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="h-screen flex items-center justify-center bg-white">
      
      <Link href="/home">
        <div className="cursor-pointer hover:scale-125 transition-transform duration-700 inline-block">
          
          <div className="animate-spin-slow">
            <Image
              src="/logo.png"
              alt="Lacunyada logo"
              width={400}
              height={400}
              priority
            />
          </div>

        </div>
      </Link>

    </main>
  );
}