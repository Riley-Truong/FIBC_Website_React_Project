function SectionHeading({ eyebrow, title, subtitle, align = 'left', as: Tag = 'h2' }) {
  const isCenter = align === 'center';
  return (
    <div style={{
        textAlign: isCenter ? 'center' : 'left',
        maxWidth: isCenter ? '720px' : 'none',
        margin: isCenter ? '0 auto var(--sp-7)' : '0 0 var(--sp-7) 0',
      }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Tag style={{ marginBottom: subtitle ? 'var(--sp-3)' : 0 }}>{title}</Tag>
      {subtitle && (
        <p className="lead" style={{
            color: 'var(--text-secondary)',
            marginBottom: 0,
            margin: isCenter ? '1rem auto 0' : '1rem 0 0',
          }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
