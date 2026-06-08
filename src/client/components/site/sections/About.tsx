import { Compass, Target } from "lucide-react";
import { Reveal } from "../Reveal";

export function About() {
  return (
    <Reveal id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -bottom-6 -left-4 h-32 w-32 rounded bg-tway-blue" />
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=1200&q=80"
            alt="Construction engineers supervising a project site"
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded object-cover shadow-premium"
          />
          <div className="absolute -right-3 top-8 rounded bg-tway-red p-5 text-white shadow-premium sm:-right-8">
            <p className="font-display text-2xl font-black">Excellence</p>
            <p className="text-sm font-bold text-white/80">In Every Project</p>
          </div>
        </div>

        <div>
          <p className="section-eyebrow">About Us</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-black leading-tight text-tway-ink sm:text-4xl lg:text-5xl">
            A Multidisciplinary Engineering Partner You Can Trust
          </h2>
          <p className="mt-6 text-lg leading-8 text-tway-slate">
            TwAy Engineering Limited is a multidisciplinary engineering company committed to delivering quality infrastructure, innovative building solutions, procurement services, LPG distribution, and engineering consultancy. Our mission is to provide reliable, cost-effective, and sustainable engineering solutions that exceed client expectations.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded border border-tway-line bg-tway-blue-50 p-6">
              <Target className="mb-4 h-8 w-8 text-tway-blue" />
              <h3 className="text-xl font-black">Our Mission</h3>
              <p className="mt-3 text-sm leading-6 text-tway-slate">Deliver dependable engineering solutions that create long-term value for clients and communities.</p>
            </div>
            <div className="rounded border border-tway-line bg-tway-red-50 p-6">
              <Compass className="mb-4 h-8 w-8 text-tway-red" />
              <h3 className="text-xl font-black">Our Vision</h3>
              <p className="mt-3 text-sm leading-6 text-tway-slate">Become a trusted Nigerian engineering partner known for excellence, safety, and sustainable growth.</p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
