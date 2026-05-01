import { ButtonLink } from "@/components/ui/Button";
import { demoProjects } from "@/lib/constants";

const previewStyles = [
  {
    accent: "bg-cyan-400",
    panel: "bg-slate-950",
    soft: "bg-cyan-50",
    text: "text-cyan-300",
  },
  {
    accent: "bg-emerald-400",
    panel: "bg-slate-900",
    soft: "bg-emerald-50",
    text: "text-emerald-300",
  },
  {
    accent: "bg-sky-400",
    panel: "bg-slate-950",
    soft: "bg-sky-50",
    text: "text-sky-300",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-emerald-50 py-16 sm:py-24"
      aria-labelledby="portfolio-title"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-800">
              Demo concepts
            </p>
            <h2
              id="portfolio-title"
              className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
            >
              Honest sample layouts, not fake client claims.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            These demo concepts show how Bowman&apos;s Source Work can shape a
            local business website around trust, service clarity, and contact
            requests. Each one is clearly labeled as a concept.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {demoProjects.map((project, index) => {
            const style = previewStyles[index % previewStyles.length];

            return (
              <article
                key={project.type}
                className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm"
              >
                <div className="bg-slate-950 p-4">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
                    <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-3 py-2">
                      <span className="size-2.5 rounded-full bg-red-400" />
                      <span className="size-2.5 rounded-full bg-amber-400" />
                      <span className="size-2.5 rounded-full bg-emerald-400" />
                      <span className="ml-2 truncate rounded-full bg-white px-3 py-1 text-[11px] font-bold text-slate-500">
                        Demo website preview
                      </span>
                    </div>
                    <div className={`${style.soft} p-3`}>
                      <div className={`${style.panel} rounded-2xl p-4 text-white`}>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p
                              className={`text-[11px] font-black uppercase tracking-[0.18em] ${style.text}`}
                            >
                              Demo Concept
                            </p>
                            <h3 className="mt-2 text-lg font-black leading-tight">
                              {project.previewTitle}
                            </h3>
                          </div>
                          <span
                            className={`size-10 shrink-0 rounded-2xl ${style.accent}`}
                            aria-hidden="true"
                          />
                        </div>
                        <p className="mt-4 text-sm leading-6 text-slate-300">
                          {project.previewMeta}
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-2">
                          {project.previewSections.map((section) => (
                            <span
                              key={section}
                              className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-bold"
                            >
                              {section}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-emerald-900">
                      Demo Concept
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      Not client work
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    {project.type}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {project.description}
                  </p>
                  <ButtonLink href="#contact" variant="outline" className="mt-6 w-full">
                    Ask About This Layout
                  </ButtonLink>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl bg-white p-5 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div>
            <p className="text-lg font-black text-slate-950">
              Want a site concept for your type of business?
            </p>
            <p className="mt-2 leading-7 text-slate-600">
              Tell me what you do and I&apos;ll suggest a layout that fits your
              customers.
            </p>
          </div>
          <ButtonLink href="#contact" className="mt-5 w-full sm:mt-0 sm:w-auto">
            Get a Layout Recommendation
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
