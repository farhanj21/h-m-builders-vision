import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { WhyUs } from "@/components/sections/WhyUs";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Ceo } from "@/components/sections/Ceo";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "H & M Builders Co Pty Ltd — Premium Construction & Renovation" },
      {
        name: "description",
        content:
          "H & M Builders crafts premium residential and commercial spaces across Victoria. 15+ years of experience, 150+ projects, transparent pricing. Get a free quote today.",
      },
      { property: "og:title", content: "H & M Builders — Building Dreams, One Foundation at a Time" },
      {
        property: "og:description",
        content:
          "Premium construction, renovations, and fit-outs from a trusted Australian builder. Licensed, insured, and obsessed with detail.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Ceo />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  );
}
