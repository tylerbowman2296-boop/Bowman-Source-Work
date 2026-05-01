import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ButtonLink } from "@/components/ui/Button";
import { businessInfo } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Bowman's Source Work",
  description:
    "Terms of Service for Bowman's Source Work, including website design terms, payment terms, deposits, late fees, domain ownership, website care, and third-party services.",
  alternates: {
    canonical: "/terms",
  },
};

const termsSections = [
  {
    title: "1. Services Provided",
    paragraphs: [
      "Bowman's Source Work may provide services such as website design, website redesign, mobile-friendly website development, content upload, contact form setup, Google Maps or location setup, basic SEO titles and descriptions, domain connection help, launch support, and ongoing website care.",
      "The exact services included depend on the package, proposal, invoice, written message, or agreement approved by the client.",
    ],
  },
  {
    title: "2. What Is Not Included Unless Stated",
    paragraphs: [
      "Unless clearly agreed in writing, services do not include logo design, advanced custom software, e-commerce setup, booking systems, payment processing setup, professional photography, video production, paid advertising, advanced SEO campaigns, professional copywriting, third-party subscription fees, domain renewal fees, email hosting, or major work outside the original project scope.",
    ],
  },
  {
    title: "3. Client Responsibilities",
    paragraphs: [
      "The client is responsible for providing accurate business information, images, logos, written content, service details, contact information, login access when needed, and timely feedback.",
      "Delays in providing information, approvals, payment, or access may delay the project.",
    ],
  },
  {
    title: "4. Pricing, Deposits, and Payments",
    paragraphs: [
      "Project pricing depends on the package, page count, features, content needs, timeline, and update requirements.",
      "A deposit may be required before work begins. All deposits are non-refundable once paid, including if the client cancels, changes their mind, delays the project, no longer needs the website, or chooses another provider.",
      "Final payment is due before website launch, transfer, or final delivery unless otherwise agreed in writing.",
      "Bowman's Source Work may pause work, delay launch, suspend website care, or withhold final delivery until all required payments are received.",
    ],
  },
  {
    title: "5. Late Payments",
    paragraphs: [
      "Late payments may be charged an additional late fee of 10% of the overdue balance or $25, whichever is greater, for each overdue invoice.",
      "Continued non-payment may result in paused work, delayed launch, suspended website care, withheld website delivery, or cancellation of services.",
    ],
  },
  {
    title: "6. Revisions",
    paragraphs: [
      "Projects may include a limited number of reasonable revisions. Revisions include small edits such as text changes, image swaps, spacing adjustments, and minor layout improvements.",
      "Revisions do not include a full redesign, major change in direction, new pages, new features, or work outside the original scope.",
      "Additional revisions or additional work may require an extra fee.",
    ],
  },
  {
    title: "7. Scope Changes",
    paragraphs: [
      "Any request outside the original agreed scope may require a new quote or additional invoice.",
      "Bowman's Source Work will notify the client before adding paid work.",
    ],
  },
  {
    title: "8. Website Launch",
    paragraphs: [
      "The client may receive a preview or opportunity to review the website before launch when applicable.",
      "Final launch, file transfer, domain connection, or final delivery may be withheld until final payment is received.",
    ],
  },
  {
    title: "9. Domain, Hosting, and Ownership",
    paragraphs: [
      "The client is responsible for paying any required domain purchase fees, annual domain renewal fees, hosting fees, email fees, plugin fees, and third-party service fees needed to keep the website active.",
      "Bowman's Source Work may help purchase, connect, manage, or host the client's website/domain setup as part of the service.",
      "However, all rights to the paid website domain belong to the purchaser/client.",
      "Bowman's Source Work does not claim ownership of a client's paid domain.",
      "If Bowman's Source Work manages the domain or website setup, the client remains responsible for renewal costs and keeping payment information current.",
      "If a domain expires because renewal fees are not paid, payment information is outdated, or a third-party provider issue occurs, Bowman's Source Work is not responsible for the loss, expiration, downtime, or resale of that domain.",
    ],
  },
  {
    title: "10. Ownership of Website Work",
    paragraphs: [
      "After full payment is received, the client owns the final approved website content and design created specifically for the client, except for third-party tools, software, fonts, plugins, frameworks, templates, licensed materials, reusable code, general workflows, and non-client-specific systems used by Bowman's Source Work.",
      "Bowman's Source Work may reuse general skills, methods, code patterns, layouts, workflows, and non-client-specific components in future projects.",
    ],
  },
  {
    title: "11. Website Care",
    paragraphs: [
      "Website care may include small text updates, photo swaps, business hour updates, service description updates, contact information updates, contact form checks, broken link checks, minor layout adjustments, basic website review, and light improvement suggestions.",
      "Website care does not include major redesigns, new websites, advanced custom features, new page builds, e-commerce setup, paid ads, advanced SEO campaigns, third-party subscription costs, or domain renewal fees unless agreed in writing.",
      "Monthly website care fees must be paid on time. Support may be paused if payment is late.",
    ],
  },
  {
    title: "12. Third-Party Services",
    paragraphs: [
      "Websites may rely on third-party services such as domain registrars, hosting platforms, payment processors, email providers, plugins, analytics tools, contact form services, or website platforms.",
      "Bowman's Source Work is not responsible for outages, pricing changes, policy changes, account issues, expired domains, lost data, or technical problems caused by third-party providers.",
    ],
  },
  {
    title: "13. No Guaranteed Results",
    paragraphs: [
      "Bowman's Source Work will make reasonable efforts to create a professional website or provide quality website care.",
      "However, Bowman's Source Work does not guarantee specific sales, leads, traffic, search rankings, revenue, customer growth, or business results.",
    ],
  },
  {
    title: "14. Portfolio Permission",
    paragraphs: [
      "Bowman's Source Work may display completed work in its portfolio, website, social media, or marketing materials unless the client requests otherwise in writing.",
    ],
  },
  {
    title: "15. Cancellation",
    paragraphs: [
      "Either party may cancel a project in writing.",
      "If the client cancels for any reason, the deposit remains non-refundable. This includes cancellations caused by the client changing their mind, delaying the project, no longer needing the website, or choosing another provider.",
      "If completed work exceeds the deposit amount, the client may owe payment for completed work up to the cancellation date.",
    ],
  },
  {
    title: "16. Limitation of Liability",
    paragraphs: [
      "To the fullest extent allowed by law, Bowman's Source Work is not liable for indirect, incidental, special, or consequential damages, including lost profits, lost revenue, lost data, lost domains, downtime, or business interruption.",
    ],
  },
  {
    title: "17. Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the State of South Carolina.",
    ],
  },
  {
    title: "18. Changes to These Terms",
    paragraphs: [
      "Bowman's Source Work may update these Terms of Service at any time. Updates will be posted on this page with a new last updated date.",
    ],
  },
  {
    title: "19. Contact",
    paragraphs: [
      "Questions about these Terms may be sent through the contact form on the Bowman's Source Work website.",
    ],
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <section className="bg-slate-950 px-5 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-300">
              Client terms
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              These terms explain how {businessInfo.name} handles website
              design, website redesign, website care, payments, ownership, and
              service expectations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <span className="w-fit rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-bold text-cyan-100">
                Last Updated: April 30, 2026
              </span>
              <span className="text-sm font-medium text-slate-400">
                Bowman&apos;s Source Work - Anderson, South Carolina
              </span>
            </div>
          </div>
        </section>

        <section className="px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-lg font-black text-slate-950">
                Welcome to Bowman&apos;s Source Work.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                These Terms of Service explain the general terms that apply
                when a client purchases website design, website redesign,
                website care, or related digital services from Bowman&apos;s
                Source Work.
              </p>
              <p className="mt-4 leading-8 text-slate-700">
                By purchasing services, paying a deposit, approving a project,
                signing an agreement, or using this website, the client agrees
                to these terms.
              </p>
            </div>

            <div className="mt-8 space-y-5">
              {termsSections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                >
                  <h2 className="text-2xl font-black tracking-tight text-slate-950">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/15 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
              <div>
                <h2 className="text-2xl font-black">
                  Have questions before starting a project?
                </h2>
                <p className="mt-3 leading-7 text-slate-300">
                  Reach out before paying a deposit or approving work, and I can
                  explain the next step in plain language.
                </p>
              </div>
              <ButtonLink href="/#contact" className="mt-6 w-full sm:mt-0 sm:w-auto">
                Contact Bowman&apos;s Source Work
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
