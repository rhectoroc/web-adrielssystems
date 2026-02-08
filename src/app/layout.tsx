import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Adriel's Systems | Soluciones Tecnológicas Globales",
    template: "%s | Adriel's Systems"
  },
  description: "Líderes en innovación digital con más de 20 años de experiencia. Desarrollo web, hosting VPS, automatización y soporte IT de clase mundial.",
  keywords: ["desarrollo web", "hosting vps", "soluciones tecnológicas", "adriel's systems", "software venezuela", "infraestructura it", "diseño web responsive"],
  authors: [{ name: "Adriel's Systems", url: "https://adrielssystems.com" }],
  creator: "Adriel's Systems",
  publisher: "Adriel's Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Adriel's Systems | Soluciones Tecnológicas Globales",
    description: "Transformamos tu negocio con tecnología de vanguardia. Hosting, desarrollo y consultoría IT.",
    url: "https://adrielssystems.com",
    siteName: "Adriel's Systems",
    images: [
      {
        url: "https://adrielssystems.com/og-image.jpg", // Asegúrate de tener esta imagen o cambiar la ruta
        width: 1200,
        height: 630,
        alt: "Adriel's Systems - Innovación Digital"
      }
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adriel's Systems | Innovación Digital",
    description: "Soluciones tecnológicas a tu medida. Más de 20 años de experiencia.",
    images: ["https://adrielssystems.com/og-image.jpg"], // Igual aquí
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import Chatbot from "@/components/ui/Chatbot";

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
          <Chatbot />
        </LanguageProvider>
      </body>
    </html>
  );
}
