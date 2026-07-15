import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="shrink-0 px-6 md:px-16 py-10">
          <nav className="flex gap-5 text-sm md:text-base tracking-normal">
            <Link href="/">lacunyada</Link>
            <Link href="/objects">.objects</Link>
            <Link href="/exhibitions">.exhibitions</Link>
            <Link href="/about">.about</Link>
            <Link href="/order">.order</Link>
          </nav>
        </div>

        {/* CONTENIDO DE PÁGINAS — crece si el contenido es más alto que la pantalla */}
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}