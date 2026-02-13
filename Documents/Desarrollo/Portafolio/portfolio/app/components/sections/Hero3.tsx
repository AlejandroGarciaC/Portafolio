'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Github, ChevronDown } from 'lucide-react';
import Link from 'next/link';

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
    <section id="home" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 perspective-[1000px]">
      
      {/* --- EL HORIZONTE DIGITAL (FONDO 3D) --- */}
      
      {/* 1. La Rejilla en Perspectiva (El suelo que se mueve) */}
      <div className="absolute inset-0 transform-gpu overflow-hidden">
        <div 
            // Esta es la magia: rotamos un plano gigante en 3D para hacer el "suelo"
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [transform:rotateX(60deg)_scale(3)] animate-grid-flow origin-top"
        />
      </div>
      
      {/* 2. Máscara de Atmósfera (Para que la rejilla se desvanezca en la oscuridad) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-0 pointer-events-none" />

      {/* 3. Luz superior ambiental (Spotlight) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none z-0" />


      {/* --- CONTENIDO PRINCIPAL (HUD) --- */}
      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mt-10"
      >
        
        {/* Badge Tech Pequeño */}
        <motion.div variants={fadeUp} className="mb-6 flex items-center gap-2 text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase">
          <span className="h-px w-8 bg-cyan-500/50"></span>
          Architecting the future
          <span className="h-px w-8 bg-cyan-500/50"></span>
        </motion.div>

        {/* Título Principal Masivo y Limpio */}
        <motion.h1 variants={fadeUp} className="mb-8 text-6xl font-extrabold tracking-tighter md:text-8xl lg:text-9xl text-white">
          FULL STACK <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
            DEVELOPER.
          </span>
        </motion.h1>

        {/* Subtítulo Técnico con acentos de color */}
        <motion.p variants={fadeUp} className="mb-12 max-w-2xl text-lg text-gray-400 md:text-xl font-light leading-relaxed">
          Especialista en la creación de <span className="text-cyan-300 font-medium">Micro-SaaS</span> y sistemas de alto rendimiento.
          Transformo requerimientos complejos en código limpio desde Puebla, México.
        </motion.p>

        {/* Botones de Acción */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5">
          
          <Link href="#projects" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-cyan-500 px-10 text-lg font-bold text-black transition-all hover:bg-cyan-400 hover:scale-105 shadow-lg shadow-cyan-500/30">
            <span className="mr-2">Explorar Trabajo</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link href="https://github.com/tu-usuario" target="_blank" className="inline-flex h-14 items-center justify-center rounded-full border border-white/10 bg-white/5 px-10 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/30">
            <Github className="mr-2 h-5 w-5" />
            GitHub v2.0
          </Link>

        </motion.div>

      </motion.div>
      
      {/* Indicador de Scroll inferior */}
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>

    </section>
  );
}