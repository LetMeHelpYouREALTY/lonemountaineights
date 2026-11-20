import { AgentPortrait } from '@/components/shared/AgentPortrait';
import { CalendlyInline } from '@/components/shared/CalendlyInline';
import { CalendlyLink } from '@/components/shared/CalendlyLink';
import type { CalendlyEvent } from '@/lib/calendly';

type CalendlyScheduleSectionProps = {
  title?: string;
  description?: string;
  showInline?: boolean;
  className?: string;
  event?: CalendlyEvent;
  /** utm_content prefix; also keeps the heading id unique per section. */
  placement?: string;
};

export function CalendlyScheduleSection({
  title = 'Schedule a Free 15-Minute Conversation',
  description = 'Pick a time that works for you. Dr. Jan Duffy will call to discuss buying or selling in Lone Mountain Heights.',
  showInline = true,
  className = '',
  event = 'consult',
  placement = 'schedule',
}: CalendlyScheduleSectionProps) {
  const headingId = `calendly-${placement}-heading`;

  return (
    <section
      className={`my-10 rounded-xl border border-slate-200 bg-white p-6 shadow-md md:p-8 ${className}`}
      aria-labelledby={headingId}
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <AgentPortrait size={72} linked={false} />
        <div>
          <h2 id={headingId} className="mb-2 text-2xl font-bold text-[var(--heading-color)]">
            {title}
          </h2>
          <p className="text-[var(--text-light)]">{description}</p>
        </div>
      </div>
      {showInline ? (
        <CalendlyInline event={event} placement={placement} />
      ) : (
        <div className="text-center">
          <CalendlyLink
            text="Schedule time with me"
            event={event}
            placement={placement}
            className="inline-block rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
          />
        </div>
      )}
      {showInline && (
        <p className="mt-4 text-center text-sm text-[var(--text-light)]">
          Or{' '}
          <CalendlyLink
            text="open the scheduler in a popup"
            event={event}
            placement={`${placement}-popup`}
            className="font-semibold text-[var(--heading-color)] underline underline-offset-2 hover:opacity-80"
          />
        </p>
      )}
    </section>
  );
}
