import { CalendlyInline } from '@/components/shared/CalendlyInline';
import { CalendlyLink } from '@/components/shared/CalendlyLink';

type CalendlyScheduleSectionProps = {
  title?: string;
  description?: string;
  showInline?: boolean;
  className?: string;
};

export function CalendlyScheduleSection({
  title = 'Schedule a Free 15-Minute Conversation',
  description = 'Pick a time that works for you. Dr. Jan Duffy will call to discuss buying or selling in Lone Mountain Heights.',
  showInline = true,
  className = '',
}: CalendlyScheduleSectionProps) {
  return (
    <section
      className={`my-10 rounded-xl border border-slate-200 bg-white p-6 shadow-md md:p-8 ${className}`}
      aria-labelledby="calendly-schedule-heading"
    >
      <h2 id="calendly-schedule-heading" className="mb-2 text-2xl font-bold text-[var(--heading-color)]">
        {title}
      </h2>
      <p className="mb-6 text-[var(--text-light)]">{description}</p>
      {showInline ? (
        <CalendlyInline />
      ) : (
        <div className="text-center">
          <CalendlyLink
            text="Schedule time with me"
            className="inline-block rounded-lg bg-[var(--accent-color)] px-6 py-3 font-semibold text-[var(--heading-color)] hover:opacity-90"
          />
        </div>
      )}
      {showInline && (
        <p className="mt-4 text-center text-sm text-[var(--text-light)]">
          Or{' '}
          <CalendlyLink
            text="open the scheduler in a popup"
            className="font-semibold text-[var(--accent-color)] hover:underline"
          />
        </p>
      )}
    </section>
  );
}
