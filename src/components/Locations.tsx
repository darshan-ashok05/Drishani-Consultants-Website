import { MapPin } from 'lucide-react';
import { Reveal } from './Reveal';
import { SITE } from '@/lib/site';

const AREA_INFO: Record<string, string> = {
  Jayanagar: 'Premium residential neighbourhood with established homes and vibrant markets.',
  Basavanagudi: 'Heritage-rich locality with classic homes and cultural landmarks.',
  'JP Nagar': 'Modern residential hub with apartments, villas, and tech-park access.',
  Chickpet: 'Bustling commercial heart ideal for retail and business spaces.',
  Banashankari: 'Well-connected residential area with plots and family homes.',
  'Kanakapura Road': 'Fast-developing corridor with plots, layouts, and new projects.',
  'BTM Layout': 'Popular residential and rental pocket close to major IT corridors.',
  'Rajarajeshwari Nagar': 'Spacious residential area in West Bengaluru with plots and apartments.',
};

export function Locations() {
  return (
    <section id="locations" className="relative overflow-hidden bg-navy-900 py-24 lg:py-32">
      <img
        src="https://images.pexels.com/photos/36988911/pexels-photo-36988911.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt="Bengaluru skyline at sunset"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-900/85 to-navy-950/90" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300">
              Locations We Serve
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Deep local knowledge across Bengaluru.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream-100/80">
            We focus on the neighbourhoods we know best, so you get accurate,
            on-the-ground advice for every address.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SITE.areas.map((area, i) => (
            <Reveal key={area} delay={i * 60}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-gold-400/40 hover:bg-white/[0.08]">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-400/15 text-gold-300 transition group-hover:bg-gold-400/25">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-white">{area}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cream-100/70">
                  {AREA_INFO[area]}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
