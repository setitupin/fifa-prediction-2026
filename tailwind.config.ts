import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "usa-blue": "#0038A8",
        "canada-red": "#D80621",
        "mexico-green": "#006847",
        black: "#060606",
        surface: "#0a0a0a",
      },
      fontFamily: {
        heading: ["Anton", "Impact", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "18px",
        xl: "24px",
      },
      animation: {
        "ping-slow": "ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-in": "scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.25)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
