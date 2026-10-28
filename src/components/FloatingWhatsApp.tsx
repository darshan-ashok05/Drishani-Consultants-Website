import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE, whatsappLink } from '@/lib/site';

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      {expanded && (
        <div className="w-72 overflow-hidden rounded-2xl bg-white shadow-luxe ring-1 ring-navy-100">
          <div className="flex items-center justify-between bg-[#25D366] px-4 py-3">
            <div className="flex items-center gap-2 text-white">
              <WhatsAppIcon className="h-5 w-5" />
              <div>
                <p className="text-sm font-semibold leading-tight">Chat with Jeevan</p>
                <p className="text-[11px] text-white/85">Typically replies quickly</p>
              </div>
            </div>
            <button onClick={() => setExpanded(false)} aria-label="Close" className="text-white/90">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="rounded-lg rounded-tl-none bg-cream-100 px-3 py-2 text-sm text-charcoal-800">
              Hi there! How can Drishani Consultants help you with property in Bengaluru today?
            </p>
            <a
              href={whatsappLink(SITE.whatsappPrimary, "Hello Jeevan, I'd like to enquire about a property.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              <WhatsAppIcon className="h-4 w-4" /> Start Chat
            </a>
            <a
              href={whatsappLink(SITE.whatsappSecondary, "Hello Jeevan, I'd like to enquire about a property.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-navy-200 px-4 py-2.5 text-sm font-medium text-navy-800 transition hover:bg-navy-50"
            >
              <WhatsAppIcon className="h-4 w-4" /> Alternate number
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setExpanded((v) => !v)}
        aria-label="Open WhatsApp chat"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition hover:scale-105"
      >
        {!expanded && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
        )}
        {expanded ? <X className="h-6 w-6" /> : <WhatsAppIcon className="h-7 w-7" />}
      </button>
    </div>
  );
}
