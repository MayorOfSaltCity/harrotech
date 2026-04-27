import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Harrington Technologies™ is an early-stage practice. TradeCraft Thuto™ is our first active initiative — a practical training programme for digital, business, and technical skills.",
};

export default function CaseStudiesPage() {
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
            Our Work
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-off-white leading-tight max-w-xl">
            What we&apos;re building.
          </h1>
          <div className="w-10 h-0.5 bg-gold mt-6 mb-6" />
          <p className="text-[16px] text-muted max-w-xl leading-relaxed">
            Harrington Technologies™ is a new practice. We&apos;re not going to
            invent a history we don&apos;t have. What you see here is what
            exists right now.
          </p>
        </div>
      </section>

      {/* TradeCraft Thuto™ */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="rounded-2xl overflow-hidden border border-white/[0.06]"
            style={{
              background: "linear-gradient(135deg, #0D3B2C 0%, #143D2E 100%)",
            }}
          >
            <div className="p-8 lg:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-[11px] font-semibold tracking-wider rounded-full uppercase">
                  Active Initiative
                </span>
                <span className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] text-muted text-[11px] font-medium rounded-full">
                  Skills Development
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-off-white mb-3">
                TradeCraft Thuto™
              </h2>
              <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-gold/60 mb-6">
                A Harrington Technologies™ Initiative
              </p>

              <p className="text-[15px] text-off-white/70 leading-relaxed mb-4 max-w-2xl">
                TradeCraft Thuto™ is a training camp for practical digital,
                business, and technical skills. It is the first active
                initiative under the Harrington Technologies™ umbrella —
                currently being structured, built, and launched.
              </p>
              <p className="text-[15px] text-off-white/60 leading-relaxed max-w-2xl">
                The programme covers digital literacy, software thinking,
                business readiness, creative production, technical foundations,
                and learning-to-earning pathways. It is designed for people who
                need skills that translate directly into work, income, or
                entrepreneurship.
              </p>

              <div className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { label: "Status", value: "In development" },
                  { label: "Format", value: "Cohort-based, practical" },
                  { label: "Location", value: "South Africa" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-muted/40 mb-1">
                      {item.label}
                    </p>
                    <p className="text-[14px] font-medium text-off-white/80">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="https://2686-102-182-100-140.ngrok-free.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border border-gold/40 hover:bg-gold/10 text-gold text-[13px] font-semibold rounded transition-colors gap-2"
                >
                  See the full programme →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More to come */}
      <section className="bg-navy py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-gold mb-4">
                What&apos;s Next
              </p>
              <h3 className="text-xl font-bold text-off-white mb-3">
                Client work is being taken on now.
              </h3>
              <p className="text-[14px] text-muted leading-relaxed">
                Harrington Technologies™ is open to engagements in software
                development, business systems, automation, and digital
                operations. If you have a problem that needs building, get in
                touch. We&apos;ll be straight with you about what we can deliver.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gold hover:bg-gold-light text-navy font-semibold text-[13px] rounded transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
