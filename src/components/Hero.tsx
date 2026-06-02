export default function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-5 pb-16 pt-[100px] text-center sm:px-6 md:pt-[140px]">
      {/* Stadium glow */}
      <div className="stadium-glow pointer-events-none fixed inset-0 z-0" aria-hidden />

      {/* Gold accent line */}
      <div className="absolute left-1/2 top-[140px] h-px w-20 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <span className="relative z-[1] mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.03] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/80 backdrop-blur-md">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-gold opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
        </span>
        Coming June 2026
      </span>

      <h1 className="heading-anton relative z-[1] max-w-[1100px] text-[clamp(36px,12vw,130px)] leading-[0.92] tracking-[-0.02em] text-white sm:text-[clamp(48px,12vw,130px)]">
        PREDICT THE{" "}
        <span className="text-gradient-gold">WORLD CUP</span>
        <br />
        <span className="text-[clamp(24px,8vw,90px)] sm:text-[clamp(36px,8vw,90px)]">COMPETE WITH FRIENDS</span>
      </h1>

      <p className="relative z-[1] mb-10 mt-6 max-w-[600px] text-[clamp(15px,1.8vw,17px)] leading-relaxed text-white/45">
        Every group. Every knockout. Every goal. Predict the 2026 FIFA World Cup
        with friends. Zero betting. All bragging rights.
      </p>

      <div className="relative z-[1] flex flex-wrap justify-center gap-4">
        <a href="#waitlist" className="btn-primary px-6 py-3.5 text-[14px] sm:px-10 sm:py-4 sm:text-[15px]">
          Get Early Access
        </a>
        <a href="#how" className="btn-secondary px-6 py-3.5 text-[14px] sm:px-10 sm:py-4 sm:text-[15px]">
          Explore
        </a>
      </div>
    </section>
  );
}
