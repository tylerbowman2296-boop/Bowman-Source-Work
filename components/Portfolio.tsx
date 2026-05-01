import { demoProjects } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

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
              Honest demo concepts, not fake client work.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            These examples show possible directions for local businesses while
            Bowman&apos;s Source Work begins building its client portfolio. Each one
            is clearly labeled so you know exactly what you are looking at.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {demoProjects.map((project, index) => (
            <article
              key={project.type}
              className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm"
            >
              <div className="bg-slate-950 p-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.08] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">
                      Demo Concept
                    </span>
                    <span className="text-sm font-bold text-white">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="mt-8 space-y-3">
                    <div className="h-3 w-2/3 rounded-full bg-white" />
                    <div className="h-3 w-full rounded-full bg-white/50" />
                    <div className="h-3 w-4/5 rounded-full bg-white/30" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-800">
                  Project type
                </p>
                <h3 className="mt-2 text-xl font-black text-slate-950">
                  {project.type}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {project.description}
                </p>
                <ButtonLink href="#contact" variant="outline" className="mt-6">
                  Ask About This Layout
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
