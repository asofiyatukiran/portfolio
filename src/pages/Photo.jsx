import { useState } from "react";
import { TOKENS } from "../tokens";
import { PHOTOS, PHOTO_CATEGORIES } from "../data/content";
import PageHeader from "../components/PageHeader";

export default function Photo() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === active);

  return (
    <div>
      <PageHeader
        eyebrow="PHOTOGRAPHY"
        title="Recent frames"
        subtitle="A rotating selection of recent shots — mostly street and landscape, with the occasional portrait session."
      />
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
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
                border: `1px solid ${active === cat ? TOKENS.accent : TOKENS.line}`,
                color: active === cat ? TOKENS.accent : TOKENS.inkSoft,
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
    </div>
  );
}
