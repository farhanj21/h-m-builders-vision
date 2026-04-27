import { Reveal } from "../Reveal";

const stats = [
  { value: "QBCC", label: "Certified Builders" },
  { value: "2+", label: "Years of Experience" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "40+", label: "Skilled Craftsmen" },
];

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <span className="divider-orange mb-6 block" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              About Us
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
              Building <em className="text-orange not-italic">trust</em>,
              one project, one step at a time.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Founded with a singular vision — to redefine quality in Australian construction —
                H &amp; M Builders has grown from a family-run workshop into one of the region's
                most trusted names in residential and commercial building.
              </p>
              <p>
                Every project we take on is treated as if it were our own home. From the first
                blueprint sketch to the final coat of paint, we bring meticulous craftsmanship,
                honest pricing, and a deep respect for the people who'll live and work in the
                spaces we create.
              </p>
              <p className="font-medium text-navy">
                We don't just build structures. We build legacies.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="group h-full bg-card px-6 py-10 text-center transition-colors hover:bg-navy">
                <div className="font-display text-4xl font-semibold text-orange md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-3 text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors group-hover:text-cream/80">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
