import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lacunyada.com"),

  title: "lacunyada — Contemporary Jewelry & Object Design Studio",
  description:
    "lacunyada is a contemporary design studio focused on jewelry and objects made from glass, silver and experimental materials.",

  verification: {
    google: "ayWD_jWxVp5fgU4cXG5SJ6MZWDcwe2lADAEuIGGkxBs",
  },

  openGraph: {
    title: "lacunyada — Jewelry & Object Design Studio",
    description:
      "Contemporary jewelry & object design studio based on material research.",
    url: "https://lacunyada.com",
    siteName: "lacunyada",
    images: [
      {
        url: "https://lacunyada.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "lacunyada — Jewelry & Object Design Studio",
    description: "Contemporary jewelry & object design studio.",
    images: ["https://lacunyada.com/og-image.png"],
  },
};

// Efecto de la barra: gris al pasar el ratón (ordenador) o al pulsar (móvil)
const navLink =
  "transition-colors duration-200 hover:text-gray-400 active:text-gray-400";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white text-black font-sans flex flex-col">
        {/* NAVBAR GLOBAL (CON PADDING SOLO AQUÍ) */}
        <div className="shrink-0 px-6 md:px-16 py-6 md:py-10 flex items-center justify-between gap-6 md:gap-8">
          <nav className="min-w-0 grid grid-cols-[auto_auto] gap-x-6 gap-y-1 text-lg md:flex md:flex-nowrap md:gap-x-5 md:text-base tracking-normal">
            <Link href="/objects" className={navLink}>.objects</Link>
            <Link href="/exhibitions" className={navLink}>.exhibitions</Link>
            <Link href="/about" className={navLink}>.about</Link>
            <Link href="/order" className={navLink}>.order</Link>
          </nav>

          <Link href="/" aria-label="lacunyada, intro" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Lacunyada"
              width={160}
              height={160}
              priority
              className="h-20 md:h-24 w-auto"
            />
          </Link>
        </div>

        {/* CONTENIDO DE PÁGINAS — crece si el contenido es más alto que la pantalla */}
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}