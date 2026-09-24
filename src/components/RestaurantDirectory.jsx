import { useState, useMemo } from "react";
import RestaurantCard from "./RestaurantCard.jsx";

export default function RestaurantDirectory({ restaurants, tags }) {
  const [activeTag, setActiveTag] = useState(null);

  const filtered = useMemo(() => {
    if (!activeTag) return restaurants;
    return restaurants.filter(r => r.tags.includes(activeTag));
  }, [activeTag, restaurants]);

  return (
    <div>
      <div style={{ display: "flex", gap: 10, overflowX: "auto", marginBottom: 20 }}>
        <Chip label="All" active={activeTag === null} onClick={() => setActiveTag(null)} />
        {tags.map(tag => (
          <Chip key={tag} label={tag} active={activeTag === tag} onClick={() => setActiveTag(tag)} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>No restaurants match that filter yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map(r => (
            <RestaurantCard key={r.slug} restaurant={r} />
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
