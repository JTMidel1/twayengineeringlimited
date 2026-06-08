import { MessageCircle } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { SiteFooter } from "../components/site/SiteFooter";
import { SiteNav } from "../components/site/SiteNav";
import { About } from "../components/site/sections/About";
import { CompletedProjects } from "../components/site/sections/CompletedProjects";
import { Contact } from "../components/site/sections/Contact";
import { Hero } from "../components/site/sections/Hero";
import { Process } from "../components/site/sections/Process";
import { Projects } from "../components/site/sections/Projects";
import { Services } from "../components/site/sections/Services";
import { Testimonials } from "../components/site/sections/Testimonials";
import { WhyChooseUs } from "../components/site/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Toaster position="top-right" />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <CompletedProjects />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
      <a
        href="https://wa.me/2347061699903?text=Hello%20TwAy%20Engineering%20Limited%2C%20I%20would%20like%20to%20discuss%20a%20project."
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-premium"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-[var(--animate-pulse-slow)]" />
        <MessageCircle className="relative h-7 w-7" />
        <span className="pointer-events-none absolute right-16 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded bg-tway-ink px-3 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:block group-hover:opacity-100 sm:block">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
