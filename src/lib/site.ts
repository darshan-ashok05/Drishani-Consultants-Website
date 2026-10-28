export const SITE = {
  business: 'Drishani Consultants',
  agent: 'Jeevan A',
  tagline: 'Real Estate Consultancy · Bengaluru',
  phones: ['+91 94485 24007', '+91 78920 75794'],
  whatsappPrimary: '919448524007',
  whatsappSecondary: '917892075794',
  email: 'jeevan.moti@gmail.com',
  facebook: 'https://www.facebook.com/share/1WLNQz9jWi/',
  areas: ['Jayanagar', 'Basavanagudi', 'JP Nagar', 'Chickpet', 'Banashankari', 'Kanakapura Road', 'BTM Layout', 'Rajarajeshwari Nagar'],
} as const;

export function whatsappLink(number: string, message: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}
