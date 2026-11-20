import Link from 'next/link';
import { AgentPortrait } from '@/components/shared/AgentPortrait';
import { CONTENT_UPDATED } from '@/lib/site-metadata';

const updatedLabel = new Date(`${CONTENT_UPDATED}T12:00:00Z`).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: 'UTC',
});

export function AuthorByline() {
  return (
    <div className="mb-8 flex items-center gap-3 border-b border-slate-200 pb-6">
      <AgentPortrait size={48} linked={false} />
      <p className="text-sm leading-snug text-[var(--text-light)]">
        <Link href="/about" className="font-semibold text-[var(--heading-color)] hover:text-[var(--accent-dark)]">
          Dr. Jan Duffy, REALTOR®
        </Link>
        <span className="block">
          Lone Mountain Heights specialist · Updated <time dateTime={CONTENT_UPDATED}>{updatedLabel}</time>
        </span>
      </p>
    </div>
  );
}
