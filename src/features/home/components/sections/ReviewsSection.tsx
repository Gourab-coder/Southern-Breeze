import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '../../../../data/testimonials';
import styles from '../../homeStyles.module.css';
import { MagneticButton } from '../MagneticButton';

const reviewAccents = ['#ffb36d', '#ff78bf', '#79f0ff'];

export function ReviewsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.section}
      id="reviews"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>Sweet tea fans everywhere</span>
        <h2>Loved by sweet tea fans everywhere.</h2>
        <p>
          From family gatherings to everyday fridge favorites, Southern Breeze is becoming part
          of the moments people want to share again and again.
        </p>
      </div>

      <div className={styles.reviewGrid}>
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.id}
            className={styles.reviewCard}
            initial={
              prefersReducedMotion
                ? false
                : {
                    opacity: 0,
                    y: 40,
                    rotate: index === 1 ? 0 : index % 2 === 0 ? -1.5 : 1.5,
                  }
            }
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
          >
            <div
              className={styles.reviewImageFrame}
              style={{ '--review-accent': reviewAccents[index % reviewAccents.length] } as CSSProperties}
            >
              <img
                src={testimonial.image}
                alt={testimonial.alt}
                loading="lazy"
                className={styles.reviewImage}
              />
            </div>
            <p>"{testimonial.quote}"</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.location}</span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className={styles.sectionActionRow}>
        <MagneticButton href="#/reviews" label="Read More Reviews" />
      </div>
    </motion.section>
  );
}
