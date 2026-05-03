import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lacunyada.com"),

  title: "lacunyada — Jewelry & Object Design Studio",
  description:
    "lacunyada is a contemporary design studio exploring jewelry, objects and experimental materials through material research.",

  verification: {
    google: "ayWD_jWxVp5fgU4cXG5SJ6MZWDcwe2lADAEuIGGkxBs",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "lacunyada — Jewelry & Object Design Studio",
    description:
      "Contemporary design studio focused on material research and experimental objects.",
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
    description:
      "Contemporary design studio focused on material research and experimental objects.",
    images: ["https://lacunyada.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}