"use client";

import { useEffect, useState } from "react";

export default function BgCanvas() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.3 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Main gold stadium spotlight */}
      <div
        className="absolute h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${pos.x * 100}%`,
          top: `${pos.y * 100}%`,
          background: "radial-gradient(circle at center, rgba(212,175,55,0.06) 0%, rgba(212,175,55,0.015) 35%, transparent 65%)",
          filter: "blur(100px)",
          transition: "left 1.4s cubic-bezier(0.22, 1, 0.36, 1), top 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Cool blue spotlight — opposite */}
      <div
        className="absolute h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: `${(1 - pos.x) * 100}%`,
          top: `${(1 - pos.y) * 100}%`,
          background: "radial-gradient(circle at center, rgba(0,56,168,0.04) 0%, transparent 55%)",
          filter: "blur(120px)",
          transition: "left 2s cubic-bezier(0.22, 1, 0.36, 1), top 2s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Static ambient glow */}
      <div
        className="absolute -left-[10%] -top-[12%] h-[500px] w-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(212,175,55,0.03) 0%, transparent 70%)", filter: "blur(100px)" }}
      />
      <div
        className="absolute bottom-[5%] right-[-5%] h-[450px] w-[450px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,56,168,0.025) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      {/* Decorative SVG arcs — hidden on mobile */}
      <svg className="absolute left-1/2 top-[3%] hidden h-[800px] w-[800px] -translate-x-1/2 -rotate-[12deg] md:block" viewBox="0 0 600 600" fill="none" aria-hidden>
        <circle cx="300" cy="300" r="280" stroke="rgba(212,175,55,0.03)" strokeWidth="1" />
        <circle cx="300" cy="300" r="230" stroke="rgba(255,255,255,0.015)" strokeWidth="1" />
        <circle cx="300" cy="300" r="180" stroke="rgba(212,175,55,0.025)" strokeWidth="1" strokeDasharray="5 8" />
      </svg>
    </div>
  );
}
