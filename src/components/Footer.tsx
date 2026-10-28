import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE, telLink, whatsappLink } from '@/lib/site';

const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="bg-navy-950 text-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo className="h-12" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
              Real estate consultancy in Bengaluru helping you buy, sell, and
              rent residential, commercial, plots and land with confidence.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition hover:border-gold-400 hover:text-gold-300"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-cream-100/70 transition hover:text-gold-300">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm text-cream-100/70">
              <li>Residential Buying</li>
              <li>Property Selling</li>
              <li>Rentals & Leasing</li>
              <li>Commercial Properties</li>
              <li>Plots & Land</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              {SITE.phones.map((phone) => (
                <li key={phone}>
                  <a href={telLink(phone)} className="flex items-center gap-3 text-cream-100/80 transition hover:text-gold-300">
                    <Phone className="h-4 w-4 text-gold-400" /> {phone}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappLink(SITE.whatsappPrimary, "Hello Jeevan, I'd like to enquire about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-cream-100/80 transition hover:text-gold-300"
                >
                  <WhatsAppIcon className="h-4 w-4 text-gold-400" /> WhatsApp Chat
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 text-cream-100/80 transition hover:text-gold-300">
                  <Mail className="h-4 w-4 text-gold-400" /> {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-cream-100/80">
                <MapPin className="h-4 w-4 text-gold-400" /> Bengaluru, Karnataka
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-cream-100/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Drishani Consultants. All rights reserved.</p>
          <p>Real Estate Consultancy · Led by {SITE.agent}</p>
        </div>
      </div>
    </footer>
  );
}
