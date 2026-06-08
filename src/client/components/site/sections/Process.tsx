import { ClipboardCheck, MessageSquare, PackageCheck, PencilRuler, ShieldCheck } from "lucide-react";
import type { ComponentType } from "react";
import { Reveal } from "../Reveal";

type Icon = ComponentType<{ className?: string }>;

const steps: Array<[Icon, string, string]> = [
  [MessageSquare, "Consultation", "We clarify goals, location, scope, budget, and delivery expectations."],
  [PencilRuler, "Planning & Design", "Our team develops the technical plan, design approach, and execution schedule."],
  [PackageCheck, "Execution", "Materials, field teams, and project controls are coordinated for disciplined delivery."],
  [ClipboardCheck, "Quality Inspection", "Work is reviewed against safety, quality, and client requirements."],
  [ShieldCheck, "Delivery", "Completed work is handed over with clear documentation and support."]
];

export function Process() {
  return (
    <Reveal id="process" className="bg-tway-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow justify-center">How We Work</p>
          <h2 className="mt-4 text-3xl font-black text-tway-ink sm:text-4xl lg:text-5xl">A Clear Process from Day One</h2>
        </div>
        <div className="relative mt-14 grid gap-8 md:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-1 bg-gradient-to-r from-tway-blue via-tway-red to-tway-blue md:block" />
          {steps.map(([Icon, title, description], index) => (
            <article key={title} className="relative text-center">
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full bg-white text-tway-blue shadow-premium">
                <Icon className="h-8 w-8" />
                <span className="absolute -right-1 -top-1 grid h-8 w-8 place-items-center rounded-full bg-tway-red text-sm font-black text-white">{index + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-black text-tway-ink">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-tway-slate">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
