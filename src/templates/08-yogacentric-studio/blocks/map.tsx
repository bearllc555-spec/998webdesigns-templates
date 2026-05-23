export function MapBlock() {
  return (
    <section>
      <iframe
        title="YogaCentric location"
        src="https://maps.google.com/maps?q=238+Colfax+Ave,+Clifton,+NJ+07013&output=embed&z=15"
        width="100%"
        height="420"
        style={{
          border: 0,
          display: "block",
          filter: "grayscale(100%) contrast(1.05)",
        }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
