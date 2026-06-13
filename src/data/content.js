// ------------------------------------------------------------
// CONTENT — edit this file with your own information.
// Nothing here affects layout, only what's displayed.
// ------------------------------------------------------------

export const NAME = "Maya Chen";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/dev", label: "Develop" },
  { to: "/design", label: "Design" },
  { to: "/photo", label: "Photograph" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

// Words that rotate in the homepage hero
export const ROLES = ["Developer", "Designer", "Photographer"];

export const HERO_INTRO =
  "I build web apps, design visual systems, and shoot photographs — three ways of paying close attention to how things are made.";

export const WHAT_I_DO = [
  {
    to: "/dev",
    title: "Development",
    desc: "Web apps and tools, built end-to-end — from database to interface.",
  },
  {
    to: "/design",
    title: "Design",
    desc: "Brand identities, UI systems, and editorial layouts.",
  },
  {
    to: "/photo",
    title: "Photography",
    desc: "Street, portrait, and landscape work shot on the go.",
  },
];

export const DEV_PROJECTS = [
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

export const DESIGN_PROJECTS = [
  {
    name: "Northbound",
    role: "Brand identity",
    tools: "Figma, Illustrator",
    desc:
      "Full identity system for an outdoor outfitter — wordmark, trail-map iconography, and packaging for a small product line.",
    img: "https://picsum.photos/seed/northbound/900/650",
  },
  {
    name: "Folio",
    role: "UI kit",
    tools: "Figma",
    desc:
      "A component library and design system built for creative agencies, with a focus on flexible grid layouts and type pairings.",
    img: "https://picsum.photos/seed/folio/900/650",
  },
  {
    name: "Marble",
    role: "Editorial redesign",
    tools: "InDesign, Figma",
    desc:
      "A redesign of a quarterly food magazine — new grid system, typography, and a refreshed cover format.",
    img: "https://picsum.photos/seed/marble/900/650",
  },
];

export const PHOTO_CATEGORIES = ["All", "Street", "Portrait", "Landscape"];

export const PHOTOS = [
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

export const SKILLS = {
  Development: ["JavaScript / TypeScript", "React & Next.js", "Node.js", "PostgreSQL", "Git & GitHub"],
  Design: ["Figma", "Adobe Illustrator", "Design systems", "Typography", "Prototyping"],
  Photography: ["Lightroom", "Capture One", "35mm film", "Studio lighting", "Photo editing"],
};

export const ABOUT_TEXT = [
  "I'm a developer, designer, and photographer based in [Your City]. I started out building small websites for friends, picked up a camera somewhere along the way, and have been moving between code and visuals ever since.",
  "Most of my work lives in one of these lanes at a time — but they all come from the same place: paying close attention to how things are put together, whether that's a layout, a system, or a scene in front of a lens.",
];

export const CONTACT = {
  email: "hello@mayachen.dev",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  instagram: "https://instagram.com/yourusername",
};
