import { TOKENS } from "../tokens";
import { DEV_PROJECTS } from "../data/content";
import PageHeader from "../components/PageHeader";
import Tag from "../components/Tag";

export default function Dev() {
  return (
    <div>
      <PageHeader
        eyebrow="DEVELOPMENT"
        title="Selected builds"
        subtitle="A few projects I've built end-to-end, from database schema to the last pixel of the interface."
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <div className="flex flex-col gap-6">
          {DEV_PROJECTS.map((p) => (
            <div
              key={p.name}
              className="p-6"
              style={{ border: `1px solid ${TOKENS.line}`, borderRadius: 8, backgroundColor: TOKENS.paperDark }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h3 className="text-2xl" style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}>
                  {p.name}
                </h3>
                <span style={{ fontFamily: TOKENS.fontMono, color: TOKENS.inkSoft, fontSize: 13 }}>
                  {p.year}
                </span>
              </div>
              <p className="mb-4" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
                {p.desc}
              </p>
              <div className="mb-4">
                {p.tags.map((t) => (
                  <Tag key={t} color={TOKENS.accent2}>{t}</Tag>
                ))}
              </div>
              <div className="flex gap-5" style={{ fontFamily: TOKENS.fontMono, fontSize: 13 }}>
                <a href={p.live} style={{ color: TOKENS.ink }}>Live →</a>
                <a href={p.code} style={{ color: TOKENS.ink }}>Code →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
