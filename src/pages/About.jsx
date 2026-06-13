import { TOKENS } from "../tokens";
import { ABOUT_TEXT, SKILLS } from "../data/content";
import PageHeader from "../components/PageHeader";

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="ABOUT" title="About" />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <div className="max-w-2xl mb-14" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
          {ABOUT_TEXT.map((para, i) => (
            <p key={i} className="mb-4">{para}</p>
          ))}
        </div>

        <h3 className="text-2xl mb-6" style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}>
          Skills & tools
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group}>
              <div
                className="text-xs mb-3"
                style={{ fontFamily: TOKENS.fontMono, color: TOKENS.accent, letterSpacing: "0.15em" }}
              >
                {group.toUpperCase()}
              </div>
              <ul style={{ fontFamily: TOKENS.fontBody, color: TOKENS.ink }}>
                {items.map((item) => (
                  <li key={item} className="mb-2 text-sm">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
