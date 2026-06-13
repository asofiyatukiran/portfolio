import { TOKENS } from "../tokens";
import { DESIGN_PROJECTS } from "../data/content";
import PageHeader from "../components/PageHeader";

export default function Design() {
  return (
    <div>
      <PageHeader
        eyebrow="DESIGN"
        title="Visual work"
        subtitle="Identity, interface, and editorial projects — a sample of how I approach a visual problem from brief to finished system."
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <div className="flex flex-col gap-12">
          {DESIGN_PROJECTS.map((p) => (
            <div key={p.name} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-64 object-cover"
                style={{ borderRadius: 8, border: `1px solid ${TOKENS.line}` }}
              />
              <div>
                <h3 className="text-2xl mb-1" style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}>
                  {p.name}
                </h3>
                <div
                  className="text-xs mb-3"
                  style={{ fontFamily: TOKENS.fontMono, color: TOKENS.accent, letterSpacing: "0.1em" }}
                >
                  {p.role.toUpperCase()} — {p.tools}
                </div>
                <p style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
