import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TradeCraft Thuto™",
  description:
    "TradeCraft Thuto™ is a full-stack platform connecting South African TVET students to verified employment — from enrolment to career, in one integrated system.",
};

const capabilities = [
  {
    number: "01",
    title: "Employment Matching Engine",
    desc: "Pairs verified student skill profiles against live employer listings. Matches are based on demonstrated, graded competencies — not self-reported CVs. Every match carries a feasibility score including commute distance, affordability, and geographic practicality down to ward level.",
  },
  {
    number: "02",
    title: "Live Skills Rate Engine",
    desc: "Aggregates skill valuations from employer offers, contributor estimates, AI aggregations, and market searches. Students see current min/avg/max ZAR per hour per skill — before they finish the qualification. Employers register formal skills shortage notices by industry, province, and urgency.",
  },
  {
    number: "03",
    title: "AI Dropout Prediction",
    desc: "Flags at-risk students six weeks before they disengage — 87% detection rate. The system calculates a composite risk score from attendance, grades, submission rate, and engagement, giving coordinators time to actually intervene. Every rand spent on intervention saves fourteen in lost NSFAS allocation.",
  },
  {
    number: "04",
    title: "National Skills Map",
    desc: "A live geographic view of South Africa's skills landscape. Student skill concentration and employer job demand are plotted simultaneously at ward level on an interactive national map. A policy instrument, not decoration.",
  },
  {
    number: "05",
    title: "NSFAS & HEMIS Compliance",
    desc: "NQF-aligned grading for NCV and NATED qualifications. Automated DHET code assignment. HEMIS submission readiness without manual re-entry. NSFAS payment reconciliation with a full audit trail. POPIA-compliant from first use.",
  },
  {
    number: "06",
    title: "Moodle Migration Engine",
    desc: "Imports ten years of existing course content, user records, and historical data from Moodle overnight. No re-enrolment. No data loss. No disruption to the academic calendar.",
  },
  {
    number: "07",
    title: "Load-Shedding Resilience",
    desc: "Fully functional offline mode. USSD access for students on feature phones. Deadline management is Eskom schedule-aware — students are never penalised for a power outage.",
  },
  {
    number: "08",
    title: "Employer Upskilling Sponsorship",
    desc: "Employers fund specific courses, skills, or qualification modules for their own staff directly through the platform — and track spend and outcomes in a single dashboard.",
  },
];

const stakeholders = [
  {
    role: "Students",
    desc: "Unified portal for assignments, grades, materials, messaging, career path tracking, matched job listings, commute feasibility, and a gamified learning layer that keeps engagement high.",
  },
  {
    role: "Lecturers",
    desc: "Live grade book, assignment management, class analytics, AI question suggestions, and early warning flags on students who need attention — before they have already disengaged.",
  },
  {
    role: "Institutions",
    desc: "System-wide analytics, HEMIS-ready compliance reporting, NSFAS reconciliation, real-time at-risk dashboards, and ward-level relocation exception reports.",
  },
  {
    role: "Employers",
    desc: "Verified graduate profiles with skill ratings and academic records. Post jobs, run internship placements, submit evaluations, send psychometric assessments, and sponsor employee upskilling.",
  },
  {
    role: "Parents",
    desc: "Read-only portal to follow academic progress and receive notifications when something needs attention.",
  },
  {
    role: "Mentors",
    desc: "Manage student placements, track internship progress, and coordinate with institutions and employers through structured assignment workflows.",
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
            A full-stack platform for South African technical and vocational
            education. It manages the entire lifecycle of a student — from
            enrolment through to verified employment — while giving
            institutions, employers, and the labour market real data about where
            skills are, where jobs are, and where the two fail to meet.
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
                colleges and universities. The institutions receiving those
                funds operate on Moodle installs, spreadsheets, and manual
                paper-based processes. No AI. No integrated payment
                reconciliation. No automated compliance reporting. No
                early-warning system.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                TradeCraft Thuto™ was built to replace all of that.
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
            Core Architecture
          </p>
          <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-4 leading-tight max-w-2xl">
            The employment layer is structural — not an add-on.
          </h2>
          <div className="w-10 h-0.5 bg-gold/60 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-[15px] text-off-white/65 leading-relaxed">
              <p>
                At the core of TradeCraft Thuto™ is a matching engine that pairs
                verified student skill profiles against live employer job
                listings. Matches are based on mastered skills — competencies a
                student has demonstrated and had graded in the platform. Not
                self-reported CVs. Not keyword searches.
              </p>
              <p>
                Each match carries a feasibility score: actual distance between
                the student&apos;s ward and the job site, estimated commute
                time, and affordability. Administrators see ward-level exception
                reports that distinguish between a student who needs a bus pass
                and a student who needs a relocation support package.
              </p>
              <p>
                The skills rate engine aggregates live valuations from four
                sources — employer offers, contributor estimates, AI
                aggregations, and market data — so students can see the current
                ZAR per hour value of every skill they are learning, before they
                finish the qualification.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Skill-verified matching — no CV keyword guessing",
                "Ward-level commute feasibility scoring per match",
                "Live ZAR per hour rates per skill and vocation",
                "Employer skills shortage notices by industry and province",
                "AI gap analysis: student population vs. market demand",
                "Geographic skills map at national and ward level",
                "Relocation planning dashboard for administrators",
                "Verified digital skills passport on graduation",
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
                Ward-level data. ZAR. NSFAS. NQF. Load-shedding resilience.
                Offline mode. USSD access. POPIA-compliant from day one.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                Every design decision reflects the South African context — not
                as a localisation afterthought, but as the founding requirement.
                The platform is engineered for deployment on South African cloud
                infrastructure and built to scale from a single pilot
                institution to the national TVET estate.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                "NQF-aligned grading",
                "HEMIS reporting",
                "NSFAS reconciliation",
                "POPIA compliance",
                "Offline mode",
                "USSD access",
                "Eskom-aware deadlines",
                "af-south-1 deployment",
                "Moodle migration",
                "Ward-level mapping",
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

      {/* Tech */}
      <section className="bg-charcoal py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-6">
            Architecture
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 14",
              "TypeScript",
              "Express API Gateway",
              "Microservices",
              "PostgreSQL",
              "pgvector",
              "Redis",
              "Socket.IO",
              "AWS af-south-1",
              "Prisma ORM",
              "AI/ML Pipeline",
              "MinIO / S3",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 bg-surface border border-white/[0.06] text-[12px] text-muted/80 rounded font-mono"
              >
                {tech}
              </span>
            ))}
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
            Whether you are a TVET institution, an employer looking to connect
            to graduate talent, or an investor — get in touch. We will respond
            with a straight answer.
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
