import { services } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 py-16 sm:py-24"
      aria-labelledby="services-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
            Services
          </p>
          <h2
            id="services-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            Website help without the confusing agency process.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            From a first small business website to a website redesign or
            monthly website care, the goal is practical: make your business
            easier to find, easier to understand, and easier to contact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-black text-slate-950">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                {service.description}
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-slate-700">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="text-cyan-700" aria-hidden="true">
                      ✓
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-2">
                <ButtonLink href="#contact" variant="outline" className="w-full">
                  Talk About {service.title}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
