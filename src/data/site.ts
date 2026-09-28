// Central business details. Update here and every page picks it up.
const whatsappNumber = '447464382476'; // international format, no + or spaces
const whatsappMessage = "Hi Ashley, I found you on the AJH website and I'd like to talk about a project.";

export const site = {
  name: 'AJH Building Contractors Ltd',
  tagline: 'Turn Your Dreams into Reality!',
  address: '4 Coppice Mead, Hitchin, SG5 4JX',
  phone: '01462 612168',
  phoneHref: 'tel:+441462612168',
  mobile: '07464 382476',
  // Mobile number opens a WhatsApp chat with a pre-filled message.
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  email: 'info@ajhbuildingcontractors.com',
  hours: 'Monday – Friday 8AM-5PM',
  hoursShort: '8AM - 5PM',
  about:
    'We are a family run building company based in Hertfordshire. Since 2000 we have been providing professional building services covering domestic renovations, period refurbishments, building extensions, basements and loft conversions in and around Hertfordshire.',
  // Google Business Profile: reviews, map listing, opening hours.
  google: 'https://share.google/IWnNDXkjzGcsCCFjJ',
  owner: {
    name: 'Ashley Harknett',
    firstName: 'Ashley',
    role: 'Owner, Head Builder & Project Manager',
  },
};

export type SocialKey = 'facebook' | 'instagram' | 'twitter';

export const socials: { key: SocialKey; label: string; handle: string; href: string; blurb: string }[] = [
  {
    key: 'facebook',
    label: 'Facebook',
    handle: '@ajhbuild',
    href: 'https://www.facebook.com/ajhbuild/',
    blurb: 'Project updates, before & afters and news from site.',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    handle: '@ashley_harknett',
    href: 'https://www.instagram.com/ashley_harknett/',
    blurb: 'Photos and reels from current builds as they happen.',
  },
  {
    key: 'twitter',
    label: 'X (Twitter)',
    handle: '@AshleyHarknett',
    href: 'https://twitter.com/AshleyHarknett',
    blurb: 'Quick updates from Ashley.',
  },
];

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services', services: true },
  { label: 'Projects', href: '/current-projects/' },
  { label: 'Meet Ashley', href: '/meet-ashley/' },
  { label: 'About us', href: '/about-us/' },
  { label: 'Contact', href: '/contactus/' },
];

/** Prefix an internal path with the deploy base (e.g. /ajh-site). */
export function url(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
