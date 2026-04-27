import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "../Reveal";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const project = formData.get("project") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(`New Quote Request: ${project} - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Email: ${email}\n` +
      `Project Type: ${project}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:admin@hnmbuilders.com.au?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening your email client...");
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — info */}
          <Reveal>
            <span className="divider-orange mb-6 block" />
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-orange">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-navy md:text-5xl">
              Let's build <em className="text-orange not-italic">something great</em> together.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Tell us about your project. We'll respond within one business day with next steps,
              a feasibility assessment, and a no-obligation quote.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Phone", value: "+61 0423 523 219" },
                { icon: Mail, label: "Email", value: "admin@hnmbuilders.com.au" },
                // { icon: MapPin, label: "Office", value: "Level 3, 240 Queen Street, Melbourne VIC 3000" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy text-orange">
                    <c.icon size={18} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {c.label}
                    </div>
                    <div className="mt-0.5 text-base text-navy">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map
            <div className="mt-10 overflow-hidden rounded-2xl border border-border shadow-soft">
              <iframe
                title="H & M Builders office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=144.9601%2C-37.8156%2C144.9701%2C-37.8106&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div> */}
          </Reveal>

          {/* Right — form */}
          <Reveal delay={0.15}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required className="md:col-span-2" />
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy">
                    Project Type
                  </label>
                  <select
                    name="project"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-orange"
                  >
                    <option value="">Select a project type…</option>
                    <option>Residential Construction</option>
                    <option>Commercial Build-Out</option>
                    <option>Renovation / Extension</option>
                    <option>Interior Fit-Out</option>
                    <option>Consultation Only</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your vision, timeline, and budget…"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-orange"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-navy px-7 py-4 text-sm font-semibold text-cream transition-all hover:bg-orange hover:text-navy hover:shadow-orange disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Request Free Quote"}
                <Send size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                We typically respond within 1 business day.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-orange"
      />
    </div>
  );
}
