import brunchImage from '../assets/images/blog/summer-brunch.webp';
import pantryImage from '../assets/images/blog/porch-pantry.webp';
import type { BlogPost } from '../types/Blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'brunch',
    title: 'How To Build A Southern Brunch Table Around Iced Tea',
    excerpt: 'Simple pairings, polished serving ideas, and a few hosting touches that make the whole spread feel special.',
    image: brunchImage,
    alt: 'Peach tea bottle used as a visual for a Southern brunch article.',
    href: '#contact',
  },
  {
    id: 'pantry',
    title: 'Five Pantry Staples That Elevate Porch-Worthy Tea Moments',
    excerpt: 'From citrus slices to textured glassware, these details turn an everyday pour into an easy ritual.',
    image: pantryImage,
    alt: 'Original tea bottle used as a visual for a pantry styling article.',
    href: '#contact',
  },
];
