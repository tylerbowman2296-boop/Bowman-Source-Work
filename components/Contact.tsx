import { businessInfo, contactNeeds } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  const mailtoAction = `mailto:${businessInfo.email}?subject=Free%20Website%20Review%20Request`;

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
            Tell me about your business and I&apos;ll help you figure out the most
            practical next step.
          </p>

          <div className="mt-8 space-y-4 rounded-3xl border border-white/10 bg-white/[0.07] p-6">
            <div>
              <p className="text-sm font-bold text-cyan-200">Email</p>
              <a
                href={`mailto:${businessInfo.email}`}
                className="mt-1 inline-block break-all text-lg font-semibold text-white underline decoration-cyan-300/50 underline-offset-4 transition hover:text-cyan-200"
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
        </div>

        <form
          action={mailtoAction}
          method="post"
          encType="text/plain"
          aria-describedby="contact-form-note"
          className="rounded-3xl bg-white p-5 text-slate-950 shadow-2xl shadow-black/30 sm:p-7"
        >
          {/* Replace the mailto action above with a Formspree, Resend, or Next route handler when a real email service is ready. */}
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
            <label
              htmlFor="need"
              className="text-sm font-bold text-slate-800"
            >
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
          <p
            id="contact-form-note"
            className="mt-4 text-center text-sm leading-6 text-slate-500"
          >
            You can also email or call directly if that is easier. I will keep
            the next step simple and clear.
          </p>
        </form>
      </div>
    </section>
  );
}
