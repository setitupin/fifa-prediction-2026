import { ImageResponse } from "next/og";

export const alt = "World Cup Predictor 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(ellipse at 50% 40%, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
          fontFamily:
            '"SF Pro Display", "Helvetica Neue", "Segoe UI", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#fff",
            textAlign: "center",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
          }}
        >
          PREDICT THE
        </div>
        <div
          style={{
            fontSize: 106,
            fontWeight: 800,
            color: "#D4AF37",
            textAlign: "center",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
            marginTop: 8,
          }}
        >
          WORLD CUP
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255, 255, 255, 0.5)",
            textAlign: "center",
            marginTop: 24,
            fontWeight: 500,
            letterSpacing: "0.02em",
          }}
        >
          2026 FIFA World Cup Predictor
        </div>
      </div>
    ),
    { ...size },
  );
}
