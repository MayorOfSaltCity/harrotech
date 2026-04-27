import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Harrington Technologies™ offers custom software development, business systems design, AI-assisted development, automation, digital operations consulting, platform architecture, and training.",
};

const services = [
  {
    number: "01",
    title: "Custom Software Development",
    summary: "Applications built for your specific workflows",
    desc: "We build web applications, internal tools, APIs, and data-driven platforms that fit how your business actually operates. We don't retrofit generic software — we design and build to your requirements, your constraints, and your users.",
    deliverables: [
      "Web applications",
      "REST and GraphQL APIs",
      "Admin dashboards",
      "Data processing tools",
      "Operational platforms",
    ],
  },
  {
    number: "02",
    title: "Business Systems Design",
    summary: "Digital infrastructure for operational clarity",
    desc: "Before writing code, we map how your business runs and where technology can create the most leverage. We design systems that integrate tools, eliminate data silos, and give your team a coherent operational picture.",
    deliverables: [
      "Systems audits",
      "Process mapping",
      "Tool selection",
      "Integration architecture",
      "Operational documentation",
    ],
  },
  {
    number: "03",
    title: "AI-Assisted Development Workflows",
    summary: "Using AI practically to build faster and better",
    desc: "We use AI tools strategically across the development lifecycle — for code generation, testing, documentation, and workflow automation. The result is faster delivery, lower cost, and better quality without inflating team size.",
    deliverables: [
      "AI-augmented dev pipelines",
      "Prompt engineering",
      "Automated code review setups",
      "LLM integrations",
      "AI workflow design",
    ],
  },
  {
    number: "04",
    title: "Automation & Internal Tools",
    summary: "Removing repetitive work from your operations",
    desc: "Manual, repetitive processes are friction. We identify them, design the right automation approach, and build tools your team will actually use. From simple scripts to full workflow orchestration — scoped to what makes business sense.",
    deliverables: [
      "Process automation",
      "Internal tooling",
      "Scheduled jobs and pipelines",
      "Notification systems",
      "Report generation",
    ],
  },
  {
    number: "05",
    title: "Digital Operations Consulting",
    summary: "Helping you run your business more digitally",
    desc: "We review your current digital setup and identify where things break down — the disconnected tools, the manual workarounds, the things that rely on one person. Then we design a more coherent digital operations layer.",
    deliverables: [
      "Digital operations review",
      "Tool stack assessment",
      "Gap analysis",
      "Improvement roadmap",
      "Implementation support",
    ],
  },
  {
    number: "06",
    title: "Platform Architecture",
    summary: "Systems designed to scale without a rewrite",
    desc: "We design platform architectures that give you room to grow without forcing a complete rebuild every 18 months. Solid foundations, clean separation of concerns, and architecture decisions you'll understand and can explain.",
    deliverables: [
      "Architecture design",
      "Technology selection",
      "Infrastructure planning",
      "Scalability reviews",
      "Technical documentation",
    ],
  },
  {
    number: "07",
    title: "Training & Skills Development",
    summary: "Building capability in your team or community",
    desc: "Through TradeCraft Thuto™ and direct client engagements, we run training programmes that develop practical technical and operational skills. We also help organisations build internal training capacity and documentation.",
    deliverables: [
      "Technical training delivery",
      "Curriculum development",
      "Internal knowledge transfer",
      "Documentation programmes",
      "TradeCraft Thuto™ integration",
    ],
  },
];

export default function ServicesPage() {
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
            Services
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-off-white leading-tight max-w-2xl">
            What Harrington Technologies™ builds and delivers.
          </h1>
          <div className="w-10 h-0.5 bg-gold mt-6 mb-6" />
          <p className="text-[16px] text-muted max-w-xl leading-relaxed">
            We work across seven service areas. Most engagements combine
            several of them — because real business problems don&apos;t fit into
            single-service boxes.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-5">
          {services.map((service) => (
            <div
              key={service.number}
              className="grid grid-cols-1 lg:grid-cols-[160px_1fr_1fr] gap-6 lg:gap-10 p-7 lg:p-8 bg-surface border border-white/[0.06] rounded-2xl hover:border-white/[0.12] transition-colors"
            >
              <div>
                <span className="text-[11px] font-mono text-muted/40">
                  {service.number}
                </span>
                <p className="mt-2 text-[12px] font-medium text-gold/70 leading-snug">
                  {service.summary}
                </p>
              </div>
              <div>
                <h3 className="text-[17px] font-bold text-off-white mb-3">
                  {service.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {service.desc}
                </p>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted/40 mb-3">
                  Includes
                </p>
                <ul className="space-y-1.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 text-[13px] text-muted"
                    >
                      <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Model */}
      <section className="bg-navy py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
            Engagement Model
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-10">
            How we work with clients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                title: "Project-based",
                desc: "Defined scope, clear deliverables, fixed timelines. Good for discrete builds, migrations, or system launches.",
              },
              {
                title: "Retainer",
                desc: "Ongoing development, maintenance, and operational support. Good for businesses that need continuous capability.",
              },
              {
                title: "Advisory",
                desc: "Strategic input on architecture, tooling decisions, and digital operations. Good when you need a technical co-thinker.",
              },
            ].map((model) => (
              <div
                key={model.title}
                className="p-6 bg-surface border border-white/[0.06] rounded-xl"
              >
                <h3 className="text-[15px] font-semibold text-gold mb-2">
                  {model.title}
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {model.desc}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-navy font-semibold text-[13px] rounded transition-colors"
          >
            Invest in Your Operations →
          </Link>
        </div>
      </section>
    </>
  );
}
