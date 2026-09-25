import { useState, useMemo, useEffect } from "react";
import EatCard from "./EatCard.jsx";

export default function EatDirectory({ items, tags }) {
  const [activeTag, setActiveTag] = useState(null);

  // If the page was linked to with ?tag=Something (e.g. from the homepage
  // quick links), pre-select that filter on load.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tagParam = params.get("tag");
    if (tagParam && tags.includes(tagParam)) {
      setActiveTag(tagParam);
    }
  }, []);

  const filtered = useMemo(() => {
    if (!activeTag) return items;
    return items.filter(r => r.tags.includes(activeTag));
  }, [activeTag, items]);

  return (
    <div>
      <div style={{ display: "flex", gap: 10, overflowX: "auto", marginBottom: 20 }}>
        <Chip label="All" active={activeTag === null} onClick={() => setActiveTag(null)} />
        {tags.map(tag => (
          <Chip key={tag} label={tag} active={activeTag === tag} onClick={() => setActiveTag(tag)} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>Nothing matches that filter yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map(r => (
            <EatCard key={r.slug} item={r} />
          ))}
        </div>
      )}
    </div>
  );
}

function Chip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? "var(--color-sound)" : "transparent",
        color: active ? "var(--color-bg)" : "var(--color-ink-soft)",
        border: active ? "0.5px solid var(--color-sound)" : "0.5px solid var(--color-border-strong)",
        borderRadius: "var(--radius-sm)",
        padding: "8px 14px",
        fontSize: 12.5,
        fontFamily: "var(--font-body)",
        whiteSpace: "nowrap",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      {label}
    </button>
  );
}
