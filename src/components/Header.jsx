import { Link } from 'react-router';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--color-border)]"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <div className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link
          to="/"
          className="text-sm font-semibold tracking-[0.2em] uppercase no-underline"
          style={{ color: 'var(--color-fg-muted)' }}
        >
          FREEDOM TECH
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
