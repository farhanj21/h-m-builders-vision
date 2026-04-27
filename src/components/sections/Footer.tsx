import { Logo } from "../Logo";

const cols = [
  {
    title: "Company",
    links: [
      { href: "/#about", label: "About Us" },
      { href: "/#projects", label: "Projects" },
      { href: "/#testimonials", label: "Testimonials" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/#services", label: "Residential" },
      { href: "/#services", label: "Commercial" },
      { href: "/#services", label: "Renovations" },
      { href: "/#services", label: "Fit-Outs" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/#contact", label: "Get a Quote" },
      { href: "tel:+610423523219", label: "+61 0423 523 219" },
      { href: "mailto:admin@hmbuilders.com.au", label: "admin@hmbuilders.com.au" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-cream">
      <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-cream/95 p-4 inline-block">
              <Logo />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Building dreams, one foundation at a time. Premium residential and commercial
              construction across Victoria — crafted with integrity since 2010.
            </p>
            <div className="mt-6 inline-flex items-center gap-3">
              <span className="divider-orange" />
              <span className="text-xs uppercase tracking-[0.25em] text-cream/60">
                ABN 38 678 144 940 · QBCC Licence 15481893
              </span>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="font-display text-base font-semibold text-orange">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-cream/70 transition-colors hover:text-orange"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/50 md:flex-row">
          <p>© 2026 H &amp; M Builders Co Pty Ltd. All rights reserved.</p>
          <p className="font-display italic text-cream/70">Built on craftsmanship. Backed by trust.</p>
        </div>
      </div>
    </footer>
  );
}
