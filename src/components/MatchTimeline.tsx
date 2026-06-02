"use client";

import { useEffect, useRef } from "react";

const matches = [
  { date: "Jun 11", label: "Opening Match", venue: "Estadio Azteca, Mexico City" },
  { date: "Jun 11–27", label: "Group Stage", venue: "All 16 host cities" },
  { date: "Jun 28–Jul 3", label: "Round of 32", venue: "Various venues" },
  { date: "Jul 4–7", label: "Round of 16", venue: "Various venues" },
  { date: "Jul 10–11", label: "Quarter-Finals", venue: "Various venues" },
  { date: "Jul 14–15", label: "Semi-Finals", venue: "AT&T Stadium & Mercedes-Benz Stadium" },
  { date: "Jul 18", label: "Third Place", venue: "Hard Rock Stadium, Miami" },
  { date: "Jul 19", label: "The Final", venue: "MetLife Stadium, New York/New Jersey" },
];

function TimelineItem({ match, index }: { match: typeof matches[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("opacity-100");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isFinal = match.label === "The Final";

  return (
    <div
      ref={ref}
      className="flex items-start gap-5 opacity-0"
      style={{ transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms` }}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`z-[1] h-3 w-3 rounded-full border-2 ${isFinal ? "border-gold bg-gold shadow-[0_0_12px_rgba(212,175,55,0.3)]" : "border-white/20 bg-black"}`}
        />
        {index < matches.length - 1 && <div className="h-full w-px bg-white/[0.06]" />}
      </div>

      {/* Content */}
      <div className={`pb-10 ${isFinal ? "rounded-xl border border-gold/15 bg-white/[0.03] px-5 py-4" : ""}`}>
        <div className="flex items-baseline gap-3">
          <span className={`text-[11px] font-bold uppercase tracking-[0.12em] ${isFinal ? "text-gold" : "text-white/40"}`}>
            {match.date}
          </span>
        </div>
        <div className={`mt-0.5 text-[16px] font-bold ${isFinal ? "text-gold" : "text-white"}`}>
          {match.label}
        </div>
        <div className="mt-0.5 text-[12px] text-white/30">{match.venue}</div>
      </div>
    </div>
  );
}

export default function MatchTimeline() {
  return (
    <section className="px-5 py-20 sm:px-6 md:py-28" id="matches">
      <div className="mx-auto max-w-[600px]">
        <span className="mb-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">
          Match Schedule
        </span>
        <h2 className="heading-anton mb-14 text-center text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-white">
          THE ROAD TO GLORY
        </h2>
        <div className="ml-2">
          {matches.map((m, i) => (
            <TimelineItem key={m.label} match={m} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
