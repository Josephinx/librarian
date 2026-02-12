import { useState } from 'react';
import { Link } from 'react-router';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const emailLink = () => {
    const subject = encodeURIComponent('My Freedom Tech Persona');
    const body = encodeURIComponent('Check out my result: ' + window.location.href);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <footer
      className="mt-20 py-10 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="flex flex-wrap items-center justify-center gap-4 max-w-6xl mx-auto px-6">
        <button
          onClick={copyLink}
          className="ghost-btn w-auto cursor-pointer"
          style={{ width: 'auto' }}
        >
          <span className="text-xs font-semibold tracking-[0.1em] uppercase">
            {copied ? 'Copied' : 'Copy Link'}
          </span>
        </button>
        <button
          onClick={emailLink}
          className="ghost-btn w-auto cursor-pointer"
          style={{ width: 'auto' }}
        >
          <span className="text-xs font-semibold tracking-[0.1em] uppercase">
            Email Link
          </span>
        </button>
        <Link
          to="/"
          className="text-sm no-underline hover:underline"
          style={{ color: 'var(--color-fg-muted)' }}
        >
          Retake Survey
        </Link>
      </div>
    </footer>
  );
}
