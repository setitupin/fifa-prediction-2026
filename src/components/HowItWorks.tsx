"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Predict",
    desc: "Forecast every match result — group stage through the final.",
  },
  {
    step: "02",
    title: "Earn Points",
    desc: "Score points for correct predictions. Climb the leaderboard.",
  },
  {
    step: "03",
    title: "Compete",
    desc: "Challenge friends and fans worldwide in real-time.",
  },
  {
    step: "04",
    title: "Win Glory",
    desc: "Top the rankings and earn ultimate bragging rights.",
  },
];

function StepCard({ step, index }: { step: typeof steps[number]; index: number }) {
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
      className="glass-card px-6 py-8 text-center opacity-0"
      style={{ transform: "translateY(20px)", transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 80}ms` }}
    >
      <span className="heading-anton text-[clamp(24px,3vw,36px)] text-gold/30">{step.step}</span>
      <h3 className="mt-2 text-[18px] font-bold text-white">{step.title}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-white/35">{step.desc}</p>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section className="px-5 py-20 sm:px-6 md:py-28" id="how">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">
          How It Works
        </span>
        <h2 className="heading-anton mb-14 text-center text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-white">
          PLAY. PREDICT. WIN.
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <StepCard key={s.step} step={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
