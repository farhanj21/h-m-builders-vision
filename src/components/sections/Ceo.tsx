import { Reveal } from "../Reveal";
import { Quote } from "lucide-react";

export function Ceo() {
  return (
    <section id="ceo" className="relative bg-background py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Image */}
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:aspect-square lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
                alt="CEO of H & M Builders"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/20 pointer-events-none" />
            </div>
          </Reveal>

          {/* Right Content */}
          <Reveal delay={0.15}>
            <span className="divider-orange mb-6 block" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              Leadership
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
              Michael Reynolds
            </h2>
            <p className="mt-2 text-lg font-medium text-navy/70">
              Founder & Chief Executive Officer
            </p>

            <div className="mt-10 relative">
              <Quote className="absolute -top-3 -left-4 text-orange/10 h-16 w-16 -z-10" />
              <blockquote className="text-xl italic font-medium leading-relaxed text-navy border-l-2 border-orange pl-6 py-2">
                "Our vision has always been to build more than just structures; we build the foundations for people's lives and businesses to thrive. Every detail matters, because every client's dream matters."
              </blockquote>
            </div>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                With over two decades of experience in the construction industry, Michael has led H & M Builders from a small local firm to a trusted name across Victoria. His commitment to uncompromising quality, transparency, and innovation is the driving force behind every project we undertake.
              </p>
              <p>
                Under his leadership, the company has successfully delivered over 150 projects, ranging from bespoke residential homes to large-scale commercial fit-outs. Michael believes that true success lies in the details—the strength of the materials, the precision of the craftsmanship, and the trust built with every client.
              </p>
              <p>
                "We don't just see blueprints; we see the future our clients are trying to create. It's our privilege to bring that vision to life with integrity and excellence."
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}