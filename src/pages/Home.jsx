import { Link } from "react-router-dom";
import { TOKENS } from "../tokens";
import { NAME, HERO_INTRO, WHAT_I_DO } from "../data/content";
import RoleTicker from "../components/RoleTicker";

export default function Home() {
  return (
    <div>
      {/* ---------------- DARK HERO ---------------- */}
      <section style={{ backgroundColor: TOKENS.dark, color: TOKENS.paperOnDark }}>
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-24 sm:pb-32">
          <div
            className="mb-6"
            style={{ fontFamily: TOKENS.fontMono, fontSize: 12, letterSpacing: "0.2em", color: TOKENS.mutedOnDark }}
          >
            CURRENTLY WORKING AS A
          </div>
          <h1
            className="text-5xl sm:text-7xl md:text-8xl leading-[1.05] mb-8"
            style={{ fontFamily: TOKENS.fontDisplay }}
          >
            <RoleTicker />
          </h1>
          <p className="max-w-xl text-base sm:text-lg mb-10" style={{ color: TOKENS.mutedOnDark, fontFamily: TOKENS.fontBody }}>
            Hi, I'm {NAME.split(" ")[0]}. {HERO_INTRO}
          </p>
          <div className="flex gap-4 flex-wrap" style={{ fontFamily: TOKENS.fontMono, fontSize: 13 }}>
            <Link
              to="/contact"
              className="px-5 py-3"
              style={{ backgroundColor: TOKENS.accent, color: TOKENS.dark, borderRadius: 6 }}
            >
              Get in touch
            </Link>
            <Link
              to="/about"
              className="px-5 py-3"
              style={{ border: `1px solid ${TOKENS.lineDark}`, color: TOKENS.paperOnDark, borderRadius: 6 }}
            >
              About me
            </Link>
          </div>
        </div>
      </section>

      {/* ---------------- LIGHT: WHAT I DO ---------------- */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 py-16 sm:py-24">
        <h2 className="text-2xl sm:text-3xl mb-10" style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}>
          What I do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {WHAT_I_DO.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block p-6"
              style={{ border: `1px solid ${TOKENS.line}`, borderRadius: 8, backgroundColor: TOKENS.paperDark }}
            >
              <div className="text-xl mb-2" style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}>
                {item.title}
              </div>
              <p className="text-sm" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
