'use client'; // Asegúrate de tener esto arriba

import { useState, useEffect } from 'react';
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Loader from "./components/ui/Loader"; // Importa el Loader

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <Loader finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="relative w-full">
          {/* Grilla de fondo que ya tenías */}
          <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-20" />

          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      )}
    </>
  );
}