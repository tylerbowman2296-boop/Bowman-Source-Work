import { careChecklist } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

export default function WebsiteCare() {
  return (
    <section
      id="website-care"
      className="scroll-mt-24 bg-slate-950 py-16 text-white sm:py-24"
      aria-labelledby="care-title"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Website care
          </p>
          <h2
            id="care-title"
            className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
          >
            Websites Need Care After Launch
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            A website should not be something you launch once and forget.
            Business hours change, photos need updating, services change, and
            customers expect accurate information before they call. Bowman&apos;s
            Source Work helps local businesses keep their websites updated,
            clean, and trustworthy.
          </p>
          <p className="mt-5 leading-7 text-slate-400">
            Website care gives you one dependable person to reach out to when
            the site needs a small fix, a new photo, or a better section over
            time.
          </p>
          <div className="mt-8">
            <ButtonLink href="#pricing">View Website Care Plan</ButtonLink>
          </div>
        </div>

        <div className="rounded-3xl border border-white/[0.12] bg-white/[0.07] p-5 shadow-2xl shadow-black/30 sm:p-7">
          <div className="rounded-2xl bg-white p-5 text-slate-950 sm:p-6">
            <h3 className="text-xl font-black">
              Common care tasks for local businesses
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {careChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-sm font-semibold text-slate-700"
                >
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-emerald-600"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
