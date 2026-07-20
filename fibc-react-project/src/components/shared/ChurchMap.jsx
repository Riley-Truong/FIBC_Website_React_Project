const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

function ChurchMap({
  query = 'Faith Independent Baptist Church, McDonough, GA',
  title = 'Map showing the location of Faith Independent Baptist Church',
  className = '',
}) {
  const src = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(
    query
  )}`;

  return (
    <div className={`church-map ${className}`}>
      {GOOGLE_MAPS_API_KEY ? (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="church-map__fallback" role="note">
          <p>
            Map unavailable
          </p>
        </div>
      )}

      <style>{`
        .church-map {
          border: 1px solid var(--color-line);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          background: var(--bg-surface);
        }
        .church-map iframe {
          display: block;
          width: 100%;
          aspect-ratio: 16 / 9;
          border: 0;
        }
        .church-map__fallback {
          display: grid;
          place-items: center;
          aspect-ratio: 16 / 9;
          padding: var(--sp-5);
          text-align: center;
          color: var(--text-muted);
          font-size: var(--fs-14);
        }
        .church-map__fallback code {
          background: var(--bg-page);
          padding: 0.1em 0.35em;
          border-radius: var(--radius-sm);
          color: var(--text-primary);
        }
      `}</style>
    </div>
  );
}

export default ChurchMap;
