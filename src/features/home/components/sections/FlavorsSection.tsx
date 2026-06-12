import type { CSSProperties } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { products } from '../../../../data/products';
import styles from '../../homeStyles.module.css';
import { MagneticButton } from '../MagneticButton';

export function FlavorsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      className={styles.section}
      id="flavors"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 50 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.sectionHeading}>
        <span className={styles.eyebrow}>Explore Our Flavors</span>
        <h2>A sweet tea for every mood.</h2>
        <p>
          From fruity favorites to classic Southern refreshment, discover the flavor that fits
          your moment.
        </p>
      </div>

      <div className={styles.flavorGrid}>
        {products.map((product, index) => (
          <motion.article
            key={product.id}
            className={`${styles.flavorCard} ${index === 0 ? styles.flavorCardWide : ''}`}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 60, scale: 0.96 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.72, delay: index * 0.08 }}
          >
            <div
              className={styles.flavorGlow}
              style={{ '--accent': product.accent } as CSSProperties}
            />
            <div className={styles.flavorMeta}>
              <span>{product.badge}</span>
              <strong>{product.name}</strong>
              <p>{product.description}</p>
            </div>
            <div
              className={styles.flavorVisual}
              style={{ '--accent': product.accent } as CSSProperties}
            >
              <img
                src={product.image}
                alt={product.alt}
                loading={index === 0 ? 'eager' : 'lazy'}
                className={styles.flavorBottle}
              />
            </div>
          </motion.article>
        ))}
      </div>

      <div className={styles.sectionActionRow}>
        <MagneticButton href="#/flavors" label="See All Flavors" />
      </div>
    </motion.section>
  );
}
