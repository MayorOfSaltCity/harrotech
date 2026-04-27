import Link from "next/link";

const links = {
  Company: [
    { label: "About Harrington Technologies™", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
  Initiatives: [
    { label: "TradeCraft Thuto™", href: "https://2686-102-182-100-140.ngrok-free.app/", target: "_blank", rel: "noopener noreferrer" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block text-[15px] font-bold">
              <span className="text-off-white">Harrington</span>
              <span className="text-gold"> Technologies</span>
            </Link>
            <p className="mt-4 text-[13px] text-muted leading-relaxed max-w-[280px]">
              Building practical technology systems for real-world business
              problems. Software, automation, digital operations, and skills
              development.
            </p>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.12em] uppercase text-muted/50">
              South Africa
            </p>
          </div>

          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gold mb-5">
                {section}
              </p>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      target={(item as { target?: string }).target}
                      rel={(item as { rel?: string }).rel}
                      className="text-[13px] text-muted hover:text-off-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-[12px] text-muted/50">
            &copy; {new Date().getFullYear()} Harrington Technologies™. All rights reserved.
          </p>
          <p className="text-[12px] text-muted/30">
            TradeCraft Thuto™ is a Harrington Technologies™ initiative.
          </p>
        </div>
      </div>
    </footer>
  );
}
