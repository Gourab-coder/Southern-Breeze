import originalImage from '../assets/images/products/original.webp';
import peachImage from '../assets/images/products/peach.webp';
import blackberryImage from '../assets/images/products/blackberry.webp';
import raspberryImage from '../assets/images/products/raspberry.webp';
import type { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 'original',
    name: 'Original',
    description: 'Brewed for porch swings, picnic tables, and the kind of afternoons that linger.',
    badge: 'Classic Brew',
    image: originalImage,
    alt: 'Southern Breeze original sweet tea bottle.',
    accent: 'var(--amber)',
  },
  {
    id: 'peach',
    name: 'Peach',
    description: 'Juicy peach notes meet smooth black tea for a chilled, golden finish.',
    badge: 'Fan Favorite',
    image: peachImage,
    alt: 'Southern Breeze peach sweet tea bottle.',
    accent: 'var(--amber)',
  },
  {
    id: 'blackberry',
    name: 'Blackberry',
    description: 'Bright berry depth with a polished sweetness that feels made for sunset.',
    badge: 'Berry Rich',
    image: blackberryImage,
    alt: 'Southern Breeze blackberry sweet tea bottle.',
    accent: 'var(--pink)',
  },
  {
    id: 'raspberry',
    name: 'Raspberry',
    description: 'A lively raspberry pour with crisp tea character and a clean finish.',
    badge: 'Fresh Pick',
    image: raspberryImage,
    alt: 'Southern Breeze raspberry sweet tea bottle.',
    accent: 'var(--cyan)',
  },
];
