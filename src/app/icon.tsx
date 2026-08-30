import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #070b14 0%, #0d1527 100%)",
          borderRadius: "12px",
          border: "2px solid #00F0FF",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle background glow */}
        <div
          style={{
            position: "absolute",
            width: "36px",
            height: "36px",
            background:
              "radial-gradient(circle, rgba(0, 240, 255, 0.4) 0%, rgba(139, 92, 246, 0.2) 60%, transparent 80%)",
            borderRadius: "50%",
          }}
        />

        {/* Code & Lightning Glyph */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Code bracket left < */}
          <path
            d="M9 11 L4 16 L9 21"
            stroke="#00F0FF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Code bracket right > */}
          <path
            d="M23 11 L28 16 L23 21"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Center Electric Bolt ⚡ */}
          <path
            d="M18 5 L10 16 L15 16 L13 27 L22 14 L17 14 Z"
            fill="#00F0FF"
            stroke="#FFFFFF"
            strokeWidth="0.75"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
