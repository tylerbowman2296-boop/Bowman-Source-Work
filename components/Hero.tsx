import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { businessInfo, heroPoints } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 text-white"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-cyan-300/40" />
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-8 lg:py-28">
        <div className="w-full max-w-[20rem] min-w-0 sm:max-w-none">
          <p className="mb-5 block max-w-full rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold leading-6 text-cyan-200 sm:inline-block sm:rounded-full">
            Anderson SC website design and care
          </p>
          <h1
            id="hero-heading"
            className="max-w-full text-pretty text-3xl font-black leading-tight tracking-tight text-white sm:max-w-4xl sm:text-5xl lg:text-6xl"
          >
            Look professional online and make it easier for local customers to
            contact you.
          </h1>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
            Bowman&apos;s Source Work builds clean, mobile-friendly websites for
            Anderson-area small businesses, then helps keep them accurate with
            dependable website care.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="#contact" size="lg" className="w-full sm:w-auto">
              Get a Free Website Review
            </ButtonLink>
            <ButtonLink
              href="#pricing"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              See Services & Pricing
            </ButtonLink>
          </div>

          <p className="mt-4 text-sm font-medium text-slate-300">
            Prefer to talk first?{" "}
            <a
              href={`tel:${businessInfo.phoneHref}`}
              className="font-bold text-cyan-200 underline decoration-cyan-300/50 underline-offset-4 transition hover:text-cyan-100"
            >
              Call or text {businessInfo.phone}
            </a>
            .
          </p>

          <ul className="mt-8 grid gap-3 text-sm font-medium text-slate-200 sm:grid-cols-2">
            {heroPoints.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span
                  className="flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300"
                  aria-hidden="true"
                >
                  +
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full max-w-[18.5rem] min-w-0 sm:mx-auto sm:max-w-none">
          <div className="w-full max-w-full rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-3 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="overflow-hidden rounded-[1.35rem] bg-white text-slate-950">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-4 py-3">
                <span className="size-3 shrink-0 rounded-full bg-red-400" />
                <span className="size-3 shrink-0 rounded-full bg-amber-400" />
                <span className="size-3 shrink-0 rounded-full bg-emerald-400" />
                <span className="ml-2 min-w-0 truncate rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-500 sm:ml-3">
                  Local website preview
                </span>
              </div>

              <div className="p-4 sm:p-6">
                <div className="rounded-2xl bg-slate-950 p-5 text-white">
                  <div className="mb-5 inline-flex rounded-xl bg-white px-3 py-2">
                    <Image
                      src={businessInfo.markPath}
                      alt=""
                      width={70}
                      height={58}
                      className="h-8 w-auto object-contain"
                    />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                    Local service website
                  </p>
                  <p className="mt-3 text-pretty text-xl font-black sm:text-2xl">
                    Help customers understand your services and contact you
                    faster.
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Service highlights, hours, reviews, location details, and
                    basic local SEO organized around how customers choose.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {["Services", "Reviews", "Hours", "Request a Quote"].map(
                      (label) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/10 bg-white/10 p-3 text-sm font-semibold"
                        >
                          {label}
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Fast pages", "Clear CTA", "Local SEO"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-2xl border border-cyan-300/25 bg-slate-900 p-4 shadow-xl shadow-black/20 sm:absolute sm:-bottom-8 sm:-left-6 sm:mt-0 sm:max-w-xs">
            <p className="text-sm font-bold text-cyan-200">
              Free review looks at:
            </p>
            <div className="mt-3 space-y-2 text-sm text-slate-200">
              <p>Mobile experience</p>
              <p>Clear contact path</p>
              <p>First impression and trust</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
