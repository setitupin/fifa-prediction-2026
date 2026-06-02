"use client";

import { useEffect, useRef } from "react";

interface Team {
  id: string;
  name: string;
  initials: string;
  flagColor: string;
  fans: number;
  rank: number;
}

const teams: Team[] = [
  { id: "brazil", name: "Brazil", initials: "BR", flagColor: "#009739", fans: 8240, rank: 1 },
  { id: "arg", name: "Argentina", initials: "AR", flagColor: "#74ACDF", fans: 6510, rank: 2 },
  { id: "fra", name: "France", initials: "FR", flagColor: "#002395", fans: 5380, rank: 3 },
  { id: "ger", name: "Germany", initials: "DE", flagColor: "#000000", fans: 5220, rank: 4 },
  { id: "esp", name: "Spain", initials: "ES", flagColor: "#C60B1E", fans: 4870, rank: 5 },
  { id: "eng", name: "England", initials: "EN", flagColor: "#C8102E", fans: 4630, rank: 6 },
  { id: "por", name: "Portugal", initials: "PT", flagColor: "#006600", fans: 4150, rank: 7 },
  { id: "ita", name: "Italy", initials: "IT", flagColor: "#009246", fans: 3920, rank: 8 },
  { id: "ned", name: "Netherlands", initials: "NL", flagColor: "#AE1C28", fans: 3680, rank: 9 },
  { id: "usa", name: "USA", initials: "US", flagColor: "#B22234", fans: 3410, rank: 10 },
];

const maxFans = teams[0].fans;

function TeamBadge({ team }: { team: Team }) {
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100", "translate-y-0");
          if (barRef.current) {
            barRef.current.style.width = `${(team.fans / maxFans) * 100}%`;
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [team.fans]);

  return (
    <div
      ref={ref}
      className="card-glass flex items-center gap-3 px-4 py-3 opacity-0"
      style={{ transform: "translateY(16px)" }}
      role="button"
      tabIndex={0}
      aria-label={`${team.name} — ${team.fans.toLocaleString()} fans`}
    >
      {/* Rank glyph */}
      <span className="w-4 text-[11px] font-bold text-white/25">{team.rank}</span>

      {/* SVG flag circle with initials */}
      <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill={team.flagColor} />
        <circle cx="16" cy="16" r="14" stroke="rgba(255,215,0,0.3)" strokeWidth="1.5" />
        <text x="16" y="16" textAnchor="middle" dominantBaseline="central" fill="white" fontSize="11" fontWeight="700" fontFamily="Inter, sans-serif">
          {team.initials}
        </text>
      </svg>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <span className="truncate text-[13px] font-bold text-white">{team.name}</span>
          <span className="shrink-0 text-[10px] font-semibold text-[var(--text-muted)]">
            {team.fans.toLocaleString()}
          </span>
        </div>
        {/* Sparkline / progress bar */}
        <svg className="mt-1 h-1 w-full" aria-hidden="true">
          <rect x="0" y="0" width="0" height="100%" rx="2" fill="rgba(255,215,0,0.4)" ref={barRef} style={{ transition: "width 1s cubic-bezier(0.22, 1, 0.36, 1)" }} />
          <rect x="0" y="0" width="100%" height="100%" rx="2" fill="rgba(255,255,255,0.06)" />
        </svg>
      </div>
    </div>
  );
}

export default function TopTeams() {
  return (
    <section className="px-6 py-xxl" id="teams">
      <h2 className="mb-2 text-center text-[clamp(24px,3.5vw,34px)] font-black -tracking-[0.03em]">
        Most supported teams
      </h2>
      <p className="mb-12 text-center text-[15px] text-[var(--text-muted)]">
        The 10 most-followed fan bases on the platform
      </p>

      <div className="mx-auto flex max-w-[620px] flex-col gap-3">
        {teams.map((t) => (
          <TeamBadge key={t.id} team={t} />
        ))}
      </div>
    </section>
  );
}
