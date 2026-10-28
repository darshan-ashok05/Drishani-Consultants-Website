import { CheckCircle2, Building2, Award } from 'lucide-react';
import { Reveal } from './Reveal';
import { SITE } from '@/lib/site';

const HIGHLIGHTS = [
  'Local expertise across South & Central Bengaluru',
  'Transparent, end-to-end property guidance',
  'Verified listings for residential, commercial & land',
  'Personalised support from enquiry to handover',
];

export function About() {
  return (
    <section id="about" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Image collage */}
        <Reveal className="relative">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Bengaluru skyline"
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-luxe"
            />
            <div className="absolute -bottom-8 -right-4 w-2/3 rounded-2xl border-4 border-cream-50 shadow-luxe-sm lg:-right-8">
              <img
                src="https://images.pexels.com/photos/14845309/pexels-photo-14845309.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bengaluru skyline"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
            </div>
            <div className="absolute -left-4 -top-6 rounded-2xl bg-navy-900 px-6 py-5 text-white shadow-luxe-sm lg:-left-8">
              <p className="font-serif text-3xl font-semibold text-gold-300">12+</p>
              <p className="text-xs uppercase tracking-widest text-cream-100/80">
                Years in Bengaluru
              </p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">
                About Us
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
              A consultancy built on local trust and lasting relationships.
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-700">
              Drishani Consultants is a Bengaluru-based real estate consultancy
              led by <span className="font-semibold text-navy-800">Jeevan A</span>.
              We help individuals, families, and businesses confidently buy,
              sell, and rent homes, commercial spaces, plots, and land across
              the city's most sought-after neighbourhoods.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal-800">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap gap-6 border-t border-navy-100 pt-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-300">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Personalised Service</p>
                  <p className="text-xs text-charcoal-700">Direct guidance from {SITE.agent}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy-900 text-gold-300">
                  <Building2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-navy-900">Full Property Spectrum</p>
                  <p className="text-xs text-charcoal-700">Residential · Commercial · Land</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
