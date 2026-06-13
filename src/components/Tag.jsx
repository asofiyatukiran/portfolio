import { TOKENS } from "../tokens";

export default function Tag({ children, color }) {
  return (
    <span
      className="inline-block px-2 py-1 mr-2 mb-2 text-xs"
      style={{
        fontFamily: TOKENS.fontMono,
        color: color || TOKENS.inkSoft,
        border: `1px solid ${TOKENS.line}`,
        borderRadius: 4,
      }}
    >
      {children}
    </span>
  );
}
