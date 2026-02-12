import ResourceCard from './ResourceCard';

export default function ResourceSection({ title, resources, single }) {
  if (!resources) return null;

  const isSingle = single || !Array.isArray(resources);
  const items = isSingle ? (Array.isArray(resources) ? resources : [resources]) : resources;

  return (
    <section className="mt-16">
      <h2
        className="text-xs font-semibold tracking-[0.15em] uppercase mb-6"
        style={{ color: 'var(--color-accent)' }}
      >
        {title}
      </h2>
      <div
        className={
          isSingle
            ? 'max-w-[400px]'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
        }
      >
        {items.map((item, i) => (
          <ResourceCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
