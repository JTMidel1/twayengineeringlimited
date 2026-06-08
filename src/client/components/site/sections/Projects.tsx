import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";

const filters = ["All", "Roads", "Commercial", "Residential", "Infrastructure", "LPG"];
const projects = [
  ["Road Construction", "Urban Access Road Development", "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&w=1200&q=80"],
  ["Commercial Buildings", "Modern Commercial Facility", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=1200&q=80"],
  ["Residential Projects", "Residential Estate Infrastructure", "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&w=1200&q=80"],
  ["Infrastructure Works", "Drainage and Site Development", "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&w=1200&q=80"],
  ["LPG ", "Commercial LPG Supply System", "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&w=1200&q=80"]
];

export function Projects() {
  return (
    <Reveal id="projects" className="relative overflow-hidden bg-tway-ink py-20 text-white lg:py-28">
      <div className="absolute inset-0 bg-blueprint opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-eyebrow text-white">Projects Portfolio</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-black sm:text-4xl lg:text-5xl">Engineering Work Across Key Sectors</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button key={filter} type="button" className="rounded-full border border-white/15 px-4 py-2 text-sm font-bold text-white/75 transition hover:border-tway-red hover:bg-tway-red hover:text-white">
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {projects.map(([category, title, image]) => (
            <article key={title} className="group relative aspect-[4/5] overflow-hidden rounded bg-tway-blue-900">
              <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-tway-ink via-tway-ink/30 to-transparent" />
              <span className="absolute left-4 top-4 rounded bg-tway-red px-3 py-1 text-xs font-bold uppercase tracking-wider">{category}</span>
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-90 transition group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-xl font-black">{title}</h3>
                <a href="#contact" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-white/80">
                  View project <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
