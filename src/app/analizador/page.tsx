import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebSpeedAnalyzerSection from "@/components/sections/WebSpeedAnalyzerSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analizador de Velocidad Web | Adriel's Systems",
  description: "Descubre cuánto tarda tu web en cargar y agenda una auditoría técnica gratuita con Adriel's Systems.",
};

export default function AnalizadorPage() {
  return (
    <main>
      <Navbar />
      <WebSpeedAnalyzerSection />
      <Footer />
    </main>
  );
}
