import { serviceAreas, trustCards } from "@/lib/constants";

export default function TrustSection() {
  return (
    <section className="bg-white py-16 sm:py-24" aria-labelledby="trust-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
              Local credibility
            </p>
            <h2
              id="trust-title"
              className="mt-3 max-w-3xl text-balance text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Built locally in Anderson, SC for small businesses that need a
              website people can trust.
            </h2>
          </div>
          <p className="text-pretty text-lg leading-8 text-slate-600">
            Bowman&apos;s Source Work is built for owners who want a local website
            designer who can explain the process clearly, keep the work
            practical, and make the first step feel manageable.
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
          <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-800">
            Serving Anderson and nearby Upstate communities
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {trustCards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <div
                className="mb-5 flex size-11 items-center justify-center rounded-xl bg-cyan-100 text-lg font-black text-cyan-800"
                aria-hidden="true"
              >
                ✓
              </div>
              <h3 className="text-xl font-black text-slate-950">
                {card.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
