export default function Header() {
  return (
    <header className="fixed left-4 right-4 top-4 z-[100] mx-auto flex h-14 max-w-5xl items-center justify-between rounded-xl border border-white/[0.08] bg-black/90 px-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:left-6 sm:right-6 sm:px-6">
      <a href="#" className="flex items-center gap-3 no-underline" aria-label="World Cup Predictor 2026">
        <img src="/logo.png" alt="FIFA World Cup 2026" className="block h-[22px] w-auto" />
        <div className="flex flex-col">
          <span className="text-[10px] font-bold leading-tight tracking-wider text-white">
            WORLD CUP <span className="text-gold">PREDICTOR</span>
          </span>
        </div>
      </a>

      <a
        href="#waitlist"
        className="btn-primary px-3 py-1.5 text-[10px]"
        aria-label="Join the waitlist"
      >
        Join Waitlist
      </a>
    </header>
  );
}
