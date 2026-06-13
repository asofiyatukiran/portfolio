import { NavLink, Link } from "react-router-dom";
import { TOKENS } from "../tokens";
import { NAME, NAV_LINKS } from "../data/content";

export default function Nav() {
  return (
    <header style={{ backgroundColor: TOKENS.dark }}>
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between flex-wrap gap-4">
        <Link
          to="/"
          style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.paperOnDark, fontSize: 18, letterSpacing: "0.02em" }}
        >
          {NAME}
        </Link>
        <nav className="flex gap-5 sm:gap-7 flex-wrap">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={({ isActive }) => ({
                fontFamily: TOKENS.fontMono,
                fontSize: 12,
                letterSpacing: "0.1em",
                color: isActive ? TOKENS.accent : TOKENS.mutedOnDark,
                textTransform: "uppercase",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
