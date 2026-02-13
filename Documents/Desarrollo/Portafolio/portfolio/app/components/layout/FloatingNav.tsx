'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { name: '// inicio', href: '#home' },
  { name: '// proyectos', href: '#projects' },
  { name: '// sobre_mi', href: '#about' },
  { name: '// contacto', href: '#contact' },
];

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav className="relative flex items-center gap-1 rounded-full border border-white/10 bg-black/50 p-2 backdrop-blur-md shadow-lg shadow-cyan-500/5">
        
        {navLinks.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative px-4 py-2 text-sm text-gray-400 transition-colors hover:text-white font-mono"
          >
            {/* Fondo brillante al pasar el mouse (el efecto "magic") */}
            {hoveredIndex === index && (
              <motion.span
                layoutId="nav-hover"
                className="absolute inset-0 z-[-1] rounded-full bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            
            <span className="relative z-10">{link.name}</span>
          </Link>
        ))}

        {/* Botón CTA pequeño al final */}
        <div className="ml-2 pl-2 border-l border-white/10">
           <Link 
             href="https://github.com/AlejandroGarciaC" 
             target="_blank"
             className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-xs text-cyan-400 border border-cyan-500/20 transition-all font-mono"
           >
             GH
           </Link>
        </div>

      </nav>
    </motion.header>
  );
}