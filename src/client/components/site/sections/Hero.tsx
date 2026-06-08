import { ArrowRight, BadgeCheck, HardHat, PhoneCall, ShieldCheck } from "lucide-react";
import type { ComponentType } from "react";

type Icon = ComponentType<{ className?: string }>;

const stats = ["6 Core Services", "100% Client Focused", "24/7 Project Support", "NG Nationwide Reach"];
const trust: Array<[Icon, string]> = [
  [HardHat, "Skilled Workforce"],
  [ShieldCheck, "Quality Assured"],
  [BadgeCheck, "Nationwide Reach"]
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-tway-blue-900 text-white">
      <div className="absolute inset-0 bg-blueprint opacity-70" />
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&w=1600&q=80"
        alt="Engineers reviewing infrastructure drawings"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-tway-blue-900 via-tway-blue-700/95 to-tway-ink/95" />
      <div className="absolute right-0 top-24 h-24 w-1/3 -skew-x-12 bg-tway-red/80" />
      <div className="absolute -bottom-7 left-8 hidden h-12 w-56 -skew-x-12 bg-tway-red/45 blur-[1px] sm:block lg:left-16 lg:w-72" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pb-16 pt-28 lg:grid-cols-[1.05fr_0.75fr] lg:px-8">
        <div className="max-w-4xl animate-[var(--animate-fade-up)]">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-tway-red opacity-75 animate-[var(--animate-pulse-slow)]" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-tway-red" />
            </span>
            Multidisciplinary Engineering · Nigeria
          </div>
          <h1 className="max-w-5xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-7xl">
            Engineering Solutions for Sustainable Growth
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78">
            TwAy Engineering Limited delivers construction, infrastructure, engineering consultancy, procurement, and LPG distribution services across Nigeria.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded bg-tway-red px-6 py-4 font-bold text-white shadow-lg shadow-red-950/30 transition hover:bg-tway-red-700">
              Request a Quote <ArrowRight className="h-5 w-5" />
            </a>
            <a href="tel:07061699903" className="inline-flex items-center justify-center gap-2 rounded border border-white/25 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur transition hover:bg-white hover:text-tway-blue">
              <PhoneCall className="h-5 w-5" /> Contact Us
            </a>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trust.map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
                <Icon className="h-5 w-5 text-tway-red" />
                <span className="text-sm font-bold">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
          {stats.map((stat, index) => (
            <div key={stat} className={`rounded border border-white/15 bg-white/10 p-6 backdrop-blur transition hover:-translate-y-1 ${index % 2 ? "mt-8" : ""}`}>
              <p className="font-display text-3xl font-black">{stat.split(" ")[0]}</p>
              <p className="mt-2 text-sm font-bold uppercase tracking-wider text-white/65">{stat.replace(stat.split(" ")[0], "").trim()}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

