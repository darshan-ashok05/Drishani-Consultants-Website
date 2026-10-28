import { Phone, ArrowRight, MapPin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE, telLink, whatsappLink } from '@/lib/site';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/5563473/pexels-photo-5563473.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Luxury home exterior"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/70 to-navy-800/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-navy-950/30" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-20 lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3 opacity-0 [animation:fade-in_1s_ease-out_0.2s_forwards]">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-300">
              {SITE.tagline}
            </span>
          </div>

          <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-white text-balance sm:text-5xl lg:text-6xl opacity-0 [animation:fade-up_0.8s_ease-out_0.4s_forwards]">
            Find your address in
            <span className="block text-gold-300">Bengaluru's finest locales.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90 opacity-0 [animation:fade-up_0.8s_ease-out_0.6s_forwards]">
            Drishani Consultants helps you buy, sell, and rent residential,
            commercial properties, plots and land — guided by{' '}
            <span className="font-medium text-white">Jeevan A</span>, your
            trusted local real estate advisor.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4 opacity-0 [animation:fade-up_0.8s_ease-out_0.8s_forwards]">
            <a
              href={whatsappLink(SITE.whatsappPrimary, "Hello Jeevan, I found you on the Drishani Consultants website and I'd like to discuss a property.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white shadow-gold transition hover:scale-[1.03] hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href={telLink(SITE.phones[0])}
              className="group flex items-center gap-2.5 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-gold-300 hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Call {SITE.phones[0]}
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 opacity-0 [animation:fade-up_0.8s_ease-out_1s_forwards]">
            {SITE.areas.slice(0, 4).map((area) => (
              <span key={area} className="flex items-center gap-2 text-sm text-cream-100/80">
                <MapPin className="h-3.5 w-3.5 text-gold-300" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 [animation:fade-in_1s_ease-out_1.4s_forwards]">
        <div className="flex h-10 w-6 justify-center rounded-full border border-white/40 pt-2">
          <span className="h-2 w-1 animate-float-soft rounded-full bg-gold-300" />
        </div>
      </div>
    </section>
  );
}
