export default function AnalysingScreen() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <p
        className="text-xl analysing-pulse"
        style={{ color: 'var(--color-fg-muted)' }}
      >
        Analysing...
      </p>
    </div>
  );
}
