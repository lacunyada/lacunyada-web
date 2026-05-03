import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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

  title: "lacunyada | Contemporary Jewelry & Object Design Studio",
  description:
    "lacunyada is a contemporary design studio focused on jewelry and objects made from glass, silver and experimental materials.",

  verification: {
    google: "ayWD_jWxVp5fgU4cXG5SJ6MZWDcwe2lADAEuIGGkxBs",
  },

  openGraph: {
    title: "lacunyada",
    description:
      "Contemporary jewelry & object design studio based on material research.",
    url: "https://lacunyada.com",
    siteName: "lacunyada",
    images: [
      {
        url: "https://lacunyada.com/og-image.jpg"
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "lacunyada",
    description:
      "Contemporary jewelry & object design studio.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}