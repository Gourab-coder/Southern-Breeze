import amyImage from '../assets/images/testimonials/amy.webp';
import jamesImage from '../assets/images/testimonials/james.webp';
import ninaImage from '../assets/images/testimonials/nina.webp';
import type { Testimonial } from '../types/Testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 'amy',
    name: 'Amy Caldwell',
    location: 'Savannah, Georgia',
    quote: 'It tastes like a polished version of the sweet tea I grew up with. Smooth, light, and never syrupy.',
    image: amyImage,
    alt: 'Southern Breeze blackberry tea bottle representing Amy Caldwell testimonial.',
  },
  {
    id: 'james',
    name: 'James Porter',
    location: 'Nashville, Tennessee',
    quote: 'We stocked it for brunch service and guests kept asking where they could buy a bottle for home.',
    image: jamesImage,
    alt: 'Southern Breeze peach tea bottle representing James Porter testimonial.',
  },
  {
    id: 'nina',
    name: 'Nina Brooks',
    location: 'Charleston, South Carolina',
    quote: 'The flavor feels nostalgic, but the finish is fresh and modern. Peach is permanently in my fridge now.',
    image: ninaImage,
    alt: 'Southern Breeze raspberry tea bottle representing Nina Brooks testimonial.',
  },
];
