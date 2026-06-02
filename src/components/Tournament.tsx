export default function Tournament() {
  const steps = [
    { num: "48", label: "Teams" },
    { num: "12", label: "Groups" },
    { num: "32", label: "Knockout" },
    { num: "1", label: "Champion" },
  ];

  return (
    <section className="px-6 py-xxl text-center" id="tournament">
      <h2 className="mb-2 text-[clamp(24px,3.5vw,34px)] font-black -tracking-[0.03em]">
        The 2026 FIFA World Cup
      </h2>
      <p className="mx-auto mb-12 max-w-[600px] text-[16px] leading-relaxed text-[var(--text-muted)]">
        48 teams, 12 groups, 32-team knockout adventure. Predict it all.
      </p>
      <div className="mx-auto flex max-w-[700px] items-center justify-center gap-0 max-md:flex-wrap max-md:gap-3">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center">
            <div className="card-glass flex min-w-[80px] flex-col items-center gap-1.5 px-7 py-5">
              <span className="text-[30px] font-black leading-none text-gradient-gold">
                {s.num}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-white/30">
                {s.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <span className="mx-1.5 flex items-center text-white/[0.06] max-md:hidden">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
