import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TradeCraft Thuto™",
  description:
    "TradeCraft Thuto™ connects South African TVET students to meaningful employment. From first day to first job — in one place.",
};

const capabilities = [
  {
    number: "01",
    title: "Employment Matching",
    desc: "Students get connected to real opportunities based on what they have actually learned. Employers get candidates who are actually ready. Both sides get something the old way never delivered.",
  },
  {
    number: "02",
    title: "Skills Market Insight",
    desc: "The platform gives students a clear picture of where their skills sit in the real market — so they understand their own value before they graduate. Institutions and employers see where the gaps are.",
  },
  {
    number: "03",
    title: "Early Intervention",
    desc: "The platform identifies students who are heading toward a bad outcome — early enough to do something about it. Coordinators get the signal before the student has already left.",
  },
  {
    number: "04",
    title: "National Skills Intelligence",
    desc: "A live view of where skills are concentrated and where demand is growing across South Africa. Useful for institutions planning programmes, and for the people who fund them.",
  },
  {
    number: "05",
    title: "Compliance & Reporting",
    desc: "Built around South Africa's regulatory requirements from the ground up. Institutions stay compliant without the manual overhead that currently consumes their administrative capacity.",
  },
  {
    number: "06",
    title: "Seamless Transition",
    desc: "Institutions do not have to start over. Existing content, student records, and historical data come across. The academic calendar keeps moving.",
  },
  {
    number: "07",
    title: "Built for Local Conditions",
    desc: "South Africa has infrastructure challenges that no overseas platform was designed for. TradeCraft Thuto™ was built with those realities as a starting point, not an afterthought.",
  },
  {
    number: "08",
    title: "Employer Partnership",
    desc: "Employers are not just recipients of graduates. They can invest in the skills they need, track outcomes, and build pipelines that actually deliver the talent they have been unable to find.",
  },
];

const stakeholders = [
  {
    role: "Students",
    desc: "Everything a student needs to study, track their progress, understand their options, and take their next step — in one place, without needing to chase anyone.",
  },
  {
    role: "Lecturers",
    desc: "The tools to teach well and see clearly. Lecturers know how their students are doing and which ones need attention — without spending half the week generating reports.",
  },
  {
    role: "Institutions",
    desc: "Real visibility into what is happening across the institution, with the compliance and reporting obligations handled so leadership can focus on outcomes.",
  },
  {
    role: "Employers",
    desc: "Access to graduates who are ready, with records to back it up. And the ability to invest in the pipeline so the talent they need actually exists.",
  },
  {
    role: "Parents",
    desc: "A clear window into how their child is progressing, without needing to make phone calls or wait for a report that may or may not arrive.",
  },
  {
    role: "Mentors",
    desc: "The structure to support students through their placements and transitions — with all the relevant people connected and informed.",
  },
];

