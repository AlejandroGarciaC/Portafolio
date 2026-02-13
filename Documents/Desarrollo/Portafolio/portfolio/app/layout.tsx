import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/layout/FloatingNav"; 
import CursorGradient from './components/CursorGradient';
import "./globals.css";

// Configuración de fuentes optimizada
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-mono",
  display: 'swap',
});

// Metadatos profesionales para SEO y Redes Sociales
export const metadata: Metadata = {
  title: "Alejandro García Conde | Full Stack Developer",
  description: "Desarrollador Full Stack especializado en arquitecturas escalables y soluciones Micro-SaaS con enfoque en performance.",
  keywords: ["Full Stack Developer", "Next.js", "TypeScript", "React", "SaaS Developer", "Puebla Dev"],
  authors: [{ name: "Alejandro García Conde" }],
  creator: "Alejandro García Conde",
  openGraph: {
    title: "Alejandro García Conde | Portfolio",
    description: "Construyendo el futuro digital con código eficiente y diseño inmersivo.",
    url: "https://tu-portfolio.com", // Cambia esto cuando lo subas a internet
    siteName: "Alejandro García Conde Portfolio",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alejandro García Conde | Full Stack Developer",
    description: "Arquitectura de software y desarrollo web moderno.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body 
        className={`
          ${inter.variable} 
          ${jetbrainsMono.variable} 
          bg-[#0a0a0a] 
          text-gray-300 
          antialiased 
          selection:bg-cyan-500/30
        `}
      >
        {/* Efecto de luz que sigue al cursor */}
        <CursorGradient />
        
        {/* Navegación flotante */}
        <Navbar />
        
        {/* Contenedor principal sin justify-between para evitar saltos de scroll */}
        <main className="relative flex min-h-screen flex-col items-center overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}