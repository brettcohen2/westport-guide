export default function RestaurantCard({ restaurant }) {
  const { slug, name, category, price, neighborhood, score, photoColor } = restaurant;

  return (
    <a
      href={`/restaurants/${slug}`}
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
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 4 }}>
          <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{name}</p>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "var(--color-sound)" }}>
            {score}
          </span>
        </div>
        <p style={{ fontSize: 12, color: "var(--color-ink-soft)", margin: 0 }}>
          {category} · {price} · {neighborhood}
        </p>
      </div>
    </a>
  );
}
