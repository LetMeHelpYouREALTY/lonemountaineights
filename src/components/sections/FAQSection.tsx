import { CalendlyLink } from '@/components/shared/CalendlyLink';

type FAQ = { question: string; answer: string };

type FAQSectionProps = {
  faqs: FAQ[];
  title?: string;
  sectionId?: string;
};

export function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  sectionId = 'faq',
}: FAQSectionProps) {
  if (!faqs?.length) return null;

  return (
    <section
      id={sectionId}
      aria-labelledby="faq-heading"
      className="my-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-10"
    >
      <h2 id="faq-heading" className="mb-2 text-2xl font-bold text-[var(--heading-color)]">
        {title}
      </h2>
      <p className="mb-6 text-[var(--text-light)]">
        Expert answers from Dr. Jan Duffy, your Lone Mountain Heights real estate specialist
      </p>
      <div className="divide-y divide-slate-200">
        {faqs.map((faq) => (
          <div key={faq.question} className="py-5" itemScope itemType="https://schema.org/Question">
            <h3 className="mb-2 text-lg font-semibold text-[var(--heading-color)]" itemProp="name">
              {faq.question}
            </h3>
            <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
              <p className="leading-relaxed text-[var(--text-color)]" itemProp="text">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 rounded-lg bg-[var(--warm-cream)] p-5 text-center">
        <p className="mb-3 text-[var(--text-color)]">Still have questions? Talk directly with Dr. Jan Duffy.</p>
        <CalendlyLink
          text="Schedule time with me"
          className="inline-block rounded-lg bg-[var(--accent-color)] px-5 py-2.5 font-semibold text-[var(--heading-color)] hover:opacity-90"
        />
      </div>
    </section>
  );
}
