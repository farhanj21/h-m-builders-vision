import { Home, Building2, Hammer, ClipboardList, Sofa, MessageSquare, ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";

const services = [
  {
    icon: Home,
    title: "Residential Construction",
    description: "Custom homes designed and built around the way you live — from first sketch to handover.",
  },
  {
    icon: Building2,
    title: "Commercial Build-Outs",
    description: "Offices, retail, and hospitality fit-outs delivered on schedule and built to perform.",
  },
  {
    icon: Hammer,
    title: "Renovations & Extensions",
    description: "Breathe new life into existing spaces with thoughtful, structurally sound transformations.",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "End-to-end coordination of trades, permits, and timelines — so you don't have to lift a finger.",
  },
  {
    icon: Sofa,
    title: "Interior Fit-Outs",
    description: "Refined interiors with bespoke joinery, premium finishes, and master-level detailing.",
  },
  {
    icon: MessageSquare,
    title: "Consultation",
    description: "Expert guidance on feasibility, budgets, and design direction before a single brick is laid.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="divider-orange mb-6 inline-block" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            Our Services
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
            Built end-to-end, <em className="text-orange not-italic">crafted</em> with care.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            A full spectrum of construction services delivered with the same uncompromising
            standard — whether it's a single-room renovation or a multi-story commercial build.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-orange hover:shadow-elevated">
                {/* Hover accent */}
                <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-orange to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-orange transition-all duration-500 group-hover:bg-orange group-hover:text-navy">
                  <s.icon size={26} strokeWidth={1.5} />
                </div>

                <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>

                <ArrowUpRight
                  size={18}
                  className="absolute right-6 top-6 text-muted-foreground/30 transition-all duration-500 group-hover:text-orange group-hover:rotate-45"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
