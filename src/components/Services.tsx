import { Home, Store, KeyRound, Building, Map, Trees } from 'lucide-react';
import { Reveal } from './Reveal';

interface Service {
  icon: typeof Home;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: Home,
    title: 'Residential Buying',
    description: 'Find apartments, independent houses, and villas that match your lifestyle and budget.',
  },
  {
    icon: Store,
    title: 'Property Selling',
    description: 'List and sell your property with fair valuation and the right buyer outreach.',
  },
  {
    icon: KeyRound,
    title: 'Rentals & Leasing',
    description: 'Rent or lease residential and commercial spaces with smooth, vetted agreements.',
  },
  {
    icon: Building,
    title: 'Commercial Properties',
    description: 'Office spaces, retail shops, and showrooms in prime Bengaluru business districts.',
  },
  {
    icon: Map,
    title: 'Plots & Layouts',
    description: 'Residential and commercial plots in approved layouts across South Bengaluru.',
  },
  {
    icon: Trees,
    title: 'Land & Agricultural',
    description: 'Open land and agricultural parcels suited for investment and development.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-navy-950 py-24 lg:py-32">
      {/* subtle gold pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #d4a93f 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300">
              What We Do
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Comprehensive real estate services, under one roof.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream-100/80">
            From your first home to your next investment, we guide every step with local insight and clear advice.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition duration-300 hover:border-gold-400/40 hover:bg-white/[0.07]">
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold-400/10 blur-2xl transition group-hover:bg-gold-400/20" />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-gold-300 ring-1 ring-gold-400/20 transition group-hover:scale-110">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="relative mt-6 font-serif text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-cream-100/75">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
