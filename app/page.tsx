import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

const BASE_URL = "https://aamnative.com";

export const metadata: Metadata = {
  alternates: {
    canonical: BASE_URL,
  },
};

export default function HomePage() {
  return <HomeClient />;
}
