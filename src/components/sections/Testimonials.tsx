import { Star, Quote } from "lucide-react";
import { Reveal } from "../Reveal";

const testimonials = [
  {
    quote: "H & M turned our 1920s cottage into a stunning modern family home without losing any of its character. The craftsmanship is extraordinary — and they finished a week early.",
    name: "Sarah & James Whitfield",
    role: "Residential Renovation, Hawthorn",
    rating: 5,
  },
  {
    quote: "Honest pricing, brilliant communication, and a finished office space that has genuinely transformed how our team works. We couldn't recommend them more highly.",
    name: "Michael Chen",
    role: "Director, Northbridge Capital",
    rating: 5,
  },
  {
    quote: "From the first quote to the final walkthrough, every promise was kept. The attention to detail in the joinery alone is something I've never seen before.",
    name: "Eleanor Pascoe",
    role: "Custom Build, Brighton",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="divider-orange mb-6 inline-block" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
            Client Stories
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
            Trusted by the people <em className="text-orange not-italic">we build for</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-orange/50 hover:shadow-elevated">
                <Quote
                  className="absolute right-6 top-6 text-orange/15 transition-colors group-hover:text-orange/40"
                  size={48}
                  strokeWidth={1}
                />
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} size={16} className="fill-orange text-orange" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-navy">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <div className="font-semibold text-navy">{t.name}</div>
                  <div className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
