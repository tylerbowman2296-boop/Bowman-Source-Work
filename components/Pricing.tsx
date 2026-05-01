import { pricingPlans } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-white py-16 sm:py-24"
      aria-labelledby="pricing-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
            Pricing
          </p>
          <h2
            id="pricing-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            Clear starter pricing for local small businesses.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These are starter estimates so you can see what might fit before a
            sales conversation. Final pricing depends on page count, features,
            content needs, and update frequency.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm ${
                plan.featured
                  ? "border-cyan-300 bg-slate-950 text-white shadow-xl shadow-slate-950/20"
                  : "border-slate-200 bg-slate-50 text-slate-950"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-black">{plan.name}</h3>
                {plan.featured ? (
                  <span className="shrink-0 rounded-full bg-cyan-300 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-950">
                    Most Popular
                  </span>
                ) : null}
              </div>
              <p
                className={`mt-3 text-sm font-semibold ${
                  plan.featured ? "text-cyan-200" : "text-cyan-800"
                }`}
              >
                Best for: {plan.bestFor}
              </p>
              <p className="mt-6 text-4xl font-black tracking-tight">
                {plan.price}
              </p>

              <ul
                className={`mt-7 flex-1 space-y-3 text-sm font-medium ${
                  plan.featured ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {plan.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      className={plan.featured ? "text-cyan-300" : "text-cyan-700"}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="#contact"
                className="mt-8 w-full"
                variant={plan.featured ? "primary" : "dark"}
              >
                {plan.cta}
              </ButtonLink>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          Final pricing depends on page count, features, content needs, and
          update frequency. The free review is a no-pressure first step.
        </p>
      </div>
    </section>
  );
}
