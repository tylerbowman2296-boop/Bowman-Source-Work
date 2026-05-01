"use client";

import Image from "next/image";
import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { businessInfo, contactNeeds } from "@/lib/constants";

export default function Contact() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const subject = "Free Website Review Request";
  const directMailLink = useMemo(
    () => `mailto:${businessInfo.email}?subject=${encodeURIComponent(subject)}`,
    [subject],
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const lines = [
      `Name: ${formData.get("Name") || ""}`,
      `Business name: ${formData.get("Business name") || ""}`,
      `Email: ${formData.get("Email") || ""}`,
      `Phone number: ${formData.get("Phone number") || ""}`,
      `Need help with: ${formData.get("Need help with") || ""}`,
      "",
      `Message: ${formData.get("Message") || ""}`,
    ];

    const mailtoUrl = `mailto:${businessInfo.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;

    setHasSubmitted(true);
    window.location.href = mailtoUrl;
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-slate-950 py-16 text-white sm:py-24"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
            Contact
          </p>
          <h2
            id="contact-title"
            className="mt-3 text-3xl font-black tracking-tight sm:text-4xl"
          >
            Ready to Make Your Business Look Better Online?
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Tell me about your business and I&apos;ll help you figure out the
            most practical next step.
          </p>

          <div className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/[0.07] p-6">
            <div>
              <p className="text-sm font-bold text-cyan-200">Email</p>
              <a
                href={`mailto:${businessInfo.email}`}
                className="mt-1 inline-block break-all text-base font-semibold text-white underline decoration-cyan-300/50 underline-offset-4 transition hover:text-cyan-200 sm:text-lg"
              >
                {businessInfo.email}
              </a>
            </div>
            <div>
              <p className="text-sm font-bold text-cyan-200">Call or text</p>
              <a
                href={`tel:${businessInfo.phoneHref}`}
                className="mt-1 inline-block text-lg font-semibold text-white underline decoration-cyan-300/50 underline-offset-4 transition hover:text-cyan-200"
              >
                {businessInfo.phone}
              </a>
            </div>
            <div>
              <p className="text-sm font-bold text-cyan-200">Location</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {businessInfo.location}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-cyan-300/20 bg-white p-5 text-slate-950 shadow-xl shadow-black/20">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-700">
              Leave a review
            </p>
            <div className="mt-4 grid gap-5 sm:grid-cols-[8rem_1fr] sm:items-center lg:grid-cols-1 xl:grid-cols-[8rem_1fr]">
              <a
                href={businessInfo.reviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leave a Google review for Bowman's Source Work"
                className="mx-auto block rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition hover:border-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:mx-0"
              >
                <Image
                  src={businessInfo.reviewQrPath}
                  alt="QR code to leave a Google review for Bowman's Source Work"
                  width={128}
                  height={128}
                  className="size-32"
                />
              </a>
              <div>
                <h3 className="text-xl font-black">
                  Worked with Bowman&apos;s Source Work?
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Scan the QR code or tap the button to leave a quick Google
                  review.
                </p>
                <a
                  href={businessInfo.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-slate-950 px-5 text-center text-sm font-semibold leading-tight text-white transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:w-auto"
                >
                  Leave a Google Review
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          aria-describedby="contact-form-note"
          method="post"
          onSubmit={handleSubmit}
          className="rounded-3xl bg-white p-5 text-slate-950 shadow-2xl shadow-black/30 sm:p-7"
        >
          {/* Connect this form to Formspree, Resend, or a Next route handler when a real email service is ready. */}
          <div className="mb-6 rounded-2xl border border-cyan-100 bg-cyan-50 p-4">
            <p className="text-sm font-bold leading-6 text-slate-800">
              No pressure &mdash; just tell me what you need help with and
              I&apos;ll suggest the best next step.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="text-sm font-bold text-slate-800">
                Name
              </label>
              <input
                id="name"
                name="Name"
                type="text"
                autoComplete="name"
                required
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
            <div>
              <label
                htmlFor="business-name"
                className="text-sm font-bold text-slate-800"
              >
                Business name
              </label>
              <input
                id="business-name"
                name="Business name"
                type="text"
                autoComplete="organization"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-bold text-slate-800"
              >
                Email
              </label>
              <input
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="text-sm font-bold text-slate-800"
              >
                Phone number
              </label>
              <input
                id="phone"
                name="Phone number"
                type="tel"
                autoComplete="tel"
                className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 px-4 text-base text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="need" className="text-sm font-bold text-slate-800">
              What do you need help with?
            </label>
            <select
              id="need"
              name="Need help with"
              required
              defaultValue=""
              className="mt-2 min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-base text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
            >
              <option value="" disabled>
                Select an option
              </option>
              {contactNeeds.map((need) => (
                <option key={need} value={need}>
                  {need}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="text-sm font-bold text-slate-800"
            >
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              rows={5}
              required
              className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-950 outline-none transition focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
              placeholder="Tell me what your business does and what you want your website to help with."
            />
          </div>

          <Button type="submit" className="mt-6 w-full" size="lg">
            Get a Free Website Review
          </Button>
          {hasSubmitted ? (
            <div
              role="status"
              className="mt-4 rounded-2xl border border-cyan-200 bg-cyan-50 px-4 py-3 text-sm leading-6 text-slate-700"
            >
              Your email app should open with the message filled in. If it does
              not, email{" "}
              <a
                href={directMailLink}
                className="font-bold text-cyan-800 underline decoration-cyan-400 underline-offset-4"
              >
                {businessInfo.email}
              </a>{" "}
              or call {businessInfo.phone}.
            </div>
          ) : null}
          <p
            id="contact-form-note"
            className="mt-4 text-center text-sm leading-6 text-slate-500"
          >
            This opens your email app with your details filled in. You can also
            email or call directly if that is easier.
          </p>
        </form>
      </div>
    </section>
  );
}
