// Central business details. Update here and every page picks it up.
export const site = {
  name: 'AJH Building Contractors Ltd',
  tagline: 'Turn Your Dreams into Reality!',
  address: '4 Coppice Mead, Hitchin, SG5 4JX',
  phone: '01462 612168',
  phoneHref: 'tel:+441462612168',
  mobile: '07464 382476',
  mobileHref: 'tel:+447464382476',
  email: 'info@ajhbuildingcontractors.com',
  hours: 'Monday – Friday 8AM-5PM',
  hoursShort: '8AM - 5PM',
  social: {
    facebook: 'https://www.facebook.com/ajhbuild/',
    twitter: 'https://twitter.com/AshleyHarknett',
    instagram: 'https://www.instagram.com/ashley_harknett/',
  },
  about:
    'We are a family run building company based in Hertfordshire. Since 2000 we have been providing professional building services covering domestic renovations, period refurbishments, building extensions, basements and loft conversions in and around Hertfordshire.',
};

export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us/' },
  { label: 'Current Projects', href: '/current-projects/' },
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Contact Us', href: '/contactus/' },
];

/** Prefix an internal path with the deploy base (e.g. /ajh-site). */
export function url(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
