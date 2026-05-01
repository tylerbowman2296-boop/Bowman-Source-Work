import { ButtonLink } from "@/components/ui/Button";
import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-white py-16 sm:py-24"
      aria-labelledby="process-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
            Process
          </p>
          <h2
            id="process-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            A simple process that keeps the project clear.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            You do not need to understand web development to get a clean,
            mobile-friendly website. I guide the next step and keep the work
            easy to follow.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-cyan-300">
                {index + 1}
              </div>
              <h3 className="text-xl font-black text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-cyan-100 bg-cyan-50 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div>
            <p className="text-lg font-black text-slate-950">
              Ready for step one?
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              Send your website or business idea and I&apos;ll help you sort out
              the next move.
            </p>
          </div>
          <ButtonLink href="#contact" className="mt-5 w-full sm:mt-0 sm:w-auto">
            Start With a Free Review
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
