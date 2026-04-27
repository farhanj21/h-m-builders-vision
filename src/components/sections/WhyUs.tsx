import { ShieldCheck, Clock, Gem, Receipt } from "lucide-react";
import { Reveal } from "../Reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Fully accredited builders with comprehensive insurance — your project is protected from day one.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your timeline. Detailed schedules and proactive communication keep every milestone on track.",
  },
  {
    icon: Gem,
    title: "Premium Materials",
    description: "We source from trusted suppliers. Every beam, fixture, and finish is built to outlast the trends.",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description: "No hidden fees. No surprise invoices. Just clear, itemised quotes and honest conversation.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
      <div className="absolute -top-40 right-0 h-96 w-96 rounded-full bg-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <span className="divider-orange mb-6 block" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              Why Choose Us
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-cream md:text-5xl">
              The difference is in the <em className="text-orange not-italic">details</em>.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/70">
              When you choose H &amp; M, you're not just hiring a builder — you're partnering
              with a team obsessed with getting every detail right.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-cream/10 bg-cream/[0.03] p-7 backdrop-blur-sm transition-all hover:border-orange/40 hover:bg-cream/[0.06]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange text-navy transition-transform group-hover:scale-110">
                    <v.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-cream">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65">{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
