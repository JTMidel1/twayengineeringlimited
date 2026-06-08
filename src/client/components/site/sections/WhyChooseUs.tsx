import { BadgeCheck, Cpu, Heart, ShieldCheck, Users, HardHat } from "lucide-react";
import type { ComponentType } from "react";
import { Reveal } from "../Reveal";

type Icon = ComponentType<{ className?: string }>;

const features: Array<[Icon, string, string]> = [
  [Users, "Experienced Team", "Qualified engineers and project managers with proven field experience"],
  [BadgeCheck, "Quality Assurance", "Rigorous QA processes from materials sourcing through final handover"],
  [ShieldCheck, "Safety First", "Strict HSE standards protecting workers, clients, and communities"],
  [HardHat, "Timely Delivery", "Disciplined scheduling that respects your budget and deadlines"],
  [Cpu, "Modern Engineering Practices", "Current methods, tools, and standards for durable outcomes"],
  [Heart, "Client Satisfaction", "Transparent communication and partnership at every stage"]
];

export function WhyChooseUs() {
  return (
    <Reveal id="why" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="mt-4 text-3xl font-black text-tway-ink sm:text-4xl lg:text-5xl">Built Around Quality, Safety, and Trust</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map(([Icon, title, description]) => (
            <article key={title} className="flex gap-4 rounded border border-tway-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-premium">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded bg-tway-blue-50 text-tway-blue">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-tway-ink">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-tway-slate">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
