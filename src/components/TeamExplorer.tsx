"use client";

import { useEffect, useRef } from "react";

const teams = [
  { name: "Brazil", code: "br", confed: "CONMEBOL" },
  { name: "Argentina", code: "ar", confed: "CONMEBOL" },
  { name: "France", code: "fr", confed: "UEFA" },
  { name: "Germany", code: "de", confed: "UEFA" },
  { name: "Spain", code: "es", confed: "UEFA" },
  { name: "England", code: "gb-eng", confed: "UEFA" },
  { name: "Portugal", code: "pt", confed: "UEFA" },
  { name: "Italy", code: "it", confed: "UEFA" },
  { name: "Netherlands", code: "nl", confed: "UEFA" },
  { name: "USA", code: "us", confed: "CONCACAF" },
  { name: "Mexico", code: "mx", confed: "CONCACAF" },
  { name: "Canada", code: "ca", confed: "CONCACAF" },
];

function TeamCard({ team, index }: { team: typeof teams[number]; index: number }) {
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
      className="glass-card flex items-center gap-3 px-4 py-3.5 opacity-0"
      style={{ transform: "translateY(16px)", transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 40}ms` }}
    >
      <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/10">
        <img
          src={`https://flagcdn.com/24x18/${team.code}.png`}
          srcSet={`https://flagcdn.com/48x36/${team.code}.png 2x`}
          alt={`${team.name} flag`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-bold leading-tight text-white">{team.name}</div>
        <div className="text-[10px] font-medium uppercase tracking-[0.08em] text-white/25">{team.confed}</div>
      </div>
    </div>
  );
}

export default function TeamExplorer() {
  return (
    <section className="px-5 py-20 sm:px-6 md:py-28" id="teams">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">
          Featured Teams
        </span>
        <h2 className="heading-anton mb-3 text-center text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-white">
          NATIONAL TEAMS
        </h2>
        <p className="mx-auto mb-14 max-w-[500px] text-center text-[14px] text-white/35">
          Predict match outcomes for every team in the tournament. Pick your
          nation and lead them to glory.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teams.map((t, i) => (
            <TeamCard key={t.name} team={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
