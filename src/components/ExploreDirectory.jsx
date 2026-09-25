import { useState, useEffect, useMemo } from "react";
import ExploreCard from "./ExploreCard.jsx";

export default function ExploreDirectory({ parks, beaches, attractions }) {
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get("type");
    if (typeParam && ["Park", "Beach", "Attraction"].includes(typeParam)) {
      setActiveTab(typeParam);
    }
  }, []);

  const all = useMemo(
    () => [...parks, ...beaches, ...attractions],
    [parks, beaches, attractions]
  );

  const filtered = useMemo(() => {
    if (activeTab === "All") return all;
    return all.filter(item => item.type === activeTab);
  }, [activeTab, all]);

  const tabs = ["All", "Park", "Beach", "Attraction"];
  const tabLabels = { All: "All", Park: "Parks", Beach: "Beaches", Attraction: "Attractions" };

  return (
    <div>
      <div style={{ display: "flex", gap: 10, overflowX: "auto", marginBottom: 20 }}>
        {tabs.map(tab => (
          <Tab
            key={tab}
            label={tabLabels[tab]}
            active={activeTab === tab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ fontSize: 13, color: "var(--color-ink-soft)" }}>Nothing here yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map(item => (
            <ExploreCard key={item.type + item.slug} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function Tab({ label, active, onClick }) {
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
