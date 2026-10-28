import { ShieldCheck, BadgeCheck, Handshake, Eye, Clock, HeartHandshake } from 'lucide-react';
import { Reveal } from './Reveal';
import { SITE } from '@/lib/site';

const REASONS = [
  { icon: ShieldCheck, title: 'Verified Listings', text: 'Every listing is checked for accuracy before it reaches you.' },
  { icon: Handshake, title: 'Honest Guidance', text: 'Clear, unbiased advice — no pressure, no hidden interests.' },
  { icon: BadgeCheck, title: 'Local Expertise', text: 'Years of on-ground experience in South & Central Bengaluru.' },
  { icon: Eye, title: 'Transparent Process', text: 'You see the details, the pricing, and the paperwork openly.' },
  { icon: Clock, title: 'Responsive Support', text: 'Quick replies on phone and WhatsApp when you need us.' },
  { icon: HeartHandshake, title: 'Long-Term Relationship', text: 'We stay in touch well beyond the deal is done.' },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
              Built on trust, transparency, and local know-how.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-charcoal-700">
              Buying or renting property is a major decision. Drishani
              Consultants makes it simpler with verified information, honest
              advice, and steady support from start to finish.
            </p>

            <div className="mt-10 rounded-2xl bg-navy-900 p-8 text-white shadow-luxe-sm">
              <p className="font-serif text-xl leading-relaxed text-cream-50">
                "Real estate is not just about property — it's about people,
                trust, and the right address for the right life."
              </p>
              <p className="mt-4 text-sm font-medium text-gold-300">— {SITE.agent}, Drishani Consultants</p>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {REASONS.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-navy-100 bg-white p-7 shadow-luxe-sm transition hover:border-gold-300 hover:shadow-luxe">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-800 transition group-hover:bg-navy-900 group-hover:text-gold-300">
                    <reason.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-navy-900">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                    {reason.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
