"use client";

import { useEffect, useRef } from "react";

const stats = [
  { num: "48", label: "Teams", sub: "Across 6 confederations" },
  { num: "16", label: "Host Cities", sub: "USA, Canada & Mexico" },
  { num: "104", label: "Matches", sub: "Over 39 days" },
  { num: "1", label: "Champion", sub: "Lifts the trophy" },
];

function StatCard({ num, label, sub, index }: { num: string; label: string; sub: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="glass-card flex flex-col items-center px-6 py-10 text-center opacity-0"
      style={{ transform: "translateY(24px)", transitionDelay: `${index * 100}ms`, transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <span className="heading-anton text-[clamp(36px,5vw,56px)] leading-none text-gradient-gold">
        {num}
      </span>
      <span className="mt-2 text-[13px] font-bold uppercase tracking-[0.12em] text-white/70">
        {label}
      </span>
      <span className="mt-1 text-[11px] text-white/25">{sub}</span>
    </div>
  );
}

export default function TournamentStats() {
  return (
    <section className="px-5 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">
          Tournament Overview
        </span>
        <h2 className="heading-anton mb-14 text-center text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-white">
          2026 FIFA WORLD CUP
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
