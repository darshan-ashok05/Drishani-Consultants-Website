import { Quote, Star } from 'lucide-react';
import { Reveal } from './Reveal';

const TESTIMONIALS = [
  {
    name: 'Narendra Kumar',
    role: 'Home Buyer, Jayanagar',
    text: 'I had a great experience with Jeevan while purchasing my property. He guided me throughout the process, helped me understand the property details, and made the entire experience smooth and comfortable. His professionalism, patience, and support made it easier to choose the right property.Thank you, Jeevan, for your excellent service!',
  },
  {
    name: 'Jyothi Reddy',
    role: 'Property Owner, JP Nagar',
    text: 'I had a wonderful experience with Jeevan while purchasing my property. He provided excellent guidance, explained all the details clearly, and helped me choose a property that suited my needs. His patience, professionalism, and friendly approach made the entire buying process smooth and stress-free.I truly appreciate his support and dedication. I would definitely recommend Jeevan to anyone looking to buy a good property!Thank you, Jeevan, for making my property-buying journey a great experience ❤️.',
  },
  {
    name: 'Menaka Venugopal',
    role: 'Tenant, Basavanagudi',
    text: 'I had a very good experience with Jeevan. He was helpful, friendly, and guided me throughout the property-buying process. Thank you for your excellent service! 😊.',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-cream-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">
              Client Testimonials
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            What our clients say.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-charcoal-700">
            These are placeholder testimonials. Genuine customer reviews will be
            added once you share them.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="relative h-full rounded-2xl bg-white p-8 shadow-luxe-sm ring-1 ring-navy-100">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-gold-200" />
                <div className="flex gap-1 text-gold-400">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-charcoal-700">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-navy-100 pt-5">
                  <p className="font-serif text-lg font-semibold text-navy-900">{t.name}</p>
                  <p className="text-xs uppercase tracking-wider text-gold-600">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
