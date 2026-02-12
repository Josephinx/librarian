import { useParams, Navigate } from 'react-router';
import { PERSONAS } from '../data/personas';
import Header from './Header';
import Footer from './Footer';
import ResourceSection from './ResourceSection';

export default function PersonaDashboard() {
  const { slug } = useParams();
  const persona = PERSONAS.find((p) => p.slug === slug);

  if (!persona) return <Navigate to="/" replace />;

  const { name, description, resources } = persona;

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-bg)' }}>
      <Header />
      <main className="max-w-6xl mx-auto px-6">
        {/* Hero */}
        <section className="py-16 sm:py-24">
          <p className="tracked-label mb-4">YOUR PERSONA</p>
          <h1
            className="text-[28px] sm:text-[40px] font-bold tracking-tight"
            style={{ color: 'var(--color-fg)' }}
          >
            {name}
          </h1>
          <p
            className="mt-6 text-lg max-w-[640px] leading-[1.7]"
            style={{ color: 'var(--color-fg-muted)' }}
          >
            {description}
          </p>
        </section>

        {/* Resource Sections */}
        <ResourceSection title="VIDEOS" resources={resources.videos} />
        <ResourceSection title="ARTICLES" resources={resources.articles} />
        <ResourceSection title="BOOKS" resources={resources.books} />
        <ResourceSection title="TOOLS" resources={resources.tools} />
        <ResourceSection title="COURSE" resources={resources.course} single />
        <ResourceSection title="COMMUNITY" resources={resources.community} single />
      </main>
      <Footer />
    </div>
  );
}
