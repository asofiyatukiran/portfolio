import { TOKENS } from "../tokens";
import { CONTACT } from "../data/content";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <div>
      <PageHeader eyebrow="CONTACT" title="Say hello" subtitle="Whether it's a project, a question, or just to talk shop — I'd like to hear from you." />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <a
          href={`mailto:${CONTACT.email}`}
          className="inline-flex items-center gap-2 px-5 py-3 mb-10"
          style={{
            fontFamily: TOKENS.fontMono,
            backgroundColor: TOKENS.ink,
            color: TOKENS.paper,
            borderRadius: 6,
            fontSize: 14,
          }}
        >
          {CONTACT.email}
        </a>

        <div className="flex gap-6" style={{ fontFamily: TOKENS.fontMono, fontSize: 13 }}>
          <a href={CONTACT.github} style={{ color: TOKENS.ink }}>GitHub →</a>
          <a href={CONTACT.linkedin} style={{ color: TOKENS.ink }}>LinkedIn →</a>
          <a href={CONTACT.instagram} style={{ color: TOKENS.ink }}>Instagram →</a>
        </div>
      </div>
    </div>
  );
}
