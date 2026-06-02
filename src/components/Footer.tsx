export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-white/[0.04] px-6 py-10 text-center">
      <div className="mx-auto max-w-[600px]">
        <div className="mb-6 flex items-center justify-center gap-2">
          <img src="/logo.png" alt="FIFA World Cup 2026" className="block h-6 w-auto" />
          <span className="text-[10px] font-bold tracking-wider text-white/60">
            WORLD CUP <span className="text-gold">PREDICTOR</span>
          </span>
        </div>
        <div className="mb-5 flex justify-center gap-6">
          <a href="#" className="text-[11px] font-medium text-white/20 no-underline transition-colors hover:text-gold/60">Privacy</a>
          <a href="#" className="text-[11px] font-medium text-white/20 no-underline transition-colors hover:text-gold/60">Terms</a>
          <a href="#" className="text-[11px] font-medium text-white/20 no-underline transition-colors hover:text-gold/60">Contact</a>
        </div>
        <p className="text-[10px] text-white/[0.07]">
          Built for the 2026 FIFA World Cup &bull; Not affiliated with FIFA
        </p>
      </div>
    </footer>
  );
}
