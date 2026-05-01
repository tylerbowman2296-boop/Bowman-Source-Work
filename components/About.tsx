import Image from "next/image";
import { businessInfo } from "@/lib/constants";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-slate-50 py-16 sm:py-24"
      aria-labelledby="about-title"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-950/10">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/tyler-bowman.jpeg"
                alt="Tyler Bowman, founder of Bowman's Source Work"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg sm:left-auto sm:right-6 sm:max-w-xs">
            <p className="text-sm font-bold text-slate-950">
              Anderson-born founder
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Easy to reach, clear about next steps, and focused on useful work.
            </p>
          </div>
        </div>

        <div className="pt-8 lg:pt-0">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-700">
            About the founder
          </p>
          <h2
            id="about-title"
            className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl"
          >
            Meet {businessInfo.founder}
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              My name is Tyler Bowman, founder of Bowman&apos;s Source Work. I&apos;m 20
              years old, born and raised in Anderson, South Carolina. I&apos;ve
              worked in customer-facing jobs for much of my life, so I know how
              important trust, communication, and first impressions are for a
              business.
            </p>
            <p>
              I started Bowman&apos;s Source Work to help local businesses look
              professional online with clean websites and dependable website
              care. Whether you are starting from scratch or need help improving
              what you already have, my goal is to keep the process simple,
              honest, and easy to understand.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              ["Focus", "Websites for service businesses and local shops"],
              ["Service Area", "Anderson and the Upstate SC area"],
              ["Style", "Clean, helpful, no confusing tech talk"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-white p-4"
              >
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-700">
                  {label}
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-800">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
