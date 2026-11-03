// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Rubén Rohde',
  role: 'Product Design',
  email: 'rubenrohde@me.com',
  tagline: 'I design software for people doing complicated work.',
  description:
    'Portfolio of Rubén Rohde — product designer with an emphasis on clarity, simplicity, and the details that make products feel right.',
  status: 'Currently building at Overjet.ai',
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rubenrohde' },
  ],
  locale: 'en',
} as const;

export const EXPERIENCE = [
  {
    company: 'Company Name',
    role: 'Senior Product Designer',
    start: '01.2022',
    end: 'Present',
    description:
      'Lead placeholder description. Summarize your impact, the scope of your work, and what made this role meaningful. One to three sentences works well here.',
    work: [] as { label: string; href: string }[],
  },
  {
    company: 'Previous Company',
    role: 'Product Designer',
    start: '06.2019',
    end: '12.2021',
    description:
      'Another placeholder. Describe what you shipped, the team you worked with, or the problems you solved. Keep it grounded in outcomes, not responsibilities.',
    work: [] as { label: string; href: string }[],
  },
  {
    company: 'Earlier Company',
    role: 'UX Designer',
    start: '03.2017',
    end: '05.2019',
    description: 'Earlier career placeholder. A sentence or two is plenty for older roles.',
    work: [] as { label: string; href: string }[],
  },
] as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;
