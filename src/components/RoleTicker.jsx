import { useState, useEffect } from "react";
import { TOKENS } from "../tokens";
import { ROLES } from "../data/content";

// Cycles through ROLES (Developer / Designer / Photographer) every few
// seconds, fading each word in and out. The `key={index}` trick forces
// React to re-mount the span each time, restarting the CSS animation.
export default function RoleTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="inline-flex items-baseline" style={{ minWidth: "1ch" }}>
      <span
        key={index}
        style={{
          color: TOKENS.accent,
          fontFamily: TOKENS.fontDisplay,
          animation: "roleFade 2.4s ease",
          display: "inline-block",
        }}
      >
        {ROLES[index]}
      </span>
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "0.08em",
          height: "0.85em",
          backgroundColor: TOKENS.accent,
          marginLeft: "0.15em",
          animation: "cursorBlink 1s steps(1) infinite",
        }}
      />
      <style>{`
        @keyframes roleFade {
          0% { opacity: 0; transform: translateY(0.25em); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes cursorBlink {
          50% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          span { animation: none !important; }
        }
      `}</style>
    </span>
  );
}
