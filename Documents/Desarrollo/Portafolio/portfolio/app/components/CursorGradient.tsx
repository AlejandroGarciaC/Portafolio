'use client';

import React, { useEffect, useState } from 'react';

export default function CursorGradient() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{
        background: `radial-gradient(490px at ${mousePos.x}px ${mousePos.y}px, rgba(34, 211, 238, 0.05), transparent 90%)`,
      }}
    />
  );
}