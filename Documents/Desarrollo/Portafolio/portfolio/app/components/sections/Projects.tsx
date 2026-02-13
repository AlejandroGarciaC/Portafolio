'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2, Database } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: "Prueba 1",
    description: "Descripción.",
    tags: ["Next.js", "Node.js", "C#", "SQL Server"],
    links: { demo: "#", repo: "#" },
    image: "/project-placeholder-1.jpg", // Usaremos un color por ahora si no hay imagen
    color: "from-orange-500 to-red-600"
  },
  {
    id: 2,
    title: "Prueba 1",
    description: "Descripción.",
    tags: ["Next.js", "Node.js", "C#", "SQL Server"],
    links: { demo: "#", repo: "#" },
    image: "/project-placeholder-2.jpg",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 3,
    title: "Prueba 1",
    description: "Descripción.",
    tags: ["Next.js", "Node.js", "C#", "SQL Server"],
    links: { demo: "#", repo: "#" },
    image: "/project-placeholder-2.jpg",
    color: "from-blue-500 to-cyan-400"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Título de la sección */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex flex-col gap-4"
      >
        <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
          // Selected Work
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Proyectos Destacados
        </h2>
      </motion.div>

      {/* Grid de Proyectos */}
      <div className="grid gap-12 md:gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="group relative grid md:grid-cols-12 gap-8 items-center border border-white/10 bg-white/5 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors"
          >
            
            {/* Imagen del Proyecto (Lado Izquierdo o Derecho alternado) */}
            <div className={`md:col-span-7 relative h-64 md:h-96 rounded-2xl overflow-hidden border border-white/10 ${index % 2 === 1 ? 'md:order-last' : ''}`}>
              {/* Overlay de gradiente */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />
              
              {/* Placeholder visual (hasta que pongamos fotos reales) */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <Code2 className="text-gray-700 w-16 h-16" />
              </div>
            </div>

            {/* Contenido (Texto) */}
            <div className="md:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-mono rounded-full bg-cyan-950/30 text-cyan-400 border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Botones */}
              <div className="flex items-center gap-4">
                <Link href={project.links.demo} className="flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  Ver Demo
                </Link>
                <Link href={project.links.repo} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                  Código
                </Link>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

    </section>
  );
}