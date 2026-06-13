
import './App.css'
import React, { useState } from "react";
import {
  Mail,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";


/*
  ============================================================
  PORTFOLIO — "CONTACT SHEET" THEME
  ============================================================
  The whole site is one component that swaps between six
  "frames" (sections), navigated through a film-strip style
  sidebar — each frame is numbered like a negative on a roll
  of film, which fits a developer / designer / photographer.

  HOW TO CUSTOMIZE:
  - Replace the placeholder text in the DATA section below
    (your name, projects, photos, links, bio).
  - Photography images use picsum.photos placeholders —
    swap the `img` URLs for your own photos.
  - Colors, fonts and spacing are controlled by the TOKENS
    object and the <style> block at the top of the file.
  ============================================================
*/

// ---------------------------------------------------------
// DESIGN TOKENS — change these to restyle the whole site
// ---------------------------------------------------------
const TOKENS = {
  paper: "#EDEAE2",
  paperDark: "#E1DCD2",
  ink: "#221F1C",
  inkSoft: "#6F6A63",
  line: "#CFC8BC",
  red: "#C2452C", // signature accent — used for the active frame + key highlights
  teal: "#4F6E6E", // development accent
  gold: "#C49A3B", // design accent
  fontDisplay: "'Fraunces', serif",
  fontBody: "'Work Sans', sans-serif",
  fontMono: "'IBM Plex Mono', monospace",
};

// ---------------------------------------------------------
// CONTENT — edit this section with your own information
// ---------------------------------------------------------
const NAV_ITEMS = [
  { id: "home", frame: "01", label: "INDEX" },
  { id: "dev", frame: "02", label: "DEVELOP" },
  { id: "design", frame: "03", label: "DESIGN" },
  { id: "photo", frame: "04", label: "PHOTOGRAPH" },
  { id: "about", frame: "05", label: "ABOUT" },
  { id: "contact", frame: "06", label: "CONTACT" },
];

const NAME = "Maya Chen";

const DEV_PROJECTS = [
  {
    name: "Tidal",
    year: "2025",
    tags: ["React", "Node.js", "PostgreSQL"],
    desc:
      "A booking platform for boutique hotels, with a custom availability calendar and an admin dashboard for managing rooms and rates.",
    live: "#",
    code: "#",
  },
  {
    name: "Loom Notes",
    year: "2024",
    tags: ["TypeScript", "Next.js", "SQLite"],
    desc:
      "A markdown-based journaling app with local-first storage, daily prompts, and a calendar view of past entries.",
    live: "#",
    code: "#",
  },
  {
    name: "Pixel Press",
    year: "2024",
    tags: ["Python", "Jinja", "CLI"],
    desc:
      "A small static site generator built for photographers — drop a folder of images in, get a clean gallery site out.",
    live: "#",
    code: "#",
  },
];

const DESIGN_PROJECTS = [
  {
    name: "Northbound",
    role: "Brand identity",
    tools: "Figma, Illustrator",
    desc:
      "Full identity system for an outdoor outfitter — wordmark, trail-map iconography, and packaging for a small product line.",
    img: "https://picsum.photos/seed/northbound/800/600",
  },
  {
    name: "Folio",
    role: "UI kit",
    tools: "Figma",
    desc:
      "A component library and design system built for creative agencies, with a focus on flexible grid layouts and type pairings.",
    img: "https://picsum.photos/seed/folio/800/600",
  },
  {
    name: "Marble",
    role: "Editorial redesign",
    tools: "InDesign, Figma",
    desc:
      "A redesign of a quarterly food magazine — new grid system, typography, and a refreshed cover format.",
    img: "https://picsum.photos/seed/marble/800/600",
  },
];

const PHOTO_CATEGORIES = ["All", "Street", "Portrait", "Landscape"];

const PHOTOS = [
  { id: 1, category: "Street", img: "https://picsum.photos/seed/street1/600/750" },
  { id: 2, category: "Portrait", img: "https://picsum.photos/seed/portrait1/600/750" },
  { id: 3, category: "Landscape", img: "https://picsum.photos/seed/land1/600/450" },
  { id: 4, category: "Street", img: "https://picsum.photos/seed/street2/600/450" },
  { id: 5, category: "Landscape", img: "https://picsum.photos/seed/land2/600/750" },
  { id: 6, category: "Portrait", img: "https://picsum.photos/seed/portrait2/600/450" },
  { id: 7, category: "Street", img: "https://picsum.photos/seed/street3/600/750" },
  { id: 8, category: "Landscape", img: "https://picsum.photos/seed/land3/600/450" },
  { id: 9, category: "Portrait", img: "https://picsum.photos/seed/portrait3/600/750" },
];

const SKILLS = {
  Development: ["JavaScript / TypeScript", "React & Next.js", "Node.js", "PostgreSQL", "Git & GitHub"],
  Design: ["Figma", "Adobe Illustrator", "Design systems", "Typography", "Prototyping"],
  Photography: ["Lightroom", "Capture One", "35mm film", "Studio lighting", "Photo editing"],
};

const CONTACT = {
  email: "hello@mayachen.dev",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",
};

// ---------------------------------------------------------
// SMALL REUSABLE PIECES
// ---------------------------------------------------------

// The little eyebrow label at the top of each frame, e.g. "FRAME 02 — DEVELOP"
function FrameLabel({ frame, label }) {
  return (
    <div
      className="flex items-center gap-3 mb-6"
      style={{ fontFamily: TOKENS.fontMono, color: TOKENS.inkSoft, letterSpacing: "0.15em" }}
    >
      <span
        className="inline-flex items-center justify-center"
        style={{
          width: 28,
          height: 28,
          border: `1px solid ${TOKENS.line}`,
          borderRadius: "50%",
          fontSize: 11,
          color: TOKENS.red,
        }}
      >
        {frame}
      </span>
      <span className="text-xs">FRAME {frame} — {label}</span>
    </div>
  );
}

// A small tag/chip used for tech stacks and photo categories
function Tag({ children, color }) {
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

// ---------------------------------------------------------
// SECTIONS
// ---------------------------------------------------------

function HomeSection({ goTo }) {
  return (
    <div>
      <FrameLabel frame="01" label="INDEX" />
      <h1
        className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-6"
        style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}
      >
        {NAME}
      </h1>
      <p
        className="text-lg sm:text-xl max-w-xl mb-12"
        style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}
      >
        Developer, designer, and photographer. Three different ways of looking
        closely at things — sometimes all three show up in the same week,
        usually one at a time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <RoleCard
          frame="02"
          title="Development"
          desc="Web apps, tools, and the occasional weird side project."
          accent={TOKENS.teal}
          onClick={() => goTo("dev")}
        />
        <RoleCard
          frame="03"
          title="Design"
          desc="Brand identities, UI systems, and editorial layouts."
          accent={TOKENS.gold}
          onClick={() => goTo("design")}
        />
        <RoleCard
          frame="04"
          title="Photography"
          desc="Street, portrait, and landscape work shot on the go."
          accent={TOKENS.red}
          onClick={() => goTo("photo")}
        />
      </div>
    </div>
  );
}

