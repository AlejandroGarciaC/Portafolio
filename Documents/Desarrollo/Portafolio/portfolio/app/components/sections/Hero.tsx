'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Terminal, FileDown,  Code2, Database, Layers } from 'lucide-react';
import Link from 'next/link';


export default function Hero() {
  
  // Configuración de la animación (escalonada)
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      
      {/* Luz de fondo ambiental (Spotlight effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }} // Retraso entre cada elemento
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
      >
        
        {/* 1. Badge de estado */}
        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/10 px-4 py-1.5 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs font-mono font-medium text-cyan-200">
            Disponible para nuevos proyectos
          </span>
        </motion.div>

        {/* 2. Título Principal */}
        <motion.h1 variants={fadeUp} className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          Dev Full Stack <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Visionario y Creativo
          </span>
        </motion.h1>

        {/* 3. Subtítulo */}
        <motion.p variants={fadeUp} className="mb-10 max-w-2xl text-lg text-gray-400 md:text-xl font-light leading-relaxed">
          {/* Transformo ideas complejas en software escalable desde <span className="text-white font-medium">Puebla, México</span>.  */}
          Especializado en arquitecturas C# , React , Next.js y soluciones Empresariales.
        </motion.p>

       {/* 4. Botones de Acción */}
        <motion.div variants={fadeUp} className="flex flex-col gap-4 sm:flex-row">
        
        <Link href="#projects" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-gray-200 hover:scale-105">
            <span className="mr-2">Explorar Portfolio</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>

        {/* <Link 
            href="https://github.com/AlejandroGarciaC" 
            target="_blank" 
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-8 font-medium text-white transition-all hover:bg-white/10 hover:border-white/40"
        >
            <Github className="mr-2 h-4 w-4" />
            GitHub
        </Link> */}

        {/* NUEVO: Botón Descargar CV */}
        <a 
            href="/CV_Alejandro_Garcia.pdf" // Ruta al archivo en tu carpeta /public
            download="CV_Alejandro_Garcia.pdf"
            className="inline-flex h-12 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/5 px-8 font-medium text-cyan-400 transition-all hover:bg-cyan-500/10 hover:border-cyan-500/60"
        >
            <FileDown className="mr-2 h-4 w-4" />
            Descargar CV
        </a>

        </motion.div>

        {/* 5. Tech Stack Mini (Opcional, estilo Tamal Sen) */}
        <motion.div variants={fadeUp} className="mt-16 flex items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Aquí podrías poner iconos de React, Node, SQL, etc. Por ahora texto plano elegante */}
           <span className="text-sm font-mono tracking-widest text-gray-500">
             STACK: C# • .NET • JAVASCRIPT • TAILWIND • NODE • SQL • REACT
           </span>
        </motion.div>

      </motion.div>
    </section>
  );
}


