import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Reveal } from './Reveal';
import { WhatsAppIcon } from './WhatsAppIcon';
import { SITE, telLink, whatsappLink } from '@/lib/site';

interface FormState {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
}

const INTERESTS = ['Buying a property', 'Selling a property', 'Renting / Leasing', 'Commercial space', 'Plot or land', 'Other enquiry'];

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    interest: INTERESTS[0],
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    // Compose a WhatsApp message from the form so enquiries reach the agent directly.
    const message = `New enquiry from website:%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AInterested in: ${form.interest}%0A%0AMessage: ${form.message}`;
    setTimeout(() => {
      setStatus('sent');
      window.open(whatsappLink(SITE.whatsappPrimary, decodeURIComponent(message)), '_blank');
    }, 600);
  }

  return (
    <section id="contact" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold-600">
              Contact Us
            </span>
            <span className="h-px w-10 bg-gold-400" />
          </div>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
            Let's find your next address.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal-700">
            Reach out by phone, WhatsApp, or the form below. We usually respond within a few hours.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* Contact details */}
          <Reveal>
            <div className="flex h-full flex-col gap-5">
              {SITE.phones.map((phone) => (
                <a
                  key={phone}
                  href={telLink(phone)}
                  className="group flex items-center gap-5 rounded-2xl bg-white p-6 shadow-luxe-sm ring-1 ring-navy-100 transition hover:-translate-y-0.5 hover:shadow-luxe"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-300 transition group-hover:scale-110">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gold-600">Call</p>
                    <p className="font-serif text-xl font-semibold text-navy-900">{phone}</p>
                  </div>
                </a>
              ))}

              <div className="grid gap-5 sm:grid-cols-2">
                <a
                  href={whatsappLink(SITE.whatsappPrimary, "Hello Jeevan, I'd like to enquire about your services.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl bg-[#25D366] p-6 text-white shadow-gold transition hover:-translate-y-0.5 hover:brightness-110"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/80">WhatsApp</p>
                    <p className="font-semibold">Chat with us</p>
                  </div>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-4 rounded-2xl bg-white p-6 shadow-luxe-sm ring-1 ring-navy-100 transition hover:-translate-y-0.5 hover:shadow-luxe"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900 text-gold-300 transition group-hover:scale-110">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest text-gold-600">Email</p>
                    <p className="truncate text-sm font-semibold text-navy-900">{SITE.email}</p>
                  </div>
                </a>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-navy-900 p-6 text-white">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold-300">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gold-300">Service Area</p>
                  <p className="text-sm font-medium text-cream-50">Bengaluru, Karnataka — primarily South & Central</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Enquiry form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-white p-8 shadow-luxe ring-1 ring-navy-100 lg:p-10"
            >
              <h3 className="font-serif text-2xl font-semibold text-navy-900">Send an enquiry</h3>
              <p className="mt-2 text-sm text-charcoal-700">
                Fill in your details and we'll continue the conversation on WhatsApp.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </Field>
                <Field label="Phone Number" required>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                    placeholder="+91 ..."
                    className={inputClass}
                  />
                </Field>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Email">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="I'm interested in">
                  <select
                    value={form.interest}
                    onChange={(e) => update('interest', e.target.value)}
                    className={inputClass}
                  >
                    {INTERESTS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => update('message', e.target.value)}
                    placeholder="Tell us what you're looking for — area, budget, property type..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-full bg-navy-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Preparing your message...</>
                ) : status === 'sent' ? (
                  <><CheckCircle2 className="h-4 w-4 text-gold-300" /> Opening WhatsApp...</>
                ) : (
                  <><Send className="h-4 w-4" /> Send Enquiry</>
                )}
              </button>
              <p className="mt-3 text-center text-xs text-charcoal-700">
                Your details are sent only to {SITE.agent} via WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputClass =
  'w-full rounded-xl border border-navy-200 bg-cream-50 px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-navy-300 focus:border-gold-400 focus:bg-white focus:ring-2 focus:ring-gold-200';

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-navy-700">
        {label} {required && <span className="text-gold-600">*</span>}
      </span>
      {children}
    </label>
  );
}
