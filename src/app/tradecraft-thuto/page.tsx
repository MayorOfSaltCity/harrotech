import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tradecraft Thuto",
  description:
    "Tradecraft Thuto is a Harrington Technologies training camp for practical digital, business, and technical skills. Moving learners from theory to usable capability.",
};

const programmeAreas = [
  {
    title: "Digital Literacy",
    desc: "Foundational skills for navigating digital tools, platforms, and workflows. Building confidence and competence with technology in everyday work and life.",
  },
  {
    title: "Software Thinking",
    desc: "Understanding how software systems work, how to think like a developer, and how to communicate effectively in technical environments — even without coding.",
  },
  {
    title: "Business Readiness",
    desc: "Practical business operations skills: documentation, systems, financial basics, digital presence, and how to run a functional small business or freelance practice.",
  },
  {
    title: "Creative Production",
    desc: "Digital content creation, design fundamentals, and production skills for people building a body of work or a creative business.",
  },
  {
    title: "Technical Foundations",
    desc: "Entry-level technical skills: coding basics, data handling, tooling, and automation. Building the foundation for a technical career or role.",
  },
  {
    title: "Learning-to-Earning Pathways",
    desc: "Structured guidance on turning skills into income — freelancing, employment, entrepreneurship, and portfolio development.",
  },
];

const forWho = [
  "School leavers looking for direction beyond traditional education pathways",
  "Young adults needing practical digital skills for employment or entrepreneurship",
  "Professionals wanting to upskill in specific digital or technical areas",
  "Small business owners needing to modernise how they operate",
  "Organisations looking to upskill their teams in digital operations",
];

export default function TradecraftThutoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-20"
        style={{
          background:
            "linear-gradient(160deg, #0D3B2C 0%, #111827 50%, #0B1729 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold/80 mb-4">
            A Harrington Technologies Initiative
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-off-white leading-tight">
            Tradecraft Thuto
          </h1>
          <div className="w-10 h-0.5 bg-gold mt-5 mb-6" />
          <p className="text-[18px] text-off-white/70 max-w-xl leading-relaxed">
            A training camp for practical digital, business, and technical
            skills.
          </p>
        </div>
      </section>

      {/* What it is */}
      <section className="bg-charcoal py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
                The Programme
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-6 leading-tight">
                From theory to usable capability.
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                Most training programmes teach you things. Tradecraft Thuto
                focuses on what you can do with what you&apos;ve learned. The
                difference is practical orientation — every programme area is
                designed to produce capability that translates into real-world
                use.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                &ldquo;Thuto&rdquo; means learning in Sesotho and Setswana.
                &ldquo;Tradecraft&rdquo; refers to the specific, practical
                skills of a trade or profession. The combination captures what
                the programme is: structured learning that produces real craft.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                Tradecraft Thuto is not a school. It&apos;s a training camp —
                focused, practical, and outcome-oriented. The people who go
                through it come out knowing how to operate, not just knowing
                things.
              </p>
            </div>
            <div
              className="rounded-2xl p-8 lg:p-10 border border-white/[0.08]"
              style={{
                background: "linear-gradient(135deg, #0D3B2C 0%, #0F3228 100%)",
              }}
            >
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold/80 mb-4">
                Our Focus
              </p>
              <ul className="space-y-4">
                {[
                  "Practical skills that produce real-world results",
                  "Digital literacy as a foundation for everything else",
                  "Business readiness for entrepreneurship and employment",
                  "Software and technical thinking without unnecessary complexity",
                  "Creative and production skills for the digital economy",
                  "Clear pathways from training to income",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-[14px] text-off-white/75 leading-snug"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Areas */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            Programme Areas
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-12">
            Six areas of practical development
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programmeAreas.map((area, i) => (
              <div
                key={area.title}
                className="p-6 bg-surface border border-white/[0.06] rounded-xl hover:border-gold/20 transition-colors group"
              >
                <span className="text-[11px] font-mono text-muted/40 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[15px] font-semibold text-off-white mb-2 group-hover:text-gold transition-colors">
                  {area.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {area.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-charcoal py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
                Who It&apos;s For
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-6">
                Built for people who need skills that work.
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-8">
                Tradecraft Thuto is designed for anyone who needs to develop
                practical digital and technical capability — whether for
                employment, entrepreneurship, or professional growth.
              </p>
              <ul className="space-y-4">
                {forWho.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[14px] text-muted leading-snug"
                  >
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Format",
                  desc: "Programmes are structured in defined cohorts and modules. Training is practical, workshop-based, and focused on outcomes. We don't run open-ended courses — we run structured development cycles with clear entry and exit points.",
                },
                {
                  title: "Delivery",
                  desc: "In-person, blended, and online delivery options depending on the programme and cohort. We work with organisations that want to run programmes for their communities or staff.",
                },
                {
                  title: "Partnerships",
                  desc: "We work with companies, NGOs, schools, and community organisations who want to embed skills development in their environments. Contact us to discuss partnership options.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-surface border border-white/[0.06] rounded-xl"
                >
                  <h3 className="text-[14px] font-semibold text-gold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(160deg, #0D3B2C 0%, #0B1729 60%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-4">
            Interested in Tradecraft Thuto?
          </h2>
          <p className="text-[15px] text-off-white/60 max-w-md mx-auto leading-relaxed mb-10">
            Whether you&apos;re an individual looking to join, or an
            organisation wanting to run a programme, get in touch with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-[14px] rounded transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 hover:border-white/40 text-off-white font-semibold text-[14px] rounded transition-colors"
            >
              About Harrington Technologies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