function RoleCard({ frame, title, desc, accent, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-left p-6 transition-transform"
      style={{
        border: `1px solid ${TOKENS.line}`,
        borderRadius: 8,
        backgroundColor: TOKENS.paperDark,
        cursor: "pointer",
      }}
    >
      <div
        className="text-xs mb-4"
        style={{ fontFamily: TOKENS.fontMono, color: accent, letterSpacing: "0.15em" }}
      >
        FRAME {frame}
      </div>
      <div
        className="text-2xl mb-2"
        style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}
      >
        {title}
      </div>
      <p className="text-sm mb-4" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
        {desc}
      </p>
      <div
        className="flex items-center gap-1 text-sm"
        style={{ fontFamily: TOKENS.fontMono, color: TOKENS.ink }}
      >
        View work <ArrowUpRight size={14} />
      </div>
    </button>
  );
}

function DevSection() {
  return (
    <div>
      <FrameLabel frame="02" label="DEVELOP" />
      <h2
        className="text-4xl sm:text-5xl mb-4"
        style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}
      >
        Selected builds
      </h2>
      <p className="max-w-xl mb-10" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
        A few projects I've built end-to-end, from database schema to the
        last pixel of the interface.
      </p>

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
                <Tag key={t} color={TOKENS.teal}>{t}</Tag>
              ))}
            </div>
            <div className="flex gap-5" style={{ fontFamily: TOKENS.fontMono, fontSize: 13 }}>
              <a href={p.live} className="flex items-center gap-1" style={{ color: TOKENS.ink }}>
                Live <ArrowUpRight size={14} />
              </a>
              <a href={p.code} className="flex items-center gap-1" style={{ color: TOKENS.ink }}>
                Code <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesignSection() {
  return (
    <div>
      <FrameLabel frame="03" label="DESIGN" />
      <h2
        className="text-4xl sm:text-5xl mb-4"
        style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}
      >
        Visual work
      </h2>
      <p className="max-w-xl mb-10" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
        Identity, interface, and editorial projects — a sample of how I
        approach a visual problem from brief to finished system.
      </p>

      <div className="flex flex-col gap-10">
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
                style={{ fontFamily: TOKENS.fontMono, color: TOKENS.gold, letterSpacing: "0.1em" }}
              >
                {p.role.toUpperCase()} — {p.tools}
              </div>
              <p style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhotoSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active);

  return (
    <div>
      <FrameLabel frame="04" label="PHOTOGRAPH" />
      <h2
        className="text-4xl sm:text-5xl mb-4"
        style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}
      >
        Recent frames
      </h2>
      <p className="max-w-xl mb-6" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
        A rotating selection of recent shots — mostly street and landscape,
        with the occasional portrait session.
      </p>

      <div className="flex gap-2 mb-8 flex-wrap">
        {PHOTO_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-3 py-1 text-xs"
            style={{
              fontFamily: TOKENS.fontMono,
              letterSpacing: "0.1em",
              borderRadius: 4,
              border: `1px solid ${active === cat ? TOKENS.red : TOKENS.line}`,
              color: active === cat ? TOKENS.red : TOKENS.inkSoft,
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {filtered.map((photo) => (
          <div key={photo.id} className="overflow-hidden" style={{ borderRadius: 6, border: `1px solid ${TOKENS.line}` }}>
            <img src={photo.img} alt={photo.category} className="w-full h-full object-cover" style={{ aspectRatio: "4 / 5" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutSection() {
  return (
    <div>
      <FrameLabel frame="05" label="ABOUT" />
      <h2
        className="text-4xl sm:text-5xl mb-6"
        style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}
      >
        About
      </h2>
      <div className="max-w-2xl mb-12" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
        <p className="mb-4">
          I'm a developer, designer, and photographer based in [Your City].
          I started out building small websites for friends, picked up a
          camera somewhere along the way, and have been moving between code
          and visuals ever since.
        </p>
        <p>
          Most of my work lives in one of these three lanes at a time —
          but they all come from the same place: paying close attention to
          how things are put together, whether that's a layout, a system,
          or a scene in front of a lens.
        </p>
      </div>

      <h3 className="text-2xl mb-6" style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}>
        Skills & tools
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group}>
            <div
              className="text-xs mb-3"
              style={{ fontFamily: TOKENS.fontMono, color: TOKENS.inkSoft, letterSpacing: "0.15em" }}
            >
              {group.toUpperCase()}
            </div>
            <ul style={{ fontFamily: TOKENS.fontBody, color: TOKENS.ink }}>
              {items.map((item) => (
                <li key={item} className="mb-2 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div>
      <FrameLabel frame="06" label="CONTACT" />
      <h2
        className="text-4xl sm:text-5xl mb-6"
        style={{ fontFamily: TOKENS.fontDisplay, color: TOKENS.ink }}
      >
        Say hello
      </h2>
      <p className="max-w-xl mb-10" style={{ fontFamily: TOKENS.fontBody, color: TOKENS.inkSoft }}>
        Whether it's a project, a question, or just to talk shop — I'd like
        to hear from you.
      </p>

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
        <Mail size={16} /> {CONTACT.email}
      </a>

      <div className="flex gap-6" style={{ fontFamily: TOKENS.fontMono, fontSize: 13 }}>
        <a href={CONTACT.github} className="flex items-center gap-1" style={{ color: TOKENS.ink }}>
        GitHub <ArrowUpRight size={14} />
        </a>
        <a href={CONTACT.linkedin} className="flex items-center gap-1" style={{ color: TOKENS.ink }}>
          LinkedIn <ArrowUpRight size={14} />
        </a>
        <a href={CONTACT.instagram} className="flex items-center gap-1" style={{ color: TOKENS.ink }}>
          Instagram <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// MAIN APP
// ---------------------------------------------------------
export default function Portfolio() {
  const [section, setSection] = useState("home");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const goTo = (id) => {
    setSection(id);
    setMobileNavOpen(false);
  };

  const renderSection = () => {
    switch (section) {
      case "home":
        return <HomeSection goTo={goTo} />;
      case "dev":
        return <DevSection />;
      case "design":
        return <DesignSection />;
      case "photo":
        return <PhotoSection />;
      case "about":
        return <AboutSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection goTo={goTo} />;
    }
  };

  return (
    <div style={{ backgroundColor: TOKENS.paper, minHeight: "100vh", color: TOKENS.ink }}>
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Work+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        a { text-decoration: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .frame-content { animation: none !important; }
        }
        button:focus-visible, a:focus-visible {
          outline: 2px solid ${TOKENS.red};
          outline-offset: 2px;
        }
      `}</style>

      <div className="flex">
        {/* ---------------- DESKTOP FILM-STRIP NAV ---------------- */}
        <nav
          className="hidden md:flex flex-col items-center justify-between py-8"
          style={{
            width: 100,
            borderRight: `1px solid ${TOKENS.line}`,
            position: "sticky",
            top: 0,
            height: "100vh",
            backgroundColor: TOKENS.paperDark,
          }}
        >
          <div
            style={{ fontFamily: TOKENS.fontMono, fontSize: 11, color: TOKENS.inkSoft, letterSpacing: "0.2em" }}
            className="mb-6"
            aria-hidden="true"
          >
            ROLL 01
          </div>

          <div className="flex flex-col items-center gap-1 flex-1 justify-center">
            {NAV_ITEMS.map((item, i) => (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => goTo(item.id)}
                  className="flex flex-col items-center py-3 px-2 w-full"
                  style={{
                    cursor: "pointer",
                    backgroundColor: section === item.id ? TOKENS.red : "transparent",
                    color: section === item.id ? TOKENS.paper : TOKENS.inkSoft,
                    borderRadius: 4,
                  }}
                  aria-current={section === item.id ? "page" : undefined}
                >
                  <span style={{ fontFamily: TOKENS.fontMono, fontSize: 13, letterSpacing: "0.1em" }}>
                    {item.frame}
                  </span>
                  <span
                    style={{
                      fontFamily: TOKENS.fontMono,
                      fontSize: 9,
                      letterSpacing: "0.15em",
                      writingMode: "vertical-rl",
                      marginTop: 6,
                    }}
                  >
                    {item.label}
                  </span>
                </button>
                {i < NAV_ITEMS.length - 1 && (
                  <div className="flex flex-col gap-1 py-1" aria-hidden="true">
                    <span style={{ width: 6, height: 6, borderRadius: "50%", border: `1px solid ${TOKENS.line}`, display: "block" }} />
                    <span style={{ width: 6, height: 6, borderRadius: "50%", border: `1px solid ${TOKENS.line}`, display: "block" }} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div
            style={{ fontFamily: TOKENS.fontMono, fontSize: 11, color: TOKENS.inkSoft, letterSpacing: "0.2em" }}
            aria-hidden="true"
          >
            36EXP
          </div>
        </nav>

        {/* ---------------- MOBILE TOP BAR ---------------- */}
        <div
          className="md:hidden fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-5 py-4"
          style={{ backgroundColor: TOKENS.paperDark, borderBottom: `1px solid ${TOKENS.line}` }}
        >
          <span style={{ fontFamily: TOKENS.fontMono, fontSize: 12, letterSpacing: "0.15em", color: TOKENS.inkSoft }}>
            FRAME {NAV_ITEMS.find((n) => n.id === section)?.frame} / 06
          </span>
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)} aria-label="Toggle navigation">
            {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {mobileNavOpen && (
          <div
            className="md:hidden fixed inset-0 z-10 flex flex-col items-center justify-center gap-6"
            style={{ backgroundColor: TOKENS.paper, paddingTop: 60 }}
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                style={{
                  fontFamily: TOKENS.fontDisplay,
                  fontSize: 28,
                  color: section === item.id ? TOKENS.red : TOKENS.ink,
                }}
              >
                {item.frame} — {item.label}
              </button>
            ))}
          </div>
        )}

        {/* ---------------- MAIN CONTENT ---------------- */}
        <main
          key={section}
          className="frame-content flex-1 px-6 sm:px-10 md:px-16 py-12 md:py-16 mt-14 md:mt-0"
          style={{ animation: "fadeIn 0.4s ease-out", maxWidth: 1000 }}
        >
          {renderSection()}
        </main>
      </div>
    </div>
  );
}