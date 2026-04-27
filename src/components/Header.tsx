import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#why", label: "Why Us" },
  { href: "/#projects", label: "Projects" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#ceo", label: "Leadership" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full transition-all duration-300 border-b border-border/60 bg-background/85 backdrop-blur-xl shadow-soft">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="/#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-navy/80 transition-colors hover:text-navy"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="/#contact"
          className="hidden rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream transition-all hover:bg-orange hover:text-navy hover:shadow-orange lg:inline-flex"
        >
          Get a Quote
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-navy lg:hidden"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm font-medium text-navy"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-navy px-5 py-3 text-center text-sm font-medium text-cream"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
