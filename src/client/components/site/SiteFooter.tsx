import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import logo from "../../assets/tway-logo.jpg";

const quickLinks = ["Home", "About Us", "Services", "Projects", "Completed Projects", "Why Choose Us", "Contact"];
const hrefs = ["#home", "#about", "#services", "#projects", "#completed", "#why", "#contact"];
const services = [
  "Roads Construction & Civil Works",
  "Construction Materials Procurement & Supply",
  "Architectural, Structural & MEP Design",
  "LPG Sales & Distribution",
  "General Contracting",
  "Engineering Consultancy"
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-tway-blue-900 text-white">
      <div className="absolute inset-0 bg-blueprint opacity-60" />
      <div className="h-1.5 bg-gradient-to-r from-tway-red via-tway-red-600 to-tway-blue" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-14 w-14 place-items-center rounded bg-white">
              <img src={logo} alt="TwAy Engineering Limited logo" className="h-12 w-12 object-contain" loading="lazy" />
            </span>
            <div>
              <p className="font-display text-lg font-black">TwAy Engineering</p>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">Limited</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-7 text-white/72">Building Infrastructure. Delivering Excellence through civil works, design, procurement, LPG distribution, and consultancy.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Twitter, Instagram].map((Icon, index) => (
              <a key={index} href="#" aria-label="Social media placeholder" className="grid h-10 w-10 place-items-center rounded border border-white/15 text-white/75 transition hover:bg-white hover:text-tway-blue">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-5 text-lg font-bold">Quick Links</h2>
          <ul className="space-y-3 text-sm text-white/72">
            {quickLinks.map((link, index) => (
              <li key={link}>
                <a href={hrefs[index]} className="transition hover:text-white">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-lg font-bold">Our Services</h2>
          <ul className="space-y-3 text-sm text-white/72">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-5 text-lg font-bold">Get In Touch</h2>
          <ul className="space-y-4 text-sm text-white/72">
            <li className="flex gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-tway-red" /> 135 Aba Road, By Cash and Carry, Waterline, Port Harcourt, Rivers State, Nigeria</li>
            <li><a href="tel:07061699903" className="flex gap-3 transition hover:text-white"><Phone className="h-4 w-4 shrink-0 text-tway-red" /> 07061699903</a></li>
            <li><a href="mailto:Twayengineeringlimited@gmail.com" className="flex gap-3 break-all transition hover:text-white"><Mail className="h-4 w-4 shrink-0 text-tway-red" /> Twayengineeringlimited@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/10 px-4 py-6 text-center text-sm text-white/60">
        © 2026 TwAy Engineering Limited. All Rights Reserved. Building Infrastructure. Delivering Excellence.
      </div>
    </footer>
  );
}
