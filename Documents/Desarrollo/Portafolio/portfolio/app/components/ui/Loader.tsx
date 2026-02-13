'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader({ finishLoading }: { finishLoading: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(finishLoading, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5; // Carga irregular para que se sienta real
      });
    }, 100);
    return () => clearInterval(timer);
  }, [finishLoading]);

  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0a] px-10">
      <div className="w-full max-w-md">
        {/* Contador Numérico */}
        <div className="flex justify-between mb-4 font-mono text-xs tracking-widest">
          <span className="text-cyan-500">LOADING_ASSETS</span>
          <span className="text-gray-500">{progress}%</span>
        </div>
        
        {/* Barra de Progreso */}
        <div className="h-[2px] w-full bg-white/5 overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
          />
        </div>

        {/* Texto Dinámico Inferior */}
        <motion.p 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-4 font-mono text-[10px] text-gray-600 uppercase text-center tracking-[0.3em]"
        >
          {progress < 40 ? "Initializing Kernel..." : progress < 80 ? "Loading UI Components..." : "Finalizing..."}
        </motion.p>
      </div>
    </div>
  );
}