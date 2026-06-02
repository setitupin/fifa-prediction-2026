"use client";

import { useEffect, useRef } from "react";

const cities = [
  { name: "Mexico City", venue: "Estadio Azteca", code: "mx" },
  { name: "New York / New Jersey", venue: "MetLife Stadium", code: "us" },
  { name: "Los Angeles", venue: "SoFi Stadium", code: "us" },
  { name: "Toronto", venue: "BMO Field", code: "ca" },
  { name: "Dallas", venue: "AT&T Stadium", code: "us" },
  { name: "Guadalajara", venue: "Estadio Akron", code: "mx" },
  { name: "Vancouver", venue: "BC Place", code: "ca" },
  { name: "Miami", venue: "Hard Rock Stadium", code: "us" },
];

function CityCard({ city }: { city: typeof cities[number] }) {
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
      className="glass-card flex items-center gap-4 px-5 py-4 opacity-0"
      style={{ transform: "translateY(16px)", transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
    >
      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-white/10">
        <img
          src={`https://flagcdn.com/24x18/${city.code}.png`}
          srcSet={`https://flagcdn.com/48x36/${city.code}.png 2x`}
          alt={`${city.name} flag`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="min-w-0">
        <div className="text-[14px] font-bold leading-tight text-white">{city.name}</div>
        <div className="text-[11px] text-white/35">{city.venue}</div>
      </div>
    </div>
  );
}

export default function HostCities() {
  return (
    <section className="px-5 py-20 sm:px-6 md:py-28" id="cities">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-2 block text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60">
          Host Nation
        </span>
        <h2 className="heading-anton mb-3 text-center text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-white">
          16 CITIES. 3 COUNTRIES.
        </h2>
        <p className="mx-auto mb-14 max-w-[500px] text-center text-[14px] text-white/35">
          The first World Cup hosted across three nations — celebrating the
          beautiful game across North America.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map((c) => (
            <CityCard key={c.name} city={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
