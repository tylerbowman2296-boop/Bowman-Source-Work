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
      </div>
    </section>
  );
}
