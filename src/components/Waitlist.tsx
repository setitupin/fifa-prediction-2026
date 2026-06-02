"use client";

import { useState, type FormEvent } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successTitle, setSuccessTitle] = useState("YOU&rsquo;RE ON THE LIST!");
  const [successDesc, setSuccessDesc] = useState(
    "Thanks for joining the waitlist. We&rsquo;ll keep you posted on early access and exclusive updates."
  );

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const val = email.trim();
    if (!val || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      setError(true);
      setErrorMsg("Please enter a valid email address");
      return;
    }
    setError(false);
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("https://api.fifa26prediction.com/api/waitlist/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: val }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        if (res.status === 409 && data?.error === "Email already registered") {
          setEmail("");
          setSubmitted(true);
          setSuccessTitle("ALREADY ON THE LIST!");
          setSuccessDesc("You&rsquo;re already signed up &mdash; no need to worry! We&rsquo;ll keep you posted on early access and exclusive updates.");
          setShowSuccess(true);
          return;
        }
        throw new Error(data?.message || data?.detail || "Something went wrong. Please try again.");
      }

      setEmail("");
      setSubmitted(true);
      setSuccessTitle("YOU&rsquo;RE ON THE LIST!");
      setSuccessDesc("Thanks for joining the waitlist. We&rsquo;ll keep you posted on early access and exclusive updates.");
      setShowSuccess(true);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(true);
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setError(false); setErrorMsg(""); }}
                placeholder="your@email.com"
                aria-label="Email address"
                required
                disabled={loading}
                className={`w-full rounded-lg border bg-white/[0.04] px-5 py-[15px] font-sans text-[14px] text-white outline-none transition-colors placeholder:text-white/20 focus:border-gold/30 disabled:cursor-not-allowed disabled:opacity-50 ${
                  error ? "border-red-500/40" : "border-white/10"
                }`}
              />
              {error && errorMsg && (
                <p className="absolute -bottom-5 left-1 text-[11px] text-red-400">
                  {errorMsg}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-[15px] text-[14px] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Joining...
                </>
              ) : (
                "Join"
              )}
            </button>
          </form>

          <p className="mt-4 text-[11px] text-white/15">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {showSuccess && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowSuccess(false)}
        >
          <div
            className="relative w-full max-w-[400px] rounded-2xl border border-gold/20 bg-[#0a0a0f] p-8 text-center shadow-2xl shadow-gold/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d4a853" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <path d="M22 4L12 14.01l-3-3" />
              </svg>
            </div>

            <h3 className="heading-anton mb-2 text-[22px] tracking-wide text-white">
              {successTitle}
            </h3>
            <p className="mb-6 text-[14px] leading-relaxed text-white/40">
              {successDesc}
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="btn-primary w-full px-6 py-3 text-[14px]"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
