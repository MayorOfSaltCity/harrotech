import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Harrington Technologies is a technology company focused on building practical systems for real-world business problems. Software, automation, digital operations, and skills development.",
};

const principles = [
  {
    title: "Execution over theory",
    desc: "We build things that work in practice, not just in planning documents. Every engagement ends with something you can use.",
  },
  {
    title: "Precision over breadth",
    desc: "We don't try to do everything. We focus on getting the right things done properly.",
  },
  {
    title: "Transparency as default",
    desc: "We tell you what we think, what we can deliver, and what's not worth building. No overselling.",
  },
  {
    title: "Systems thinking",
    desc: "We look at the whole picture before we start writing code or designing workflows. The best solution is usually simpler than you expect.",
  },
  {
    title: "Capability transfer",
    desc: "We build things you can own, understand, and operate. Dependency is a design flaw.",
  },
  {
    title: "Grounded in Africa",
    desc: "We operate in the South African context and understand the real constraints — infrastructure, resources, market realities, and talent pipelines.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-40 pb-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, #162032 0%, #0B1729 55%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            About Harrington Technologies
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-off-white leading-tight max-w-xl">
            A technology company built on practical execution.
          </h1>
          <div className="w-10 h-0.5 bg-gold mt-6" />
        </div>
      </section>

      {/* Mission */}
      <section className="bg-charcoal py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
                What We Are
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-6 leading-tight">
                Harrington Technologies combines software engineering, automation, and skills
                development into a single execution-focused practice.
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                We work with businesses and individuals who need practical
                technology systems — not consultants who talk about strategy and
                disappear. We stay in the work: designing, building,
                integrating, and training people to operate what we build.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                Our model is founder-led and deliberate. We take on a focused
                set of engagements, go deep on each one, and measure success by
                whether the thing we built actually gets used and produces
                results.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                Harrington Technologies is based in South Africa. Our clients range from
                early-stage startups to established businesses that need to
                modernise their operations or build new digital capability.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  title: "Software & Systems",
                  desc: "Custom applications, internal platforms, business tools, and digital infrastructure designed to match how your business actually operates.",
                },
                {
                  title: "Automation & AI Workflows",
                  desc: "Intelligently reducing manual work through automation, AI-assisted development, and workflow integration across your existing tools.",
                },
                {
                  title: "Skills Development",
                  desc: "Through Tradecraft Thuto, we run practical training programmes that develop digital, technical, and business skills for real-world use.",
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

      {/* Founder */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            The Founder
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-3 leading-tight">
            It started in a garage in Enerdale.
          </h2>
          <div className="w-10 h-0.5 bg-gold mb-10" />

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 lg:gap-16">
            <div className="space-y-5 text-[15px] text-muted leading-relaxed">
              <p>
                At around four years old, the Christmas present was a
                remote-controlled car. The screwdriver came shortly after.
                Not to destroy it — to understand it. The steering linkage,
                the motor, the way acceleration translated through the
                chassis. Once understood, it went back together. It worked.
                Dad didn&apos;t notice.
              </p>
              <p>
                A few weeks later, static Lego and a car that only drives
                weren&apos;t enough. The RC car came apart again — this time
                its steering mechanism was harvested and repurposed to make
                a Lego robot&apos;s arms move. That instinct — take it apart,
                understand it, rebuild it into something better — has never
                gone away.
              </p>
              <p>
                After moving to Shongwe Mission Hospital, the education
                continued through dustbin diving. In the nineties, upgrading
                a government computer system meant replacing terminals
                wholesale — entire generations of hardware sent for recycling
                at once. High-end CPUs and RAM chips were salvaged from
                government departments, office buildings, and research
                institutions including the CSIR. A motherboard was saved up
                for. A gaming machine was built.
              </p>
              <p>
                High school from 1997 to 2001 brought formal grounding —
                binary mathematics, sorting algorithms, structured
                programming as a matric subject. University took a turn
                toward animation: the logic at the time was that games need
                visuals, and visuals need animators. That turned out to be
                only half right. The technical pull won out. The work shifted
                into programmable effects — Inverse Kinematics and rigging
                for 3D models, facial and hand rigging, subsurface scattering
                for realistic human skin, cloth simulation with seam
                detection.
              </p>
              <p>
                The IT career began without qualifications — just competence
                and the willingness to prove it. The first job involved
                cleaning motherboards with a toothbrush, ghosting machines
                at a school, and rerunning cables through the same conduits
                a family of rats kept eating through. When someone asked
                whether he could program, the answer was yes, backed by a
                portfolio and a working application. That was enough to move
                forward.
              </p>
              <p>
                What followed was a career spanning more than twenty years —
                from 2004 to 2026 — across organisations ranging from small
                firms to some of South Africa&apos;s largest institutions.
              </p>
              <div className="mt-2 p-5 bg-surface border border-white/[0.06] rounded-xl">
                <p className="text-[13px] text-muted/70 italic leading-relaxed">
                  The specifics of the professional career — the clients,
                  the systems built, the problems solved — are redacted out
                  of respect for IP and confidentiality agreements entered
                  into over the course of that work. A full CV is available
                  on request.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Started", value: "Enerdale, Johannesburg" },
                { label: "First build", value: "Age ~4. RC car. Screwdriver." },
                { label: "Foundation", value: "Self-taught, hardware-first" },
                { label: "Formal study", value: "Programming — Matric 2001" },
                { label: "Discipline", value: "Animation → 3D Tech → Software" },
                { label: "Career start", value: "2004, no qualifications" },
                { label: "Career span", value: "20+ years, 2004 – 2026" },
                { label: "Based", value: "South Africa" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 px-4 py-3 bg-surface border border-white/[0.06] rounded-lg"
                >
                  <span className="text-[12px] text-muted/50 w-28 flex-shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-[13px] font-medium text-off-white/80">
                    {item.value}
                  </span>
                </div>
              ))}
              <div className="mt-4 px-4 py-3 bg-gold/5 border border-gold/15 rounded-lg">
                <p className="text-[12px] text-gold/70 leading-snug">
                  CV available on request via the contact form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            Brand Architecture
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-12">
            Harrington Technologies is the umbrella. Tradecraft Thuto is one initiative.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-8 bg-surface-2 border border-white/[0.06] rounded-2xl">
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
                Harrington Technologies
              </p>
              <h3 className="text-xl font-bold text-off-white mb-3">
                The Technology Company
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                The main brand. Covers software development, business systems,
                automation, AI-assisted development, digital operations
                consulting, platform architecture, and technical strategy.
                Harrington Technologies works with businesses that need technology systems
                built and operational.
              </p>
            </div>
            <div
              className="p-8 border border-white/[0.06] rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #0D3B2C, #143D2E)",
              }}
            >
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold/80 mb-4">
                Tradecraft Thuto
              </p>
              <h3 className="text-xl font-bold text-off-white mb-3">
                The Training Camp
              </h3>
              <p className="text-[14px] text-off-white/60 leading-relaxed">
                A Harrington Technologies initiative focused on practical skills transfer.
                Tradecraft Thuto runs structured training programmes in digital
                literacy, software thinking, business readiness, creative
                production, and learning-to-earning pathways. It sits under
                Harrington Technologies but operates with its own identity and programme
                structure.
              </p>
              <Link
                href="/tradecraft-thuto"
                className="inline-flex items-center mt-5 text-[13px] font-medium text-gold hover:text-gold-light transition-colors gap-1"
              >
                Learn more →
              </Link>
            </div>
          </div>
          <p className="mt-6 text-[13px] text-muted/50 italic">
            Additional Harrington Technologies initiatives may be launched under the same
            umbrella over time.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-charcoal py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            How We Work
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-12">
            Our working principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {principles.map((p) => (
              <div
                key={p.title}
                className="p-6 bg-surface border border-white/[0.06] rounded-xl"
              >
                <h3 className="text-[14px] font-semibold text-gold mb-2">
                  {p.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-off-white mb-1">
              Want to work with us?
            </h3>
            <p className="text-[14px] text-muted">
              Tell us what you&apos;re trying to build or fix.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-navy font-semibold text-[13px] rounded transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
