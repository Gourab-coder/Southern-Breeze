export const navLinks = [
  { id: 'home', href: '#home', label: 'Home' },
  { id: 'flavors', href: '#flavors', label: 'Flavors' },
  { id: 'experience', href: '#experience', label: 'Experience' },
  { id: 'reviews', href: '#reviews', label: 'Reviews' },
  { id: 'journal', href: '#journal', label: 'Journal' },
  { id: 'contact', href: '#contact', label: 'Contact' },
] as const;

export const headingWords = ['Southern', 'Breeze', 'Feels', 'Like', 'Summer,', 'Amplified'];

export const heroMetrics = [
  { value: '4', label: 'signature infusions' },
  { value: '12k+', label: 'host tables refreshed' },
  { value: '98%', label: 'repeat purchase intent' },
];

export const featureCards = [
  {
    title: 'Motion-led storytelling',
    copy: 'Every section shifts the eye with scroll choreography, kinetic type, and layered depth.',
    tone: 'cyan',
  },
  {
    title: 'Porch ritual, reimagined',
    copy: 'Southern nostalgia meets premium product framing, rich lighting, and editorial pacing.',
    tone: 'peach',
  },
  {
    title: 'Built for conversion',
    copy: 'Clear hierarchy, magnetic calls to action, and intentional pauses guide the next click.',
    tone: 'pink',
  },
  {
    title: 'Performance-minded glow',
    copy: 'GPU-friendly transforms, lazy media, and reduced-motion fallbacks keep the experience polished.',
    tone: 'lime',
  },
] as const;

export const experienceSteps = [
  {
    title: 'Start with a cinematic first fold',
    copy: 'A layered hero, aurora gradients, floating particles, and animated bottle stack create immediate recall.',
  },
  {
    title: 'Let scroll reveal the product story',
    copy: 'Parallax, staggered cards, and asymmetrical sections turn each flavor into a moment instead of a tile.',
  },
  {
    title: 'Finish with warmth and momentum',
    copy: 'Testimonials, journal teasers, and a tactile signup panel close the loop with trust and action.',
  },
];
