import { Quote, Star } from "lucide-react";
import { Reveal } from "../Reveal";

const testimonials = [
  ["TwAy handled our civil works with strong supervision and responsive communication from start to finish.", "Engr. Chinedu Okoro", "Project Director, Rivers Development Partners"],
  ["Their procurement support helped us source quality construction materials within a tight delivery window.", "Amina Bello", "Operations Lead, Delta Build Services"],
  ["The team brought practical engineering advice and a disciplined process that made our project easier to manage.", "Tunde Williams", "Facilities Manager, Meridian Commercial Group"]
];

export function Testimonials() {
  return (
    <Reveal className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow justify-center">Testimonials</p>
          <h2 className="mt-4 text-3xl font-black text-tway-ink sm:text-4xl lg:text-5xl">Trusted by Nigerian Project Teams</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map(([quote, name, role]) => (
            <article key={name} className="relative overflow-hidden rounded border border-tway-line bg-white p-7 shadow-sm">
              <Quote className="absolute -right-3 -top-3 h-24 w-24 text-tway-blue/5" />
              <div className="mb-5 flex gap-1 text-tway-red">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="relative text-lg italic leading-8 text-tway-slate">"{quote}"</p>
              <div className="mt-6 border-t border-tway-line pt-5">
                <h3 className="font-black text-tway-ink">{name}</h3>
                <p className="mt-1 text-sm text-tway-slate">{role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
