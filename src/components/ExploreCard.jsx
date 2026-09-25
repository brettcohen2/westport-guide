export default function ExploreCard({ item }) {
  const { slug, type, name, neighborhood, photoColor } = item;

  const typeToPath = {
    Park: "parks",
    Beach: "beaches",
    Attraction: "attractions",
  };

  return (
    <a
      href={"/" + typeToPath[type] + "/" + slug}
      style={{
        display: "block",
        border: "0.5px solid var(--color-border)",
        borderRadius: "var(--radius)",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div style={{ background: photoColor, height: 140 }} />
      <div style={{ padding: 14 }}>
        <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{name}</p>
        <p style={{ fontSize: 12, color: "var(--color-ink-soft)", margin: "4px 0 0" }}>
          {type} · {neighborhood}
        </p>
      </div>
    </a>
  );
}
