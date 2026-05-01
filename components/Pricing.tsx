import { ButtonLink } from "@/components/ui/Button";
import { pricingPlans } from "@/lib/constants";

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
            Starter pricing that is easy to compare.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            These are honest starting estimates for local small businesses. You
            will know the scope before work begins, and the free review helps
            narrow down what you actually need.
          </p>
        </div>

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border p-6 shadow-sm ${
                plan.featured
                  ? "border-cyan-300 bg-slate-950 text-white shadow-xl shadow-slate-950/20"
                  : "border-slate-200 bg-white text-slate-950"
              }`}
            >
              {plan.featured ? (
                <span className="mb-5 w-fit rounded-full bg-cyan-300 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-950">
                  Most Popular
                </span>
              ) : (
                <span className="mb-5 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-slate-600">
                  Starter estimate
                </span>
              )}

              <h3 className="text-2xl font-black">{plan.name}</h3>
              <p
                className={`mt-3 min-h-16 text-sm font-semibold leading-6 ${
                  plan.featured ? "text-cyan-100" : "text-slate-600"
                }`}
              >
                {plan.bestFor}
              </p>
              <p className="mt-6 text-4xl font-black tracking-tight">
                {plan.price}
              </p>

              <div
                className={`mt-7 flex-1 border-t pt-6 ${
                  plan.featured ? "border-white/10" : "border-slate-200"
                }`}
              >
                <p
                  className={`text-sm font-black uppercase tracking-[0.14em] ${
                    plan.featured ? "text-cyan-200" : "text-cyan-800"
                  }`}
                >
                  Includes
                </p>
                <ul
                  className={`mt-4 flex-1 space-y-3 text-sm font-medium ${
                    plan.featured ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className={`mt-2 size-2 shrink-0 rounded-full ${
                          plan.featured ? "bg-cyan-300" : "bg-cyan-700"
                        }`}
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

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

        <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center sm:p-6">
          <p className="text-sm leading-6 text-slate-600">
            Final pricing depends on page count, features, content needs, and
            update frequency. No pressure, no confusing quote process, and no
            fake package promises.
          </p>
          <ButtonLink href="#contact" className="mt-5 w-full sm:w-auto">
            Compare Options With Me
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
