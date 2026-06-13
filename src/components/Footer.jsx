import { TOKENS } from "../tokens";
import { CONTACT } from "../data/content";

export default function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${TOKENS.line}`, backgroundColor: TOKENS.paper }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
        <span style={{ fontFamily: TOKENS.fontMono, fontSize: 12, color: TOKENS.inkSoft }}>
          © {new Date().getFullYear()} — Built with React
        </span>
        <div className="flex gap-5" style={{ fontFamily: TOKENS.fontMono, fontSize: 12 }}>
          <a href={`mailto:${CONTACT.email}`} style={{ color: TOKENS.ink }}>Email</a>
          <a href={CONTACT.github} style={{ color: TOKENS.ink }}>GitHub</a>
          <a href={CONTACT.linkedin} style={{ color: TOKENS.ink }}>LinkedIn</a>
          <a href={CONTACT.instagram} style={{ color: TOKENS.ink }}>Instagram</a>
        </div>
      </div>
    </footer>
  );
}
