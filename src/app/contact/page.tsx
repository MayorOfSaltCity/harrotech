import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Harrington Technologies™ to discuss your software, automation, digital operations, or skills development requirements.",
};

export default function ContactPage() {
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
            Contact
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-off-white leading-tight max-w-xl">
            Let&apos;s talk about what you&apos;re building.
          </h1>
          <div className="w-10 h-0.5 bg-gold mt-6" />
        </div>
      </section>

      {/* Contact section */}
      <section className="bg-charcoal py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-start">
            <ContactForm />

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="p-6 bg-surface border border-white/[0.06] rounded-xl">
                <h3 className="text-[14px] font-semibold text-gold mb-2">
                  Response time
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  We respond to all enquiries within 1–2 business days. If your
                  requirement is urgent, mention it in your message.
                </p>
              </div>
              <div className="p-6 bg-surface border border-white/[0.06] rounded-xl">
                <h3 className="text-[14px] font-semibold text-gold mb-2">
                  Location
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  Harrington Technologies™ is based in South Africa. We work with
                  clients nationally and remotely where appropriate.
                </p>
              </div>
              <div className="p-6 bg-surface border border-white/[0.06] rounded-xl">
                <h3 className="text-[14px] font-semibold text-gold mb-2">
                  TradeCraft Thuto™
                </h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  For TradeCraft Thuto™ enquiries — individual enrolment or
                  organisational partnerships — use the form and select
                  TradeCraft Thuto™ as the area of interest.
                </p>
              </div>
              <div className="p-6 bg-surface border border-white/[0.06] rounded-xl">
                <h3 className="text-[14px] font-semibold text-gold mb-2">
                  What to include
                </h3>
                <ul className="space-y-2 mt-3">
                  {[
                    "What you're trying to build or fix",
                    "Your current setup or tools",
                    "Your rough timeline",
                    "Your stage (idea, in-progress, established)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-[12px] text-muted leading-snug"
                    >
                      <span className="mt-1 w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
