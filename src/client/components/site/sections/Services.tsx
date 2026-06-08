import { ArrowUpRight, Briefcase, Construction, DraftingCompass, Flame, Lightbulb, PackageSearch } from "lucide-react";
import type { ComponentType } from "react";
import { Reveal } from "../Reveal";

type Icon = ComponentType<{ className?: string }>;

const services: Array<[Icon, string, string]> = [
  [Construction, "Roads Construction & Civil Works", "Road construction, drainage systems, bridges, site development, and infrastructure projects."],
  [PackageSearch, "Construction Materials Procurement & Supply", "Procurement, sourcing, distribution, and supply of quality construction materials."],
  [DraftingCompass, "Architectural, Structural & MEP Design", "Architectural design, structural engineering, mechanical, electrical, and plumbing systems."],
  [Flame, "LPG Sales & Distribution", "Sales and supply of Liquefied Petroleum Gas for domestic and commercial use."],
  [Briefcase, "General Contracting", "Turnkey project execution, contract management, and coordinated delivery."],
  [Lightbulb, "Engineering Consultancy", "Technical advisory, project planning, supervision, and engineering consulting services."]
];

export function Services() {
  return (
    <Reveal id="services" className="relative overflow-hidden bg-tway-mist py-20 lg:py-28">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-tway-blue/10 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-tway-red/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow justify-center">What We Do</p>
          <h2 className="mt-4 text-3xl font-black text-tway-ink sm:text-4xl lg:text-5xl">Comprehensive Engineering Services</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(([Icon, title, description], index) => {
            const red = index % 2 === 1;
            return (
              <article key={title} className="group relative overflow-hidden rounded border border-tway-line bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
                <div className={`absolute left-0 top-0 h-1 w-16 transition-all group-hover:w-full ${red ? "bg-tway-red" : "bg-tway-blue"}`} />
                <div className={`mb-6 grid h-14 w-14 place-items-center rounded transition group-hover:text-white ${red ? "bg-tway-red-50 text-tway-red group-hover:bg-tway-red" : "bg-tway-blue-50 text-tway-blue group-hover:bg-tway-blue"}`}>
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black text-tway-ink">{title}</h3>
                <p className="mt-3 min-h-24 text-sm leading-7 text-tway-slate">{description}</p>
                <a href="#contact" className={`mt-5 inline-flex items-center gap-1 font-bold ${red ? "text-tway-red" : "text-tway-blue"}`}>
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </Reveal>
  );
}
