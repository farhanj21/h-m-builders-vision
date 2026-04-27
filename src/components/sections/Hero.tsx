import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury home under construction at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1F35]/95 via-[#0D1F35]/75 to-[#0D1F35]/40" />
      </div>

      {/* Animated blueprint grid */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 blueprint-grid opacity-40"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Architectural lines */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" aria-hidden="true">
        <defs>
          <pattern id="lines" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 100 L200 100 M100 0 L100 200" stroke="#F5A623" strokeWidth="1" />
            <circle cx="100" cy="100" r="3" fill="#F5A623" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#lines)" />
      </svg>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-8 inline-flex items-center gap-3">
            <span className="divider-orange" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-orange">
              Premium Construction · Est. 2010
            </span>
          </div>

          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream text-balance md:text-6xl lg:text-7xl">
            Building Dreams,
            <br />
            <span className="italic text-orange">One Foundation</span>
            <br />
            at a Time.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/75">
            From bespoke residential homes to refined commercial spaces — H &amp; M Builders
            crafts spaces that stand the test of time, built on craftsmanship, integrity, and trust.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 text-sm font-semibold text-navy transition-all hover:shadow-orange hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-full border border-cream/30 bg-cream/5 px-7 py-4 text-sm font-medium text-cream backdrop-blur transition-all hover:border-cream/60 hover:bg-cream/10"
            >
              <Phone size={16} />
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Bottom indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-cream/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-10 w-px bg-gradient-to-b from-orange to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
