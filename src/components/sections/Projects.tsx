import { Reveal } from "../Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "Coastal Family Residence", category: "Residential", location: "Brighton, VIC" },
  { img: p2, title: "Harbour Tower Commercial", category: "Commercial", location: "Sydney CBD" },
  { img: p3, title: "Heritage Kitchen Revival", category: "Renovation", location: "Carlton, VIC" },
  { img: p4, title: "Timber Garden Extension", category: "Extension", location: "Hawthorn, VIC" },
  { img: p5, title: "Executive Office Fit-Out", category: "Fit-Out", location: "Melbourne CBD" },
  { img: p6, title: "Marble Master Bathroom", category: "Renovation", location: "Toorak, VIC" },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <span className="divider-orange mb-6 block" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              Recent Work
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
              A portfolio of <em className="text-orange not-italic">craftsmanship</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-muted-foreground">
              A selection of recent residential, commercial, and renovation projects — each
              a testament to our team's dedication to quality and detail.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <a
                href="#contact"
                className="group block overflow-hidden rounded-2xl bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/20 to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-orange px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-navy">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-xl font-semibold text-cream">{p.title}</h3>
                    <p className="mt-1 text-xs uppercase tracking-wider text-cream/70">{p.location}</p>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
