"use client";

import Image from "next/image";
import { useState } from "react";
import { businessInfo, navItems } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 text-white backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <a
          href="#top"
          className="group flex min-w-0 max-w-[calc(100%-4rem)] items-center gap-3 rounded-2xl bg-white px-2.5 py-1.5 pr-4 shadow-lg shadow-black/15 transition hover:bg-cyan-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          aria-label={`${businessInfo.name} home`}
        >
          <Image
            src={businessInfo.markPath}
            alt=""
            width={94}
            height={78}
            priority
            className="h-9 w-auto object-contain sm:h-10"
          />
          <span className="max-w-[8.5rem] truncate text-sm font-black tracking-tight text-slate-950 sm:max-w-none sm:text-base">
            Bowman&apos;s Source Work
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-200 transition hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <ButtonLink href="#contact" size="sm">
            Free Website Review
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/15 text-white transition hover:border-cyan-300/70 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`border-t border-white/10 bg-slate-950 px-5 py-4 lg:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-sm font-medium text-slate-100 transition hover:bg-white/10 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <ButtonLink
            href="#contact"
            className="mt-2 w-full"
            onClick={() => setIsOpen(false)}
          >
            Free Website Review
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
