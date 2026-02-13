'use client';

import { motion, Variants } from 'framer-motion'; // <--- Añade Variants aquí
import { ArrowRight, Github, Code2, Database, Layout, Server, Cpu } from 'lucide-react';
import Link from 'next/link';

// Componente para los elementos flotantes del fondo
const FloatingIcon = ({ icon: Icon, delay, x, y, color }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3], 
      scale: [1, 1.1, 1],
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0]
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay: delay,
      ease: "easeInOut" 
    }}
    className={`absolute ${x} ${y} p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-2xl z-0 pointer-events-none`}
  >
    <Icon className={`w-8 h-8 ${color}`} />
  </motion.div>
);

export default function Hero() {
  
  const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* --- FONDO DINÁMICO --- */}
      
      {/* 1. Spotlight Central Brillante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* 2. Elementos Flotantes (La "Atmósfera Dev") */}
      {/* Ajusta las posiciones (top/left/right/bottom) según tu gusto */}
      <FloatingIcon icon={Code2} delay={0} x="top-24 left-[10%]" color="text-cyan-400" />
      <FloatingIcon icon={Database} delay={2} x="bottom-32 right-[15%]" color="text-purple-400" />
      <FloatingIcon icon={Server} delay={1.5} x="top-40 right-[20%]" color="text-green-400" />
      <FloatingIcon icon={Layout} delay={3} x="bottom-20 left-[15%]" color="text-pink-400" />
      <FloatingIcon icon={Cpu} delay={1} x="top-1/2 left-[5%] -translate-y-1/2" color="text-blue-400" />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
      >
        
        {/* Badge "Hiring" Estilo Terminal */}
        <motion.div variants={fadeUp} className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/30 px-5 py-2 backdrop-blur-md shadow-lg shadow-cyan-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-mono font-medium text-cyan-200 tracking-wide">
            System Online • Ready to Code
          </span>
        </motion.div>

        {/* Título Masivo */}
        <motion.h1 variants={fadeUp} className="mb-8 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          Construyo el <br />
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 blur-2xl opacity-30"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-blue-500">
              Futuro Digital
            </span>
          </span>
        </motion.h1>

        {/* Subtítulo Descriptivo */}
        <motion.p variants={fadeUp} className="mb-12 max-w-2xl text-lg text-gray-400 md:text-xl font-light leading-relaxed">
          Desarrollador Full Stack obsesionado con la <span className="text-white font-medium">performance</span> y el diseño. 
          Creo experiencias web inmersivas y arquitecturas backend robustas desde <span className="text-cyan-400">Puebla</span>.
        </motion.p>

        {/* Botones de Acción */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
          
          <Link href="#projects" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 text-lg font-bold text-black transition-all hover:bg-cyan-50 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            <span className="mr-2">Ver mis Proyectos</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link href="https://github.com/tu-usuario" target="_blank" className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/40">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Link>

        </motion.div>

        {/* Stack Mini Visualizer */}
        <motion.div variants={fadeUp} className="mt-20 pt-8 border-t border-white/5 w-full flex justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Aquí puedes poner logotipos reales en SVG si los tienes, por ahora texto estilizado */}
           <span className="text-sm font-mono tracking-[0.2em] text-gray-500 hover:text-cyan-400 transition-colors cursor-default">NEXT.JS</span>
           <span className="text-sm font-mono tracking-[0.2em] text-gray-500 hover:text-purple-400 transition-colors cursor-default">NODE</span>
           <span className="text-sm font-mono tracking-[0.2em] text-gray-500 hover:text-green-400 transition-colors cursor-default">POSTGRES</span>
           <span className="text-sm font-mono tracking-[0.2em] text-gray-500 hover:text-pink-400 transition-colors cursor-default">AI/LLMS</span>
        </motion.div>

      </motion.div>
    </section>
  );
}