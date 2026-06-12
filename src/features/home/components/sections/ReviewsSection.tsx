import { motion, useReducedMotion } from 'framer-motion';
import { testimonials } from '../../../../data/testimonials';
import styles from '../../homeStyles.module.css';

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
        <span className={styles.eyebrow}>Social proof in motion</span>
        <h2>Testimonials feel collected, editorial, and worth pausing on.</h2>
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
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              loading="lazy"
              className={styles.reviewImage}
            />
            <p>"{testimonial.quote}"</p>
            <div>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.location}</span>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
