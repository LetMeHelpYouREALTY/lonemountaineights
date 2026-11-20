type AnswerLeadProps = {
  heading: string;
  answer: string;
  updatedLabel: string;
};

/** Direct-answer block for AEO / AI Overviews — speakable-friendly copy. */
export function AnswerLead({ heading, answer, updatedLabel }: AnswerLeadProps) {
  return (
    <section
      className="mb-10 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
      aria-labelledby="answer-lead-heading"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--text-light)]">
        {updatedLabel}
      </p>
      <h2 id="answer-lead-heading" className="mb-3 text-2xl font-bold text-[var(--heading-color)]">
        {heading}
      </h2>
      <p className="faq-answer-text max-w-3xl text-lg leading-relaxed text-[var(--text-color)]">
        {answer}
      </p>
    </section>
  );
}
