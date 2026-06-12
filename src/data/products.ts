import originalImage from '../assets/images/products/original-removebg-preview.png';
import peachImage from '../assets/images/products/peach-removebg-preview.png';
import blackberryImage from '../assets/images/products/blackberry-removebg-preview.png';
import raspberryImage from '../assets/images/products/raspberry-removebg-preview.png';
import type { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: 'original',
    name: 'Original',
    description: 'The timeless taste of sweet Southern tea. Smooth, refreshing, and made for everyday enjoyment.',
    badge: 'Classic Favorite',
    image: originalImage,
    alt: 'Southern Breeze original sweet tea bottle.',
    accent: 'var(--amber)',
  },
  {
    id: 'peach',
    name: 'Peach',
    description: "Juicy peach notes blended with refreshing tea create a perfectly balanced, feel-good sip.",
    badge: 'Fan Favorite',
    image: peachImage,
    alt: 'Southern Breeze peach sweet tea bottle.',
    accent: 'var(--amber)',
  },
  {
    id: 'blackberry',
    name: 'Blackberry',
    description: 'Rich blackberry flavor adds a bold and refreshing twist to traditional sweet tea.',
    badge: 'Bold Berry',
    image: blackberryImage,
    alt: 'Southern Breeze blackberry sweet tea bottle.',
    accent: 'var(--pink)',
  },
  {
    id: 'raspberry',
    name: 'Raspberry',
    description: 'Bright raspberry sweetness and smooth tea come together in a refreshingly delicious blend.',
    badge: 'Fresh Pick',
    image: raspberryImage,
    alt: 'Southern Breeze raspberry sweet tea bottle.',
    accent: 'var(--cyan)',
  },
];
