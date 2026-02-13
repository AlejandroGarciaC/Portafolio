'use client';

import { motion } from 'framer-motion';
import { Cpu, Globe, Zap, Coffee, BookOpen, Music } from 'lucide-react';

export default function About() {
  
  // Datos reales basados en tu perfil
  const skills = [
    "C# / .NET","JavaScript", "TypeScript","Python", "React / Next.js", 
    "Node.js", "SQL / Postgres", "Tailwind CSS", 
    "Git / GitHub", "Framer Motion"
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      <div className="grid md:grid-cols-2 gap-16 items-center">
        
        {/* Lado Izquierdo: La Historia */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            // Sobre mí
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Más que código,<br />
            <span className="text-gray-500">creo soluciones.</span>
          </h2>
          
          <div className="space-y-4 text-gray-400 leading-relaxed text-lg">
            <p>
              Soy un desarrollador apasionado por la arquitectura de software limpia y escalable. 
              Actualmente resido en <span className="text-white">Puebla</span>, donde combino la lógica del backend con la creatividad del frontend.
            </p>
            <p>
              Mi enfoque va más allá de la escritura de código; me centro en diseñar soluciones tecnológicas que optimicen procesos operativos y eleven la experiencia del usuario final, aportando un valor tangible al crecimiento del negocio.
            </p>
            <p className="pt-4 border-t border-white/10 mt-6">
              Fuera del código, me mantengo en movimiento y busco inspiración en la lectura y proyectos personales. Creo que una mente activa y curiosa es la clave para resolver desafíos técnicos con creatividad.
            </p>
          </div>

         {/* Conceptos / Personalidad (Iconos más generales) */}
        <div className="flex gap-6 mt-8">
        <div className="flex flex-col items-center gap-2 group">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
            <Zap className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="text-xs text-gray-500 font-mono">Disciplina</span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
            <BookOpen className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-xs text-gray-500 font-mono">Lectura</span>
        </div>
        <div className="flex flex-col items-center gap-2 group">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-cyan-500/50 transition-colors">
            <Globe className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-xs text-gray-500 font-mono">Exploración</span>
        </div>
        </div>
        </motion.div>

        {/* Lado Derecho: El Stack Tecnológico */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Fondo decorativo tras las habilidades */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 blur-2xl rounded-full -z-10" />

          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" />
              Tech Stack
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-white/20"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                  <span className="text-sm text-gray-300 font-mono">{skill}</span>
                </div>
              ))}
            </div>

            {/* Quote de cierre tipo terminal */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="font-mono text-xs text-gray-500">
                <span className="text-green-400">user@Alex:~$</span> echo "Always learning..."
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}