export default function TradecraftThutoPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-40 pb-24"
        style={{
          background:
            "linear-gradient(160deg, #0D3B2C 0%, #111827 55%, #0B1729 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold/80 mb-4">
            A Harrington Technologies™ Product
          </p>
          <h1 className="text-4xl lg:text-[56px] font-bold text-off-white leading-[1.06] tracking-tight max-w-2xl">
            TradeCraft Thuto™
          </h1>
          <div className="w-10 h-0.5 bg-gold mt-5 mb-6" />
          <p className="text-[18px] text-off-white/70 max-w-2xl leading-relaxed">
            The platform that connects education to employment — at scale, in
            South Africa.
          </p>
          <p className="mt-5 text-[15px] text-off-white/50 max-w-xl leading-relaxed">
            Built for South Africa&apos;s technical and vocational colleges.
            TradeCraft Thuto™ walks with students from enrolment to employment
            — and gives institutions, employers, and the people making policy
            the visibility they have never had.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-[14px] rounded transition-colors"
            >
              Enquire About the Platform
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 hover:border-white/40 text-off-white font-semibold text-[14px] rounded transition-colors"
            >
              See What It Does
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-charcoal py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
                The Problem
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-6 leading-tight">
                South Africa&apos;s skills crisis isn&apos;t a mystery.
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                There are graduates without jobs, employers without candidates,
                and institutions with no visibility into either. The gap between
                a student finishing a qualification and an employer finding
                someone worth hiring has never been properly closed.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                NSFAS funds approximately 900,000 students annually across TVET
                colleges and universities. The institutions receiving those funds
                are doing their best with tools that were never built for this
                problem. The students paying the price for that are real people
                with real futures on the line.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                TradeCraft Thuto™ was built to change that.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  stat: "48%",
                  label: "TVET dropout rate nationally",
                  sub: "Most leave in the first six months",
                },
                {
                  stat: "62%",
                  label: "Graduates deemed not work-ready by employers",
                  sub: "DHET 2024 Report",
                },
                {
                  stat: "R12,000",
                  label: "Cost of one student dropout to a TVET college",
                  sub: "Lost allocation + admin + re-enrolment",
                },
                {
                  stat: "R850",
                  label: "Intervention cost per student retained",
                  sub: "14:1 return on public expenditure",
                },
              ].map((item) => (
                <div
                  key={item.stat}
                  className="p-6 bg-surface border border-white/[0.06] rounded-xl"
                >
                  <p className="text-3xl font-bold text-gold mb-1">
                    {item.stat}
                  </p>
                  <p className="text-[13px] font-medium text-off-white leading-snug mb-1">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-muted/60">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employment Engine */}
      <section
        className="py-20 lg:py-24"
        style={{
          background: "linear-gradient(135deg, #0D3B2C 0%, #0F3228 60%, #111827 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold/80 mb-4">
            How It Works
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-4 leading-tight max-w-2xl">
            Employment isn&apos;t a feature. It&apos;s the whole point.
          </h2>
          <div className="w-10 h-0.5 bg-gold/60 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-[15px] text-off-white/65 leading-relaxed">
              <p>
                TradeCraft Thuto™ connects what a student has actually learned
                to what an employer actually needs. Not what a student claims on
                a CV. Not a keyword match. A real connection, grounded in what
                was studied, assessed, and verified.
              </p>
              <p>
                The platform understands that a job offer is not useful if the
                student cannot get there. Practicality is part of every
                connection it makes — and institutions see exactly where the
                gaps are and what it would take to close them.
              </p>
              <p>
                Students know the value of what they are learning — in rand
                terms, in the real market — before they finish the
                qualification. That changes how they show up.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Connections built on demonstrated ability, not self-reported skills",
                "Practical, real-world feasibility built into every opportunity",
                "Live market context so students understand their own value",
                "Visibility into where industry demand is concentrated",
                "A national view of where skills and jobs align — and where they don't",
                "Planning tools that make the path from study to work navigable",
                "A verified record of achievement that travels with the graduate",
              ].map((point) => (
                <div
                  key={point}
                  className="flex gap-3 px-4 py-3 bg-black/20 border border-white/[0.07] rounded-lg"
                >
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold/60 flex-shrink-0" />
                  <p className="text-[13px] text-off-white/75 leading-snug">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            Platform Capabilities
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-12">
            Eight integrated systems. One platform.
          </h2>
          <div className="space-y-4">
            {capabilities.map((cap) => (
              <div
                key={cap.number}
                className="grid grid-cols-1 lg:grid-cols-[80px_200px_1fr] gap-4 lg:gap-8 p-6 lg:p-7 bg-surface border border-white/[0.06] rounded-xl hover:border-white/[0.12] transition-colors"
              >
                <span className="text-[11px] font-mono text-muted/40 pt-0.5">
                  {cap.number}
                </span>
                <h3 className="text-[14px] font-semibold text-gold leading-snug">
                  {cap.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stakeholders */}
      <section className="bg-charcoal py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            Who It Serves
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-4 leading-tight">
            Every stakeholder in the education ecosystem.
          </h2>
          <p className="text-[15px] text-muted mb-12 max-w-xl leading-relaxed">
            From a single integrated platform — not six separate systems that
            don&apos;t talk to each other.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stakeholders.map((s) => (
              <div
                key={s.role}
                className="p-6 bg-surface border border-white/[0.06] rounded-xl"
              >
                <h3 className="text-[14px] font-semibold text-gold mb-2">
                  {s.role}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for SA */}
      <section className="bg-navy py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
                Built for This Country
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-6 leading-tight">
                Not adapted. Built from scratch for South Africa.
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                The regulatory landscape. The funding structures. The
                infrastructure. The language. The geography. None of it was an
                afterthought — it was the starting point.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                The platform is built to work in this country as it actually
                is — not as a global vendor imagines it to be — and to grow
                from a single institution to the full national TVET estate
                without changing shape.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Regulatory compliance",
                "Funding reconciliation",
                "Qualification alignment",
                "Data sovereignty",
                "Works without connectivity",
                "Accessible on any device",
                "Infrastructure-aware",
                "Local cloud deployment",
                "Existing data preserved",
                "Geographic intelligence",
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-3 bg-surface border border-white/[0.06] rounded-lg"
                >
                  <p className="text-[12px] font-medium text-off-white/70">
                    {item}
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
            Interested in TradeCraft Thuto™?
          </h2>
          <p className="text-[15px] text-off-white/60 max-w-lg mx-auto leading-relaxed mb-10">
            Whether you are a TVET institution, an employer looking to build a
            verified talent pipeline, or a partner ready to invest in South
            Africa&apos;s skills future — speak to us. We will respond with a
            straight answer.
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
              About Harrington Technologies™
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
