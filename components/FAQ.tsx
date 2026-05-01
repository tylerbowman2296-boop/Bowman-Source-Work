import { ButtonLink } from "@/components/ui/Button";
import { faqs } from "@/lib/constants";

export default function FAQ() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
            FAQ
          </p>
          <h2
            id="faq-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            Common questions before starting.
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-black text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-500">
                <span>{faq.question}</span>
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-cyan-700 transition group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center sm:p-6">
          <p className="text-lg font-black text-slate-950">
            Still have a question?
          </p>
          <p className="mt-2 leading-7 text-slate-600">
            Send a quick message and I&apos;ll keep the answer clear.
          </p>
          <ButtonLink href="#contact" className="mt-5 w-full sm:w-auto">
            Ask a Question
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
