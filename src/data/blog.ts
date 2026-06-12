import brunchImage from '../assets/images/blog/summer-brunch.png';
import pantryImage from '../assets/images/blog/porch-pantry.png';
import type { BlogPost } from '../types/Blog';

export const blogPosts: BlogPost[] = [
  {
    id: 'brunch',
    title: 'Create The Perfect Southern Brunch With Sweet Tea',
    excerpt: 'Simple ideas for bringing Southern hospitality, refreshing pours, and easy charm to your table.',
    image: brunchImage,
    alt: 'Peach tea bottle used as a visual for a Southern brunch article.',
    href: '#/journal',
  },
  {
    id: 'pantry',
    title: 'Five Easy Ways To Enjoy Sweet Tea This Summer',
    excerpt: 'Refreshing serving ideas for warm afternoons, outdoor gatherings, and those easy summer moments.',
    image: pantryImage,
    alt: 'Original tea bottle used as a visual for a pantry styling article.',
    href: '#/journal',
  },
];
