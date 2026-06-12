import amyImage from '../assets/images/testimonials/amy-removebg-preview.png';
import jamesImage from '../assets/images/testimonials/james-removebg-preview.png';
import ninaImage from '../assets/images/testimonials/nina-removebg-preview.png';
import type { Testimonial } from '../types/Testimonial';

export const testimonials: Testimonial[] = [
  {
    id: 'amy',
    name: 'Amy Caldwell',
    location: 'Savannah, Georgia',
    quote: "The Peach Tea tastes just like summer in a glass. It's become my go-to drink for family gatherings.",
    image: amyImage,
    alt: 'Southern Breeze blackberry tea bottle representing Amy Caldwell testimonial.',
  },
  {
    id: 'james',
    name: 'James Porter',
    location: 'Nashville, Tennessee',
    quote: 'Perfect balance of sweetness and tea flavor. Refreshing without being overwhelming.',
    image: jamesImage,
    alt: 'Southern Breeze peach tea bottle representing James Porter testimonial.',
  },
  {
    id: 'nina',
    name: 'Nina Brooks',
    location: 'Charleston, South Carolina',
    quote: 'Southern Breeze brings back memories of homemade sweet tea, but with amazing convenience.',
    image: ninaImage,
    alt: 'Southern Breeze raspberry tea bottle representing Nina Brooks testimonial.',
  },
];
