// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Rubén Rohde',
  role: 'Product Design',
  email: 'rubenrohde@me.com',
  tagline: 'I design digital products that feel simple — no matter how complex the problem.',
  description:
    'Portfolio of Rubén Rohde — product designer with an emphasis on clarity, simplicity, and the details that make products feel right.',
  status: 'Currently building at Overjet.ai',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rubenrohde' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
