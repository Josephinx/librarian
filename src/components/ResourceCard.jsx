export default function ResourceCard({ title, description, url }) {
  return (
    <div
      className="rounded-lg p-6 border transition-colors duration-200 hover:border-[var(--color-accent)]"
      style={{
        backgroundColor: 'var(--color-card-bg)',
        borderColor: 'var(--color-card-border)',
      }}
    >
      <h3
        className="font-medium text-base"
        style={{ color: 'var(--color-fg)' }}
      >
        {title}
      </h3>
      {description && (
        <p
          className="text-sm mt-2 leading-relaxed"
          style={{ color: 'var(--color-fg-muted)' }}
        >
          {description}
        </p>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase border rounded-md transition-colors duration-200 no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
        style={{
          color: 'var(--color-fg)',
          borderColor: 'var(--color-border)',
          background: 'transparent',
        }}
      >
        Open
      </a>
    </div>
  );
}
