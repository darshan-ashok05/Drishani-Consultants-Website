import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
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

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-luxe-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="shrink-0">
          <Logo className="h-11" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-gold-600 ${
                scrolled ? 'text-navy-800' : 'text-navy-900'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink(SITE.phones[0])}
            className="flex items-center gap-2 rounded-full border border-navy-200 px-4 py-2 text-sm font-medium text-navy-800 transition hover:border-navy-400 hover:bg-navy-50"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href={whatsappLink(SITE.whatsappPrimary, "Hello Jeevan, I'd like to enquire about your real estate services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-gold transition hover:brightness-110"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-900 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-50/98 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? 'max-h-[480px] border-t border-navy-100' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-navy-800 transition hover:bg-navy-50"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-2 grid grid-cols-2 gap-3">
            <a
              href={telLink(SITE.phones[0])}
              className="flex items-center justify-center gap-2 rounded-full border border-navy-200 px-4 py-2.5 text-sm font-medium text-navy-800"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={whatsappLink(SITE.whatsappPrimary, "Hello Jeevan, I'd like to enquire about a property.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
