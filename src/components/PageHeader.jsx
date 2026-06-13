import { TOKENS } from "../tokens";

// A short dark header band — used at the top of Dev / Design / Photo /
// About / Contact pages, beneath the Nav, so the dark area at the top of
// every page feels continuous.
export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ backgroundColor: TOKENS.dark, color: TOKENS.paperOnDark }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-6 pb-16 sm:pb-20">
        {eyebrow && (
          <div
            className="mb-4"
            style={{ fontFamily: TOKENS.fontMono, fontSize: 12, letterSpacing: "0.2em", color: TOKENS.accent }}
          >
            {eyebrow}
          </div>
        )}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl mb-3"
          style={{ fontFamily: TOKENS.fontDisplay }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="max-w-xl text-sm sm:text-base" style={{ color: TOKENS.mutedOnDark, fontFamily: TOKENS.fontBody }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
