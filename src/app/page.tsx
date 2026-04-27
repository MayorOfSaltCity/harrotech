import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    desc: "Purpose-built applications designed around your actual workflows and constraints.",
  },
  {
    title: "Business Systems Design",
    desc: "Structuring your operations with the right tools, integrations, and digital infrastructure.",
  },
  {
    title: "AI-Assisted Development",
    desc: "Practical use of AI tools to speed up development, improve quality, and reduce overhead.",
  },
  {
    title: "Automation & Internal Tools",
    desc: "Eliminating repetitive work through smart automation and operational tooling.",
  },
  {
    title: "Digital Operations Consulting",
    desc: "Reviewing and improving how your business runs digitally, end-to-end.",
  },
  {
    title: "Platform Architecture",
    desc: "Designing systems that scale without rebuilding from scratch each time.",
  },
  {
    title: "Training & Skills Development",
    desc: "Moving people from theory to practical capability through structured programmes.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center pt-16"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% -5%, #162032 0%, #0B1729 55%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-6">
              Harrington Technologies™
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-bold text-off-white leading-[1.08] tracking-tight">
              Technology Built for
              <br />
              <span className="text-gold">Real-World Execution</span>
            </h1>
            <p className="mt-6 text-[17px] text-muted leading-relaxed max-w-xl">
              Harrington Technologies™ designs software, digital systems, automation workflows,
              and practical training programmes that help people and businesses
              operate with more skill, speed, and control.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-gold hover:bg-gold-light text-navy font-semibold text-[14px] rounded transition-colors duration-150"
              >
                Work With Harrington Technologies™
              </Link>
              <Link
                href="https://2686-102-182-100-140.ngrok-free.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/20 hover:border-white/40 text-off-white font-semibold text-[14px] rounded transition-colors duration-150"
              >
                Explore TradeCraft Thuto™
              </Link>
            </div>
            <p className="mt-14 text-[12px] text-muted/40 tracking-wider">
              Built in South Africa. Deployed where it matters.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-charcoal border-t border-white/5 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
                What We Do
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-off-white leading-tight">
                Practical systems.
                <br />
                Executable results.
              </h2>
              <div className="w-10 h-0.5 bg-gold mt-5 mb-6" />
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                Harrington Technologies™ is a technology company focused on building systems
                that work in the real world. We don&apos;t build things to look
                impressive in presentations. We build things that run businesses,
                reduce friction, and create measurable capability for the people
                using them.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                Our work spans software engineering, business systems,
                automation, AI-assisted development, and technical skills
                development — sometimes separately, sometimes combined into a
                single engagement.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-[13px] font-medium text-gold hover:text-gold-light transition-colors gap-2"
              >
                About Harrington Technologies™ <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Software & Systems",
                  desc: "Custom applications, platforms, and operational tools built to your requirements.",
                },
                {
                  label: "Automation & AI Workflows",
                  desc: "Intelligent automation that reduces manual overhead and accelerates delivery.",
                },
                {
                  label: "Skills & Training",
                  desc: "Practical programmes that convert learning into usable professional capability.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-4 p-5 bg-surface rounded-lg border border-white/[0.06]"
                >
                  <div className="w-0.5 flex-shrink-0 bg-gold rounded-full" />
                  <div>
                    <p className="text-[14px] font-semibold text-off-white mb-1">
                      {item.label}
                    </p>
                    <p className="text-[13px] text-muted leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
              Services
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-off-white">
              What We Build
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="p-6 bg-surface border border-white/[0.06] rounded-xl hover:border-gold/20 transition-colors duration-200 group"
              >
                <span className="text-[11px] font-mono text-muted/40 mb-4 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[15px] font-semibold text-off-white leading-snug mb-2 group-hover:text-gold transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-[13px] font-medium text-gold hover:text-gold-light transition-colors gap-2"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* TradeCraft Thuto™ Feature */}
      <section className="bg-charcoal py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #0D3B2C 0%, #143D2E 50%, #0D3B2C 100%)",
            }}
          >
            <div className="p-10 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold/80 mb-4">
                    A Harrington Technologies™ Product
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-off-white leading-tight">
                    TradeCraft Thuto™
                  </h2>
                  <div className="w-10 h-0.5 bg-gold/60 mt-5 mb-6" />
                  <p className="text-[15px] text-off-white/70 leading-relaxed">
                    A full-stack platform connecting South African TVET students
                    to verified employment. Manages the entire student lifecycle
                    — from enrolment to career — with AI dropout prediction, live
                    skills rate tracking, ward-level job matching, NSFAS
                    compliance, and Moodle migration built in.
                  </p>
                  <p className="mt-4 text-[15px] text-off-white/60 leading-relaxed">
                    Built for this country&apos;s specific constraints: NQF,
                    HEMIS, load-shedding, offline mode, ZAR, ward-level data.
                    Not adapted from a US university platform.
                  </p>
                  <Link
                    href="https://2686-102-182-100-140.ngrok-free.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-8 px-6 py-3 border border-gold/40 hover:bg-gold/10 text-gold text-[13px] font-semibold rounded transition-colors duration-150 gap-2"
                  >
                    Explore the Platform →
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "AI Dropout Prediction",
                    "Skills Rate Engine",
                    "Job Matching",
                    "Ward-Level Mapping",
                    "NSFAS Compliance",
                    "Moodle Migration",
                    "Offline Mode",
                    "Employer Portal",
                  ].map((area) => (
                    <div
                      key={area}
                      className="px-4 py-3 bg-black/20 border border-white/[0.08] rounded-lg"
                    >
                      <p className="text-[13px] font-medium text-off-white/80">{area}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            Get Started
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-off-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-[16px] text-muted max-w-md mx-auto leading-relaxed mb-10">
            Tell us what you&apos;re building, what&apos;s broken, or what you want to
            move faster. We&apos;ll respond with a straight answer.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gold hover:bg-gold-light text-navy font-semibold text-[14px] rounded transition-colors duration-150"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
