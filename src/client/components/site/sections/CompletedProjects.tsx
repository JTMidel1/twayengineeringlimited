import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { Reveal } from "../Reveal";

const stats = ["20+ Projects Completed", "6 Service Lines", "100% Client Handover Rate", "5+ States Served"];
const completed = [
  ["Completed", "2025", "Road Construction", "Access Road Rehabilitation", "Port Harcourt", "Road grading, drainage improvements, and asphalt finishing for improved site access.", "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&w=1200&q=80"],
  ["Handed Over", "2025", "Commercial Buildings", "Retail Building Works", "Rivers State", "Civil works and construction coordination for a commercial property upgrade.", "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&w=1200&q=80"],
  ["Completed", "2024", "MEP Design", "Facility Services Design", "Port Harcourt", "Architectural, structural, mechanical, electrical, and plumbing design package.", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&w=1200&q=80"],
  ["Completed", "2024", "Infrastructure Works", "Stormwater Drainage Works", "Rivers State", "Drainage alignment, material procurement, and field supervision through completion.", "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&w=1200&q=80"],
  ["Handed Over", "2023", "LPG Installations", "Commercial LPG Distribution", "South-South Nigeria", "LPG sales, supply planning, and commercial distribution support.", "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&w=1200&q=80"],
  ["Completed", "2023", "Procurement", "Construction Materials Supply", "Nigeria", "Sourcing and delivery of construction materials for multi-site civil works.", "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&w=1200&q=80"]
];

export function CompletedProjects() {
  return (
    <Reveal id="completed" className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute -left-28 top-12 h-72 w-72 rounded-full bg-tway-red/8 blur-3xl" />
      <div className="absolute -right-28 bottom-12 h-72 w-72 rounded-full bg-tway-blue/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow justify-center">Completed Projects</p>
          <h2 className="mt-4 text-3xl font-black text-tway-ink sm:text-4xl lg:text-5xl">Delivered. Inspected. Handed Over.</h2>
        </div>

        <div className="mt-10 grid overflow-hidden rounded bg-gradient-to-r from-tway-blue-700 to-tway-blue text-white sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat} className="border-white/15 p-6 text-center sm:border-r">
              <p className="font-display text-2xl font-black">{stat.split(" ")[0]}</p>
              <p className="mt-1 text-sm font-bold text-white/75">{stat.replace(stat.split(" ")[0], "").trim()}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {completed.map(([status, year, category, title, location, scope, image]) => (
            <article key={title} className="group overflow-hidden rounded border border-tway-line bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1 rounded bg-white px-3 py-1 text-xs font-bold text-tway-blue">
                  <CheckCircle2 className="h-3.5 w-3.5" /> {status}
                </span>
                <span className="absolute right-4 top-4 rounded bg-tway-red px-3 py-1 text-xs font-bold text-white">{year}</span>
                <span className="absolute bottom-4 left-4 rounded bg-tway-ink/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">{category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-tway-ink transition group-hover:text-tway-blue">{title}</h3>
                <p className="mt-3 flex items-center gap-2 text-sm font-bold text-tway-slate"><MapPin className="h-4 w-4 text-tway-red" /> {location}</p>
                <p className="mt-3 text-sm leading-7 text-tway-slate">{scope}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 font-bold text-tway-red">
                  Discuss a similar project <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="#contact" className="inline-flex items-center gap-2 rounded bg-tway-blue px-6 py-4 font-bold text-white transition hover:bg-tway-blue-700">
            Start Your Project With Us <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}
