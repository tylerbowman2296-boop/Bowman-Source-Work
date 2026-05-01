import { businessInfo, navItems } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = navItems.map((item) => ({
    ...item,
    href: `/${item.href}`,
  }));

  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-2xl bg-white px-3 py-2 transition hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              aria-label={`${businessInfo.name} home`}
            >
              <Image
                src={businessInfo.logoPath}
                alt=""
                width={260}
                height={92}
                className="h-11 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-md leading-7 text-slate-300">
              {businessInfo.tagline}
            </p>
            <p className="mt-3 text-sm font-semibold text-cyan-200">
              {businessInfo.location}
            </p>
            <div className="mt-4 flex flex-col gap-2 text-sm font-medium text-slate-300 sm:flex-row sm:gap-5">
              <a
                href={`mailto:${businessInfo.email}`}
                className="underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyan-200"
              >
                {businessInfo.email}
              </a>
              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyan-200"
              >
                {businessInfo.phone}
              </a>
            </div>
          </div>

          <nav
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:justify-items-end"
            aria-label="Footer navigation"
          >
            {footerLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {businessInfo.name}. All rights reserved.
          </p>
          <div className="flex flex-col gap-2 sm:items-end">
            <a
              href="/terms"
              className="font-medium text-slate-300 underline decoration-cyan-300/40 underline-offset-4 transition hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Terms of Service
            </a>
            <p>Website design and care for local small businesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
