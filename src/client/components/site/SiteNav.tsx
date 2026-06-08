import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/tway-logo.jpg";

const links = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Completed", "#completed"],
  ["Process", "#process"],
  ["Contact", "#contact"]
];

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-tway-ink hover:text-tway-blue"
    : "text-white/90 hover:text-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled || open ? "bg-white/95 shadow-lg backdrop-blur-xl" : "bg-transparent"}`}>
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-12 w-12 place-items-center rounded bg-white shadow-sm">
            <img src={logo} alt="TwAy Engineering Limited logo" className="h-10 w-10 object-contain" />
          </span>
          <span className={scrolled || open ? "text-tway-ink" : "text-white"}>
            <span className="block font-display text-base font-black leading-tight">TwAy Engineering</span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em]">Limited</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={`relative text-sm font-semibold transition after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-tway-red after:transition-all hover:after:w-full ${linkClass}`}>
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          <a href="tel:07061699903" className={`inline-flex items-center gap-2 text-sm font-bold ${scrolled ? "text-tway-blue" : "text-white"}`}>
            <Phone className="h-4 w-4" /> 07061699903
          </a>
          <a href="#contact" className="rounded bg-tway-red px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-900/20 transition hover:bg-tway-red-700">
            Request a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className={`grid h-11 w-11 place-items-center rounded border lg:hidden ${scrolled || open ? "border-tway-line text-tway-ink" : "border-white/30 text-white"}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div className={`overflow-hidden bg-white transition-all lg:hidden ${open ? "max-h-96 border-t border-tway-line" : "max-h-0"}`}>
        <nav aria-label="Mobile navigation" className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="rounded px-3 py-3 font-semibold text-tway-ink hover:bg-tway-blue-50 hover:text-tway-blue">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 rounded bg-tway-red px-4 py-3 text-center font-bold text-white">
            Request a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
