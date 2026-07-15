import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "lacunyada — Contemporary Jewelry & Object Design Studio",
  description:
    "lacunyada is a contemporary design studio focused on jewelry and objects made from glass, silver and experimental materials.",
};

export default function Page() {
  return <HomeClient />;
}