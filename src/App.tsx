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

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Projects />
        <Testimonials />
        <Ceo />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  );
}
