"use client";

import { useState, type FormEvent } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const val = email.trim();
    if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setError(true);
      return;
    }
    setError(false);
    setSubmitted(true);
  };

  return (
    <section className="px-5 py-20 text-center sm:px-6 md:py-28" id="waitlist">
      <div className="mx-auto max-w-[520px]">
        <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-gold/15 bg-gold/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-gold">
          Limited Access
        </span>

        <h2 className="heading-anton mb-3 text-[clamp(28px,4vw,48px)] leading-none tracking-wide text-white">
          GET EARLY ACCESS
        </h2>
        <p className="mb-8 text-[14px] leading-relaxed text-white/35">
          Be among the first to predict the 2026 World Cup. Join thousands of
          fans already on the list.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(false); }}
              placeholder="your@email.com"
              aria-label="Email address"
              required
              className={`flex-1 rounded-lg border bg-white/[0.04] px-5 py-[15px] font-sans text-[14px] text-white outline-none transition-colors placeholder:text-white/20 focus:border-gold/30 ${
                error ? "border-red-500/40" : "border-white/10"
              }`}
            />
            <button type="submit" className="btn-primary px-8 py-[15px] text-[14px]">
              Join
            </button>
          </form>
        ) : (
          <div className="rounded-xl border border-gold/10 bg-white/[0.04] px-6 py-5 text-[15px] font-semibold text-gold backdrop-blur-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="mr-2 inline-block align-middle">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
            You&rsquo;re on the waitlist!
          </div>
        )}

        <p className="mt-4 text-[11px] text-white/15">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
