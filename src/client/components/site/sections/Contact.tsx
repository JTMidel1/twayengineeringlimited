import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import { ContactForm } from "../ContactForm";
import { Reveal } from "../Reveal";

type Icon = ComponentType<{ className?: string }>;
const info: Array<[Icon, string, string]> = [
  [MapPin, "Visit Us", "135 Aba Road, By Cash and Carry, Waterline, Port Harcourt, Rivers State, Nigeria"],
  [Phone, "Call Us", "07061699903"],
  [Mail, "Email Us", "Twayengineeringlimited@gmail.com"],
  [Clock, "Business Hours", "Mon-Fri 8AM-6PM, Sat 9AM-2PM"]
];

export function Contact() {
  return (
    <Reveal id="contact" className="relative overflow-hidden bg-gradient-to-b from-white to-tway-mist py-20 lg:py-28">
      <div className="absolute -right-28 top-24 h-72 w-72 rounded-full bg-tway-blue/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow justify-center">Get In Touch</p>
          <h2 className="mt-4 text-3xl font-black text-tway-ink sm:text-4xl lg:text-5xl">Let's Build Something Lasting</h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            {info.map(([Icon, title, value]) => {
              const content: ReactNode = title === "Call Us"
                ? <a href="tel:07061699903" className="hover:text-tway-blue">{value}</a>
                : title === "Email Us"
                  ? <a href="mailto:Twayengineeringlimited@gmail.com" className="break-all hover:text-tway-blue">{value}</a>
                  : value;
              return (
                <article key={title} className="flex gap-4 rounded border border-tway-line bg-white p-5 shadow-sm">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-tway-blue-50 text-tway-blue">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-black text-tway-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-tway-slate">{content}</p>
                  </div>
                </article>
              );
            })}

            <iframe
              title="Map showing Aba Road Port Harcourt Rivers Nigeria"
              src="https://www.google.com/maps?q=Aba%20Road%20Port%20Harcourt%20Rivers%20Nigeria&output=embed"
              loading="lazy"
              className="h-72 w-full rounded border border-tway-line"
            />

            <a href="https://wa.me/2347061699903?text=Hello%20TwAy%20Engineering%20Limited%2C%20I%20would%20like%20to%20discuss%20a%20project." className="flex items-center gap-4 rounded bg-[#25D366] p-5 font-bold text-white shadow-premium">
              <MessageCircle className="h-8 w-8" />
              Chat with us on WhatsApp
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </Reveal>
  );
}
