"use client";

import { useEffect, useState } from "react";

function getTimeLeft() {
  // const target = new Date("2026-06-11T00:00:00");
  const target = new Date(Date.UTC(2026, 5, 10, 18, 30, 0))
  const now = new Date();
  const diff = target.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  const str = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card flex h-[64px] w-[56px] items-center justify-center sm:h-[80px] sm:w-[72px] md:h-[100px] md:w-[90px]">
        <span className="heading-anton text-[clamp(28px,5vw,48px)] leading-none text-gold">
          {str}
        </span>
      </div>
      <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white/30">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-5 py-20 text-center sm:px-6 md:py-28">
      <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">
        The Countdown
      </span>
      <h2 className="heading-anton mb-10 text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-white">
        OPENING KICKOFF
      </h2>

      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6">
        <CountdownUnit value={time.days} label="Days" />
        <span className="mb-4 text-[clamp(16px,3vw,36px)] font-thin text-white/20 sm:mb-6">:</span>
        <CountdownUnit value={time.hours} label="Hours" />
        <span className="mb-4 text-[clamp(16px,3vw,36px)] font-thin text-white/20 sm:mb-6">:</span>
        <CountdownUnit value={time.minutes} label="Minutes" />
        <span className="mb-4 text-[clamp(16px,3vw,36px)] font-thin text-white/20 sm:mb-6">:</span>
        <CountdownUnit value={time.seconds} label="Seconds" />
      </div>

      <p className="mt-10 text-[13px] text-white/30">
        June 11, 2026 &mdash; Estadio Azteca, Mexico City
      </p>
    </section>
  );
}
