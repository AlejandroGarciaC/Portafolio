'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      
      {/* Luz de fondo sutil */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-900/20 blur-[100px] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Hablemos de tu proyecto
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Estoy disponible para conectar. Elige tu canal preferido y construyamos algo increíble.
        </p>

        {/* --- ZONA DE BOTONES DE CONTACTO (Estilo Unificado) --- */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16">
          
          {/* 1. Botón Email (Ahora estilo Glass con brillo Cyan) */}
          <Link 
            href="mailto:tucorreo@ejemplo.com" 
            className="group w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-bold rounded-full hover:bg-red-500/20 hover:border-red-500/50 transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5 text-red-400" />
            <span>Email</span>
            <ArrowUpRight className="w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
          </Link>

          {/* 2. Botón WhatsApp (Estilo Glass con brillo Verde) */}
          <Link 
            href="https://wa.me/522223123961" 
            target="_blank"
            className="group w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-bold rounded-full hover:bg-green-500/20 hover:border-green-500/50 transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span>WhatsApp</span>
          </Link>

          {/* 3. Botón LinkedIn (Estilo Glass con brillo Azul) */}
          <Link 
            href="https://linkedin.com/in/alejandro-garc%C3%ADa-conde-70a23525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank"
            className="group w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-bold rounded-full hover:bg-blue-600/20 hover:border-blue-600/50 transition-all hover:scale-105"
          >
            <Linkedin className="w-5 h-5 text-blue-400" />
            <span>LinkedIn</span>
          </Link>

        </div>

        {/* Separador */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* Footer simple con número telefónico y copy */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2 text-gray-400">
             <Phone className="w-4 h-4" />
             <a href="tel:+522223123961" className="hover:text-white transition-colors font-mono">
               +52 (222) 212 3961
             </a>
          </div>

          <div className="flex gap-6">
            <Link href="https://github.com/AlejandroGarciaC" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </Link>
          </div>

          <div className="text-sm font-mono text-gray-600">
            &copy; {new Date().getFullYear()} Alejandro García Conde
          </div>

        </div>

      </motion.div>
    </section>
  );
}